import { useState } from "react";
import vector from "/assets/arrow2.png";
import searchIcon from "/assets/search-icon.png";
import option from "/assets/option.png";
import loveIcon from "/assets/love-icon.png";
import cartIcon from "/assets/cart.png";

export const Header = () => {
  // creating a list of navs links
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "About", href: "#" },
    { name: "Sign Up", href: "#" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const languages = ["English", "French", "Spanish", "German"];

  return (
    <main className="flex flex-col">
      <div
        className="text-white bg-black flex flex-row
       justify-between  items-center gap-3 p-5 text-[17px]  md:px-20"
      >
        <p className="text-[10px]">
          Summer Sale For All Swim Suits - OFF 50%!
          <a className="font-bold cursor-pointer list-none">
            <li>ShopNow</li>
          </a>
        </p>
        <div className="relative">
          <div
            className="flex items-center gap-[6px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="text-[14px]">{selectedLang}</p>
            <img
              src={vector}
              alt="Dropdown arrow"
              className="w-3 h-3 text-white"
            />
          </div>

          {isOpen && (
            <ul className="absolute mt-2 bg-black shadow-md border rounded text-sm z-10">
              {languages.map((lang) => (
                <li
                  key={lang}
                  onClick={() => {
                    setSelectedLang(lang);
                    setIsOpen(false);
                  }}
                  className="px-4  py-2 cursor-pointer"
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <section className="flex flex-row justify-between gap-3.5 p-2 md:px-20 md:border-1 md:py-5">
        <h2 className="md:text-2xl">Exclusive</h2>
        <div className="hidden md:flex">
          <nav className="flex flex-row items-center gap-3 md:flex-row md:gap-10 text-[20px]">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:underline">
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-row">
          <form className="flex items-center bg-input rounded-md px-3 py-2 hidden md:flex">
            <input
              type="text"
              placeholder="What are you looking for?"
              aria-label="Search"
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500 "
            />
            <button type="submit">
              <img
                src={searchIcon}
                alt="Search"
                className="w-4 h-4 ml-2 search-icon"
              />
            </button>
          </form>
          <div className="icon-box flex gap-2">
            <button type="submit">
              <img
                src={searchIcon}
                alt="Search"
                className="w-4 h-4 ml-2 md:hidden"
              />
            </button>
            <button type="submit">
              <img
                src={option}
                alt="Search"
                className="w-4 h-4 ml-2 md:hidden"
              />
            </button>
          </div>

          <div className="flex gap-3 items-center hidden md:flex">
            <img src={loveIcon} alt="Love Icon" className="w-5 h-5 hidden" />
            <img src={cartIcon} alt="Basket Icon" className="w-5 h-5 hidden" />
          </div>
        </div>
      </section>
    </main>
  );
};
