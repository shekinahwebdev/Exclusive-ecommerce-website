const CathegorySideBar = () => {
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
      <nav className="flex flex-col  w-[300px] mt-20">
        {categories.map((cathegory, index) => (
          <li key={index} className="list-none">
            <a
              href="#"
              className=" p-3 flex items-center gap-10  justify-between"
            >
              {cathegory}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[24px] w-[24px] "
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
