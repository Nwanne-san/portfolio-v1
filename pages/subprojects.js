import React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import web1 from "../images/app1.jpg";
import web2 from "../images/app2.jpg";
import web3 from "../images/app3.jpg";
import web4 from "../images/app4.jpg";


export default function Subprojects() {
  

  return (
    <div className="mx-10 py-10">
      <Link href="/">
        <a className="text-teal-600 text-2xl underline mb-4 py-1 flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Home
        </a>
      </Link>
      <div className="flex flex-col text-center items-center justify-center ">
        {/* Add your subproject content here */}
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          {/** Trivia */}
          <a
            href="https://trivia-app-cyan.vercel.app"
            className="basis-1/3 flex-1  text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
          >
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"60%"}
              layout="responsive"
              alt="Portfolio Image"
              src={web2}
            />
            <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
              <p className="font-bold"> Trivia App </p>
              <span>HTML, CSS, JavaScript</span>
            </div>
          </a>
           {/** To-do List App Typescript*/}
        <a
          href="https://to-do-list-mauve-ten.vercel.app"
          target="_blank" rel="noopener noreferrer"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
         >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web9}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Ol'Task (To-do List App) </p>
            <span> Typescript.js, Tailwind CSS </span>
          </div>
        </a>
          {/** Infinity */}
          <a
          href="https://infinity-five-snowy.vercel.app"
          target="_blank" rel="noopener noreferrer"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web8}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold">
              {" "}
              Infinity Tech - Tech Product Landing Page{" "}
            </p>
            <span>React.js, Tailwind CSS</span>
          </div>
        </a>
          {/** To-do List App */}
          <a
            href="https://todo-list-app-uche.vercel.app"
            className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
          >
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"60%"}
              layout="responsive"
              alt="Portfolio Image"
              src={web1}
            />
            <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
              <p className="font-bold"> To-do List App </p>
              <span>HTML, CSS, JavaScript</span>
            </div>
          </a>
             
          {/** Event Page */}
          <a
            href="https://event-project-esig.vercel.app"
            className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
          >
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"60%"}
              layout="responsive"
              alt="Portfolio Image"
              src={web3}
            />
            <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
              <p className="font-bold"> Event Page </p>
              <span> HTML, CSS, JavaScript, PHP, MYSQL </span>
            </div>
          </a>
          {/** Ecommerce Dashboard */}
          <a
            href="https://chefkim-admin.vercel.app"
            className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
          >
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"60%"}
              layout="responsive"
              alt="Portfolio Image"
              src={web7}
            />
            <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
              <p className="font-bold"> Ecommerce Admin Page </p>
              <span> React.js, Firebase, Axios, Express, REST </span>
            </div>
          </a>
          {/** Chef Kim Restaurant */}
          <a
            href="https://chefkimkitchen.vercel.app"
            className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
          >
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"60%"}
              layout="responsive"
              alt="Portfolio Image"
              src={web10}
            />
            <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
              <p className="font-bold"> Chef Kim Restaurant </p>
              <span> React.js, Tailwind CSS </span>
            </div>
          </a>
          {/** Calculator */}
          <a
            href="https://calculator-delta-roan.vercel.app"
            className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
          >
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"60%"}
              layout="responsive"
              alt="Portfolio Image"
              src={web4}
            />
            <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
              <p className="font-bold"> Calculator </p>
              <span> HTML, CSS, JavaScript </span>
            </div>
          </a>
           {/** Place Holder */}
        <a
          href="https://github.com/codeuchay"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            alt="Portfolio Image"
            src={web11}
          />
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Github  </p>
            <span>  </span>
          </div>
        </a>
        
        </div>
        {/* Git link */}
        <a
          href="https://github.com/codeuchay"
          className="text-teal-600 text-xl underline mb-4 py-1 cursor-pointer dark:text-white flex items-center"
        >
          {" "}
          Goto Github
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-5 ml-1 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
