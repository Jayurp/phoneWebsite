import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { phoneModels3d } from "../templates/3dmodels";

function Model() {
  const location = useLocation();

  const [url, setUrl] = useState("");

    useEffect(() => {
      // Remove the '/product-detail/' prefix

      const cleaned = location.pathname.replace("/product-detail/", "");

      let str = cleaned;

      // Split model and color using '--' as separator
      const [modelPart, colorPart] = str.split("--");

      if (!modelPart || !colorPart) {
        return { error: "Invalid URL format" };
      }

      // Convert model part from kebab-case to normal title case
      const model = modelPart
        .split("-")
        .join(" ");
      
     setUrl(phoneModels3d[model]);
    }, [location]);

  const { scene } = useGLTF(url || "/iphone_16_pro.glb"); // ✅ fixed public path
  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-full">
      {" "}
      {/* Canvas will stretch to parent */}
      <Canvas camera={{ fov: 45 }} style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 👇 This automatically frames the model */}
        <Bounds fit clip observe margin={1.2}>
          <Model />
        </Bounds>

        <OrbitControls makeDefault enableDamping />
      </Canvas>
    </div>
  );
}
