import { MdContactEmergency } from "react-icons/md";
import React, { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mvgprgqd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success("Message sent!",{ style: {backgroundColor: 'black', color: 'white', padding: '20px'}, duration: 4000});
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <Toaster position="top-right" />
      <div className="flex flex-col text-center items-center justify-center mt-5 py-7">
        <MdContactEmergency className="text-indigo-600 text-6xl mb-4" />
        <h1 className="dark:text-white text-indigo-600 text-4xl mb-4"> Contact Me! </h1>
        <p className="text-center dark:text-gray-200">
          You can contact me for any other information and I will be sure to respond at my earliest convenience
        </p>
      </div>
      <div className="container px-5 py-4 sm:py-10 mx-auto justify-center flex flex-col">
        <div className="bg-gray-900 rounded-lg overflow-hidden sm:p-10 flex items  ">
          <div className="bg-gray-900 w-full relative flex md:flex-row flex-col sm:gap-6 justify-center items-center py-6 rounded ">
            <div className=" px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="text-white">
                Enugu, Nigeria
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 flex sm:flex-row flex-col sm:gap-12 justify-around items-center lg:mt-0">
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
            className="text-white bg-indigo-500 border-0 w-full py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
