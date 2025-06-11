import { useState } from "react";

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
    <div className="border-r border-r-text1">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold">Categories</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="">
          ☰
        </button>
      </div>
      <nav
        className={`flex-col w-full  ${
          isOpen ? "flex" : "hidden"
        }  nav-cathegory`}
      >
        {categories.map((cathegory, index) => (
          <li key={index} className="list-none">
            <a
              href="#"
              className="flex items-center justify-between hover:bg-gray-100 text-[16px]"
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
