export default function Forms() {
  return (
    <section className="md:flex ">
      <div className="text-zinc-200 mx-auto">
        <form action="#">
          <div>
            <label for="email" className="block mb-2 text-sm font-medium w-96">
              Seu email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-slate-200 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="name@exemplo.com"
              required
            />
          </div>
          <div>
            <label for="number" className="block my-2 text-sm font-medium  ">
              Contato
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-slate-200 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="(00) 0000-0000"
              required
            />
          </div>
          <div>
            <label for="subject" className="block my-2 text-sm font-medium  ">
              Data de locação
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm  bg-slate-200 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Selecione a data"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block my-2 text-sm font-medium  ">
              Mensagem
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-slate-200 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Digite aqui seu nome completo e matrícula de funcionario da Uniplac!"
            ></textarea>
          </div>
          <button type="submit" className="button my-4 bg-slate-300">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
