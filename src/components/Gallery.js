export default function Gallery() {
  return (
    <div className=" flex flex-col items-center justify-center  " id="fotos">
      <div className=" grid grid-flow-row gap-4 text-neutral-600 cursor-pointer sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <div className=" w-80  shadow-xl   ">
          <figure>
            <img
              src="../FotosLocal/area.jpeg"
              alt="Área externa"
              data-fancybox="gallery"
              data-caption="Área externa"
              className="rounded-md"
            />
          </figure>
        </div>
        <div className="w-80 shadow-xl">
          <figure>
            <img
              src="../FotosLocal/campo.jpeg"
              alt="Campo de Futebol"
              data-fancybox="gallery"
              data-caption="Campo de Futebol"
              className="rounded-md"
            />
          </figure>
        </div>
        <div className="w-80 shadow-xl">
          <figure>
            <img
              src="../FotosLocal/campoExt.jpeg"
              alt="rea externa"
              data-fancybox="gallery"
              data-caption="Área externa"
              className="rounded-md"
            />
          </figure>
        </div>
        <div className="w-80 shadow-xl">
          <figure>
            <img
              src="../FotosLocal/casa1.jpeg"
              alt="Casa"
              data-fancybox="gallery"
              data-caption="Casa"
              className="rounded-md"
            />
          </figure>
        </div>
        <div className="w-80 shadow-xl">
          <figure>
            <img
              src="../FotosLocal/casa2.jpeg"
              alt="Casa"
              data-fancybox="gallery"
              data-caption="Casa"
              className="rounded-md"
            />
          </figure>
        </div>
        <div className="w-80 shadow-xl">
          <figure>
            <img
              src="../FotosLocal/casa3.jpeg"
              alt="Casa"
              data-fancybox="gallery"
              data-caption="Casa"
              className="rounded-md"
            />
          </figure>
        </div>
        <div className="w-80 shadow-xl">
          <figure>
            <img
              src="../FotosLocal/casaArea.jpeg"
              alt="Casa"
              data-fancybox="gallery"
              data-caption="Casa"
              className="rounded-md"
            />
          </figure>
        </div>
        <div className="w-80 shadow-xl">
          <figure>
            <img
              src="../FotosLocal/entrada1.jpeg"
              alt="Entrada"
              data-fancybox="gallery"
              data-caption="Entrada"
              className="rounded-md"
            />
          </figure>
        </div>
        <div className="w-80 shadow-xl">
          <figure>
            <img
              src="../FotosLocal/entrada2.jpeg"
              alt="Entrada"
              data-fancybox="gallery"
              data-caption="Entrada"
              className="rounded-md"
            />
          </figure>
        </div>
        <div className=" w-80 shadow-xl">
          <figure>
            <img
              src="../FotosLocal/parquinho.jpeg"
              alt="Parquinho"
              data-fancybox="gallery"
              data-caption="Parquinho"
              className="rounded-md"
            />
          </figure>
        </div>
        <div className="w-80 shadow-xl">
          <figure>
            <img
              src="../FotosLocal/piscina.jpeg"
              alt="Piscina"
              data-fancybox="gallery"
              data-caption="Piscina"
              className="rounded-md"
            />
          </figure>
        </div>
        <div className="w-80 shadow-xl">
          <figure>
            <img
              src="../FotosLocal/piscina2.jpeg"
              alt="Piscina"
              data-fancybox="gallery"
              data-caption="Piscina"
              className="rounded-md"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
