import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from './SliderData';
import './Slider.css'

const Slider = ( {slides} ) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        console.log(current , length)
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        console.log(current)
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0 ){
        return null;
    }



    return (
       <section className='slider'>
           <FaArrowAltCircleLeft className='left-arrow'  onClick={prevSlide}/> 
           <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/> 
        {SliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <img src={slide.image} alt="Alt" className='image'/>
                    )}
                </div>
            )
        })}
        </section>
    )
}

export default Slider;