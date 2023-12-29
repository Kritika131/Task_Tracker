import React, { useContext } from 'react'
import { MyContext } from './contextapi'

const ColorSection = () => {
  const {color,setColor} = useContext(MyContext)

  const colors = ["#65625e","#deb887","#ffa500","#000","#0b370387","#b92500","#454659"]

  const handleChangeColor = (col)=>{
      //  console.log(col);
       setColor(col)
       
  }
  return (
    <div className='flex flex-col bg-orange-700  rounded-md px-12 py-6 items-center justify-center gap-6 mr-10'>
      <h2 className='text-3xl text-white font-bold'>Change Color</h2>
      <div className='flex gap-2'>
        {
          colors.map((col,idx)=>(
            <div key={idx} className={col===color ? "h-8 w-8 rounded-full border-4 border-white  hover:opacity-60 cursor-pointer ":"h-8 w-8 rounded-full  hover:opacity-60 cursor-pointer "} style={{background:col, color:""}} onClick={()=>handleChangeColor(col)} ></div>
          ))
        }
      </div>
    </div>
  )
}

export default ColorSection