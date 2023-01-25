import Calendar from "../components/Calendar";
import Forms from "../components/Forms";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <section>
      <h1 className="page-title" id="sobre">
        Associação dos Funcionários da UNIPLAC
      </h1>
      <button className="bg-gray-500 text-gray-100 mb-4 text-xl" id="contato">Reservar local</button>
      <div className="page-content">
        <div className="text-justify flex flex-col items-center justify-center p-4">
          <div className=" grid grid-flow-row gap-4 text-neutral-600  sm:grid-cols-1 md:grid-cols-2  ">
            <div className=" bg-slate-200 rounded-lg w-96">
              <h2 className="text-gray-600 ">Sobre nós</h2>
              <p className="px-4 mb-4">
                A Associação dos Funcionários da UNIPLAC, é uma entidade que
                congregará todos os funcionários que a ela se vinculem. É uma
                sociedade civil, com personalidade jurídica de duração
                indeterminada, designada pela sigla AFEUP.
              </p>
            </div>
            <div className="bg-slate-200 rounded-lg w-96">
              <h2 className="text-gray-600">Finalidades</h2>
              <p className="pl-4 px-4 mb-4">
                Defender os interesses dos seus associados.
                <br></br>
                Zelar pela dignidade e prestígio dos associados.
                <br></br>
                Estimular entre os associados o sentido do coleguismo e amizade.
                <br></br>
                Promover o congraçamento social e recreativo entre os membros.
                <br></br>
                Disponibilizar convênios de serviços empresariais aos
                associados.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-gray-600 ">Nosso espaço</h2>
        
        <Gallery  />
        <h2 className="text-zinc-100">Calendário de eventos</h2>
        <Calendar />
        <h2 className="text-zinc-100">Reserve seu dia para confraternização</h2>

        <Forms  />
      </div>
    </section>
  );
}
