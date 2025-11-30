import { useAnimations, useFBX, useTexture } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Penguin() {
  const group = useRef<THREE.Group>(null);
  const [isHit, setIsHit] = useState(false);
  
  const fbx = useFBX('/assets/models/Penguin_Animations.fbx');
  const texture = useTexture('/assets/models/T_Penguin.png');
  const { actions, names } = useAnimations(fbx.animations, group);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = true;

    fbx.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          map: texture,
        });
        mesh.castShadow = false;
        mesh.receiveShadow = false;
      }
    });
  }, [fbx, texture]);

  useEffect(() => {
    // 1. Idle animasyonunu bul (Öncelik: Idle_A)
    const idleAnimName = names.find(n => n.toLowerCase().includes('idle_a')) || names.find(n => n.toLowerCase().includes('idle')) || names[0];
    // 2. Tıklama animasyonunu bul (Öncelik: Spin)
    const hitAnimName = names.find(n => n.toLowerCase().includes('spin')) || names.find(n => n.toLowerCase().includes('hit'));

    Object.values(actions).forEach(action => action?.stop());

    if (isHit && hitAnimName) {
      // Tıklanınca SPIN oyna
      const action = actions[hitAnimName];
      if (action) {
        action.reset().fadeIn(0.1).setLoop(THREE.LoopOnce, 1).play();
        action.clampWhenFinished = true;
        const duration = action.getClip().duration * 1000;
        
        const timer = setTimeout(() => {
          setIsHit(false);
        }, duration);
        return () => clearTimeout(timer);
      }
    } else if (idleAnimName) {
      // Normalde IDLE_A oyna (Daha da Yavaş: 0.4)
      const action = actions[idleAnimName];
      action?.reset().fadeIn(0.5).setEffectiveTimeScale(0.4).play();
    }
  }, [isHit, actions, names]);

  return (
    <group ref={group} dispose={null} onClick={() => setIsHit(true)}>
      <primitive 
        object={fbx} 
        scale={0.027} 
        position={[0, -0.6, 0]} 
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

useFBX.preload('/assets/models/Penguin_Animations.fbx');
useTexture.preload('/assets/models/T_Penguin.png');
