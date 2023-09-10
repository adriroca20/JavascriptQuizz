import { Button, Slider, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useQuestionsStore } from "../store/questions"
import { CustomSlider } from "./CustomSlider"

export const QuestionsSelector = () => {
  const setQuestionsAmmount = useQuestionsStore(state => state.setQuestionsAmount)


  const handleChange = (event: any, ammount: any) => {
    setQuestionsAmmount(ammount)
  }
  return <>
    <Stack direction={"column"} alignItems="flex-start" justifyContent="center" width={"100%"}>
    <Typography>
        ¿Con cuantas preguntas te atreves?
      </Typography>
      <CustomSlider
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