import Icons from "./components/Icons.jsx";

import { Info, Links } from "./data.js";

function App() {
  return (
    <>
      <section className="w-full relative min-h-screen">
        <div className="w-full md:w-[768px] xl:w-[1280px] mx-auto flex flex-col items-center gap-4 py-4">
          <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gray-300">
            LOGO
          </div>
          <p className="text-2xl font-bold text-center">{Info.title}</p>
        </div>

        <div className="pb-16">
          <div className="w-full md:w-[640px] mx-auto flex flex-col justify-center items-center gap-4 py-4 px-4">
            {Links.map((link) => {
              return (
                <>
                  <a
                    href={link.value}
                    target="_blank"
                    className="w-full relative flex items-center justify-center gap-2 p-3 border border-stone-100 hover:border-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white cursor-pointer text-lg hover:shadow-sm"
                  >
                    <Icons
                      name={link.type}
                      className="absolute right-8 size-12 text-stone-100"
                    />
                    {link.text}
                  </a>
                </>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 w-full bg-stone-100">
          <div className="w-full md:w-[768px] xl:w-[1280px] mx-auto py-4">
            <p className="text-center">واحد فناوری اطلاعات شهرداری رمکان</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
