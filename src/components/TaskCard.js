import React, { useState } from 'react'
import ConfirmDeletion from './ConfirmDeletion';
import Taskform from './TaskForm';

export default function TaskCard({ task, handleUpdateTask, handleDeleteTask }) {
    const [operation, setOperation] = useState(0);


    return (
        <div className="relative w-[97%] flex flex-col gap-1 p-4 shadow-[0_0_5px_gray] rounded-xl">
            <div className="w-full flex items-center justify-between font-bold">
                <h2 className="text-red-950/50 text-[1.8rem]">{task.title}</h2>
                <h3 className="text-white px-3 py-2 bg-sky-800 rounded-lg text-lg">{task.priority}</h3>
            </div>
            <hr className='text-gray-500 bg-gray-500 h-[1.2px] w-full'/>
            <p className="font-mono font-extralight text-gray-600">{task.description}</p>

            <div className="self-start font-extrabold text-xl font-sans">
            @<span className="font-serif">{task.assigneeName}</span>
            </div>
            <div className="w-full flex items-center justify-between font-bold">
                <button className="py-[5px] w-[80px] text-center rounded-lg bg-green-800/25 text-green-700 hover:text-white hover:bg-green-600 hover:shadow-[0_0_7px_black]" onClick={() => setOperation(1)}>edit</button>
                <button className="py-[5px] w-[80px] text-center rounded-lg bg-red-800/20 text-red-600 hover:text-white hover:bg-red-600 hover:shadow-[0_0_7px_black]" onClick={() => setOperation(2)}>delete</button>
            </div>

            {
                operation === 1 ? <Taskform task={task} cancelForm={setOperation} handleTask={handleUpdateTask} />
                    :
                    operation === 2 && <ConfirmDeletion cancelDeleteTask={() => setOperation(0)} confirmDeleteTask={() => {handleDeleteTask(); setOperation(0);}} />
            }

        </div>
    )
}