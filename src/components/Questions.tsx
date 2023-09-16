import { Card, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import confetti from "canvas-confetti"
import SyntaxHighlighter from "react-syntax-highlighter"
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { type Question as QuestionType } from "../types"
import { useQuestionsStore } from "../store/questions"

export const Question = ({info} : {info: QuestionType}) =>{
    const selectAnswer = useQuestionsStore(state => state.selectAnswer)
    
    const handleClick = (answerIndex:number)=> () => {
        selectAnswer(info.id, answerIndex)
        if(answerIndex == info.correctAnswer){
            confetti()
        }
    }
    const getBackgroundColor = (index:number):string=>{
        const {userSelectedAnswer, correctAnswer} = info
        if(userSelectedAnswer == null) return "transparent"
        if(index != correctAnswer && index !=userSelectedAnswer ) return "transparent"
        if(index == correctAnswer) return "green"
        if(index == userSelectedAnswer ) return "red"
        return "transparent"
    }
    return (<>
        <Card variant="outlined" className="questions-container" sx={{textAlign:'left',padding:'15px', bgcolor:'#222', height:"500px"}}>
            <Typography variant="h5">
                {info.question}
            </Typography>

            <SyntaxHighlighter language="javascript" style={gradientDark}>
                {info.code}
            </SyntaxHighlighter>

            <List sx={{bgcolor:'#333'}} disablePadding>
                {info.answers.map((answer, index)=>
                <ListItem key={index} disablePadding divider>
                    <ListItemButton 
                    disabled = {info.userSelectedAnswer != null}
                    onClick={handleClick(index)}
                    sx={{
                        backgroundColor: getBackgroundColor(index)
                    }}
                    >
                        <ListItemText primary={answer} sx={{textAlign:"center"}}/>
                    </ListItemButton>
                </ListItem>
                )}
            </List>
        </Card>
    </>)
}