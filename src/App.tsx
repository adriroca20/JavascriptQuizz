import "./App.css";
import {Stack, Typography } from "@mui/material";
import { JavaScriptLogo } from "./assets/javascriptLogo";
import { Start } from "./components/Start";
import { useQuestionsStore } from "./store/questions";
import { Game } from "./screens/Game";
import { Result } from "./components/Result";
function App() {
  const questions = useQuestionsStore(state => state.questions)
  const endQuiz = useQuestionsStore(state => state.endQuiz)

  return (
    <>
      <main className="main-page">
        <div className="container">
        <Stack
            direction="row"
            gap={2}
            alignItems="center"
            justifyContent="center"
          >
            <JavaScriptLogo></JavaScriptLogo>
            <Typography variant="h2" component="h1">
              JavaScript Quiz
            </Typography>
          </Stack>
          {questions.length ==0 && !endQuiz && <Start/>}
          {questions.length >0 &&!endQuiz && <Game/>}
          {endQuiz && <Result/>}
        </div>
      </main>
    </>
  );
}

export default App;
