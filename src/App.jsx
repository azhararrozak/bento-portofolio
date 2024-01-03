import React from 'react'
import Navbar from './components/Navbar'
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go"

function App() {
  return (
    <div className="App">
      <header className='flex justify-center items-center py-10'>
        <Navbar />
      </header>
      <main className='px-8'>
        <div className='flex gap-2'>
          <div className='w-3/4 rounded-md p-4 text-gray-700 bg-gradient-to-r from-lime-100 from-10% via-green-400 green-30% to-emerald-200 to-90%'>
            <h1 className='text-xl font-bold mb-4'>Hello All, I'm Azhar Arrozak</h1>
            <p className='text-md mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro autem magnam saepe ad illum, odit ut reiciendis debitis neque velit ratione voluptas esse quasi rem vero explicabo in molestiae eveniet.</p>
            <div className='flex'>
              <div className='rounded-full border mr-2 p-2 bg-gray-700'>
                <FaLinkedinIn className='text-white' />
              </div>
              <div className='rounded-full border mr-2 p-2 bg-gray-700'>
                <FaInstagram className='text-white' />
              </div>
              <div className='rounded-full border mr-2 p-2 bg-gray-700'>
                <FaGithub className='text-white' />
              </div>
            </div>
          </div>
          <div className='w-1/4 border p-2'>
            <h2 className='text-xl font-bold'>About</h2>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?</p>
          </div>
        </div>

        <div className='text-gray-700 grid grid-rows-3 grid-flow-col gap-2 my-2'>
          <div className='border p-2 row-span-3'>
            <h2 className='text-xl font-bold'>High School</h2>
            <img className='w-1/2' src='./SMKAdw.png' />
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?</p>
          </div>
          <div className='border rounded-md p-2 row-span-3'>
            <div className='flex justify-between items-center'>
              <h2 className='text-xl font-bold'>University</h2>
              <div className='border rounded-full p-2'><GoArrowUpRight className='text-md' /></div>
            </div>
            <img className='w-1/4' src='./UPI.png' />
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?</p>
          </div>
          <div className='border p-2'>
            {/**Cnter element */}
            <div className='flex justify-center items-center h-full'>
              <h2 className='text-2xl font-bold'>Experience</h2>
            </div>
          </div>
          <div className='border p-2'> 
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, earum rerum quod maxime doloribus dolorem molestias accusantium quas nam sit exercitationem vero!</h1>
          </div>
          <div>
            <h1>test 2</h1>
          </div>

        </div>

      </main>
    </div>
  )
}

export default App
