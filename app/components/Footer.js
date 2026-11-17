
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white px-4 py-4">

      <div className="container mx-auto flex min-h-[7vh] flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-1">

        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Linkly. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;
