import { Alert, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Port from "./Port";
function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [getAnswerss,setGetAnswerss]=useState([])
  const isOpen = () => setShowModal(true);
  const isClose = () => setShowModal(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("./data.json");
      setQuestions(response.data);
      console.log;
    };
    fetchData();
  }, []);
  // localStorage.setItem('currentAnswer',JSON.stringify(currentAnswer))
  if (questions.length === 0) {
    return <h1>Suallar hele yuklenmeyib</h1>;
  }
  const ClickPrev = () => {
    if (questionIndex <= 0) {
      navigate("/");
    }
    setQuestionIndex(questionIndex - 1);
  };
  const ClickNext = () => {
    if (questionIndex + 1 >= questions.length) {
      navigate("/final");
    }
    setQuestionIndex(questionIndex + 1);
  };
  const handleClick = (answer) => {
    setCurrentAnswer(answer);
    if (questionIndex + 1 === 5) {
      isOpen();
    } else {
      setQuestionIndex(questionIndex + 1);
    }

    if (answer == questions[questionIndex].correct) {
      setScore(score + 100);
    } else {
      setShowAlert(true);
    }
  };
  // const getAnswer = JSON.parse(localStorage.setItem('currentAnswer', "neticeleri"))

  return (
    <div>
      <div className="flex flex-col items-center justify-center  bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen	">
        {questions && (
          <div>
            <h1 className="mb-6 text-white text-3xl font-bold">
              {" "}
              {questionIndex + 1}/{questions.length}.{" "}
              {questions[questionIndex].question}
            </h1>
            <ul className="flex flex-wrap gap-4  items-center justify-center ">
              {questions[questionIndex].answers.map((answer, i) => (
                <li
                  onClick={() => handleClick(answer)}
                  className="cursor-pointer hover:bg-pink-300 rounded-3xl  w-full bg-red-400 p-2 pointer-cursor text-center flex items-center justify-center text-white capitalize border-solid border-black flex  "
                  key={i}
                >
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <Button
            sx={{ marginTop: "20px", marginRight: "15px" }}
            onClick={ClickPrev}
            variant="contained"
            color="success"
          >
            Previous
          </Button>
          {questionIndex + 1 === questions.length ? (
            <Button
              sx={{ marginTop: "20px", marginRight: "15px" }}
              variant="contained"
              color="success"
              onClick={isOpen}
            >
              Neticeleri Gor
            </Button>
          ) : (
            <Button
              sx={{ marginTop: "20px" }}
              onClick={ClickNext}
              variant="contained"
              color="success"
            >
              Next
            </Button>
          )}
          {showModal && (
            <Port>
              <p>Score is {score}</p>
              <p>Tarix və Vaxt: {new Date().toLocaleString()}</p>
              <button className="modal-close" onClick={isClose}>
                X
              </button>
              <Button
                variant="contained"
                color="success"
                onClick={() => navigate("/")}
              >
                Yeniden Basla
              </Button>
            </Port>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
