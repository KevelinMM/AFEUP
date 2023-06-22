import Image from "next/image";

export default function Parceiros() {
  return (
    <div
      id="parceiros"
      className=" bg-slate-200 bg-opacity-60 rounded-lg w-full pb-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 py-4 md:py-10 text-center px-5 items-center"
    >
      <div className="cursor-pointer hover:scale-105 group z-50">
        <Image
          src={`/LogosParceiros/Bullla.png`}
          alt="Logo Bullla"
          width={100}
          height={45}
        />
        <div className="mx-auto w-full absolute">
          <p className="group-hover:block hidden bg-gray-100 rounded shadow">
            Cartão de crédito com desconto em folha.
          </p>
        </div>
      </div>

      <div className="cursor-pointer hover:scale-105 group z-40">
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

      <div className="cursor-pointer hover:scale-105 group z-40">
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

      <div className="cursor-pointer hover:scale-105 group z-40">
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

      <div className="cursor-pointer hover:scale-105 group z-40">
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

      <div className="cursor-pointer hover:scale-105 group z-40">
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

      <div className="cursor-pointer group hover:scale-105 group z-40">
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
              40% para sócios e dependentes no curso de Inglês - (49) 3018-5755
            </p>
          </div>
        </a>
      </div>

      <div className="cursor-pointer hover:scale-105 group z-40">
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

      <div className="cursor-pointer group hover:scale-105 group z-20">
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

      <div className="cursor-pointer hover:scale-105 group z-20">
        <Image
          src={`/LogosParceiros/PostoUniversitario.png`}
          alt="Logo Posto Universitario"
          width={120}
          height={55}
        />
      </div>

      <div className="cursor-pointer group hover:scale-105 group z-30">
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

      <div className="cursor-pointer group hover:scale-105 group z-20">
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

      <div className="cursor-pointer group hover:scale-105 z-20">
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

      <div className="cursor-pointer group hover:scale-105 ">
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

      <div className="cursor-pointer hover:scale-105 group z-40">
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

      <div className="cursor-pointer hover:scale-105 group z-20">
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

      <div className="cursor-pointer hover:scale-105 group z-20">
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
              20% para turmas de Berçário e Maternal 1 e 2; <br></br> 15% turma
              de recreação.
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
  );
}
