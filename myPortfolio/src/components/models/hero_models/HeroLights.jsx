import React, { useMemo } from "react";

const HeroLights = () => {
  const rectAreaArgs = useMemo(() => ["#a259ff", 8, 5, 4], []);

  return (
    <>
      {/* Ambient sáng hơn — đây là fix chính cho body tối */}
      <ambientLight intensity={4} color="#c8b8ff" />

      {/* Đèn chính từ trên — tăng intensity */}
      <spotLight
        position={[2, 8, 6]}
        angle={0.35}
        penumbra={0.4}
        intensity={10}
        color="#ffffff"
      />

      {/* Fill cyan từ trái — mạnh hơn để sáng phần tối bên trái */}
      <spotLight
        position={[-6, 5, 6]}
        angle={0.5}
        penumbra={0.7}
        intensity={1}
        color="#00d4ff"
      />

      {/* Fill tím từ phải */}
      <spotLight
        position={[6, 4, 4]}
        angle={0.45}
        penumbra={0.7}
        intensity={1}
        color="#bf00ff"
      />

      {/* Đèn từ phía trước thấp — fill phần dưới model */}
      <pointLight position={[0, 0, 8]} intensity={3} color="#8080ff" />

      {/* Rim từ dưới lên */}
      <pointLight position={[0, -1, 3]} intensity={8} color="#00ffff" />

      {/* RectAreaLight soft fill */}
      <rectAreaLight
        args={rectAreaArgs}
        position={[0, 5, 6]}
        rotation={[-Math.PI / 5, 0, 0]}
      />

      {/* Back lights */}
      <pointLight position={[-2, 3, -3]} intensity={0.9} color="#7209b7" />
      <pointLight position={[2, 2, -2]} intensity={0.7} color="#0d00a4" />
    </>
  );
};

export default React.memo(HeroLights);