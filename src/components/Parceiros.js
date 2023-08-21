import Image from "next/image";

export default function Parceiros() {
  return (
    <>
      {" "}
      <div
        id="parceiros"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-10 lg:py-16 text-center items-center bg-[#d7e3f06c] mt-10 gap-4"
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            className="cursor-pointer group hover:scale-105 p-2 "
          >
            <a href={partner.link} target="_blank" rel="noreferrer">
              <div className="">
                <Image
                  src={`/LogosParceiros/${partner.image}`}
                  alt={`Logo ${partner.name}`}
                  width={partner.width}
                  height={partner.height}
                />
              </div>

              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-white text-center">{partner.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>{" "}
    </>
  );
}

// Define your partner data in an array
const partners = [
  {
    name: "Acquazero",
    image: "acquazero.png",
    width: 200,
    height: 80,
    link: "https://drive.google.com/file/d/1MMcrmAyx-CS5JRdEp0ikVv4AIrw2_H19/view", // Add the link
    description: "Acquazero. Clique para saber mais.",
  },
  {
    name: "Bullla",
    image: "Bullla.png",
    width: 120,
    height: 45,
    link: "#",
    description: "Cartão de crédito com desconto em folha.",
  },
  {
    name: "Camden",
    image: "Camden.png",
    width: 80,
    height: 60,
    link: "https://www.camden.com.br/",
    description: "15% de desconto",
  },

  {
    name: "COC",
    image: "COC.png",
    width: 120,
    height: 50,
    link: "https://coclages.com.br/",
    description: "20% de desconto",
  },
  {
    name: "Christopher Coberllini Cirurgião Dentista",
    image: "ChristopherCorbellini.png",
    width: 100,
    height: 80,
    link: "https://drive.google.com/file/d/1G9ZkI_hfpJSa7iBxbIzh2KOi5B-gS0rD/view?usp=share_link", // Add the link
    description: "Christopher Coberllini Cirurgião Dentista. Clique para saber mais.",
  },
  // Add other partners here
  {
    name: "Conserlex",
    image: "Conserlex.png",
    width: 90,
    height: 90,
    link: "#", // Add the link
    description: "Desconto na declaração do imposto de renda. (49) 3289-2700",
  },
  {
    name: "Pladisa",
    image: "pladisa.png",
    width: 160,
    height: 100,
    link: "https://drive.google.com/file/d/1rbKouYVYsl4v2lyA30a_qy9jJ1qJyCg0/view", // Add the link
    description: " Clique para saber mais.",
  },
  {
    name: " Defende Proteção Veicular",
    image: "defend.png",
    width: 100,
    height: 100,
    link: " https://drive.google.com/file/d/1oUnwO01gz-Mz62ij0_AHt6cMaN0Zx49J/view?usp=sharing", // Add the link
    description: "Clique para saber mais.",
  },
  {
    name: "Digimax",
    image: "Digimax.jpg",
    width: 90,
    height: 90,
    link: "#", // Add the link
    description:
      "Descontos exclusivos nos exames para funcionários e familiares, solicitar desconto com a AFEUP.",
  },
  {
    name: "Estar bem Benefícios de Saúde",
    image: "estarbem.png",
    width: 130,
    height: 60,
    link: "https://drive.google.com/file/d/1uKndIFcwzT1qnHtdsf9xL6aJuWctV_zU/view?usp=sharing", // Add the link
    description: "Estar bem Benefícios de Saúde. Clique para saber mais.",
  },
  {
    name: "Posto Universitario",
    image: "PostoUniversitario.png",
    width: 130,
    height: 90,
    link: "#", // Add the link
    description: "",
  },
  {
    name: "Fresh Start Higienização",
    image: "FreshStarthigienização.png",
    width: 90,
    height: 90,
    link: "#", // Add the link
    description:
      "Fresh Start Higienização: Desconto de 15% para sócios e dependentes - (49) 99955-1041",
  },
  {
    name: "KNN Idiomas",
    image: "KNNIdiomas.jpg",
    width: 90,
    height: 90,
    link: "https://www.knnidiomas.com.br/", // Add the link
    description:
      "40% para sócios e dependentes no curso de Inglês - (49) 3018-5755",
  },
  {
    name: "Liberto",
    image: "Liberto.png",
    width: 90,
    height: 70,
    link: "#", // Add the link
    description: "20% de desconto, Contato: (49) 991933934",
  },
  {
    name: "Oral Exclusive",
    image: "OralExclusive.png",
    width: 90,
    height: 90,
    link: "https://www.oralexclusive.com.br/home", // Add the link
    description: "10 a 20% para sócios e dependentes - (49) 3222-1895",
  },

  {
    name: "TopWay",
    image: "TopWay.png",
    width: 130,
    height: 60,
    link: "#", // Add the link
    description: "Desconto de 15% Contato: (49) 32250949",
  },
  {
    name: "Rockfeller",
    image: "Rockfeller.png",
    width: 140,
    height: 50,
    link: "https://www.rockfeller.com.br/escola/lages", // Add the link
    description: "Desconto de 35%",
  },
  {
    name: "Santa Rosa",
    image: "SantaRosa.png",
    width: 130,
    height: 90,
    link: "#", // Add the link
    description: "Desconto de 15% Contato: (49) 32220391",
  },
  {
    name: "Sesi Senai IEL",
    image: "SesiSenaiIEL.png",
    width: 100,
    height: 90,
    link: "#", // Add the link
    description: "8% Sócios e Dependentes",
  },
  {
    name: "Uniplac",
    image: "Uniplac.png",
    width: 90,
    height: 90,
    link: "https://www.uniplaclages.edu.br", // Add the link
    description: " Desconto de 30% nos mestrados",
  },
  {
    name: "Vida e Som",
    image: "VidaeSom.png",
    width: 130,
    height: 90,
    link: "#", // Add the link
    description:
      " 20% de desconto nos aparelhos auditivos  Contato: (49) 32246689",
  },

  {
    name: "Recrearr",
    image: "Recrearr.png",
    width: 100,
    height: 100,
    link: "https://www.melhorescola.com.br/escola/centro-de-educacao-infantil-recrear", // Add the link
    description:
      " 20% para turmas de Berçário e Maternal 1 e 2; 15% turma de recreação.",
  },

  {
    name: "Plano de Saúde Uniodonto",
    image: "uniodonto.png",
    width: 90,
    height: 90,
    link: "https://drive.google.com/file/d/1XDO71_gCviJ5VZvCkxIHiQIAlZjugIcY/view", // Add the link
    description: "Clique para saber mais.",
  },

  // Add other partners here
  // ...
];

/* import Image from "next/image";

export default function Parceiros() {
  return (
    <>
      <div
        id="parceiros"
        className="   grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-10 lg:py-16 text-center items-center bg-[#d7e3f06c] mt-10"
      >
        <div classname="">
          <Image
            src={`/LogosParceiros/Bullla.png`}
            alt="Logo Bullla"
            width={100}
            height={45}
          />
          <div className="mx-auto w-full absolute z-30">
            <p className="group-hover:block hidden bg-gray-100 rounded shadow">
              Cartão de crédito com desconto em folha.
            </p>
          </div>
        </div>

        <div classname="">
          <a href="https://www.camden.com.br/" target="_blank" rel="noreferrer">
            <Image
              src={`/LogosParceiros/Camden.png`}
              alt="Logo Camden"
              width={80}
              height={60}
            />
            <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
              <p className="group-hover:block hidden">15% de desconto</p>
            </div>
          </a>
        </div>

        <div classname="">
          <a href="https://coclages.com.br/" target="_blank" rel="noreferrer">
            <Image
              src={`/LogosParceiros/COC.png`}
              alt="Logo COC"
              width={120}
              height={50}
            />
            <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
              <p className="group-hover:block hidden">20% de desconto</p>
            </div>
          </a>
        </div>

        <div classname="">
          <Image
            src={`/LogosParceiros/Conserlex.png`}
            alt="Logo conserlex"
            width={90}
            height={90}
          />
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">
              Desconto na declaração do imposto de renda. (49) 3289-2700
            </p>
          </div>
        </div>

        <div classname="">
          <Image
            src={`/LogosParceiros/Digimax.jpg`}
            alt="Logo Digimax"
            width={90}
            height={90}
          />
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">
              Descontos exclusivos nos exames para funcionários e familiares,
              solicitar desconto com a AFEUP.
            </p>
          </div>
        </div>

        <div classname="">
          <Image
            src={`/LogosParceiros/FreshStarthigienização.png`}
            alt="Logo Fresh Start Higienização"
            width={130}
            height={90}
          />
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">
              Desconto de 15% para sócios e dependentes - (49) 99955-1041
            </p>
          </div>
        </div>

        <div className="cursor-pointer group hover:scale-105 group">
          <a
            href="https://www.knnidiomas.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={`/LogosParceiros/KNNIdiomas.jpg`}
              alt="KNN Idiomas"
              width={90}
              height={90}
            />
            <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
              <p className="group-hover:block hidden">
                40% para sócios e dependentes no curso de Inglês - (49)
                3018-5755
              </p>
            </div>
          </a>
        </div>

        <div classname="">
          <Image
            src={`/LogosParceiros/Liberto.png`}
            alt="Logo Liberto"
            width={80}
            height={50}
          />
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">
              20% de desconto <br></br> Contato: (49) 991933934
            </p>
          </div>
        </div>

        <div className="cursor-pointer group hover:scale-105 group ">
          <a
            href="https://www.oralexclusive.com.br/home"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={`/LogosParceiros/OralExclusive.png`}
              alt="Oral Exclusive"
              width={90}
              height={90}
            />
            <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
              <p className="group-hover:block hidden">
                {" "}
                10 a 20% para sócios e dependentes - (49) 3222-1895
              </p>
            </div>
          </a>
        </div>

        <div classname="">
          <Image
            src={`/LogosParceiros/PostoUniversitario.png`}
            alt="Logo Posto Universitario"
            width={120}
            height={55}
          />
        </div>

        <div className="cursor-pointer group hover:scale-105 group ">
          <Image
            src={`/LogosParceiros/TopWay.png`}
            alt="Logo Liberto"
            width={100}
            height={40}
          />
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">
              Desconto de 15% <br></br>Contato: (49) 32250949
            </p>
          </div>
        </div>

        <div className="cursor-pointer group hover:scale-105 group ">
          <a
            href="https://www.rockfeller.com.br/escola/lages"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={`/LogosParceiros/Rockfeller.png`}
              alt="Logo Bullla"
              width={160}
              height={55}
            />
            <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
              <p className="group-hover:block hidden">Desconto de 35%</p>
            </div>
          </a>
        </div>

        <div className="cursor-pointer group hover:scale-105">
          <Image
            src={`/LogosParceiros/SantaRosa.png`}
            alt="Logo Camden"
            width={100}
            height={60}
          />
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">
              Desconto de 15% <br></br> Contato: (49) 32220391
            </p>
          </div>
        </div>

        <div className="cursor-pointer group hover:scale-105">
          <Image
            src={`/LogosParceiros/SesiSenaiIEL.png`}
            alt="Logo COC"
            width={100}
            height={70}
          />
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">8% Sócios e Dependentes</p>
          </div>
        </div>

        <div classname="">
          <a
            href="https://www.uniplaclages.edu.br"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={`/LogosParceiros/Uniplac.png`}
              alt="Logo PostoUniversitario"
              width={90}
              height={90}
            />
            <div className="mx-auto w-full absolute">
              <p className="group-hover:block hidden bg-gray-100 rounded shadow">
                Desconto de 30% nos mestrados
              </p>
            </div>
          </a>
        </div>

        <div classname="">
          <Image
            src={`/LogosParceiros/VidaeSom.png`}
            alt="Logo PostoUniversitario"
            width={150}
            height={80}
          />
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden ">
              20% de desconto nos aparelhos auditivos <br></br> Contato: (49)
              32246689
            </p>
          </div>
        </div>

        <div classname="">
          <a
            href="https://www.melhorescola.com.br/escola/centro-de-educacao-infantil-recrear"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={`/LogosParceiros/Recrearr.png`}
              alt="Logo BelezzaVitalle"
              width={110}
              height={110}
            />
            <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
              <p className="group-hover:block hidden">
                20% para turmas de Berçário e Maternal 1 e 2; <br></br> 15%
                turma de recreação.
              </p>
            </div>
          </a>
        </div>

        <div className="mt-8 cursor-pointer group hover:scale-105 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1rbKouYVYsl4v2lyA30a_qy9jJ1qJyCg0/view"
          >
            Pladisa
          </a>
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">Saiba mais</p>
          </div>
        </div>

        <div className="mt-8 cursor-pointer group hover:scale-105 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1MMcrmAyx-CS5JRdEp0ikVv4AIrw2_H19/view"
          >
            Acquazero
          </a>
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">Saiba mais</p>
          </div>
        </div>

        <div className="mt-8 cursor-pointer group hover:scale-105 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1XDO71_gCviJ5VZvCkxIHiQIAlZjugIcY/view"
          >
            Plano de Saúde Uniodonto
          </a>
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">Saiba mais</p>
          </div>
        </div>

        <div className="mt-8 cursor-pointer group hover:scale-105 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1G9ZkI_hfpJSa7iBxbIzh2KOi5B-gS0rD/view?usp=share_link"
          >
            Christopher Coberllini Cirurgião Dentista
          </a>
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">20% Saiba mais</p>
          </div>
        </div>
        <div className="mt-8 cursor-pointer group hover:scale-105 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1uKndIFcwzT1qnHtdsf9xL6aJuWctV_zU/view?usp=sharing"
          >
            Estar bem Benefícios de Saúde
          </a>
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">Saiba mais</p>
          </div>
        </div>
        <div className="mt-8 cursor-pointer group hover:scale-105 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href=" https://drive.google.com/file/d/1oUnwO01gz-Mz62ij0_AHt6cMaN0Zx49J/view?usp=sharing"
          >
            Defende Proteção Veicular
          </a>
          <div className="mx-auto w-full absolute bg-gray-100 rounded shadow">
            <p className="group-hover:block hidden">Saiba mais</p>
          </div>
        </div>
      </div>
    </>
  );
}

*/
