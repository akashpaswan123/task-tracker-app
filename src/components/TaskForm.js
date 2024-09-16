import React, { useState } from 'react'

export default function Taskform({ task, cancelForm, handleTask }) {
    const [title, setTitle] = useState(task?.title || "task title");
    const [description, setDescription] = useState(task?.description || "task description");
    const [startDate, setStartDate] = useState(task?.startDate);
    const [endDate, setEndDate] = useState(task?.endDate);
    const [taskStatus, setTaskStatus] = useState(task?.taskStatus || "pending");
    const [priority, setPriority] = useState(task?.priority || "P0");
    const [assigneeName, setAssigneeName] = useState(task?.assigneeName || "task assignee name");

    const handleFormSubmit = e => {
        e.preventDefault();
        setTitle(title.trim());
        setDescription(description.trim());
        setAssigneeName(assigneeName.trim());
        
        if (!title || !description || !assigneeName) {
            alert("Some fields are empty!");
        } else {
            handleTask({ title, description, taskStatus, priority, assigneeName, startDate, endDate });
            cancelForm(0);
        }
    }

    return (
        <div className='h-[100vh] w-full z-50 fixed top-0 left-0 flex items-center justify-center bg-gray-950/60'>
            <div className='w-[98%] max-w-[500px] flex flex-col items-center justify-evenly bg-white p-5 rounded-lg'>
                <h2 className="text-3xl font-bold text-center py-2 text-red-950">Enter New Task Details</h2>
                <div className="w-full flex flex-col items-start justify-start">
                    <label className='text-[10px] text-red-950 font-mono font-extrabold self-start' htmlFor="task-title">Title</label>
                    <input type="text" name='task-title' className="w-full p-2 rounded-md outline-none shadow-[0_0_10px_gray_inset] focus:bg-blue-600/10" placeholder='Enter the title' value={title} onChange={e => setTitle(e.target.value)} required />
                </div>

                <div className="task-status w-full flex flex-col items-start justify-start">
                    <label className='text-[10px] text-red-950 font-mono font-extrabold self-start' htmlFor="status" >Status</label>
                    <select name="status" id="" className="w-full p-2 rounded-md outline-none shadow-[0_0_10px_gray_inset] focus:bg-blue-600/10" placeholder='pending' value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)} >
                        <option value="pending">pending</option>
                        <option value="in-progress">in-progress</option>
                        <option value="completed">completed</option>
                        <option value="deployed">deployed</option>
                        <option value="deferred">deferred</option>
                    </select>
                </div>

                <div className="w-full flex flex-col items-start justify-start">
                    <label className='text-[10px] text-red-950 font-mono font-extrabold self-start' htmlFor="end-date">Start-date</label>
                    <input type="date" name='end-date' className="w-full p-2 rounded-md outline-none shadow-[0_0_10px_gray_inset] focus:bg-blue-600/10" placeholder='Enter expected end date' onChange={e => setStartDate(e.target.value)} value={startDate} required />
                </div>
                {
                    (taskStatus === "completed") &&
                    <div className="w-full flex flex-col items-start justify-start">
                        <label className='text-[10px] text-red-950 font-mono font-extrabold self-start' htmlFor="end-date">End-date</label>
                        <input type="date" name='end-date' className="w-full p-2 rounded-md outline-none shadow-[0_0_10px_gray_inset] focus:bg-blue-600/10" placeholder='Enter expected end date' onChange={e => setEndDate(e.target.value)} value={endDate} required />
                    </div>
                }

                <div className="w-full flex flex-col items-start justify-start">
                    <label className='text-[10px] text-red-950 font-mono font-extrabold self-start' htmlFor="assignee-name">Assignee</label>
                    <input type="text" name='assignee-name' className="w-full p-2 rounded-md outline-none shadow-[0_0_10px_gray_inset] focus:bg-blue-600/10" placeholder='Enter assignee name' value={assigneeName} onChange={e => setAssigneeName(e.target.value)} required />
                </div>

                <div className="task-priority w-full flex flex-col items-start justify-start">
                    <label className='text-[10px] text-red-950 font-mono font-extrabold self-start' htmlFor="priority" >Priority</label>
                    <select name="priority" id="" className="w-full p-2 rounded-md outline-none shadow-[0_0_10px_gray_inset] focus:bg-blue-600/10" placeholder='P0' value={priority} onChange={e => setPriority(e.target.value)}  >
                        <option value="P0">P0</option>
                        <option value="P1">P1</option>
                        <option value="P2">P2</option>
                    </select>
                </div>

                <div className="w-full flex flex-col items-start justify-start">
                    <label className='text-[10px] text-red-950 font-mono font-extrabold self-start' htmlFor="task-description">Description</label>
                    <textarea type="text" name="task-description" className="w-full p-2 rounded-md outline-none shadow-[0_0_10px_gray_inset] focus:bg-blue-600/10" id="" cols="30" rows="5" placeholder='Enter description' onChange={e => setDescription(e.target.value)} value={description} required></textarea>
                </div>

                <div className="task-priority w-full flex items-start justify-between mt-4 font-bold text-white *:rounded-lg">
                    <button onClick={() => cancelForm(0)} className='w-[49%] py-2 bg-red-800/20 text-red-600 hover:text-white hover:bg-red-600 hover:shadow-[0_0_7px_black]'>cancel</button>
                    <button onClick={handleFormSubmit} className='w-[49%] py-2 bg-green-800/25 text-green-700 hover:text-white hover:bg-green-600 hover:shadow-[0_0_7px_black]'>create Task</button>
                </div>
            </div>
        </div>
    )
}