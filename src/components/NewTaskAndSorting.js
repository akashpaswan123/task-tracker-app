import React, { useEffect, useState } from 'react'
import Taskform from './TaskForm';
import { useTasks } from './TaskProvider';

export default function NewTaskAndSorting() {
    const [sortTask , setSortTask] = useState(0);
    const [showForm, setShowForm] = useState(0);
    const { sortByStartDate, sortByEndDate, sortByPriority, handleNewTask } = useTasks();
    const handleSort = [sortByStartDate , sortByEndDate , sortByPriority];

    useEffect(() => {
        handleSort[sortTask]();
    } , [sortTask]);

    return (
        <>
            {showForm === 1 && <Taskform cancelForm={setShowForm} handleTask={handleNewTask}/>}

            <div className="flex gap-4 text-white font-bold text-sm *:rounded-lg *:outline-none">
                <button onClick={() => setShowForm(1)} className='py-[6px] px-5 bg-green-800 hover:bg-green-600'>add New Task</button>
                <select name="status" className="py-[6px] px-5 bg-green-800 hover:bg-green-600" onChange={e => setSortTask([e.target.value])}>
                    
                    <option value="0" >sort-by-start-date</option>
                    <option value="1" >sort-by-end-date</option>
                    <option value="2" >sort-priority</option>
                </select>
            </div>
        </>
    )
}