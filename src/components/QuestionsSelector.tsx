import { Button, Slider, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useQuestionsStore } from "../store/questions"

export const QuestionsSelector = () => {
  const setQuestionsAmmount = useQuestionsStore(state => state.setQuestionsAmount)
  const questionsAmmount: number = useQuestionsStore(state => state.questionsAmmount)


  const handleChange = (event: any, ammount: any) => {
    console.log(ammount)
    setQuestionsAmmount(ammount)
  }
  return <>
    <Stack direction={"column"} alignItems="flex-start" justifyContent="center" width={"100%"}>
    <Typography>
        ¿Con cuantas preguntas te atreves?
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={10}
        step={5}
        marks
        min={5}
        max={30}
        valueLabelDisplay="auto"
        onChange={handleChange}
      />
    </Stack>
  </>
}