import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Effect to apply the theme to the document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Dark/Light Mode Toggle Handler
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav
      className={`${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary dark:bg-gray-900`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Anshu Raj &nbsp;
            <span className="sm:block hidden">| Full-stack Developer</span>
          </p>
        </Link>

        {/* Desktop Navbar */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary dark:text-gray-400'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Dark/Light Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-white dark:text-gray-400 transition duration-300"
          aria-label="Toggle Dark/Light Mode"
        >
          {theme === 'dark' ? (
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12,4.5a7.5,7.5,0,1,0,7.5,7.5A7.51,7.51,0,0,0,12,4.5Zm0,13a5.5,5.5,0,1,1,5.5-5.5A5.51,5.51,0,0,1,12,17.5Z" />
            </svg>
          )}
        </button>

        {/* Mobile Navbar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? 'hidden' : 'flex'}
            p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
            z-10 rounded-xl dark:bg-gray-800`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary dark:text-gray-400'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
