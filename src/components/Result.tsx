import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { useQuestionsStore } from "../store/questions"
import confetti from "canvas-confetti"
import { useEffect } from "react"
import "./result.css"
import { useQuestionsData } from "../hooks/useQuestionsData"
import { JavaScriptLogo } from "../assets/javascriptLogo"
export const Result = () => {
    const userName = useQuestionsStore(state => state.userName)
    const reset = useQuestionsStore(state => state.reset)
    const {correct,totalQuestions} = useQuestionsData()
    const grade = ((correct/totalQuestions)*10).toPrecision(2)
    useEffect(()=>{confetti()},[])

    const compartir = ()=>{

    }
    return (
        <>
            <Card variant="outlined" className="result-container">
                <CardContent sx={{textAlign:"center", width:"100%", height:"100%"}}>
                    <Stack  direction={"row"} justifyContent={"space-between"} alignItems={"center"} height={"40%"} width={"100%"}>
                    <Typography gutterBottom variant="h3" component="div">
                        {userName}
                    </Typography>
                    <Typography gutterBottom variant="h3" component="image">
                        {/* {grade} */}
                        <JavaScriptLogo></JavaScriptLogo>
                    </Typography>
                    </Stack>
                    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} gap={"15px"}>
                    <Typography gutterBottom variant="h3" color={"Highlight"} component="image" className="grade-mark">
                        {grade}
                    </Typography>
                <Typography variant="h5" color="text.primary">
                        ¡Enhorabuena, has terminado el quiz!
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Comparte tus resultados
                    </Typography>
                    </Stack>
                </CardContent>

                <CardActions>
                    <Button onClick={()=>reset()} style={{textAlign:"center"}} variant="outlined" color="info">Volver a empezar</Button>
                    <Button onClick={()=>compartir} style={{textAlign:"center"}} variant="outlined" color="secondary">Descargar resultado</Button>
                </CardActions>
            </Card>
        </>
    )
}