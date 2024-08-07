import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center  p-16 md:p-12">
      <div className="text-sm dark:text-white">
        <p>Copyright &copy; 2024 by CodeUchay | All Rights Reserved. </p>
      </div>
      <div className="inline-flex justify-center border-red items-center p-2 hover:bg-teal-600  dark:bg-gray-500 rounded-lg transition duration-500 ease-in-out">
        <a Link href="#">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}
