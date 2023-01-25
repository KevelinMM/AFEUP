export default function Forms() {
  return (
    <section className="md:flex">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-2 md:p-4 md:mx-24 space-x-6 w-full ">
        <div className="h-full bg-slate-200 bg-opacity-90  rounded-xl  mx-4">
          <img
            className="mx-auto "
            src="../LogoTransparente.png"
            width="150"
            height=""
            alt="consultoria-fundo"
          />

          <iframe
            className="w-full h-60 lg:w-full lg:h-80 p-4"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d172542.57845672697!2d-50.39255755144868!3d-27.77674765175403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e019b2aef44db3%3A0x16327a1cf32703c2!2sSede%20AFEUP!5e0!3m2!1sen!2sbr!4v1674677479109!5m2!1sen!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
           <p className="text-slate-700 text-center   ">email</p>
        </div>
       

        <form action="#" className=" items-center pr-4">
          <div className=" text-slate-200 ">
            <label for="email" className="block mb-2 text-sm font-medium w-96 pt-2 ">
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
            <label for="number" className="text-slate-200 block my-2 text-sm font-medium  ">
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
            <label for="subject" className=" text-slate-200 block my-2 text-sm font-medium  ">
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
            <label for="message" className="text-slate-200 block my-2 text-sm font-medium  ">
              Mensagem
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-slate-200 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Digite aqui seu nome completo e matrícula de funcionario da Uniplac!"
            ></textarea>
          </div>
          <button type="submit" className="button my-3 bg-slate-300 ">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
