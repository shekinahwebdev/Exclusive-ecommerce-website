import sendIcon from "/assets/icon-send.png";
import qrCode from "/assets/Qr Code.png";
import appStore from "/assets/download-appstore.png";
import googlePlay from "/assets/google-play-logo.png";
import facebookIcon from "/assets/facebook.png";
import twitterIcon from "/assets/twitter.png";
import instagramIcon from "/assets/instagram.png";
import linkedInIcon from "/assets/linkedIn.png";
export const LoginPageFooter = () => {
  const links = [
    { name: "My Account", href: "#" },
    { name: "Login / Register", href: "#" },
    { name: "Cart", href: "#" },
    { name: "Wishlist", href: "#" },
    { name: "Shop", href: "#" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  const socialIcons = [
    { name: facebookIcon, href: "#" },
    { name: twitterIcon, herf: "#" },
    { name: instagramIcon, href: "#" },
    { name: linkedInIcon, href: "#" },
  ];
  return (
    <section className="bg-text2 text-text pl-4 py-10 flex flex-col md:p-30 md:flex md:flex-row  md:justify-evenly md:gap-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Exclusive</h1>
        <p className="text-xl">Subscribe</p>
        <p className="text-[16px]">Get 10% off your first order</p>
        <form className="flex items-center bg-black border border-white rounded-[4px] px-4 py-3 w-[217px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400 placeholder:text-[16px] w-[130px]"
          />
          <button type="submit" className="">
            <img src={sendIcon} alt="Send Icon" className="w-6 h-6" />
          </button>
        </form>
      </div>

      <div className="mt-10 flex flex-col gap-4 md:mt-0 md:gap-6">
        <h1 className="text-xl md:text-2xl">Support</h1>
        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>

      <div className="flex flex-col gap-2 mt-10 ml-10 md:ml-0 md:mt-0">
        <h1 className="text-2xl">Account</h1>
        <ul className="list-none flex flex-col gap-4">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-2 mt-10 ml-10 md:mt-0">
        <h1 className="text-2xl">Quick Link</h1>
        <ul className="list-none flex flex-col gap-4">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 md:mt-0">
        <h1 className="text-2xl mb-5">Download App</h1>
        <span className="text-text1">Save $3 with App New User Only</span>
        <div className="flex gap-2 mt-2">
          <img src={qrCode} alt="Qr-Code" />
          <div className="flex flex-col gap-2.5">
            <img src={googlePlay} alt="google-play" />
            <img src={appStore} alt="app-store" />
          </div>
        </div>
        <div className="mt-5">
          <ul className="list-none flex gap-3">
            {socialIcons.map((icon, index) => (
              <li key={index}>
                <a href={icon.href}>
                  <img
                    src={icon.name}
                    alt=""
                    className="w-6 h-6 inline-block mr-2"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
