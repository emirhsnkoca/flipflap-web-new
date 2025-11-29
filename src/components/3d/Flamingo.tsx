import { useAnimations, useFBX, useTexture } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Flamingo() {
  const group = useRef<THREE.Group>(null);
  const [isHit, setIsHit] = useState(false);
  
  const fbx = useFBX('/assets/models/Flamingo_Animations.fbx');
  const texture = useTexture('/assets/models/T_Flamingo.png');
  const { actions, names } = useAnimations(fbx.animations, group);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = true;

    fbx.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          map: texture,
          toneMapped: false,
          color: new THREE.Color(1.5, 1.2, 1.2),
        });
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, [fbx, texture]);

  useEffect(() => {
    const idleAnimName = names.find(n => n.toLowerCase().includes('idle_a')) || names.find(n => n.toLowerCase().includes('idle')) || names[0];
    const hitAnimName = names.find(n => n.toLowerCase().includes('sit')) || names.find(n => n.toLowerCase().includes('hit'));

    if (isHit && hitAnimName) {
      const action = actions[hitAnimName];
      const idleAction = idleAnimName ? actions[idleAnimName] : null;

      if (action) {
        if (idleAction) idleAction.fadeOut(0.2);

        // Sit animasyonunu sürekli oynat (Sallanması için)
        action.reset().fadeIn(0.2).setLoop(THREE.LoopRepeat, Infinity).play();
        
        // 2 saniye bekle
        const timer = setTimeout(() => {
          setIsHit(false); // Idle'a dön
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else if (idleAnimName) {
      const idleAction = actions[idleAnimName];
      const hitAction = hitAnimName ? actions[hitAnimName] : null;

      if (hitAction) hitAction.fadeOut(0.5);

      // Idle'ı başlat (Hız: 0.4)
      idleAction?.reset().fadeIn(0.5).setEffectiveTimeScale(0.4).play();
    }
  }, [isHit, actions, names]);

  return (
    <group ref={group} dispose={null} onClick={() => setIsHit(true)}>
      <primitive 
        object={fbx} 
        scale={0.017} 
        position={[0, -0.6, 0]} 
        rotation={[0, -1.1, 0]}
      />
    </group>
  );
}

useFBX.preload('/assets/models/Flamingo_Animations.fbx');
useTexture.preload('/assets/models/T_Flamingo.png');
