import React from 'react'
import { useState } from 'react'
import { motion } from "motion/react"
export default function App() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState("")
  const calculateBmi = () => {
    if ( height && weight) {
      const heightInMeters = height / 100
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1)
      setBmi(bmiValue)
      if(bmiValue < 18.5) setCategory("Underweight")
        else if (bmiValue < 24.9) setCategory("Normal Weight")
        else if (bmiValue < 29.9) setCategory("Overweight")
        else setCategory("Obese")
    }
  }
  const reset = () => {
    setHeight("")
    setWeight("")
    setBmi(null)
    setCategory("")
  }
  return (
    <div className='min-h-screen flex flex-wrap justify-center items-center text-white bg-black'>
<div className='w-full max-w-md flex flex-wrap p-4 sm:p-6 md:p-10 *:my-6 '>
<div className='flex w-full justify-center'>
        <motion.div
            className='box'
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
        >
        <h1 className='text-center font-bold text-3xl'>BMI Calucaltor</h1>
        <p className='text-center text-2xl text-gray-500'>Check your Body Mass Index</p>
        </motion.div>
      </div>
      <div className='flex flex-wrap justify-center *:my-10'>
        <div className='flex w-full flex-wrap justify-center *:my-2'>
        <input className='border w-f p-5 bg-white h-16 rounded-2xl text-black font-bold text-2xl outline-0' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='Enter weight (kg)' />
        <input className='border w-f p-5 bg-white h-16 rounded-2xl text-black font-bold text-2xl outline-0' type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder='Enter height (cm)' />
        </div>
        <div className='flex justify-center *:cursor-pointer *:font-bold text-2xl *:hover:bg-lime-600 gap-4 sm:gap-6 md:gap-10 *:p-4 sm:*:p-6 md:*:p-10 *:flex *:justify-center *:items-center'>
          <button className='bg-lime-500 rounded-2xl h-16' onClick={calculateBmi}>Calculate BMI</button>
          <button className='bg-lime-500 rounded-2xl h-16' onClick={reset}>Reset</button>
        </div>
      </div>
      {bmi && (
        
      <div className='flex w-full justify-center'>
        <motion.div
            className='box'
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
        >
        <b className='font-bold text-3xl text-center'>Your BMI: {bmi}</b>
        <p className='font-semibold text-2xl italic text-center'>{category}</p>
        </ motion.div>
      </div>
      )}
      </div>
    </div>
  )
}
