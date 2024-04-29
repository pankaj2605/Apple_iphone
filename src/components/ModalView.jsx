import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import IPhone from './IPhone'
import *as THREE from "three"
import Loader from './Loader'

export default function ModalView({index,groupRef,gsapType,controlRef,setRotationState,item,size}) {
  return (
    <View
        index={index}
        id={gsapType}
        className={` w-full h-full absolute ${index === 2 ? 'right-[-100%]':''} `}
        >
        <ambientLight intensity={0.3}/>
        <PerspectiveCamera makeDefault position={[0,0,4]}/>
        <Lights/>

        <OrbitControls
            makeDefault
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            target={new THREE.Vector3(0,0,0)}
            onEnd={()=>setRotationState(controlRef.current.getAzimuthalAngle())}
        />

        <group>
            <Suspense fallback={<Loader/>}>
                <IPhone 
                scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                item={item}
                size={size}/>
            </Suspense>
        </group>


    </View>
  )
}
