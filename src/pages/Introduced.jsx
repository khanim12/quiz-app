import React, { useState } from "react";
import question from "../assets/question.jpg";
import { useNavigate } from "react-router-dom";
import Port from "./Port";
function Introduced() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const isOpen = () => setShowModal(true);
  const isClose = () => setShowModal(false);
  const gotoQuizPage = () => {
    navigate("/quiz");
  };

  // const getScores = () => {
  //   const scores = localStorage.getItem("currentAnswer");
  //   const score = JSON.parse(scores);
    
  // }

  return (
    <div>
      <div className="w-96 m-auto mt-10 ">
        <img className="text-center" src={question} alt="" />
        <div className="flex gap-4">
          <div
            onClick={gotoQuizPage}
            className="hover:bg-[#cf2943] hover:border-none hover:text-white border-2 border-gray-400 rounded-lg p-3 text-2xl cursor-pointer w-1/2  "
          >
            {" "}
            Start Quiz
          </div>
          <div
            onClick={isOpen}
            className="border-2 hover:bg-[#cf2943] hover:border-none hover:text-white border-gray-400	rounded-lg p-3 cursor-pointer text-2xl"
          >
            Show Result  
          </div>
        </div>
      </div>
      {showModal && (
        <Port>
          <p>score </p>
          <p>date</p>
          <button className="modal-close" onClick={isClose}>
            X
          </button>
        </Port>
      )}
    </div>
  );
}

export default Introduced;
