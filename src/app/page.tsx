"use client"
import { useState } from "react";
import Button from "./components/Button";

export default function Home() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = ():void => {
    setIsClick(!isClick)
  }

  return (
   <main>
    <nav className="bg-zinc-900/75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-white text-2xl">
                <img 
                  className="w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1559582930-bb01987cf4dd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="" />
              </div>
            </div>
            <h3 className="mx-8 text-xl font-semibold">@SatroFjar</h3>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 text-lg">About</a>
              <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 text-lg">Projects</a>
              <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 text-lg">Skills</a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}>
                {isClick ? 
                  <svg  
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"

                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"/>
                  </svg>:
                  <svg  
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"

                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"/>
                  </svg>}
            </button>
          </div>

        </div>
      </div>
      {isClick && 
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">About</a>
              <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">Projects</a>
              <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">Skills</a>
          </div>
        </div>}
    </nav>

    <section id="About" className="my-10">
        <div className="bg-gradient-to-b from-zinc-900 w-1/2 px-14 pt-10 mx-auto rounded-lg ring-1 ring-zinc-900">
          <h2 className="text-white text-4xl">Satrio Fajar</h2>
          <p className="w-9/12 mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          <Button buttonText="Contact SatrioFjar" customClass="my-10" />
        </div>
    </section>

    <section id="Projects" className="my-10">
        <h3 className="mx-auto w-1/2 mb-5 mt-20 font-extralight text-zinc-400 font-light">PROJECTS</h3>
        <div className="bg-gradient-to-b from-zinc-900 w-1/2 px-14 pt-5 mx-auto rounded-lg ring-1 ring-zinc-900">
          <h4 className="text-2xl">Wirabasa.com</h4>
        </div>
    </section>

    <section id="GetInTouch" className="py-10">
      <h3 className="mx-auto w-1/2 mb-5 mt-20 font-extralight text-zinc-400 font-light">Get in touch</h3>
      <div className="w-1/2 mx-auto">
        <Button buttonText="Github" customClass="my-2" />
        <Button buttonText="LinkedIn" customClass="my-2" />
      </div>
    </section>
   </main>
  )
}
