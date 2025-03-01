"use client";

import { useEffect, useState } from "react";
import { Bottom } from "../bottom";

const BiographyPage = (): JSX.Element => {
  const Biography = (): JSX.Element => {
    const personBio = {
      name: "Gerson Pereira da Silva",
      birth: "São Paulo, 1960",
      description: [
        "Artista plástico, brasileiro nascida em Santa Catarina, vive e trabalha em São Paulo.",
        `Já ganhou vários prêmios importantes na história da arte,
    participa de várias exposições e suas obras estão nos mais
    relevantes lugares do mundo.`,
        `Bia trabalha com resíduos de floresta de manejo, árvores
    nativas resgatadas de queimadas, desmatamentos, fundo de rios
    e barragens. Do norte ao sul do Brasil, ela percorre,
    transpassa, recupera, lapida, recria e cuida.`,
        `É uma importante representante da arte contemporânea
    sustentável. Cria suas obras não só com a estética, mas também
    com engajamento ecológico, mostrando através de sua arte a
    preocupação com o meio ambiente e, sobretudo alertar sobre os
    desastres ocorridos no Brasil e no mundo.`,
        `Sua concepção nos
    projetos arquitetônicos, interiores e paisagísticos é, através
    da sua singularidade agregar valor cultural e emocional nos
    espaços a serem preenchidos, enobrecendo e diversificando cada
    conceito.`,
      ],
    };

    const useWidth = () => {
      const [width, setWidth] = useState(0);
      const handleResize = () => setWidth(window.innerWidth);
      useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      return width;
    };

    const width = useWidth();

    const exibe = [
      <div
        key={0}
        className="flex flex-col mr-10 w-full lg:w-1/2 lg:self-center"
      >
        {personBio.description.map((paragraph, index) => {
          return (
            <>
              <p
                key={paragraph}
                className={`${
                  index !== 0 && "mt-2"
                } text-base font-light text-justify bioTextFont`}
              >
                {paragraph}
              </p>
            </>
          );
        })}
      </div>,
      <div key={1} className="flex w-full mb-4 lg:mb-0 lg:w-2/4">
        <img
          className="w-full h-full"
          src="https://i.imgur.com/k43zbr4.png"
        ></img>
      </div>,
    ] as Array<JSX.Element>;

    const getExibeByWidth = () => {
      if (width > 600) {
        return exibe[0];
      } else {
        return exibe[1];
      }
    };

    return (
      <div className="flex flex-col h-full w-full mt-5 mb-10 items-center margin-pc">
        {/* <a className="self-center text-xl">Biografia</a> */}
        <a className="self-center text-2xl font-extrabold md:text-4xl bioTextFont bioTitle">
          Biografia
        </a>
        <div className="flex flex-col mt-6 lg:mt-0 px-2 py-2 lg:px-0 lg:py-8 w-5/6 lg:w-4/6 bg-gray-100 justify-center items-center mt-1">
          <div className="flex flex-col lg:px-16 w-full">
            <div className="flex flex-col lg:flex-row">
              {/* {getExibeByWidth()} */}
              {width > 600 ? exibe[0] : exibe[1]}
              {width > 600 ? exibe[1] : exibe[0]}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Biography />
      {/* <Biography /> */}
      <Bottom currentPage={"Biografia"} />
    </div>
  );
};

export default BiographyPage;
