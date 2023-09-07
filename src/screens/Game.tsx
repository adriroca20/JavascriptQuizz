import { IconButton,Stack } from "@mui/material"
import { useQuestionsStore } from "../store/questions"
import { Question } from "../components/Questions"
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material"
import { Footer } from "../components/Footer"



export const Game = ()=>{
    const questions = useQuestionsStore(state => state.questions)
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)
    const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
    const goPreviousQuestion = useQuestionsStore(state => state.goPreviousQuestion)
    const questionInfo = questions[currentQuestion]

    return (
        <>
        <Stack direction="row" gap={2} alignItems="center">
            <IconButton onClick={goPreviousQuestion} disabled = {currentQuestion == 1}>
                <ArrowBackIosNew></ArrowBackIosNew>
            </IconButton>
            {currentQuestion} / {questions.length -1}
            <IconButton onClick={goNextQuestion} disabled = {currentQuestion == questions.length}>
                <ArrowForwardIos></ArrowForwardIos>
            </IconButton>
        </Stack>
            <Question info={questionInfo}></Question>
            <Footer></Footer>
        </>
    )
}