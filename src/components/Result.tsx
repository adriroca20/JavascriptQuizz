import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { useQuestionsStore } from "../store/questions"

export const Result = () => {
    const userName = useQuestionsStore(state => state.userName)
    const reset = useQuestionsStore(state => state.reset)
    const styles = {
        textAlign: 'left',
        padding: '0',
        bgcolor: '#222',
        height: "400px",
        width: "600px",
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center",
        "flex-direction": "column",
    }
    const compartir = ()=>{

    }
    return (
        <>
            <Card variant="outlined" className="card-result" sx={styles}>
                <CardContent sx={{ height: 100, width:"100%", backgroundColor:"#ce93d8"}}>
                    <Stack  direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                    <Typography gutterBottom variant="h3" component="div">
                        {userName}
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div">
                        9.8/10
                    </Typography>
                    </Stack>
                </CardContent>
                <CardContent sx={{textAlign:"center"}}>
                <Typography variant="h5" color="text.primary">
                        ¡Enhorabuena, has terminado el quiz!
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Comparte tus resultados
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button onClick={()=>reset()} style={{textAlign:"center"}} variant="outlined" color="info">Volver a empezar</Button>
                    <Button onClick={()=>compartir} style={{textAlign:"center"}} variant="outlined" color="secondary">Descargar resultado</Button>
                </CardActions>
            </Card>
        </>
    )
}