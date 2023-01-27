import { Link } from "react-router-dom";
import ResponsiveContainer from "../Layout/ResponsiveContainer";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 text-white py-20 w-full">
      <ResponsiveContainer>
        <div className="container mx-auto flex flex-wrap justify-between items-start">
          <div className="w-full mb-10 md:w-1/3 text-center lg:mb-0">
            <h6 className="text-xl font-semibold">Company</h6>
            <ul className="mt-4">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a target="_blank" href="https://github.com/BenGaudry/sheetsasdb" className="text-gray-400 hover:text-white">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center mb-10 lg:mb-0">
            <h6 className="text-xl font-semibold">Resources</h6>
            <ul className="mt-4">
              <li className="mb-2">
                <Link to="/docs" className="text-gray-400 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h6 className="text-xl font-semibold">Legal</h6>
            <ul className="mt-4">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  );
}
