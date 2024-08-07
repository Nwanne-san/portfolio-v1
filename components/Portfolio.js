import { SiPolymerproject } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import web1 from "../images/app1.jpg";
import web2 from "../images/app2.jpg";
import web3 from "../images/app3.jpg";
import web4 from "../images/app4.jpg";
// import web0 from "../images/app0.png";
// import web5 from "../images/app16.JPG";
// import web8 from "../images/app14.jpg";
// import web9 from "../images/app15.jpg";
// import web12 from "../images/app11.png";
// import web13 from "../images/app12.png";

export default function Portfolio() {
  return (
    <section className="flex flex-col text-center items-center justify-center">
      <div className="flex flex-col text-center items-center justify-center mt-10 py-10">
        <SiPolymerproject className="text-teal-600 text-6xl mb-4" />
        <h3 className="text-teal-600 text-4xl mb-4 py-1 dark:text-white ">
          Portfolio
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          This is a list of my personal web projects, they contain <span className="text-teal-500">dynamic features</span> and are <span className="text-teal-500">mobile responsive</span>. My professional projects within my previous jobs are non-public. You
          can find projects on other personal applications on my
          <a href="https://github.com/Nwanne-san" className="text-teal-500">
            {" "}
            Github{" "}
          </a>
          for example{" "}
          <span className="text-teal-500">
            {" "}
           Web Applications, Mobile Applications,  Machine Learning Projects etc.{" "}
          </span>
          I work daily on new projects so feel free to contact me if you want a
          collaboration. &#128578;
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {/** Portfolio App */}
        <a
          href="https://fire-dashboard-rho.vercel.app"
          target="_blank" rel="noopener noreferrer"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
        >
          {/* <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"60%"}
            layout="responsive"
            src={web5}
            alt="Portfolio Image"
          /> */}
          <div className="bottom-0 left-0 right-0 px-4 py-2 text-center">
            <p className="font-bold"> Admin Dashboard Mock Up</p>
            <span>JavaScript, React.js, Tailwind CSS</span>
          </div>
        </a>
        {/** Tastyy */}
        <a
          href="https://tasty-rho.vercel.app/"
          target="_blank" rel="noopener noreferrer"
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
            <p className="font-bold"> Tastyy - E-commerce Restaurant App </p>
            <span> JavaScript, React.js, Tailwind CSS</span>
          </div>
        </a>
        {/** Eshoes */}
        <a
          href="https://eshoes.com.ng"
          target="_blank" rel="noopener noreferrer"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105"
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
            <p className="font-bold"> Eshoes - Shoe E-commerce Store</p>
            <span>Wordpress, HTML, CSS, PHP, SQL</span>
          </div>
        </a>
        {/** Learn React */}
        <a
          href="https://reactguy.vercel.app"
          target="_blank" rel="noopener noreferrer"
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
            <p className="font-bold">
              {" "}
              React Guy - E-Learning Business Page
            </p>
            <span>JavaScript, React.js, Tailwind CSS, Email.js </span>
          </div>
        </a>
        {/** CodeRage */}
        <a
          href="https://code-rage-blog.vercel.app"
          target="_blank" rel="noopener noreferrer"
          className="basis-1/3 flex-1 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-600 transition duration-500 ease-in-out hover:scale-105 hover:text-white"
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
            <p className="font-bold"> CodeRage - Tech Blog </p>
            <span>
              React.js, Node.js, Tailwind.css, Express.js, JWT, CORS, MongoDB,
              bycrypt, multer
            </span>
          </div>
        </a>
        {/** Host Cat */}
        
        
        
      </div>
      <Link href="/">
        <a className="text-teal-600 text-xl underline mb-4 py-1 dark:text-white flex items-center">
          View More Projects{" "}
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
      </Link>
    </section>
  );
}
