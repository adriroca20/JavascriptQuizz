import { Button, Stack } from "@mui/material"
import { useQuestionsData } from "../hooks/useQuestionsData"
import { useQuestionsStore } from "../store/questions"


export const Footer = ()=>{
    const {correct,incorrect,unanswered} = useQuestionsData()
    const reset = useQuestionsStore(state => state.reset)
    const setEndQuiz = useQuestionsStore(state => state.setEndQuiz)
    return <footer style={{marginTop:"10px"}}>
        <Stack direction="column" gap={2} alignItems="center">
        <strong>{`✔️${correct} - ❌ ${incorrect} - ❔${unanswered}`}</strong>
        <Stack direction="row" gap={2} alignItems="center">
        <Button onClick={()=>reset()} style={{textAlign:"center"}} variant="outlined" color="info">Volver a empezar</Button>
        <Button onClick={()=>setEndQuiz(true)} style={{textAlign:"center"}} variant="outlined" color="secondary">Terminar Quiz</Button>
        </Stack>
        </Stack>
    </footer>
}