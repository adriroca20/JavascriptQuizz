import { Button, Stack } from "@mui/material"
import { useQuestionsData } from "../hooks/useQuestionsData"
import { useQuestionsStore } from "../store/questions"


export const Footer = ()=>{
    const {correct,incorrect,unanswered} = useQuestionsData()
    const reset = useQuestionsStore(state => state.reset)
    return <footer style={{marginTop:"10px"}}>
        <Stack direction="column" gap={2} alignItems="center">
        <strong>{`✔️${correct} - ❌ ${incorrect} - ❔${unanswered}`}</strong>
        <Button onClick={()=>reset()} style={{textAlign:"center"}}>Reset game</Button>
        </Stack>
    </footer>
}