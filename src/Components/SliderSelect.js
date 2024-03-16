import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
    return (
        <>
            <SliderComponent min={0} max={150} defaultValue={50} step={10} onChange={(e, value) => console.log(value)}/>
            <SliderComponent min={100} max={1000} defaultValue={300} step={100}/>
            <SliderComponent min={0} max={10} defaultValue={3}step={1}/>
        </>

    )
}

export default SliderSelect