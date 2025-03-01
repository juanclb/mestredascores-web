import Link from "next/link";
import { Bottom } from "../bottom";

const obras = [
  {
    id: 1,
    url: "https://i.imgur.com/7tOPVgC.jpg",
    name: "Flores do Campo",
  },
  {
    id: 2,
    url: "https://i.imgur.com/AY0B13h.jpg",
    name: "Navio Fantasma",
  },
  {
    id: 3,
    url: "https://i.imgur.com/MXthsuU.jpg",
    name: "Pôr do Sol em Alto Mar",
  },
  {
    id: 4,
    url: "https://i.imgur.com/VpFnZmp.jpg",
    name: "Brisa Elegante",
  },
  {
    id: 5,
    url: "https://i.imgur.com/HUlWif0.jpg",
    name: "A Cidade Grande",
  },
];

export const runtime = "edge";

export default function Dashboard() {
  const imgUrl = `https://img.freepik.com/fotos-premium/uma-pintura-de-um-barco-que-e-pintado-com-um-ceu-azul-e-as-palavras-a-palavra-ao-lado_546042-528.jpg?w=2000`;

  const YellowBar = (): JSX.Element => {
    return (
      <div className="flex flex-col bg-yellow-400 h-6 sm:h-14 w-full"></div>
    );
  };

  const GrayScreenContent = (): JSX.Element => {
    return (
      <>
        <div className="flex flex-row bg-gray-200 h-2/5 sm:h-1/2 w-full">
          <img
            className="w-full h-full"
            src="https://i.imgur.com/TdOwz89.jpg"
          ></img>
        </div>
      </>
    );
  };

  const Discount = (): JSX.Element => {
    return (
      <div className="flex mt-2 py-5 sm:py-px sm:h-1/6 w-full margin-pc">
        <div className="flex flex-col sm:flex-row w-full h-full justify-between items-center">
          <div className="flex sm:w-1/3 h-1/3 justify-center items-center">
            <a>
              <img src="https://i.imgur.com/CVSkgJ2.png"></img>
            </a>
          </div>
          <div className="flex mt-4 mb-6 sm:w-1/3 h-1/3 justify-center items-center">
            <img src="https://i.imgur.com/cixmAqn.png"></img>
          </div>
          <div className="flex sm:w-1/3 h-1/3 justify-center items-center">
            <img src="https://i.imgur.com/O9EVUaD.png"></img>
          </div>
        </div>
      </div>
    );
  };

  const FollowInstagram = (): JSX.Element => {
    return (
      <div className="flex flex-col h-28 sm:h-40 w-full margin-pc justify-center items-center">
        <a target="_blank" href="https://instagram.com/mestredascoresart">
          <img src="https://i.imgur.com/X5Kq14Q.png"></img>
        </a>
      </div>
    );
  };

  const ConteudoHome = (): JSX.Element => {
    //i.imgur.com/X5Kq14Q.png
    return (
      <div className="flex flex-col mt-8 margin-pc">
        <div id="content-title" className="px-6 w-full self-center">
          <a className="text-2xl font-bold">Biografia</a>
        </div>
        <div
          id="content-biography"
          className="flex mt-2 px-6 w-full self-center text-justify"
        >
          <a className="font-light text-lg">
            Gerson Silva, artista Plástico, brasileiro, nascido em São Paulo,
            onde vive e trabalha. É conhecido pelo seu pseudônimo O Mestre das
            Cores, onde nesse nome inventado carrega toda sua história, jornada
            e propósito.
          </a>
        </div>
        <Link href={"/biografia"}>
          <div
            id="content-biography"
            className="flex mt-4 px-6 w-full self-center text-justify justify-end"
          >
            <a className="rounded-3xl font-light text-md bg-gray-200 px-2 py-1">
              Clique aqui para ler mais...
            </a>
          </div>
        </Link>
      </div>
    );
  };

  const MaisObras = (): JSX.Element => {
    //https://i.imgur.com/0mdrrGc.jpg
    //https://i.imgur.com/mn6pBI5.jpg
    //https://i.imgur.com/13kHNbU.jpg
    //https://i.imgur.com/11RLteb.jpg
    //https://i.imgur.com/h4YhIrA.jpg

    return (
      <div className="flex w-full mt-14 justify-center">
        <div className="flex flex-col w-full lg:w-5/6 margin-pc">
          <div id="obras-title" className="flex w-full justify-center">
            <a className="text-2xl lg:text-3xl font-bold">
              PRINCIPAIS OBRAS DO ARTISTA
            </a>
          </div>
          <div
            id="obras-title"
            className="mt-4 flex flex-wrap overflow-hidden w-full h-full justify-center"
          >
            {obras.map((obra) => {
              return (
                <Link
                  // href={{
                  //   pathname: '/arte/2',
                  //   query: { id: obra.id },
                  // }}
                  href={`/arte/${obra.id}`}
                  key={obra.id}
                  className="flex p-2 w-full h-96 lg:h-[28rem] lg:w-1/2"
                >
                  <div className="flex h-full w-full bg-gray-500 relative">
                    <img className="w-full h-full" src={obra.url}></img>
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-yellow-600 opacity-80 flex items-center justify-center">
                      <p className="text-white font-regular text-md">
                        {obra.name}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="h-screen">
      <YellowBar />
      <GrayScreenContent />
      <Discount />
      <ConteudoHome />
      <MaisObras />
      <FollowInstagram />
      {/* <GrayScreenContent />
      <GrayScreenContent /> */}
      <Bottom currentPage={"Início"} />
    </main>
  );
}
