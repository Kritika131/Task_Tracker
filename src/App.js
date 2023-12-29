
import { useState } from 'react';
import './App.css';
import ColorSection from './component/ColorSection';
import FontSection from './component/FontSection';
import TextSection from './component/TextSection';
import UndoRedo from './component/UndoRedo';
import { MyContext } from './component/contextapi';




function App() {
  const [color,setColor] = useState("#65625e",);
   const [font,setFont] = useState("'Poppins', sans-serif");
   const [undo,setUndo] = useState('');
   const [redo,setRedo] =useState("")
  
  return (
    <MyContext.Provider value = {{color,setColor,font,setFont,undo,setUndo,redo,setRedo}}>
    <div className='flex justify-between  h-screen w-screen px-28 py-16 '>
      <UndoRedo/>
      <TextSection />
      <div className='flex flex-col gap-6' >
        <FontSection/>
        <ColorSection/>
      </div>
    </div>
    </MyContext.Provider>
  );
}

export default App;
