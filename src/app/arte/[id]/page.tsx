import Link from "next/link";

export const runtime = "edge";

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

export default function Dashboard({ params }: { params: { id: number } }) {
  const imgUrl = `https://img.freepik.com/fotos-premium/uma-pintura-de-um-barco-que-e-pintado-com-um-ceu-azul-e-as-palavras-a-palavra-ao-lado_546042-528.jpg?w=2000`;

  const attributes = obras[params.id - 1];
  const specs = [
    {
      id: 1,
      name: "Técnica utilizada",
      value: "Argamassa sobre tela",
    },
    {
      id: 2,

      name: "Dimensões",
      value: "1,5m x 1,5m",
    },
    {
      id: 3,
      name: "Nome da Obra",
      value: attributes.name,
    },
    {
      id: 4,
      name: "Autor",
      value: "Mestre das Cores",
    },
    {
      id: 5,
      name: "Ano de Criação",
      value: "2019",
    },
    {
      id: 6,
      name: "Valor",
      value: "R$1.500.000",
    },
    {
      id: 7,
      name: "Valor cópias de alta qualidade",
      value: "Sob Consulta",
    },
  ] as Array<{ id: number; name: string; value: string }>;

  const ObjeciveTeste = (): JSX.Element => {
    return (
      <div className="flex flex-col margin-pc mb-4 h-full w-full">
        <div className="flex flex-wrap mt-10 w-5/6 h-1/3 bg-gray-50 self-center">
          <div
            id="image"
            className="h-full w-full lg:w-1/2 self-center content-center"
          >
            <img
              className="flex h-full w-full min-w-2/3"
              src={attributes.url}
              alt="quadro"
            />
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <div id="title" className="flex flex-col mt-10">
              <a className="font-bold text-gray-800 text-2xl sm:text-4xl">
                {attributes.name}
              </a>
              <a className="font-light text-gray-800 text-lg">
                Quadro decorativo
              </a>
              <a className="font-regular text-gray-800 text-xl">
                Pintura Argamassa
              </a>
            </div>
            <div
              id="specs"
              className="flex sm:px-12 px-4 w-full flex-col mt-10"
            >
              {specs.map((spec) => (
                <div
                  id={`spec-${spec.id}`}
                  className="flex flex-col"
                  key={spec.id}
                >
                  <div className="flex flex-row justify-between w-full">
                    <a className="font-semibold text-gray-800 sm:text-xl text-base">
                      {spec.name}:
                    </a>
                    <a className="font-light text-gray-800 sm:text-xl text-base">
                      {spec.value}
                    </a>
                  </div>
                  {spec.id !== specs.length && (
                    <div className="w-full mt-1.5 mb-1.5 h-px bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
            <div id="description" className="sm:px-12 px-4 mt-12 mb-8">
              <a className="font-light text-gray-800 sm:text-xl text-lg">
                Descrição
              </a>
              <div className="bg-gray-200 px-2 py-2 mt-2">
                <a className="font-light text-gray-800 sm:text-xl text-base mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  provident possimus qui deserunt, inventore consectetur
                  necessitatibus dolores velit blanditiis error odit id magnam,
                  quam corrupti minima vel alias labore veritatis, vitae quidem
                  assumenda maiores? Dicta sunt tempore magni eaque distinctio
                  minima nesciunt, suscipit quia repellendus beatae vel saepe ut
                  quae!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const OtherPaintings = (): JSX.Element => {
    // const paintings = [
    //   {
    //     id: 1,
    //     name: "Navio Fantasma",
    //     image: imgUrl,
    //   },
    //   {
    //     id: 2,
    //     name: "Arvore da Vida",
    //     image: imgUrl,
    //   },
    //   {
    //     id: 3,
    //     name: "Cidade de Pedra",
    //     image: imgUrl,
    //   },
    //   {
    //     id: 4,
    //     name: "Cidade de Pedra",
    //     image: imgUrl,
    //   },
    // ] as Array<{ id: number; name: string; image: string }>;

    const paintingRestant = obras.filter((obra) => obra.id !== 2);

    return (
      <div className="flex flex-col margin-pc mb-12">
        <a className="mt-12 font-light text-gray-800 text-2xl sm:text-4xl self-center">
          OUTRAS OBRAS DO ARTISTA
        </a>
        <div className="flex flex-col mt-6 w-5/6 h-3/3 self-center">
          <div className="flex flex-row flex-wrap justify-between w-full">
            {paintingRestant.map((painting) => (
              <Link
                id={`painting-${painting.id}`}
                href={`/arte/${painting.id}`}
                className="flex flex-col w-full sm:w-1/2 items-center"
                key={painting.id}
              >
                <div
                  id={`painting-image-${painting.id}`}
                  className={`overflow-hidden w-12/13 ml-1 mr-1 self-center content-center bg-white`}
                >
                  <img
                    className="flex h-full sm:h-96 w-full min-w-2/3"
                    src={painting.url}
                    alt="quadro"
                  />
                </div>
                <a className="font-bold text-gray-800 text-lg mt-2 mb-6">
                  {painting.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <ObjeciveTeste />
      <OtherPaintings />
    </div>
  );
}
