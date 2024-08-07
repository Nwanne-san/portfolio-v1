import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevMode) => !prevMode);
  }, []);
  useEffect(() => {
    const body = document.querySelector("body");
    body.className = darkMode ? "" : "dark";
  }, [darkMode]);

  
  return (
    <div className={darkMode ? "" : "dark"}>
      <Head>
        <title>Nwanne Nnamani</title>
        <meta name="description" content="Frontend Web Developer" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 ">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} navOpen={navOpen} setNavOpen={setNavOpen} />
        <Skills />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
