import React from 'react';
import './App.css'
import TaskProvider from './components/TaskProvider';
import NewTaskAndSorting from './components/NewTaskAndSorting';
import TaskColumnContainer from './components/TaskColumnContainer';

export default function App() {
  return (
    <TaskProvider >
      <div className='task-tracker-container'>
        <h1 className="text-[2.2rem] sm:text-[3rem] font-bold font-sans text-red-950 py-2">Task Tracker App</h1>
        <NewTaskAndSorting />
        <TaskColumnContainer />
      </div>
    </TaskProvider>
  )
}