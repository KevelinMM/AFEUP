import Calendar from "../components/Calendar";
import Forms from "../components/Forms";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <section>
      <h1 className="page-title" id="sobre">
        Associação dos Funcionários da UNIPLAC
      </h1>
      <div className="page-content mb-14">
        <h2>Sobre nós</h2>
        <p className="px-4">
          A Associação dos Funcionários da UNIPLAC, é uma entidade que
          congregará todos os funcionários que a ela se vinculem. É uma
          sociedade civil, com personalidade jurídica de duração indeterminada,
          designada pela sigla AFEUP.
        </p>
        <h2>Finalidades</h2>
        <p className="pl-4 text">
        
           Defender os interesses dos seus associados.
           <br></br>
          Zelar pela dignidade e prestígio dos associados. 
          <br></br>
          Estimular entre os associados o sentido do coleguismo e amizade. 
          <br></br>
          Promover o congraçamento social e recreativo entre os membros. 
          <br></br>
          Disponibilizar convênios de serviços empresariais aos associados.
        </p>

        <h2>Nosso espaço</h2>

        <Gallery id="fotos" />
     
        <Forms id="contato" />
      </div>
    </section>
  );
}
