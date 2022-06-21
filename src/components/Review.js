import { ClockIcon, ArrowLeftIcon, DotsVerticalIcon, XIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Review() {
    const [clicked, setClicked] = useState(false)
    let reviewButtons;
    if (clicked) {
      reviewButtons = 
      <div className="flex flex-col w-5/6 h-48 border-t border-gray-300 justify-items-center m-auto">
          <div className="mb-2 font-bold text-2xl">How difficult was it to answer?</div>
          <div className="flex flex-row w-full gap-x-4 h-24 text-white font-medium text-xl">
          <div className="flex bg-red-500 grow rounded-lg"><span className="m-auto">I couldn't</span></div>
           <div className="flex bg-gray-500 grow rounded-lg"><span className="m-auto">It was hard</span></div>
           <div className="flex bg-green-500 grow rounded-lg"><span className="m-auto">It was okay</span></div>
           <div className="flex bg-blue-500 grow rounded-lg"><span className="m-auto">It was easy</span></div>
          </div>

      </div>
    }

    else {
      reviewButtons = 
      <div className="flex h-40 border-t border-gray-300 justify-items-center m-auto">
      <button onClick={() => {setClicked(true)}} className="flex flex-row items-center bg-violet-700 w-[515px] text-white text-2xl text-bold py-8 font-medium self-start mt-4 rounded-lg"><span className="m-auto">Show Answer</span></button>
      </div>
    }

    return (
      <div className="flex flex-col h-screen font-sans">
        <div className="flex flex-row justify-between bg-gray-50 h-16">
          <Link className="flex flex-row" to="/"><button className="px-4 rounded-lg ml-4 h-3/5 my-auto bg-gray-50 hover:bg-gray-200 text-gray-500 font-medium"><span className="flex flex-row m-auto"><XIcon className="h-6 w-6"/><span className="ml-2">End Session</span></span></button></Link>
          <div className="flex flex-row gap-x-2 items-center">
            <div className="flex flex-row bg-violet-900 px-4 h-3/5 items-center rounded-lg text-white"><ClockIcon className="h-4 w-4"/></div>
            <button className="hover:bg-gray-200 h-4/6 px-4 rounded-lg"><ArrowLeftIcon className="h-6 w-6"/></button>
            <button className="hover:bg-gray-200 h-3/5 px-2 mr-4 rounded-lg"><DotsVerticalIcon className="h-6 w-6"/></button>
          </div>

        </div>
        <div className="flex flex-row bg-gray-50 grow items-end">
            <div className="bg-white shadow-md bg-gray-50 w-11/12 h-[95%] mb-4 mx-auto">
              <span className="flex flex-row p-6 font-sans text-lg">Card Content and Stuff</span>
            </div>
          

        
        </div>
        {reviewButtons}
  
      </div>
    )
  }