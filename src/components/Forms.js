export default function Forms() {
  return (
    <div className="flex flex-col items-center justify-center relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-6 mt-6 md:mb-20">
      <h2 className="page-title  ">Reservar local</h2>
      <section className="" id="contato">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:space-x-8 w-full ">
          <div className="h-full md:mx-4 bg-[#d7e3f06c] bg-opacity-90 rounded p-4 ">
            <img
              className="mx-auto my-4"
              src="../LogoTransparente.png"
              width="140"
              height=""
              alt="consultoria-fundo"
            />

            <iframe
              className="w-full h-60 lg:w-full lg:h-80 p-2"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d172542.57845672697!2d-50.39255755144868!3d-27.77674765175403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e019b2aef44db3%3A0x16327a1cf32703c2!2sSede%20AFEUP!5e0!3m2!1sen!2sbr!4v1674677479109!5m2!1sen!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="text-slate-700 text-center font-medium">
              afeup@uniplaclages.edu.br
            </p>
            <p className="text-slate-700 text-center mt-5">
              Loteamento Nossa Senhora Aparecida, quadra R, na Rua José Sidnei
              Guzatti BR 116
            </p>
          </div>

          <form
            action="https://formsubmit.co/afeup@uniplaclages.edu.br"
            method="POST"
            className=" items-center md:p-2 space-y-5 mt-5 md:mt-0"
          >
            <div>
              <label for="email">Seu email</label>
              <input
                type="email"
                name="email"
                className="text-gray-900 shadow-smborder border-gray-200 bg-[#d7e3f06c] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-1"
                placeholder="name@exemplo.com"
                required
              />
            </div>
            <div>
              <label for="numero">Contato</label>
              <input
                type="number"
                name="numero"
                className="shadow-sm border border-gray-200 bg-[#d7e3f06c] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-1 "
                placeholder="(00) 0000-0000"
                required
              />
            </div>
            <div>
              <label for="subject" className="  ">
                Data de locação
              </label>
              <input
                type="text"
                name="data"
                className="shadow-sm border border-gray-200 bg-[#d7e3f06c] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-1 "
                placeholder="Ex: 12/01/2023"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label for="mensagem">Mensagem</label>
              <textarea
                name="mensagem"
                rows="6"
                className="shadow-sm border border-gray-200 bg-[#d7e3f06c] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-1 "
                placeholder="Digite aqui seu nome completo e matrícula de funcionario da Uniplac!"
              ></textarea>
            </div>
            <button type="submit" className=" bg-teal-500 ">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
