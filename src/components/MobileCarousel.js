import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MobileCarouselGallery() {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      dynamicHeight={false}
      infiniteLoop={true}
      emulateTouch={true}
    >
      {/* Repita o bloco abaixo para cada imagem */}
      <div className=" w-full  shadow-xl   ">
        <a
          data-fancybox
          href="../FotosLocal/area.jpeg"
          class="btn btn-primary"
          data-caption="Área"
        >
          <img src="../FotosLocal/area.jpeg" alt="Área externa" />
        </a>
      </div>
      <div className="w-full shadow-xl">
        <a
          data-fancybox
          href="../FotosLocal/campo.jpeg"
          class="btn btn-primary"
          data-caption="Campo de Futebol"
        >
          <img src="../FotosLocal/campo.jpeg" alt="Campo de Futebol" />
        </a>
      </div>
      <div className="w-full shadow-xl">
        <a
          data-fancybox
          href="../FotosLocal/campoExt.jpeg"
          class="btn btn-primary"
          data-caption="Área externa"
        >
          <img src="../FotosLocal/campoExt.jpeg" alt="área externa" />
        </a>
      </div>
      <div className="w-full shadow-xl">
        <a
          data-fancybox
          href="../FotosLocal/casa1.jpeg"
          class="btn btn-primary"
          data-caption="Salão B"
        >
          <img src="../FotosLocal/casa1.jpeg" alt="Casa" />
        </a>
      </div>
      <div className="w-full shadow-xl ">
        <a
          data-fancybox
          href="../FotosLocal/casa2.jpeg"
          class="btn btn-primary"
          data-caption="Salão A"
        >
          <img src="../FotosLocal/casa2.jpeg" alt="Casa" />
        </a>
      </div>
      <div className="w-full shadow-xl">
        <a
          data-fancybox
          href="../FotosLocal/casa3.jpeg"
          class="btn btn-primary"
          data-caption="Salão A"
        >
          <img src="../FotosLocal/casa3.jpeg" alt="Casa" />
        </a>
      </div>
      <div className="w-full shadow-xl">
        <a
          data-fancybox
          href="../FotosLocal/casaArea.jpeg"
          class="btn btn-primary"
          data-caption="Vestiário e Salão"
        >
          <img src="../FotosLocal/casaArea.jpeg" alt="Casa" />
        </a>
      </div>
      <div className="w-full shadow-xl">
        <a
          data-fancybox
          href="../FotosLocal/entrada1.jpeg"
          class="btn btn-primary"
          data-caption="Entrada"
        >
          <img src="../FotosLocal/entrada1.jpeg" alt="Entrada" />
        </a>
      </div>
      <div className="w-full shadow-xl">
        <a
          data-fancybox
          href="../FotosLocal/entrada2.jpeg"
          class="btn btn-primary"
          data-caption="Entrada"
        >
          <img src="../FotosLocal/entrada2.jpeg" alt="Entrada" />
        </a>
      </div>
      <div className="w-full shadow-xl">
        <a
          data-fancybox
          href="../FotosLocal/parquinho.jpeg"
          class="btn btn-primary"
          data-caption="Parquinho"
        >
          <img src="../FotosLocal/parquinho.jpeg" alt="Parquinho" />
        </a>
      </div>
      <div className="w-full shadow-xl">
        <a
          data-fancybox
          href="../FotosLocal/piscina.jpeg"
          class="btn btn-primary"
          data-caption="Piscina"
        >
          <img src="../FotosLocal/piscina.jpeg" alt="Piscina" />
        </a>
      </div>
      <div className="w-full shadow-xl">
        <a
          data-fancybox
          href="../FotosLocal/piscina2.jpeg"
          class="btn btn-primary"
          data-caption="Piscina"
        >
          <img src="../FotosLocal/piscina2.jpeg" alt="Piscina" />
        </a>
      </div>
      {/* Repita o bloco acima para cada imagem */}
    </Carousel>
  );
}
