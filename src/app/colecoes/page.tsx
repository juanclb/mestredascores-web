export default function Dashboard() {
  const imgUrl = `https://img.freepik.com/fotos-premium/uma-pintura-de-um-barco-que-e-pintado-com-um-ceu-azul-e-as-palavras-a-palavra-ao-lado_546042-528.jpg?w=2000`;

  return (
    <div className="flex flex-col min-h-screen min-w-screen w-100 h-1/2 margin-pc">
      <div
        id="image"
        className="overflow-hidden rounded-3xl mt-10 w-11/12 self-center content-center bg-white"
      >
        <img className="" src={imgUrl} alt="quadro" />
      </div>
      <div id="content" className="flex flex-col mt-5 w-11/12 self-center">
        <div id="title" className="self-center">
          <h1 className="text-5xl font-bold titleColor">O Navio Fantasma</h1>
        </div>
        <div
          id="explain"
          className="flex flex-row flex-wrap mt-5 justify-center"
        >
          <div className="flex flex-col w-1/3 items-center">
            <p className="text-2xl font-extrabold titleColor">Tipo</p>
            <p className="text-2xl font-bold text-neutral-500">
              Quadro Decorativo
            </p>
          </div>
          <div className="flex flex-col w-1/3 items-center">
            <p className="text-2xl font-extrabold titleColor">Material</p>
            <p className="text-2xl font-bold text-neutral-500">
              Pintura em Argamassa
            </p>
          </div>
          <div className="flex flex-col w-1/3 items-center">
            <p className="text-2xl font-extrabold titleColor">Valor</p>
            <p className="text-2xl font-bold text-neutral-500">R$1.500.000</p>
          </div>
          {/* <div id="explain-section-1">
            <p className="text-2xl font-bold titleColor">Autor</p>
            <p className="text-2xl font-bold titleColor">Mestre das Cores</p>
          </div> */}
          {/* <div id="explain-section-1" className="flex flex-col items-center">
            <p className="text-2xl font-bold titleColor">Tipo</p>
            <p className="text-2xl font-bold titleColor">Quadro Decorativo</p>
          </div>
          <div id="explain-section-2" className="flex flex-col items-center">
            <p className="text-2xl font-bold titleColor">Material</p>
            <p className="text-2xl font-bold titleColor">Pintura Argamassa</p>
          </div>
          <div id="explain-section-3" className="flex flex-col items-center">
            <p className="text-2xl font-bold titleColor">Valor</p>
            <p className="text-2xl font-bold titleColor">R$1.500.000</p>
          </div> */}
        </div>
        <p className="text-2xl font-bold titleColor">Descrição</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          provident possimus qui deserunt, inventore consectetur necessitatibus
          dolores velit blanditiis error odit id magnam, quam corrupti minima
          vel alias labore veritatis, vitae quidem assumenda maiores? Dicta sunt
          tempore magni eaque distinctio minima nesciunt, suscipit quia
          repellendus beatae vel saepe ut quae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          commodi unde porro saepe illo voluptatum deserunt similique, hic eius
          pariatur numquam expedita at tempora labore quidem laborum autem
          dolorum asperiores cupiditate. Voluptate unde accusamus vel soluta
          modi. Itaque harum neque eum voluptatem praesentium inventore debitis
          illo repellat assumenda! Libero quidem dignissimos cum beatae quasi a
          quisquam possimus, sint mollitia vero commodi dicta quod, molestiae,
          fugit animi inventore! Aliquam eligendi quis, hic illo adipisci ea
          itaque, libero quidem laudantium quam corporis reiciendis at suscipit
          dolorum architecto, nihil inventore praesentium quasi. Ipsum eos
          magnam quae quas iure saepe earum suscipit quod laborum.
        </p>
      </div>
    </div>
  );
}
