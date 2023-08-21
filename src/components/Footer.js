export default function Footer() {
  return (
    <footer className=" w-full bottom-0 bg-[#377ab4] bg-opacity-90 px-4 md:px-32 lg:px-64">
      <div className="py-6  text-white ">
        <div className="flex flex-row  font-semibold mb-2">
          <div className=" cursor-default">
            &copy; {new Date().getFullYear()}{" "}
          </div>
          <p className="text-blue-700 hover:text-blue-600 pl-1 cursor-pointer">{" <NIU/>"}</p>
        </div>

        <p className="text-sm ">
          AFEUP - Associação dos funcionários da Uniplac | Sede - Loteamento
          Nossa Senhora Aparecida, quadra R, na Rua José Sidnei Guzatti BR 116.
        </p>
        <p className="text-sm ">
          Central de Relacionamento: 49 99162-3564 ou afeup@uniplaclages.edu.br
        </p>
      </div>
    </footer>
  );
}
