import { useAnimations, useFBX, useTexture } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Chick() {
  const group = useRef<THREE.Group>(null);
  const [isHit, setIsHit] = useState(false);
  
  const fbx = useFBX('/assets/models/Chick_Animations.fbx');
  const texture = useTexture('/assets/models/T_Chick.png');
  const { actions, names } = useAnimations(fbx.animations, group);

  useEffect(() => {
    texture.encoding = THREE.sRGBEncoding;
    texture.flipY = true;

    fbx.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          map: texture,
          skinning: true
        });
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, [fbx, texture]);

  useEffect(() => {
    // Animasyon Mantığı
    // 1. Idle animasyonunu bul (Öncelik: Idle_A, yoksa Idle, yoksa ilk animasyon)
    const idleAnimName = names.find(n => n.toLowerCase().includes('idle_a')) || names.find(n => n.toLowerCase().includes('idle')) || names[0];
    // 2. Hit animasyonunu bul
    const hitAnimName = names.find(n => n.toLowerCase().includes('hit'));

    // Önceki animasyonları durdur
    Object.values(actions).forEach(action => action?.stop());

    if (isHit && hitAnimName) {
      // Tıklanınca HIT oyna
      const action = actions[hitAnimName];
      if (action) {
        action.reset().fadeIn(0.1).setLoop(THREE.LoopOnce, 1).play();
        
        // Animasyon bitince tekrar IDLE'a dön
        action.clampWhenFinished = true;
        const duration = action.getClip().duration * 1000;
        
        const timer = setTimeout(() => {
          setIsHit(false);
        }, duration);
        return () => clearTimeout(timer);
      }
    } else if (idleAnimName) {
      // Normalde IDLE oyna (Hızını biraz düşürdük: 0.6)
      const action = actions[idleAnimName];
      action?.reset().fadeIn(0.5).setEffectiveTimeScale(0.6).play();
    }
  }, [isHit, actions, names]);

  return (
    <group ref={group} dispose={null} onClick={() => setIsHit(true)}>
      <primitive 
        object={fbx} 
        scale={0.03} 
        position={[0, -0.6, 0]}     
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

useFBX.preload('/assets/models/Chick_Animations.fbx');
useTexture.preload('/assets/models/T_Chick.png');
