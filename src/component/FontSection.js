import React, { useContext, useState } from 'react'
import { MyContext } from './contextapi';

const FontSection = () => {
 
  const {font,setFont}= useContext(MyContext)
 
  const handleFontChange=(e)=>{
       let fnt = e.target.value;
       setFont(fnt)
       console.log(fnt);
  }
  return (
    <div className='h-[10rem] w-[23rem] rounded-md flex flex-col justify-center items-center  bg-orange-700 px-4 py-4 gap-5'>
      <h2 className='text-3xl text-white font-bold'>Change Font</h2>
      <div className='w-full px-4'>
        <select className='text-2xl outline-none border-none w-full px-2 rounded-md' onChange={(e)=>handleFontChange(e)}>
          <option value="'Poppins', sans-serif" style={{fontFamily:" 'Poppins', sans-serif"}}>Poppins</option>
          <option value="'Inter', sans-serif" style={{fontFamily:" 'Inter', sans-serif"}}>Inter</option>
          <option value="'Merriweather', serif" style={{fontFamily:" 'Merriweather', serif"}}>Merriweather</option>
          <option value="'Nunito', sans-serif" style={{fontFamily:"'Nunito', sans-serif"}}>Nunito</option>
          <option value="'Playfair Display', serif" style={{fontFamily:"'Playfair Display', serif"}}>Playfair</option>
          <option value="'Roboto', sans-serif" style={{fontFamily:" 'Inter', sans-serif"}}>Roboto</option>
          <option value="'Ubuntu', sans-serif" style={{fontFamily:" 'Ubuntu', sans-serif"}}>Ubuntu</option>
        </select>
      </div>
    </div>
  )
}

export default FontSection