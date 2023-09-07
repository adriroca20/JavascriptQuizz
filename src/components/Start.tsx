import { Button, Stack, TextField } from "@mui/material"
import { useQuestionsStore } from "../store/questions"
import { QuestionsSelector } from "./QuestionsSelector";

export const Start = ()=>{
    const questionsAmmount = useQuestionsStore(state => state.questionsAmmount)
    const getQuestions = useQuestionsStore(state => state.getQuestions)
    const handleClick = ()=>{
        getQuestions(questionsAmmount)
    }

    return <>
        <Stack direction={"column"} gap={2} alignItems="center" justifyContent="center">
        <TextField id="outlined-basic" label="Introduce tu nombre!" variant="outlined" />
        <QuestionsSelector></QuestionsSelector>
        <Button onClick={()=> {handleClick()}} variant="contained" disabled={questionsAmmount == 0}>
            ¡Empezar!
        </Button>
        </Stack>

    </>
}