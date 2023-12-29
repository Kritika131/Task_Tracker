import React, { useContext, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {  PencilSquareIcon,TrashIcon } from '@heroicons/react/24/outline'
import { MyContext } from './contextapi';

uuidv4();

const TextSection = () => {
  const {color,font,undo,redo,setUndo,setRedo} = useContext(MyContext)
  const [text,setText] = useState('')
  const [tasks,setTasks] = useState([])
  const [taskEditedId,setTaskEditedId]=useState(null) //for reference to update task value

  
  const [updatebtn,setUpdateBtn] = useState(false)


  // ------------->--------->handle redo
  const [redoTasks,setRedoTasks] = useState([])

  useEffect(()=>{
    if(tasks.length>0 && redo==="redo"){
      let redoTask=tasks.splice(tasks.length-1,1)[0]
      console.log(redoTask);
      setRedoTasks([...redoTasks,redoTask])

    }
    setRedo('')
  },[redo])

  useEffect(()=>{
     if(redoTasks.length!=0 && undo==="undo"){
      console.log("redotask--",redoTasks);
        setTasks([...tasks,redoTasks[redoTasks.length-1]])
        redoTasks.splice(redoTasks.length-1,1);
     }
     setUndo('')
  },[undo]);

  

  const handleSubmit=(e)=>{
   
    e.preventDefault(e)
    if(!text) alert("write some text!!")
    else if(text && taskEditedId){
      setTasks(
        tasks.map((elm)=>{
          if(elm.id===taskEditedId){
            return {...elm, task:text,textColor:color,fontValue:font} //update task array through current updated value
          }
          return elm;
        })
        )
        setText('');
        setUpdateBtn(false)
        setTaskEditedId(null)
    }
    else {
      setTasks([...tasks,{id:uuidv4(),task:text,textColor:color,fontValue:font}])

     
     
      setText('')
    }
    // console.log(tasks);
  }

  
  const deleteTask=(id)=>{
    setTasks(tasks.filter(task=>task.id!==id))
  }

  const handleEdit=id=>{
    let itm = tasks.find((elm)=>elm.id===id)

      // console.log(itm);
      setUpdateBtn(true)
      setText(itm.task)
      setTaskEditedId(itm.id)
    
  }

  // -----------------handle Drag and drop event-----------

  //save reference from dragItem and dragOverItem
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)

  //handle drag item sorting----
  const handleSort = ()=>{
    let duplicate_tasks = [...tasks]

    //remove and save the dragged item content
    const draggedItm = duplicate_tasks.splice(dragItem.current,1)[0];

    // console.log("draggedItem ",draggedItm);

    //switch the position
    duplicate_tasks.splice(dragOverItem.current,0,draggedItm)

    //reset the position ref
    dragItem.current=null;
    dragOverItem.current=null;

    //update the actual task array
    setTasks(duplicate_tasks)

  }
  

 
  return (
    <div className='flex flex-col items-center my-8 mt-16 rounded-xl w-[38rem] bg-orange-600    px-12 py-14 text-xl '>
      <h2 className='text-4xl font-bold text-white'>Get Things Done</h2>

      <div className='border-2 flex mb-6 border-white rounded-md mt-8 w-full'>
        <input type="text" className='outline-none border-none px-6 rounded-md rounded-r-none py-2 flex-1 text-md text-gray-600 placeholder:text-gray-400' placeholder="Write today's task here..." style={{color:color,fontFamily:font}} value={text} onChange={(e)=>setText(e.target.value)} />
        {! updatebtn ?
        <button className='px-4 text-2xl font-medium text-white hover:bg-orange-300 rounded-md rounded-l-none ' onClick={handleSubmit}>Add Text</button>
         :
         
        <button className='px-4 text-2xl font-medium text-white hover:bg-orange-300 rounded-md rounded-l-none ' onClick={handleSubmit}>update Text</button>
         }
      </div>
      {/* <div>{tasks.length}</div> */}

      <div className="task-container w-full  ">
 
     
      {
        tasks && tasks.map((item,idx)=>(
          
          <div 
          className=' w-full text-white flex justify-between text-2xl capitalize font-semibold  px-4 py-4 bg-orange-500    my-3 rounded-md gap-1  ' 
          
          key={idx}
          draggable
          onDragStart={(e)=>dragItem.current=idx}
          onDragEnter={(e)=>dragOverItem.current=idx}
          onDragEnd={handleSort}
          
          >
            {/* <h1>{idx}</h1> */}
          <h2 className=' break-words '  style={{color:item.textColor,fontFamily:item.fontValue}}>{ item.task}</h2>
          <div className=" flex gap-2 ">

          <span><PencilSquareIcon className='w-8 h-8 text-green-700 font-bold hover:text-green-500 cursor-pointer' onClick={()=>handleEdit(item.id)}/></span>
          <span><TrashIcon className='w-8 h-8 text-red-700 font-bold hover:text-red-500 cursor-pointer'  onClick={()=>deleteTask(item.id)} /></span>
          </div>
      </div>
        ))
      }
      </div>
      
      

      {/* <div className=' text-white flex justify-between w-full px-4 py-2 bg-orange-400 my-4 rounded-md '>
          <h2>Task text here</h2>
          <div className=" flex gap-2">

          <span><PencilSquareIcon className='w-8 h-8 text-green-700 font-bold hover:text-green-500 cursor-pointer'/></span>
          <span><TrashIcon className='w-8 h-8 text-red-700 font-bold hover:text-red-500 cursor-pointer'  /></span>
          </div>
      </div> */}
    </div> 
  )
}

export default TextSection