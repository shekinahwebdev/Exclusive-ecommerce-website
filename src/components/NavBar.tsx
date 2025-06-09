import vector from "/public/assets/Vector.png";
import searchIcon from "/public/assets/search-icon.png";
import loveIcon from "/public/assets/love-icon.png";
import cartIcon from "/public/assets/cart.png";

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
      <div className="text-center text-white bg-black p-4 flex justify-evenly items-center">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="pl-3 font-bold underline">ShopNow</span>
        </p>
        <div className="flex items-center-safe gap-3">
          <p className="">English</p>
          <img src={vector} alt="Vector" className="w-3 h-2" />
        </div>
      </div>

      <section className="border-b-1 border-b-[var(--color-secondary2)] flex justify-between items-center pl-[10rem] pr-[10rem] pt-10 pb-3">
        <h2 className="text-2xl font-bold">Exclusive</h2>
        <div>
          <nav className="flex items-center gap-7 hover:underline">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex gap-5">
          <form className="flex items-center-safe pr-7 bg-input rounded-sm">
            <input
              type="text"
              placeholder="What are you looking for?"
              aria-label="Search"
              className="px-8 border-none w-64 h-10 outline-none"
            />
            <img src={searchIcon} alt="Search Icon" className="w-5 h-5" />
          </form>

          <div className="flex items-center-safe gap-5">
            <img src={loveIcon} alt="Love Icon" />
            <img src={cartIcon} alt="Basket Icon" className="h-6" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default NavBar;
