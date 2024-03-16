import React from 'react'
import { Slider, Typography } from '@mui/material'

function valuetext(value) {
    return `${value}`;
}

const SliderComponent = ({ defaultValue, min, max, step, onChange, value }) => {
    return (
        <>
            <Typography></Typography>
            <Slider defaultValue={defaultValue} min={min} max={max} aria-label="Default" valueLabelDisplay="auto" marks step={step} onChange={onChange} value={value}/>
            <Typography></Typography>
        </>
    )
}

export default SliderComponent