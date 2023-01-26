import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    document.getElementById("navbar").hidden = true
  },[])
  return (
    <nav className="bg-slate-100  px-2 sm:px-4 py-1 rounded ">
      
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center ">
          <img
            src="../../LogoTransparente.png"
            className="h-12 md:h-14 mr-3 "
            alt="AFEUP Logo"
          />
        </a>
        <button
          type="button"
          className="  p-2 mr-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
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
        <div className="w-full md:block md:w-auto" id="navbar">
          <ul className="flex flex-col p-4 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
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
                Parceiros
              </a>
            </li>
    
          </ul>
        </div>
      </div>
    </nav>
  );
}
