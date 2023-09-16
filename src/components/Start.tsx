import { Button, Stack, TextField } from "@mui/material"
import { useQuestionsStore } from "../store/questions"
import { QuestionsSelector } from "./QuestionsSelector";

export const Start = ()=>{
    const questionsAmmount = useQuestionsStore(state => state.questionsAmmount)
    const getQuestions = useQuestionsStore(state => state.getQuestions)
    const setUserName = useQuestionsStore(state => state.setUserName)
    const handleClick = ()=>{
        getQuestions(questionsAmmount)
    }
    const handleUserName = (event:any)=>{
        setUserName(event.target.value)
    }
    return <>
        <Stack direction={"column"} gap={4} alignItems="center" justifyContent="center" width={"100%"} padding={"20px"}>
        <TextField id="outlined-basic" onChange={handleUserName} label="Introduce tu nombre!" variant="outlined" fullWidth/>
        <QuestionsSelector></QuestionsSelector>
        <Button onClick={()=> {handleClick()}} variant="contained" sx={{backgroundColor:"rgb(250,202,21)"}} disabled={questionsAmmount == 0} fullWidth>
            ¡Empezar!
        </Button>
        </Stack>

    </>
}