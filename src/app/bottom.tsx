import Link from "next/link";

export const Bottom = ({ currentPage }: { currentPage: string }) => {
  const sections = [
    {
      name: "Início",
      href: "/artes",
    },
    {
      name: "Categorias",
      href: "/colecoes",
    },
  ];

  const fontStyle =
    "text-white font-light text-md sm:text-sm self-center sm:self-auto";

  return (
    <div className="flex flex-row flex-wrap w-full sm:h-72 bg-zinc-800 p-12 margin-pc">
      <div className="flex flex-col mt-2 sm:mt-0 w-full sm:w-1/4 h-full justify-center">
        <a className={fontStyle}>O Mestre das Cores</a>
        <a className={fontStyle}>Recanto do Sol</a>
        <a className={fontStyle}>Campinas, São Paulo</a>
      </div>
      <div className="flex flex-col mt-6 sm:mt-0 w-full sm:w-1/4 h-full justify-center">
        <a className={fontStyle}>+55 19 99999-9999</a>
        <a className={fontStyle}>+55 19 99999-9999</a>
        <a className={fontStyle}>omestredascores@gmail.com</a>
      </div>
      <div className="flex flex-col mt-6 sm:mt-0 w-full sm:w-1/4 h-full justify-center">
        <a className={fontStyle}>Seg a Sexta - 9h-18h</a>
        <a className={fontStyle}>Sábado 10h - 16h</a>
      </div>
      <div className="flex flex-col mt-6 sm:mt-0 w-full sm:w-1/4 h-full justify-center">
        <div className="bg-gray-50 w-full h-2/4 rounded-2xl"></div>
      </div>
    </div>
  );
};
