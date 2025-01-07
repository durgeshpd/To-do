import React, { useState } from 'react'

const ToDo = () => {

    const [tasks, setTasks] = useState([])
    const [taskInput, setTaskInput] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [currentEditIndex, setCurrentEditIndex] = useState(null)

    const addTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, taskInput.trim()])
            setTaskInput("")
        }
    }

    const EditTask = (index) => {
        setTaskInput(tasks[index])
        setIsEditing(true)
        setCurrentEditIndex(index)
    }

    const SaveEditedTask = () => {
        const updatedTasks = [...tasks];
        updatedTasks[currentEditIndex] = taskInput.trim()
        setTasks(updatedTasks)
        setTaskInput("")
        setIsEditing(false)
        setCurrentEditIndex(null)
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

  return (
    <div className='max-w-md mx-auto mt-10 p-5 bg-blue-400 rounded shadow-md'>
        <h1 className='text-2xl font-bold text-center mb-5'>To-Do App</h1>
        <input 
            type='text'
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className='w-full p-3 border border-gray-400 rounded mb-3'
            placeholder='Add a new task'
        />

        <button onClick={isEditing ? SaveEditedTask : addTask}
            className='w-full p-3 bg-green-300 text-white rounded hover:bg-green-400'
         
         >
            {isEditing ? "save chnages" : 'Add Task'}
        </button>

        <ul className='mt-5'>
            {tasks.map((task, index) =>(
                <li key= {index} className='flex justify-between items-center mb-3 p-3 border bg-white border-gray-200 rounded'>
                    <span>{task}</span>
                    <div className='flex space x-2 gap-2'>
                        <button onClick={() => EditTask(index)} className='px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600'>Edit</button>
                        <button onClick={() => deleteTask(index)} className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'>Delete</button>

                    </div>
                </li>
            ) )}
        </ul>
    </div>
  )
}

export default ToDo