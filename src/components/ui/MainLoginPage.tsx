import sideImage from "/assets/Side-Image.png";

export const MainLoginPage = () => {
  return (
    <main className="flex flex-row my-20">
      <div className="flex flex-col md:flex-row md:gap-50">
        <img src={sideImage} alt="Side Image" className="md:w-[1000px]" />
        <div className="flex flex-col md:justify-center gap-3 p-10">
          <h2 className="text-3xl md:text-4xl">Login to Exclusive</h2>
          <label className="">Enter your details below</label>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              aria-label="Email or Phone Number"
              className="p-2 outline:none border-b-1"
            />
            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
              className="p-2 outline:none border:none border-b-1"
            />
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-secondary2 text-white px-10 py-3 rounded"
              >
                Log In
              </button>
              <a href="#" className="text-sm text-secondary2 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
