export default function Forms() {
    return (

<form>
<h2>Entre em contato</h2>

  <div className="mb-6" id="contato">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Seu nome</label>
    <input type="email" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required/>
  </div>
  <div className="mb-6">
    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 ">Seu email</label>
    <input type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
  </div>
  <div className="mb-6">
    <label for="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 ">Mensagem</label>
    <input type="password" id="mensage" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300   " required/>
    </div>
    <label for="terms" className="ml-2 text-sm font-medium text-gray-900 ">Li e aceito os <a href="#" className="text-blue-600 hover:underline ">termos de Política de Privacidade.</a></label>
  </div>
  <button >Enviar</button>

</form>

    );
  }
  