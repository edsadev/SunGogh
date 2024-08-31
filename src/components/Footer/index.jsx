import Logo from "@/assets/imgs/logo.png";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#20292f] text-gray-200 px-6 md:px-12 pt-12 md:pt-24 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-between text-center md:text-left">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 ">
            <img src={Logo} alt="Logo" className="h-24 mx-auto md:mx-0" />
            <p className="mt-4 text-gray-300 font-bold">
              Let's build a Meme Art community together, inspired by the spirit
              of Van Gogh!
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold text-lg text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul>
              <li className="mb-2">
                <a href="#about" className="hover:text-gray-300">
                  Art
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="hover:text-gray-300">
                  Meme Art
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-gray-300">
                  CryptoCool
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="font-bold text-lg text-white mb-4">Follow Us</h3>
            <ul className="flex justify-center md:justify-start gap-4">
              <li>
                <a
                  href="https://t.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f4bd4c] transition-colors"
                >
                  <FaTelegram size={"2em"} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f4bd4c] transition-colors"
                >
                  <FaSquareXTwitter size={"2em"} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-12 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} CryptoCool. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
