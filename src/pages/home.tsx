import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClick = () => {
    setIsFadingOut(true);
  };

  const navigate = useNavigate();

  const onTransitionEnd = () => {
    // Redirect to the main page
    navigate("/select");
  };

  return (
    <div
      onClick={handleClick}
      className={`relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-dido transition-opacity duration-1000 `}
      onTransitionEnd={isFadingOut ? onTransitionEnd : undefined}
    >
      {/* Background blur overlay */}
      <div
        className={`absolute inset-0 bg-white ${
          isFadingOut ? "opacity-100" : "opacity-30"
        } transition-opacity duration-1000 backdrop-blur-sm`}
      ></div>

      {/* Title and Description */}
      <div className="relative min-w-16 max-w-xl z-10 text-center px-4">
        <h1 className="text-8xl mb-2 align-text-top underline decoration-0 underline-offset-8 whitespace-pre-line leading-normal font-SF text-black">
          성균관을
          <br />
          잇다.
        </h1>
        <p className="text-xl text-black/80 whitespace-pre-line">
          오늘 당신의 생각을, 평범한 일상의 단어들로 표현해보세요.<br></br>
          당신의 메시지가 다른 캠퍼스의 누군가에게 울림이 될 수 있습니다.
        </p>
      </div>

      {/* Touch to start message */}
      <div
        className={`absolute bottom-20 text-black/80 text-lg animate-pulse transition-opacity duration-1000 ${
          isFadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        터치하세요
      </div>
    </div>
  );
};

export default Home;
