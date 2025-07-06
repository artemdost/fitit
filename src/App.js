import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/400.css";
import basketIcon from "./basket2.png";
import runman3 from "./runman3.png";
import runman2 from "./runman2.png";
import strongman from "./strongman.png";
import strongman2 from "./strongman2.png";
import manshort from "./manshort.png";
import yogawoman from "./yogawoman.png";

function App() {
  return (
    <>
      <div className=" bg-basegrey0 font-montserrat">
        <div className="HERO-SECTION pt-5 pb-28 bg-basegrey0 container mx-auto px-6 md:px-12 lg:px-24">
          <header className="pt-4 ">
            <div className="relative flex justify-center items-center">
              <div className="LOGO absolute left-0">
                <span className="font-montserrat font-extrabold text-4xl text-basewhite">
                  FIT
                </span>
                <span className="font-montserrat font-extrabold text-4xl text-baseorange">
                  IT
                </span>
              </div>
              <div className="NAVIGATION flex gap-10 items-center justify-between">
                <span className="font-montserrat text-3xl font-medium text-basewhite">
                  Программы
                </span>
                <span className="font-montserrat text-3xl font-medium text-basewhite">
                  Контакты
                </span>
              </div>
              <div className="BASKET absolute right-0">
                <img src={basketIcon} className="h-12"></img>
              </div>
            </div>
          </header>
          <div className="relative flex mt-20 justify-between px-24">
            <div className="mt-24 flex flex-col w-[600px]">
              <span className="text-7xl font-montserrat font-bold text-basewhite">
                ТВОЕ ТЕЛО — <br />
                <span className="text-baseorange">ТВОЯ СИЛА</span>
              </span>
              <span className="mt-5 font-montserrat text-3xl font-thin text-white">
                Начни путь к лучшей версии себя. <br />
                Наши программы тренировок помогут добиться результатов быстро и
                безопасно
              </span>
              <button className="mt-24 font-montserrat text-3xl font-semibold bg-baseorange text-basegrey0 py-4  rounded-xl w-[230px] ">
                Купить
              </button>
            </div>
            <div className="h-[600px] overflow-hidden">
              <img src={manshort}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="font-montserrat bg-basegrey0 pt-5">
        <div className=" bg-basegrey0 flex flex-col  container mx-auto px-6 md:px-12 lg:px-24">
          <span className="mx-auto text-white text-6xl font-semibold">
            Программы
          </span>
          <div className="1BLOCK mt-24 flex relative mx-24 px-12 bg-basegrey1 py-10 mb-10 rounded-[150px]">
            <img src={runman3} className="w-[300px]"></img>
            <div className="1TEXTBLOCK flex relative flex-col gap-6">
              <span className="abosulte left-0 mx-9 mt-8 text-5xl text-white font-semibold">
                <span className="text-baseorange">Кардио</span> тренировка
              </span>
              <div className="text-[27px] m-3 mx-9 text-white">
                Энергичная кардио тренировка для сжигания калорий, повышения
                выносливости и улучшения общего самочувствия. <br />
                Подходит для всех уровней подготовки.
              </div>
              <button className="mx-9 font-montserrat text-3xl font-semibold bg-baseorange text-basegrey0 py-4  rounded-xl w-[230px] ">
                Купить
              </button>
              <span className="absolute mt-96 right-0 text-[120px] text-baseorange font-semibold">
                1990₽
              </span>
            </div>
            <></>
          </div>
          <div className="1BLOCK mt-24 flex relative mx-24 px-12 bg-basegrey1 py-10 mb-10 rounded-[150px]">
            <img src={strongman2} className="w-[300px] scale-110"></img>
            <div className="1TEXTBLOCK flex relative flex-col gap-6">
              <span className="abosulte left-0 mx-9 mt-8 text-5xl text-white font-semibold">
                <span className="text-baseorange">Силовая</span> тренировка
              </span>
              <div className="text-[27px] m-3 mx-9 text-white">
                Комплекс упражнений для укрепления мышц, формирования рельефного
                тела и повышения физической силы. Достигаем целей шаг за шагом!
              </div>
              <button className="mx-9 font-montserrat text-3xl font-semibold bg-baseorange text-basegrey0 py-4  rounded-xl w-[230px] ">
                Купить
              </button>
              <span className="absolute mt-96 right-0 text-[120px] text-baseorange font-semibold">
                1990₽
              </span>
            </div>
            <></>
          </div>
          <div className="1BLOCK mt-24 flex relative mx-24 px-12 bg-basegrey1 py-10 mb-10 rounded-[150px]">
            <img src={yogawoman} className="mt-6 h-[300px] scale-100"></img>
            <div className="1TEXTBLOCK flex relative flex-col gap-6">
              <span className="abosulte left-0 mx-9 mt-8 text-5xl text-white font-semibold">
                <span className="text-baseorange">Йога</span> и растяжка
              </span>
              <div className="text-[27px] m-3 mx-9 text-white">
                Мягкие тренировки для развития гибкости, снятия стресса и
                улучшения осанки. Идеально для восстановления и гармонии тела и
                разума.
              </div>
              <button className="mb-9 mx-9 font-montserrat text-3xl font-semibold bg-baseorange text-basegrey0 py-4  rounded-xl w-[230px] ">
                Купить
              </button>
              <span className="absolute mt-80 right-0 text-[120px] text-baseorange font-semibold">
                1990₽
              </span>
            </div>
            <></>
          </div>
        </div>
      </div>
      <div className="bg-basegrey0 font-montserrat text-white flex justify-center pt-16 pb-10">
        © 2025 BITIT. Все права защищены.
      </div>
    </>
  );
}

export default App;
