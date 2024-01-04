import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import Navbar from "./components/Navbar";
import { FaLinkedinIn, FaInstagram, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          color: 0x434375,
          scale: 1.0,
          scaleMobile: 1.0,
          minHeight: 50.0,
          points: 20.0,
          maxDistance: 17.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="App">
      <header className="flex justify-center items-center py-10">
        <Navbar />
      </header>
      <main className="px-8">
        <div className="flex-col flex gap-2 sm:flex-row">
          <div className="sm:w-3/4 mb-2 w-full rounded-md p-4 text-gray-700 bg-gradient-to-r from-lime-100 from-10% via-green-400 green-30% to-emerald-200 to-90%">
            <h1 className="text-xl font-bold mb-4">
              Hello All, I'm Azhar Arrozak
            </h1>
            <p className="text-md mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              autem magnam saepe ad illum, odit ut reiciendis debitis neque
              velit ratione voluptas esse quasi rem vero explicabo in molestiae
              eveniet.
            </p>
            <div className="flex">
              <div className="rounded-full border mr-2 p-2 bg-gray-700">
                <FaLinkedinIn className="text-white" />
              </div>
              <div className="rounded-full border mr-2 p-2 bg-gray-700">
                <FaInstagram className="text-white" />
              </div>
              <div className="rounded-full border mr-2 p-2 bg-gray-700">
                <FaGithub className="text-white" />
              </div>
            </div>
          </div>
          <div className="sm:w-1/4 w-full">
            <img
              className="rounded-md"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKw5Oi70vdkN8sZ-I9_THkE3tCZu7pi3aSgg&usqp=CAU"
            />
          </div>
          {/*<div className='w-1/4 rounded-md bg-center bg-coverbg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKw5Oi70vdkN8sZ-I9_THkE3tCZu7pi3aSgg&usqp=CAU")]'>
  
  </div>*/}
        </div>

        <div className="text-gray-700 grid grid-rows-3 grid-cols-1 gap-2 my-2 sm:grid-cols-3">
          <div className="border rounded-md p-4 row-span-3">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">High School</h2>
              <Link to="http://smkn1adw.sch.id/fp/">
                <div className="border rounded-full p-2">
                  <GoArrowUpRight className="text-md" />
                </div>
              </Link>
            </div>
            <div className="my-2 flex w-full justify-center items-center flex-col">
              <img className="w-[6rem]" src="./SMKAdw.png" />
              <h3 className="font-bold py-2">SMKN 1 Adiwerna</h3>
            </div>
            <p className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos?
            </p>
          </div>
          <div className="border rounded-md p-4 row-span-3">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">University</h2>
              <Link to="https://www.upi.edu/">
                <div className="border rounded-full p-2">
                  <GoArrowUpRight className="text-md" />
                </div>
              </Link>
            </div>
            <div className="my-2 flex w-full justify-center items-center flex-col">
              <img className="w-[6rem]" src="./UPI.png" />
              <h3 className="font-bold py-2">
                Universitas Pendidikan Indonesia
              </h3>
            </div>
            <p className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos?
            </p>
          </div>
          <div className="rounded-md p-2 bg-blue-500 text-white ">
            {/**Cnter element */}
            <div className="flex justify-center items-center h-full">
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
          </div>

          <div className="rounded-md overflow-hidden">
            <div ref={myRef} className="h-[12rem] text-white font-bold">
              <div className="z-10 flex justify-center items-center h-full flex-col">
                <h3>Asisten Praktikum</h3>
                <h3>Jaringan Komputer</h3>
                <p className="italic">2020-2021</p>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-gray-600 text-white font-bold p-2 ">
            <div className="flex flex-col justify-center items-center h-full">
              <h3>Google Developer</h3>
              <h3>School Club</h3>
              <img src="./gdsc-logo.png" className="w-[6rem]" />
              <p className="italic">2020-2021</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 border p-2">
            <div className="flex">
              <img src="./dicoding.jpeg" className="w-[6rem] rounded-md" />
              <div className="flex flex-col justify-center ml-2">
                <h1 className="font-bold text-md">
                  Pengembang Front-End dan Back-End
                </h1>
                <h1 className="text-sm">Dicoding Indonesia</h1>
                <p className="text-sm">Januari 2023 - Juni 2023</p>
              </div>
            </div>
            <div>
              <p className="text-justify my-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                saepe similique ducimus eligendi itaque excepturi, numquam
                blanditiis voluptas a in alias consequatur perferendis odit
                veniam expedita soluta, magnam fuga temporibus.
              </p>
              <div className="flex items-center my-2">
                <p className="mr-2">Keahlian: </p>
                <div className="p-2 border rounded-full mr-2">
                  <FaHtml5 />
                </div>
                <div className="p-2 border rounded-full mr-2">
                  <FaCss3Alt />
                </div>
                <div className="p-2 border rounded-full mr-2">
                  <IoLogoJavascript />
                </div>
                <div className="p-2 border rounded-full mr-2">
                  <SiNextdotjs />
                </div>
                <div className="p-2 border rounded-full mr-2">
                  <FaBootstrap />
                </div>
              </div>

              <div className="flex w-full justify-end items-center">
                <div className="flex items-center rounded-full border py-2 px-4">
                  <p className="text-sm mr-[0.1rem]">Lihat Sertifikat</p>
                  <GoArrowUpRight />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 border p-2">
            <div className="flex">
              <img src="./goto.jpeg" className="w-[6rem] rounded-md" />
              <div className="flex flex-col justify-center ml-2">
                <h1 className="font-bold text-md">
                  Fullstack Engineer - Generasi Gigih 3.0
                </h1>
                <h1 className="text-sm">GoTo Impact Foundation</h1>
                <p className="text-sm">Juli 2023 - Desember 2023</p>
              </div>
            </div>
            <div>
              <p className="text-justify my-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                saepe similique ducimus eligendi itaque excepturi, numquam
                blanditiis voluptas a in alias consequatur perferendis odit
                veniam expedita soluta, magnam fuga temporibus.
              </p>
              <div className="flex items-center my-2">
                <p className="mr-2">Keahlian: </p>
                <div className="p-2 border rounded-full mr-2">
                  <SiMongodb />
                </div>
                <div className="p-2 border rounded-full mr-2">
                  <SiExpress />
                </div>
                <div className="p-2 border rounded-full mr-2">
                  <SiReact />
                </div>
                <div className="p-2 border rounded-full mr-2">
                  <SiNodedotjs />
                </div>
                <div className="p-2 border rounded-full mr-2">
                  <SiTailwindcss />
                </div>
              </div>

              <div className="flex w-full justify-end items-center">
                <div className="flex items-center rounded-full border px-4 py-2">
                  <p className="text-sm mr-[0.1rem]">Lihat Sertifikat</p>
                  <GoArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-yellow-300 rounded-md p-6 my-2 flex justify-center items-center text-2xl font-bold text-gray-700">
          <h1>Projects</h1>
        </div>

        <div className="grid grid-rows-2 grid-flow-col gap-2 my-2">
          <div className="row-span-2 border">
            <h1>test</h1>
          </div>
          <div className="row-span-2 border">
            <h1>test</h1>
          </div>
          <div className="row-span-2 border">
            <h1>test</h1>
          </div>
          <div className="row-span-2 border">
            <h1>test</h1>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
