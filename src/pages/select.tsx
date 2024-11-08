import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Column from "../components/Column/Column";
import Row from "../components/Row/Row";
import Line, { LineDirection } from "../components/Line/Line";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import IconButton from "../components/Button/IconButton";
import useFetch from "../hooks/useFetch";

const wordsCommon = [
  "명륜당",
  "축제",
  "전공책",
  "서브웨이",
  "피자",
  "돈까스",
  "까치",
  "고양이",
  "강아지",
  "은행나무",
  "후드티",
  "슬리퍼",
  "청바지",
  "기쁨",
  "피곤",
  "우울함",
  "야구",
  "축구",
  "돈",
  "무지개",
];
const wordsDepartment = [
  "건축학과",
  "경영학과",
  "미술학과",
  "기계공학과",
  "생명과학과",
  "소프트웨어학과",
  "물리학과",
  "철학과",
  "사학과",
];

const SelectPage: React.FC = () => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { data, error, fetchData } = useFetch();

  const handleWordClick = (word: string) => {
    setSelectedWords((prev) =>
      prev.includes(word)
        ? prev.filter((w) => w !== word)
        : prev.length < 3
        ? [...prev, word]
        : prev
    );
  };

  const handleBackClick = () => {
    setSelectedWords([]);
    navigate("/");
  };

  const handleForwardClick = async () => {
    if (selectedWords.length == 0) return;

    setLoading(true);

    const prompt = selectedWords.join(",");
    const body = JSON.stringify({
      preset_id: 4,
      input_prompt: prompt,
    });
    // todo : call api
    setSelectedWords([]);

    await fetchData(
      "http://ec2-43-203-245-187.ap-northeast-2.compute.amazonaws.com/api/call",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Content-Type 헤더 추가
          Accept: "application/json",
        },
        body: {
          preset_id: 4,
          input_prompt: prompt,
        },
      }
    );

    if (error) {
      console.error(error);
      return;
    } else {
      console.log("data", data);

      navigate("/result", { state: { selectedWords } });
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      <Row className="h-40 min-h-32 max-h-48 px-8 py-6 bg-skku-green-dark">
        <Row className="bg-white h-full p-6 rounded-2xl justify-start">
          <PushPinOutlinedIcon
            className="flex-none text-black"
            fontSize="large"
          />
          {/* <div className="h-full border-r-2 border-black mx-4"></div> */}
          <Line
            dir={LineDirection.Vertical}
            length="full"
            size={2}
            className="mx-4"
          />

          <Row className="flex-grow items-center ml-2 gap-x-6">
            {selectedWords.map((word, index) => (
              <Button
                index={index}
                text={word}
                onClick={() => handleWordClick(word)}
                selected={selectedWords.includes(word)}
              />
            ))}
          </Row>

          <div className="flex-grow text-xl text-black text-center mx-4 ml-auto whitespace-nowrap">
            / 3
          </div>
        </Row>
      </Row>

      <div className="flex-grow w-full h-full">
        <Column align="start" className="w-full h-min px-12 mt-12">
          <p className="text-xl text-skku-green-dark mb-2">일반</p>
          {/* <div className="w-60 border-t-2 border-black mb-4"></div> */}
          <Line
            dir={LineDirection.Horizontal}
            length={60}
            size={2}
            className="mb-4 border-skku-green-dark"
          ></Line>
        </Column>

        {/* Common words Button */}
        <div className="w-full px-12  h-min flex flex-wrap justify-start gap-4 mb-4 text-xl">
          {wordsCommon.map((word, index) => (
            <Button
              index={index}
              text={word}
              onClick={() => handleWordClick(word)}
              selected={selectedWords.includes(word)}
            />
          ))}
        </div>

        <Column align="start" className="w-full px-12 mt-12">
          <p className="text-xl text-skku-green-dark mb-2">전공</p>
          {/* <div className="w-60 border-t-2 border-black mb-4"></div> */}
          <Line
            dir={LineDirection.Horizontal}
            length={60}
            size={2}
            className="mb-4 border-skku-green-dark"
          ></Line>
        </Column>

        {/* Department words Button Grid */}
        <div className="w-full px-12 h-min flex flex-wrap justify-start gap-4 text-xl">
          {wordsDepartment.map((word, index) => (
            <Button
              index={index}
              text={word}
              onClick={() => handleWordClick(word)}
              selected={selectedWords.includes(word)}
            />
          ))}
        </div>
      </div>

      <Footer>
        <IconButton onClick={handleBackClick}>
          <ArrowBackRoundedIcon className="flex text-black" fontSize="large" />
        </IconButton>
        <IconButton onClick={handleForwardClick}>
          <ArrowForwardRoundedIcon
            className="flex text-black"
            fontSize="large"
          />
        </IconButton>
      </Footer>

      {loading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center">
          <div className="text-center">
            <Row className="gap-6 mb-8">
              <div className="animate-bounce rounded-full h-12 w-12 bg-skku-green"></div>
              <div className="animate-bounce rounded-full h-12 w-12 bg-skku-green"></div>
              <div className="animate-bounce rounded-full h-12 w-12 bg-skku-green"></div>
            </Row>
            <p className="mt-4 text-lg text-black">로딩 중...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectPage;
