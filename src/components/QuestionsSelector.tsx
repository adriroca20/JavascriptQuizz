import { Button, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useQuestionsStore } from "../store/questions"

export const QuestionsSelector = ()=>{
  const setQuestionsAmmount = useQuestionsStore(state => state.setQuestionsAmount)
  const questionsAmmount:number = useQuestionsStore(state => state.questionsAmmount)


  const handleChange = (event:any, ammount:any)=>{
    console.log(ammount)
    setQuestionsAmmount(ammount)
  }
  const control = {
    value: 0,
    onChange: handleChange,
    exclusive: true,
    color:"primary"
  };
  const children = [
    <ToggleButton value="10">
        10
    </ToggleButton>,
    <ToggleButton value="20">
        20
    </ToggleButton>,
    <ToggleButton value="30">
        30
    </ToggleButton>,
  ];
    return <>
        <h1>{questionsAmmount}</h1>
        <Stack direction={"row"} gap={2} alignItems="center" justifyContent="center" width={100}>
            <ToggleButtonGroup {...control} color="secondary">
             {children}
            </ToggleButtonGroup>
        </Stack>
    </>
}