import Calendar from "../components/Calendar";
import Forms from "../components/Forms";
import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <section>
      <h1 className="page-title">Associação dos Funcionários da UNIPLAC</h1>
      <div className="page-content mb-14">
        <h2>Sobre nós</h2>
        <p>
          A Associação dos Funcionários da UNIPLAC, é uma entidade que
          congregará todos os funcionários que a ela se vinculem. É uma
          sociedade civil, com personalidade jurídica de duração indeterminada,
          designada pela sigla AFEUP. São finalidades da AFEUP: Defender os
          interesses dos seus associados. Zelar pela dignidade e prestígio dos
          associados. Estimular entre os associados o sentido do coleguismo e
          amizade. Promover o congraçamento social e recreativo entre os
          membros. Disponibilizar convênios de serviços empresariais aos
          associados.
        </p>

        <h2>Nosso espaço</h2>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={4000}>
            <img
              src="../../FotosLocal/area.jpeg"
              alt="..."
            />
            <img
              src="../../FotosLocal/campo.jpeg"
              alt="..."
            />
            <img
              src="h../../FotosLocal/campoExt.jpeg"
              alt="..."
            />
            <img
              src="../../FotosLocal/casa1.jpeg"
              alt="..."
            />
            <img
              src="../../FotosLocal/casa2.jpeg"
              alt="..."
            />
          </Carousel>
        </div>
        <Calendar />
        <Forms />
      </div>
    </section>
  );
}
