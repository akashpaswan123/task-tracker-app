import React from 'react'
import TaskCard from './TaskCard'
import { useTasks } from './TaskProvider'

export default function Completeds() {
  const { tasks, handleEditTask, handleDeleteTask } = useTasks();
  const cTasks = tasks.filter(task => task.taskStatus === "completed");

  return (
    <div className='w-[98%] flex flex-col gap-4 pb-4 bg-white rounded-lg overflow-hidden'>
      <h1 className='py-3 text-[3rem] font-extrabold font-mono w-[100%] bg-green-700 text-white text-center'>Completed</h1>
      {
        cTasks && cTasks.length > 0 ?
          tasks?.map((task, index) => task.taskStatus === "completed" && <TaskCard key={index} task={task} handleDeleteTask={() => handleDeleteTask(index)} handleUpdateTask={(task) => handleEditTask(index, task)} />)
          :
          <div className="text-4xl font-semibold text-gray-600">No task Found</div>
      }
    </div>
  )
}