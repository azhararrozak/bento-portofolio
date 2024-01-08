import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import Navbar from "./components/Navbar";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import textContent from "./data/textContent";

function App() {
  const [language, setLanguage] = useState('indonesia')
  const [vantaEffect, setVantaEffect] = useState(null);
  const [active, setActive] = useState("home");
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          color: 0x434375,
          scale: 1.0,
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

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(id); // Set halaman yang aktif
    }
  };

  const handleChangeLanguage = () => {
    setLanguage(language === "english" ? "indonesia" : "english");
  }

  return (
    <div className="App">
      <Router>
        <div id="home">
          <header className="flex justify-center items-center py-10 sticky w-full top-0 bg-white z-20">
            <Navbar handleScroll={handleScroll} active={active} />
          </header>
          <main className="px-8">
            <div className="flex-col flex gap-2 sm:flex-row">
              <div className="sm:w-3/4 w-full rounded-md p-4 bg-center bg-cover bg-[url('../bg_intro.png')] text-white">
                <div className="flex justify-end items-center w-full">
                  <button onClick={handleChangeLanguage} className="border px-4 py-2 text-sm rounded-full flex items-center"><TfiReload className="mr-2" />{textContent.home[language].toggleButton}</button>
                </div>

                <h1 className="text-xl font-bold my-4">
                {textContent.home[language].title}
                </h1>
                <p className="text-md mb-6 text-justify">
                  {textContent.home[language].content}
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
                <img className="rounded-md w-full" src="./azhr.png" />
              </div>
            </div>

            <div
              id="about"
              className="text-white grid grid-rows-3 grid-cols-1 gap-2 my-2 sm:grid-cols-3"
            >
              <div className="bg-center bg-cover bg-[url('../bg-smk.png')] rounded-md p-4 row-span-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">{textContent.about[language].vocational.title}</h2>
                  <Link to="http://smkn1adw.sch.id/fp/">
                    <div className="border rounded-full p-2 hover:bg-white hover:text-gray-700">
                      <GoArrowUpRight className="text-md" />
                    </div>
                  </Link>
                </div>
                <div className="my-2 flex w-full justify-center items-center flex-col">
                  <div className="rounded-full bg-white ">
                    <img className="w-[6rem]" src="./SMKAdw.png" />
                  </div>

                  <h3 className="font-bold py-2">{textContent.about[language].vocational.name}</h3>
                </div>
                <p className="text-sm text-justify">
                  {textContent.about[language].vocational.content}
                </p>
              </div>
              <div className='bg-center bg-cover bg-[url("../bg-upi.png")] rounded-md p-4 row-span-3'>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">{textContent.about[language].university.title}</h2>
                  <Link to="https://www.upi.edu/">
                    <div className="border rounded-full p-2 hover:bg-white hover:text-gray-700">
                      <GoArrowUpRight className="text-md" />
                    </div>
                  </Link>
                </div>
                <div className="my-2 flex w-full justify-center items-center flex-col">
                  <img className="w-[6rem]" src="./UPI.png" />
                  <h3 className="font-bold text-sm py-2">
                    {textContent.about[language].university.name}
                  </h3>
                </div>
                <p className="text-sm text-justify">
                  {textContent.about[language].university.content}
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
                  <p className="italic">Member in 2021 - Now</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 flex-col sm:flex-row text-white">
              <div className="w-full sm:w-1/2 rounded-md bg-gradient-to-t from-indigo-950 to-purple-500 p-4">
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero saepe similique ducimus eligendi itaque excepturi,
                    numquam blanditiis voluptas a in alias consequatur
                    perferendis odit veniam expedita soluta, magnam fuga
                    temporibus.
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
              <div className="w-full sm:w-1/2 rounded-md bg-gradient-to-t from-indigo-950 to-green-500 p-4">
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero saepe similique ducimus eligendi itaque excepturi,
                    numquam blanditiis voluptas a in alias consequatur
                    perferendis odit veniam expedita soluta, magnam fuga
                    temporibus.
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

            <div
              id="project"
              className="w-full bg-pink-600 rounded-md p-6 my-2 flex justify-center items-center text-2xl font-bold text-white"
            >
              <h1>Projects</h1>
            </div>

            <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 my-2 text-white">
              <div className='row-span-2 rounded-md bg-cover bg-center bg-[url("../3.png")] h-[900px]'>
                <div className="w-full h-full items-end flex justify-end p-3">
                  <div className="flex items-center rounded-full border px-4 py-2">
                    <p className="text-sm mr-[0.1rem]">Lihat Website</p>
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
              <div className='row-span-2 rounded-md bg-cover bg-center bg-[url("../1.png")] h-[900px]'>
                <div className="w-full h-full items-end flex justify-end p-3">
                  <div className="flex items-center rounded-full border px-4 py-2">
                    <p className="text-sm mr-[0.1rem]">Lihat Website</p>
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
              <div className='row-span-2 rounded-md bg-cover bg-center bg-[url("../2.png")] h-[900px]'>
                <div className="w-full h-full items-end flex justify-end p-3">
                  <div className="flex  items-center rounded-full border px-4 py-2">
                    <p className="text-sm mr-[0.1rem]">Lihat Website</p>
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
              <div className='row-span-2 rounded-md bg-cover bg-center bg-[url("../4.png")] h-[900px]'>
                <div className="w-full h-full items-end flex justify-end p-3">
                  <div className="flex items-center rounded-full border px-4 py-2">
                    <p className="text-sm mr-[0.1rem]">Lihat Website</p>
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
            </div>

            <div id="contact" className="flex flex-col sm:flex-row gap-2 my-2">
              <div className="sm:w-1/3 w-full border flex flex-col justify-center items-start py-2 px-4 bg-yellow-500 rounded-md text-gray-800">
                <div className="flex h-full items-center ">
                  <h1 className="writing-vertical sm:text-3xl font-bold  uppercase mr-2 border-r-2 pr-3 border-gray-800 rounded-md">
                    Contact
                  </h1>
                  <div>
                    <img src="./contact.png" />
                  </div>
                </div>
              </div>

              <div className='sm:w-2/3 w-full bg-cover rounded-md bg-[url("../bg-contact.png")] p-8 '>
                <div className="p-4 text-white h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                  <h1 className="font-bold text-center text-xl">
                    Say Hi to Me
                  </h1>
                  <form>
                    <label htmlFor="name" className="block mb-2">
                      Nama:
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b text-white placeholder-gray-500"
                      placeholder="Masukkan teks di sini..."
                    />

                    <label htmlFor="email" className="block mb-2">
                      Email:
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b text-white placeholder-gray-500"
                      placeholder="Masukkan teks di sini..."
                    />

                    <label htmlFor="message" className="block mb-2">
                      Pesan:
                    </label>
                    <textarea
                      id="message"
                      className="w-full bg-transparent border rounded-md px-3 py-2 mb-4"
                      rows="4"
                      placeholder="Tulis Disini"
                    ></textarea>

                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 block"
                    >
                      Kirim
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
