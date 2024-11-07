import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Column from "../components/Column/Column";
import Row from "../components/Row/Row";
import Line, { LineDirection } from "../components/Line/Line";
import Button from "../components/Button/Button";

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

  // const navigate = useNavigate();

  const handleWordClick = (word: string) => {
    setSelectedWords((prev) =>
      prev.includes(word)
        ? prev.filter((w) => w !== word)
        : prev.length < 3
        ? [...prev, word]
        : prev
    );
  };

  // const handleSubmit = () => {
  //   // call api
  //   navigate("/result", { state: { selectedWords } });
  // };

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

          <Row className="flex-grow items-center">
            <p className="text-black">1234</p>
            {/* add selections */}
          </Row>
        </Row>
      </Row>

      <div className="flex-grow w-full h-full">
        <Column align="start" className="w-full h-min px-12 mt-12">
          <p className="text-xl text-black mb-4">일반</p>
          {/* <div className="w-60 border-t-2 border-black mb-4"></div> */}
          <Line
            dir={LineDirection.Horizontal}
            length={60}
            size={2}
            className="mb-4"
          ></Line>
        </Column>

        {/* Common words Button */}
        <div className="w-full p-12 h-min flex flex-wrap justify-start gap-4 mb-4 text-xl">
          {wordsCommon.map((word, index) => (
            <Button
              key={index}
              text={word}
              onClick={() => handleWordClick(word)}
              selected={selectedWords.includes(word)}
            />
          ))}
        </div>

        <Column align="start" className="w-full px-12 mt-12">
          <p className="text-xl text-black mb-4">전공</p>
          {/* <div className="w-60 border-t-2 border-black mb-4"></div> */}
          <Line
            dir={LineDirection.Horizontal}
            length={60}
            size={2}
            className="mb-4"
          ></Line>
        </Column>

        {/* Department words Button Grid */}
        <div className="w-full p-12 h-min flex flex-wrap justify-start gap-4">
          {wordsDepartment.map((word, index) => (
            <Button
              key={index}
              text={word}
              onClick={() => handleWordClick(word)}
              selected={selectedWords.includes(word)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
