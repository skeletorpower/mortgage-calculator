import React from "react";
import { Slider, Stack, Typography } from "@mui/material";

function valuetext(value) {
  return `${value}`;
}

const SliderComponent = ({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
  label,
  unit,
  amount,
}) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography>{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack
        color={"text.secondary"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Typography variant="caption">
          {unit} {min}
        </Typography>
        <Typography variant="caption">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
