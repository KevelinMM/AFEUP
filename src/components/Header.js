import { Navbar } from "flowbite-react";
import Image from "next/image";
export default function Header() {
  return (


     
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="AFEUP logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            AFEUP
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="#sobre">Sobre</Navbar.Link>
          <Navbar.Link href="/navbars">Fotos local</Navbar.Link>
          <Navbar.Link href="#agenda">Agenda</Navbar.Link>
          <Navbar.Link href="#contato">Contato</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      


   
  );
}
