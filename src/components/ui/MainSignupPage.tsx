import sideImage from "/assets/Side-Image.png";
import google from "/assets/Icon-Google.png";

export const MainSignupPage = () => {
  return (
    <main className="flex flex-row my-20">
      <div className="flex flex-col md:flex-row md:gap-50">
        <img src={sideImage} alt="Side Image" className="md:w-[1000px]" />
        <div className="flex flex-col md:justify-center gap-3 p-10">
          <h2 className="text-3xl md:text-4xl">Create an account</h2>
          <label className="">Enter your details below</label>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              aria-label="Name"
              className="p-2 outline:none border:none border-b-1"
            />
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
            <div className="flex flex-col gap-3.5">
              <button
                type="submit"
                className="bg-secondary2 text-white px-10 py-3 rounded"
              >
                Create Account
              </button>
              <button
                type="submit"
                className="border-1 text-text2 px-10 py-3 rounded text-center text-xl"
              >
                <img src={google} alt="Google Icon" className="inline mr-2" />
                Sign up with Google
              </button>
              <div className="text-center flex items-center justify-center gap-2">
                <p>Already have account?</p>
                <a href="#" className="text-sm text-text2 hover:underline">
                  Log in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
