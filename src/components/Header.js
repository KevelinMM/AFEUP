import { useEffect, useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`bg-slate-50 px-2 sm:px-4 md:py-3 ${
        navbar
          ? "w-52 h-screen fixed z-50 top-0 right-0 bg-white bg-opacity-95 flex flex-col md:flex-row"
          : ""
      }`}
    >
      <div className="md:flex md:justify-between">
      
          <a href="#" className="hidden md:flex items-center">
            <img
              src="../../LogoTransparente.png"
              className="h-12 mr-3 "
              alt="AFEUP Logo"
            />
          </a>
          <button
            className="md:hidden rounded outline-none fixed right-5 z-20 p-3"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            )}
          </button>
          <div className="hidden  justify-between w-full">
            <a href="#" className="flex items-center">
              <img
                src="../../LogoTransparente.png"
                className="h-8 md:h-12 mr-3 "
                alt="AFEUP Logo"
              />
            </a>
            <button
              type="button"
              className="bg-blue-200 mr-3 text-sm text-gray-500  md:hidden  "
              onClick={(e) =>
                (document.getElementById("navbar").hidden =
                  !document.getElementById("navbar").hidden)
              }
            >
              <svg
                className="w-6 h-6 "
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`w-full md:block md:w-auto " ${
              navbar ? "block" : "hidden"
            }`}
            id="navbar"
          >
            <ul className="flex flex-col p-4 mt-32  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  text-end justify-end">
              <li>
                <a
                  href="#sobre"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#fotos"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Fotos
                </a>
              </li>
              <li>
                <a
                  href="#agenda"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Agenda
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#parceiros"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Convênios
                </a>
              </li>
            </ul>
          </div>
      
      </div>
    </nav>
  );
}
