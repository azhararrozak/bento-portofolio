import React, {useState, useEffect, useRef} from 'react'
import NET from 'vanta/dist/vanta.net.min'
import Navbar from './components/Navbar'
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go"
import Footer from './components/Footer';

function App() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        color: 0x434375,
        scale: 1.00,
        scaleMobile: 1.00,
        minHeight: 50.00,
        points: 20.00,
        maxDistance: 17.00,
      }))
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy()
      }
    }

    vantaEffect.resize()
  },[vantaEffect])
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
          <div className='w-1/4'>
            <img className="rounded-md" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKw5Oi70vdkN8sZ-I9_THkE3tCZu7pi3aSgg&usqp=CAU' />
          </div>
          {/*<div className='w-1/4 rounded-md bg-center bg-coverbg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKw5Oi70vdkN8sZ-I9_THkE3tCZu7pi3aSgg&usqp=CAU")]'>
  
  </div>*/}
        </div>

        <div className='text-gray-700 grid grid-rows-3 grid-flow-col gap-2 my-2'>
          <div className='border p-4 row-span-3'>
            <div className='flex justify-between items-center'>
              <h2 className='text-xl font-bold'>High School</h2>
              <div className='border rounded-full p-2'><GoArrowUpRight className='text-md' /></div>
            </div>
            <div className='my-2 flex w-full justify-center items-center flex-col'>
              <img className='w-[6rem]' src='./SMKAdw.png' />
              <h3 className='font-bold py-2'>SMKN 1 Adiwerna</h3>
            </div>
            <p className='text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?</p>
          </div>
          <div className='border rounded-md p-4 row-span-3'>
            <div className='flex justify-between items-center'>
              <h2 className='text-xl font-bold'>University</h2>
              <div className='border rounded-full p-2'><GoArrowUpRight className='text-md' /></div>
            </div>
            <div className='my-2 flex w-full justify-center items-center flex-col'>
              <img className='w-[6rem]' src='./UPI.png' />
              <h3 className='font-bold py-2'>Universitas Pendidikan Indonesia</h3>
            </div>
            <p className='text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?</p>
          </div>
          <div className='border p-2'>
            {/**Cnter element */}
            <div className='flex justify-center items-center h-full'>
              <h2 className='text-2xl font-bold'>Experience</h2>
            </div>
          </div>
          <div ref={myRef} className='h-[12rem] text-white'>
            <div className='z-10 flex justify-center items-center h-full flex-col'>
            <h3>Asisten Praktikum
              </h3>
              <h3>Jaringan Komputer</h3>
            <p>2020-2021</p>
            </div>
          </div>
          <div className='border p-2 text-white'>
            <h3>Google Developer School Club</h3>
            <p>2020-2021</p>
          </div>

        </div>


        <div className='flex gap-2'>
          <div className='w-1/2 border p-2'>
            <div className='flex'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKw5Oi70vdkN8sZ-I9_THkE3tCZu7pi3aSgg&usqp=CAU' className='w-[6rem] rounded-md' />
              <div className='flex flex-col justify-center ml-2'>
                <h1>Pengembang Front-End dan Back-End</h1>
                <h1 className='text-xl font-bold'>Azhar Arrozak</h1>
                <p className='text-sm'>Fullstack Engineer</p>
              </div>
            </div>
            <div>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero saepe similique ducimus eligendi itaque excepturi, numquam blanditiis voluptas a in alias consequatur perferendis odit veniam expedita soluta, magnam fuga temporibus.</p>
              <div className='flex'>
                <p>Keahlian: </p>
              </div>
            </div>
          </div>
          <div className='w-1/2 border'>
            <h1>Fullstack Engineer</h1>
          </div>
        </div>

        <div className='w-full border p-6 my-2 flex justify-center items-center text-2xl font-bold text-gray-700'>
          <h1>Projects</h1>
        </div>

        <div className='grid grid-rows-2 grid-flow-col gap-2 my-2'>
          <div className='row-span-2 border'>
            <h1>test</h1>
          </div>
          <div className='row-span-2 border'>
            <h1>test</h1>
          </div>
          <div className='row-span-2 border'>
            <h1>test</h1>
          </div>
          <div className='row-span-2 border'>
            <h1>test</h1>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
