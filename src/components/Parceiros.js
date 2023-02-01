import Image from "next/image";

export default function Parceiros() {
  return (
    <div
      id="parceiros"
      className=" bg-slate-200 bg-opacity-60 rounded-lg w-full pb-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 py-4 md:py-10 text-center px-5 items-center"
    >
      <div className="cursor-pointer hover:scale-105">
        <Image
          src={`/LogosParceiros/BelezzaVitalle.png`}
          alt="Logo BelezzaVitalle"
          width={130}
          height={70}
        />
      </div>

      <div className="cursor-pointer hover:scale-105">
        <Image
          src={`/LogosParceiros/Bullla.png`}
          alt="Logo Bullla"
          width={100}
          height={45}
        />
      </div>

      <div className="cursor-pointer hover:scale-105">
        <Image
          src={`/LogosParceiros/Camden.png`}
          alt="Logo Camden"
          width={80}
          height={60}
        />
      </div>

      <div className="cursor-pointer hover:scale-105">
        <Image
          src={`/LogosParceiros/COC.png`}
          alt="Logo COC"
          width={120}
          height={50}
        />
      </div>

      <div className="cursor-pointer hover:scale-105">
        <Image
          src={`/LogosParceiros/Liberto.png`}
          alt="Logo Liberto"
          width={80}
          height={50}
        />
      </div>

      <div className="cursor-pointer hover:scale-105">
        <Image
          src={`/LogosParceiros/PostoUniversitario.png`}
          alt="Logo PostoUniversitario"
          width={120}
          height={55}
        />
      </div>

      <div className="cursor-pointer group hover:scale-105">
        <Image
          src={`/LogosParceiros/TopWay.png`}
          alt="Logo Liberto"
          width={100}
          height={40}
        />
        <br></br>

        <div className="mx-auto w-full absolute">
          <a className="group-hover:block hidden">15% Sócios e Dependentes</a>
        </div>
      </div>

      <div className="cursor-pointer group hover:scale-105">
        <Image
          src={`/LogosParceiros/Rockfeller.png`}
          alt="Logo Bullla"
          width={160}
          height={55}
        />
        <br></br>
        <div className="mx-auto w-full absolute">
          <a className="group-hover:block hidden">35% Sócios e Dependentes</a>
        </div>
      </div>
      <div className="cursor-pointer group hover:scale-105">
        <Image
          src={`/LogosParceiros/SantaRosa.png`}
          alt="Logo Camden"
          width={100}
          height={60}
        />
        <br></br>
        <div className="mx-auto w-full absolute">
          <a className="group-hover:block hidden">15% Sócios e Dependentes</a>
        </div>
      </div>
      <div className="cursor-pointer group hover:scale-105">
        <Image
          src={`/LogosParceiros/SesiSenaiIEL.png`}
          alt="Logo COC"
          width={100}
          height={70}
        />
        <br></br>
        <div className="mx-auto w-full absolute">
          <a className="group-hover:block hidden">8% Sócios e Dependentes</a>
        </div>
      </div>

      <div className="cursor-pointer hover:scale-105">
        <Image
          src={`/LogosParceiros/Uniplac.png`}
          alt="Logo PostoUniversitario"
          width={80}
          height={70}
        />
      </div>
      <div className="cursor-pointer hover:scale-105">
        <Image
          src={`/LogosParceiros/VidaeSom.png`}
          alt="Logo PostoUniversitario"
          width={150}
          height={80}
        />
      </div>
      <div className="cursor-pointer hover:scale-105">
        <Image
          src={`/LogosParceiros/Recrearr.png`}
          alt="Logo BelezzaVitalle"
          width={100}
          height={90}
        />
      </div>


      <div className="mt-8 cursor-pointer group hover:scale-105 text-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/12njiA4Oj77fzYXW27SSHnq7RN9A-vVj2/view?usp=share_link"
        >
          Pladisa
        </a>
        <br></br>

        <div className="mx-auto w-full absolute">
          <p className="group-hover:block hidden">Saiba mais</p>
        </div>
      </div>

      <div className="mt-8 cursor-pointer group hover:scale-105 text-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1wVYZuzv8OkkRh6RC1GQA5lRF6LZGp6dG/view?usp=share_link"
        >
         Acquazero
        </a>
        <br></br>

        <div className="mx-auto w-full absolute">
          <a className="group-hover:block hidden">Saiba mais</a>
        </div>
      </div>
    </div>
  );
}
