import { useState } from "react";
import option from "/assets/option.png";

const CathegorySideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & LifeStyle",
    "Medicine",
    "Sports & Outdoor",
    "Grocery & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="border-r border-r-text1 mb-3 md:w-[25%]">
      <div className="flex justify-between p-4">
        <h2 className="text-lg font-semibold md:text-2xl">Categories</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="">
          <img src={option} alt="toggle" className="w-4 h-4" />
        </button>
      </div>
      <nav
        className={`flex-col w-fit mx-3 gap-3 md:gap-10 ${
          isOpen ? "flex" : "hidden"
        }  nav-cathegory`}
      >
        {categories.map((cathegory, index) => (
          <li key={index} className="list-none">
            <a
              href="#"
              className="flex  justify-between gap-64 hover:bg-gray-100 text-[16px]"
            >
              {cathegory}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default CathegorySideBar;
