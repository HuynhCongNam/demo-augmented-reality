import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Shark() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/blue-shark.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);

  return (
    <group ref={group} dispose={null} position={[0, -1, 0]}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, 17.43, -79.06]}
          scale={0.05}
        >
          <group
            name="e73a319fc9e146a39f5db6d8f495363dfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group
                    name="Object_8"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.16}
                  />
                  <group name="Object_10" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_12" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Shark_GEO_GRP" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="bodyGEO">
                      <group name="eyeGEO" />
                      <group name="teethGEO" scale={0.16} />
                      <group name="littleFinsGEO" />
                    </group>
                  </group>
                  <group name="Hull_CTL" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                      name="Spine1_CTL"
                      position={[-3.27, 0, 0.01]}
                      rotation={[0, 0.01, 0]}
                    >
                      <group
                        name="Spine2_CTL"
                        position={[0.78, 0, 0.05]}
                        rotation={[0, -0.07, 0]}
                      >
                        <group
                          name="Spine3_CTL"
                          position={[-1.11, 0, -0.02]}
                          rotation={[0, -0.04, 0]}
                        >
                          <group
                            name="Spine4_CTL"
                            position={[-4.9, 0.04, -0.13]}
                            rotation={[0, -0.07, -0.01]}
                          >
                            <group
                              name="Spine5_CTL"
                              position={[-17.86, 1.46, -0.31]}
                              rotation={[-0.01, -0.08, -0.11]}
                            >
                              <group
                                name="U_Tail_CTL1"
                                position={[2.1, 0.9, 0.72]}
                                rotation={[-0.01, -0.02, 0.04]}
                              >
                                <group
                                  name="U_Tail_CTL2"
                                  position={[3.24, 9.07, 7.88]}
                                  rotation={[-0.07, 0.01, 0.02]}
                                />
                              </group>
                              <group
                                name="D_Tail_CTL1"
                                position={[-12.04, -4.4, -3.62]}
                                rotation={[0.04, -0.08, -0.03]}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="Head_CTL"
                        position={[-1.24, 8.83, -7.49]}
                        rotation={[0.08, 0.02, 0.01]}
                      >
                        <group name="nurbsCircle1" />
                      </group>
                      <group
                        name="R_Fin_CTL"
                        position={[6.92, 6.77, 0]}
                        rotation={[0, 0, 0.15]}
                      >
                        <group name="R_Fin_CTL2" />
                      </group>
                      <group
                        name="L_Fin_CTL"
                        position={[-6.06, 5.81, 0]}
                        rotation={[0, 0, -0.13]}
                      >
                        <group name="L_Fin_CTL2" />
                      </group>
                    </group>
                  </group>
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.surfaceShader3}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.surfaceShader3}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.surfaceShader3}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.surfaceShader3}
                    skeleton={nodes.Object_13.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/blue-shark.glb");
