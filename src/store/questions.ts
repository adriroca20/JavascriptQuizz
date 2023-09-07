import { create } from "zustand";

import { type Question } from "../types";
import { persist } from "zustand/middleware";

interface State {
  questions: Question[];
  currentQuestion: number;
  questionsAmmount: number;
  userName:string;
  endQuiz:boolean;
  getQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionID: number, answerIndex: number) => void;
  goNextQuestion: () => void;
  goPreviousQuestion: () => void;
  setUserName: (userName:string) => void;
  setQuestionsAmount: (ammount: number) => void;
  reset: () => void;
  setEndQuiz: (endQuiz: boolean) => void;
}

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestion: 0,
        questionsAmmount:10,
        userName:"",
        endQuiz:false,
        getQuestions: async (limit: number) => {
          const res = await fetch("http://localhost:5173/data.json");
          const json = await res.json();
          const questions = json
            .sort(() => Math.random() - 0.5)
            .slice(0, limit);
          set({
            questions,
          });
        },
        setQuestionsAmount:(ammount: number)=>{
          set({
            questionsAmmount: ammount,
          });
        },
        setUserName:(userName: string)=>{
          set({
            userName
          });
        },
        setEndQuiz:(endQuiz: boolean)=>{
          set({
            endQuiz
          });
        },
        selectAnswer: (questionID: number, answerIndex: number) => {
          const { questions } = get();
          //scructuredClone para clonar objeto
          const newQuestions = structuredClone(questions);
          //Obtenemos la pregunta
          const questionIndex = newQuestions.findIndex(
            (q:any) => q.id === questionID
          );
          //Obtenemos la info de esa pregunta
          const questionInfo = newQuestions[questionIndex];
          //Comporbamos si es correcta o no
          const isCorrectUserAnswer =
            questionInfo.correctAnswer === answerIndex;
          //Actualizar el estado
          newQuestions[questionIndex] = {
            ...questionInfo,
            isCorrectUserAnswer,
            userSelectedAnswer: answerIndex,
          };
          set({
            questions: newQuestions,
          });
        },
        goNextQuestion: () => {
          const { currentQuestion, questions } = get();
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
            set({
              currentQuestion: nextQuestion,
            });
          }
        },
        goPreviousQuestion: () => {
          const { currentQuestion } = get();
          const previousQuestion = currentQuestion - 1;
          if (previousQuestion >= 0) {
            set({
              currentQuestion: previousQuestion,
            });
          }
        },
        reset :()=>{
          set({questions: [], currentQuestion:0, endQuiz:false})
        }
      };
    },
    {
      name: "questions",
    }
  )
);
