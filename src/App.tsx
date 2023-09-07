import "./App.css";
import { Container, Stack, Typography } from "@mui/material";
import { JavaScriptLogo } from "./assets/javascriptLogo";
import { Start } from "./components/Start";
import { useQuestionsStore } from "./store/questions";
import { Game } from "./screens/Game";
function App() {
  const questions = useQuestionsStore(state => state.questions)
  return (
    <>
      <main className="main-page">
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
          {questions.length ==0 && <Start/>}
          {questions.length >0 && <Game/>}
      </main>
    </>
  );
}

export default App;
