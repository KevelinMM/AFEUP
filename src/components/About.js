export default function About() {
  return (
    <section class="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-20 space-y-12">
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8">
          <h2 class="text-3xl leading-tight font-bold ">Sobre nós</h2>
          <p className="mt-3 mb-4 leading-relaxed">
            A AFEUP - Associação dos funcionários da Uniplac, é uma entidade sem
            fins lucrativos focada no bem-estar de seus associados e
            dependentes, seja na busca por convênios, bem como a disponibilidade
            de um lindo e agradável espaço para lazer e descontração. Todos os
            funcionários da Uniplac podem se tornar sócios e obter esses
            benefícios. Associe-se!
          </p>
        </div>

        <div class="w-full lg:w-1/2 lg:px-8 mt-4 lg:mt-0  flex flex-col md:flex-row md:items-center md:space-x-5">
          <div className="">
            {" "}
            <div class="items-center space-x-3 flex">
              <div>
                <div class="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <div class="md:ml-8 ">
                <h4 class="text-xl font-bold leading-tight">Diretoria</h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1d92NN2VhmRPWfIqvBkuLpERr7pWw3-Fb/view?usp=share_link"
                >
                  Diretoria AFEUP 2022
                </a>
              </div>
            </div>
            <div class="items-center space-x-3 flex mt-8">
              <div>
                <div class="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <div class="md:ml-8 mt-4 md:mt-0">
                <h4 class="text-xl font-bold leading-tight">Financeiro</h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/11SzMvXlqL21TuvEuPeS9iYMVPlY6YVl_/view?usp=sharing"
                >
                  Demonstrativo Financeiro
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div class="items-center space-x-3 flex mt-8 md:mt-0">
              <div>
                <div class="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <div class="md:ml-8 mt-4 md:mt-0">
                <h4 class="text-xl font-bold leading-tight">Funcionamento</h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1Lsye1r1KzYoUHlVHzf48mpqe1yNROn6F/view"
                >
                  Normas de Funcionamento
                </a>
              </div>
            </div>
            <div class="items-center space-x-3 flex mt-8">
              <div>
                <div class="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <div class="md:ml-8 mt-4 md:mt-0">
                <h4 class="text-xl font-bold leading-tight">Estatuto</h4>
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
      </div>
    </section>
  );
}
