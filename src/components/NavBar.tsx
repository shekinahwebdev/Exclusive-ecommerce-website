import vector from "/assets/Vector.png";
import searchIcon from "/assets/search-icon.png";
import loveIcon from "/assets/love-icon.png";
import cartIcon from "/assets/cart.png";

const NavBar = () => {
  // creating a list of navs links
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "About", href: "#" },
    { name: "Sign Up", href: "#" },
  ];

  return (
    <main>
      <div className="text-center text-white bg-black p-2 md:p-4 flex flex-col md:flex-row justify-center md:justify-evenly items-center text-sm md:text-base gap-2">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="pl-1 font-bold underline cursor-pointer">
            ShopNow
          </span>
        </p>
        <div className="flex items-center gap-2">
          <p className="">English</p>
          <img src={vector} alt="Vector" className="w-3 h-2" />
        </div>
      </div>

      <section className="border-b-1 border-b-secondary2 flex flex-col md:flex-row md:justify-between md:items-center items-center md:px-30 text-center pt-6 pb-3 gap-4 md:gap-0 center-at-855">
        <h2 className="text-[20px]  md:text-3xl font-bold text-center md:text-left">
          Exclusive
        </h2>

        <div>
          <nav className="flex flex-row items-center gap-3 md:flex-row md:gap-6 text-[20px]">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:underline">
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-row md:flex-row items-center gap-5 mt-4 md:mt-0  md:w-auto center-on-885 form-wrapper-885">
          <form className="flex items-center bg-input rounded-md w-full sm:w-[90%] md:w-64 px-2 py-1 max-w-full transition-all duration-300">
            <input
              type="text"
              placeholder="What are you looking for?"
              aria-label="Search"
              className="w-full px-2 py-1 bg-transparent outline-none text-sm sm:text-base"
            />
            <img
              src={searchIcon}
              alt="Search Icon"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </form>

          <div className="flex gap-4 items-center">
            <img
              src={loveIcon}
              alt="Love Icon"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <img
              src={cartIcon}
              alt="Basket Icon"
              className="w-4 h-4 sm:w-6 sm:h-6"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default NavBar;
