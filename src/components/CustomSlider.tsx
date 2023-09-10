import { Slider, styled } from "@mui/material";

export const CustomSlider = styled(Slider)({
    color: 'rgb(250,202,21)',
    '& .MuiSlider-thumb': {
      backgroundColor: 'rgb(250,202,21)',
      border: '2px solid rgb(250,202,21)',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 15,
      background: 'unset',
      color:"black",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: 'rgb(250,202,21)',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });