import React, { useContext } from 'react'
import { MyContext } from './contextapi'

const UndoRedo = () => {
  const {setUndo,setRedo} = useContext(MyContext);

  return (
    <div>
    
      <button className='rounded mr-5 hover:bg-orange-500  bg-orange-700 px-4 py-2 text-white text-2xl font-bold cursor-pointer' onClick={()=>setUndo("undo")}>Undo</button>
      <button  className='rounded mr-4 hover:bg-orange-500  bg-orange-700 px-4 py-2 text-white text-2xl font-bold' onClick={()=>setRedo("redo")}>Redo</button>
    </div>
  )
}

export default UndoRedo