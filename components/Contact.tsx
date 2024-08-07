import { MdContactEmergency } from "react-icons/md";
import React, { useState, ChangeEvent, FormEvent } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch("https://formspree.io/f/mvgprgqd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  };

  return (
    <section id="contact" className="relative">
      <div className="flex flex-col text-center items-center justify-center mt-5 py-7">
        <MdContactEmergency className="text-indigo-600 text-6xl mb-4" />
        <h1 className="dark:text-white text-indigo-600 text-4xl mb-4"> Contact Me! </h1>
        <p className="text-center dark:text-gray-200">
          You can contact me for any other information and I will be sure to respond at my earliest convenience
        </p>
      </div>
      <div className="container px-5 py-10 mx-auto justify-center flex flex-col">
        <div className="bg-gray-900 rounded-lg overflow-hidden p-10 flex items  ">
          <div className="bg-gray-900 w-full relative flex gap-6 justify-center items-center py-6 rounded ">
            <div className=" px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="text-white">
                Enugu, Nigeria
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 flex gap-12 justify-around items-center lg:mt-0">
              <div className="flex flex-col justify-start ">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <div className=''>
                  <a className="text-indigo-600 leading-relaxed">
                    nnamaninwanne@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs ">
                  PHONE
                </h2>
                <p className="leading-relaxed text-white">+234-810-402-6825</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="lg:w-[60%] flex flex-col items-center w-full justify-center mx-auto md:py-8 ">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 dark:text-white">
            Software engineering is like playing with toys. I love complex toys!
            Let's Play! or Do you have a full stack or Artificial intelligence project you're working on?
          </p>
          <div className="relative w-full mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
          </div>
          <div className="relative w-full mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative w-full mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 w-full py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
