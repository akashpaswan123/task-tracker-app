import React, { useState } from 'react'
import Pendings from './Pendings';
import Progressings from './Progressings';
import Completeds from './Completeds';
import Deployeds from './Deployeds';
import Deferreds from './Deferreds';

export default function TaskColumnContainer() {
    const [activeColumn, setActiveColumn] = useState(0);
    return (
        <div className="w-full max-w-[600px] gap-3 flex flex-col shadow-[0_0_20px_black] rounded pb-4 my-4">
            <div className='w-full gap-[1px] flex items center justify-around  bg-white shadow-[0_0_15px_black] rounded-lg *:rounded-lg text-xs sm:text-sm font-bold sm:font-extrabold'>
                <button className={`py-4 px-1 w-1/5 h-[80px] text-center ${activeColumn === 0 ? "bg-sky-900 text-white shadow-[0_0_15px_black]" : "text-gray-600 hover:shadow-[0_0_5px_red_inset] hover:bg-red-600/10"}`} onClick={() => setActiveColumn(0)}>Pending tasks</button>
                <button className={`py-4 px-1 w-1/5 h-[80px] text-center ${activeColumn === 1 ? "bg-sky-900 text-white shadow-[0_0_15px_black]" : "text-gray-600 hover:shadow-[0_0_5px_red_inset] hover:bg-red-600/10"}`} onClick={() => setActiveColumn(1)}>Tasks In-Progress</button>
                <button className={`py-4 px-1 w-1/5 h-[80px] text-center ${activeColumn === 2 ? "bg-sky-900 text-white shadow-[0_0_15px_black]" : "text-gray-600 hover:shadow-[0_0_5px_red_inset] hover:bg-red-600/10"}`} onClick={() => setActiveColumn(2)}>Completed Tasks</button>
                <button className={`py-4 px-1 w-1/5 h-[80px] text-center ${activeColumn === 3 ? "bg-sky-900 text-white shadow-[0_0_15px_black]" : "text-gray-600 hover:shadow-[0_0_5px_red_inset] hover:bg-red-600/10"}`} onClick={() => setActiveColumn(3)}>Deployed Tasks</button>
                <button className={`py-4 px-1 w-1/5 h-[80px] text-center ${activeColumn === 4 ? "bg-sky-900 text-white shadow-[0_0_15px_black]" : "text-gray-600 hover:shadow-[0_0_5px_red_inset] hover:bg-red-600/10"}`} onClick={() => setActiveColumn(4)}>Deferred tasks</button>
            </div>

            {
                activeColumn === 0 ? <Pendings />
                    :
                    activeColumn === 1 ? <Progressings />
                        :
                        activeColumn === 2 ? <Completeds />
                            :
                            activeColumn === 3 ? <Deployeds />
                                :
                                <Deferreds />
            }
        </div>
    )
}