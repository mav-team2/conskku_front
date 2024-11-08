import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResultPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100); // 100ms 후에 opacity를 1로 변경

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000); // 10초 후에 메인 화면으로 이동

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col h-screen bg-white item-center justify-center overflow-hidden">
      <div className="animate-bounce_fade_in flex text-6xl font-bold text text-skku-green mb-4 justify-center">
        완성!
      </div>

      {/* <div className="mx-12 rounded-md border-skku-green border-dashed border-2">
      </div> */}

      <div
        className={`flex text-lg text-gray-500 mt-4 whitespace-pre-line text-balance justify-center transition-opacity duration-500 delay-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        잠시 후 화면에 생성된 사진이 나타납니다.
      </div>
    </div>
  );
};

export default ResultPage;
