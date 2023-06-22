import Calendar from "../components/Calendar";
import Forms from "../components/Forms";
import Gallery from "../components/Gallery";
import Parceiros from "../components/Parceiros";

export default function Home() {
  return (
    <section>
      <h1 className="page-title" id="sobre">
        Associação dos Funcionários da UNIPLAC
      </h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://api.whatsapp.com/send/?phone=5549991623564"
        className="cursor-pointer bg-green-400 rounded-full w-16 h-16 fixed z-10 right-4 bottom-4 soft-transition"
      >
        <svg class="text-[40px] p-3 text-white ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
          </svg>
        </svg>
      </a>
      <div className="w-full text-center mb-4 transition ease-in-out duration-150 hover:scale-105">
        <a
          className=" font-bold text-xl bg-slate-100 bg-opacity-80  shadow-xl px-4 py-2 rounded"
          href="#contato"
        >
          Reservar local
        </a>
      </div>

      <div className="page-content">
        <div className="text-justify flex flex-col items-center p-4">
          <div className="mx-4 grid grid-flow-row gap-4 text-neutral-600 ">
            <div className=" bg-slate-200 bg-opacity-80 rounded-lg w-full">
              <h2 className="text-gray-600 ">Sobre nós</h2>
              <p className="px-4 mb-4 leading-relaxed">
                A AFEUP - Associação dos funcionários da Uniplac, é uma entidade
                sem fins lucrativos focada no bem-estar de seus associados e
                dependentes, seja na busca por convênios, bem como a
                disponibilidade de um lindo e agradável espaço para lazer e
                descontração. Todos os funcionários da Uniplac podem se tornar
                sócios e obter esses benefícios. Associe-se!
              </p>
              <div className="px-4 mb-4 leading-relaxed underline text-teal-600">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1d92NN2VhmRPWfIqvBkuLpERr7pWw3-Fb/view?usp=share_link"
                >
                  Diretoria AFEUP 2022
                </a>
                <br></br>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1UMjV4lKWLE65UsEE7RjabG4fNHBZdOWA/view?usp=sharing"
                >
                  Demonstrativo Financeiro
                </a>
                <br></br>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1Lsye1r1KzYoUHlVHzf48mpqe1yNROn6F/view"
                >
                  Normas de Funcionamento
                </a>
                <br></br>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1k3B_CAwtmjhUARCWSQoAnXeyxxIILenz/view"
                >
                  Estatuto da AFEUP
                </a>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-gray-600 ">Nosso espaço</h2>

        <Gallery />

        <h2 className="text-zinc-100 ">Calendário de eventos</h2>
        <Calendar />
        <h2 className="text-zinc-100  ">
          Reserve seu dia para confraternização
        </h2>
        <Forms />
        <h2 className="text-zinc-100  ">Convênios</h2>
        <Parceiros />
      </div>
    </section>
  );
}

/*Finalidades
        <div className="bg-slate-200 bg-opacity-80 rounded-lg w-full">
              <h2 className="text-gray-600">Finalidades</h2>
              <ul className="pl-4 px-4 mb-4 leading-relaxed list-disc ml-5">
                <li>Defender os interesses dos seus associados.</li>
                <li>Zelar pela dignidade e prestígio dos associados.</li>
                <li>
                  Estimular entre os associados o sentido do coleguismo e
                  amizade.
                </li>
                <li>
                  Promover o congraçamento social e recreativo entre os membros.
                </li>
                <li>
                  Disponibilizar convênios de serviços empresariais aos
                  associados.
                </li>
              </ul>
            </div>*/
