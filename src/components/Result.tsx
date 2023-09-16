import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { useQuestionsStore } from "../store/questions"
import confetti from "canvas-confetti"
import { useEffect, useRef } from "react"
import "./result.css"
import { useQuestionsData } from "../hooks/useQuestionsData"
import { JavaScriptLogo } from "../assets/javascriptLogo"
import { toBlob } from "html-to-image"
export const Result = () => {
    const userName = useQuestionsStore(state => state.userName)
    const reset = useQuestionsStore(state => state.reset)
    const {correct,totalQuestions} = useQuestionsData()
    const grade = ((correct/totalQuestions)*10).toPrecision(2)
    useEffect(()=>{confetti()},[])
    const imageRef = useRef(null);
    
    async function compartir(){
        const newFile = await toBlob(imageRef.current!);
        var csvURL = window.URL.createObjectURL(newFile!);
        const tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', 'resultado-quiz.png');
        tempLink.click();

    }
    return (
        <>
          <div className="result-container" ref={imageRef}>
          <div className="background">
                        <JavaScriptLogo></JavaScriptLogo>
          </div>
                <CardContent sx={{textAlign:"center", width:"100%", height:"100%"}}>
                    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} gap={"15px"} height={"100%"}>
                <Typography variant="h4" color="text.primary" className="congrats-text">
                        ¡Enhorabuena 
                        <span className="username"> {userName}</span>
                        , has terminado el quiz!
                    </Typography>
                    <Typography gutterBottom variant="h1" color={"rgb(250,202,21)"} sx={{fontWeight:"900"}} className="grade-mark">
                        {grade}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Gracias por participar
                    </Typography>
                    </Stack>
                </CardContent>
            </div>
        
            <CardActions>
                    <Button onClick={()=>reset()} style={{textAlign:"center"}} variant="contained" color="info">Volver a empezar</Button>
                    <Button onClick={()=>compartir()} style={{textAlign:"center"}} variant="contained" color="success">Descargar resultado</Button>
                </CardActions>
        </>
    )
}