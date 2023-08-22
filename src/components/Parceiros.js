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
          <div key={index} className=" group hover:scale-105 py-2">
            {partner.link ? (
              <a href={partner.link} target="_blank" rel="noreferrer">
                <div className="cursor-pointer">
                  <Image
                    src={`/LogosParceiros/${partner.image}`}
                    alt={`Logo ${partner.name}`}
                    width={partner.width}
                    height={partner.height}
                  />
                </div>

                <div className="absolute left-0 right-0 bottom-0  items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-white text-center p-2">
                    {partner.description}
                  </p>
                </div>
              </a>
            ) : (
              <div>
                <Image
                  src={`/LogosParceiros/${partner.image}`}
                  alt={`Logo ${partner.name}`}
                  width={partner.width}
                  height={partner.height}
                />

                <div className="cursor-default absolute left-0 right-0 bottom-0  items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-white text-center p-2">
                    {partner.description}
                  </p>
                </div>
              </div>
            )}
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
    width: 140,
    height: 40,
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
    description:
      "Christopher Coberllini Cirurgião Dentista. Clique para saber mais.",
  },
  // Add other partners here
  {
    name: "Conserlex",
    image: "Conserlex.png",
    width: 90,
    height: 90,
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
    description: "Posto Universitário",
  },
  {
    name: "Fresh Start Higienização",
    image: "FreshStarthigienização.png",
    width: 90,
    height: 90,
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
    width: 120,
    height: 80,
    link: "https://www.eusousantarosa.com.br/",
    description: "Desconto de 15% Contato: (49) 32220391",
  },
  {
    name: "Sesi Senai IEL",
    image: "SesiSenaiIEL.png",
    width: 100,
    height: 90,
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
    width: 170,
    height: 90,
    description:
      " 20% de desconto nos aparelhos auditivos  Contato: (49) 32246689",
  },

  {
    name: "Recrearr",
    image: "Recrearr.png",
    width: 110,
    height: 110,
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
];
