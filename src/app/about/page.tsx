import Footer from "@/components/Footer";
import LogoBlack from "@/components/LogoBlack";
import { aboutInfo } from "@/constants";
import { montserrat, karla, roboto_Mono, flow_Circular } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const about = () => {
  return (
    <div className="flex flex-col pt-14 text-black">
      <section
        className={`${montserrat.className} flex min-h-screen flex-col justify-center gap-3 px-8 pt-12 sm:pt-0 md:flex-row md:items-center md:px-12 xl:px-36`}
      >
        <div className="flex w-full flex-col gap-6">
          <p className="w-full text-3xl font-bold md:text-4xl lg:text-5xl">
            Cambiando la forma en la que visualizas tus inversiones
          </p>
          <div
            className={`${flow_Circular.className} -mt-6 pl-1 text-[#ec600a]`}
          >
            ........... .....
          </div>
          <p className="text-md -mt-4 w-full font-medium">
            Fundada con la idea de crear una herramienta sencilla para la
            visualización y cálculo de inversiones, Interes-Plus ofrece
            tecnología que reduce errores humanos y proporciona resultados
            confiables. Los gráficos ayudan a visualizar los datos y a
            comprender mejor las inversiones a lo largo del tiempo.
          </p>
        </div>
        <div className="my-10 flex justify-center md:ml-20 md:w-full">
          <Image
            src={"/icon/undraw_data_re_80ws (1).svg"}
            alt="icon"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-[340px] md:w-full"
          />
        </div>
      </section>

      <section
        className={` ${montserrat.className} > flex min-h-[35rem] flex-col gap-12 bg-gray-200 px-8 pb-24 pt-20 md:gap-24 md:px-20 lg:px-36`}
      >
        <div className="flex h-80 flex-1 flex-col justify-between gap-12 border-b border-gray-500 pb-20 md:flex-row md:gap-20">
          <p className="flex-1 text-center text-4xl font-bold md:text-start">
            Diseñado con pasión <br></br>
            para tus finanzas
          </p>

          <div className="flex flex-1 flex-col gap-6 text-sm font-semibold text-gray-500">
            <p>
              Creemos en el poder de las herramientas financieras para fomentar
              conexiones educativas y capacitar a los profesionales financieros
              para ofrecer experiencias de inversión confiables y productivas.
            </p>
            <p>
              También creemos en el poder de la tecnología para ayudar a los
              equipos financieros a desbloquear su creatividad y conectarse con
              más inversores que nunca.
            </p>
            <p>
              Estamos comprometidos a ayudar a nuestros usuarios a hacer crecer
              sus inversiones más rápido al liberar el potencial de las
              herramientas financieras y la tecnología.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
          {aboutInfo.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <p
                className={` ${karla.className} text-2xl font-semibold lg:text-3xl`}
              >
                {item.title}
              </p>

              <span className="-mt-1 ml-2 h-[2px] w-16 bg-orange-500"></span>

              <p className="text-sm font-medium text-gray-600 lg:text-base">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-full w-full flex-col items-center justify-center px-8 pb-36 pt-24 md:flex-row md:px-16 lg:px-20">
        <div className="mr-8 hidden flex-1 lg:flex">
          <Image
            src={"/icon/undraw_my_personal_files_re_3q0p.svg"}
            alt="icon"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-[500px]"
          />
        </div>
        <div className={`${montserrat.className} flex flex-1 flex-col gap-8`}>
          <p className="text-4xl font-bold">Nuestra Historia</p>
          <p className="flex flex-col gap-4 text-sm md:gap-2 lg:text-base">
            <span>
              Este proyecto fue creado como parte de un proyecto universitario
              en la materia de Precálculo, encargado por el Lcdo. Luis David
              Mercedes. En esta asignación, se nos pidió representar un tema
              matemático a través de un proyecto que resolviera una problemática
              o ayudara de algún modo a la sociedad. Motivados por este reto,
              nuestro equipo decidió abordar el tema de las funciones
              exponenciales a través de los intereses financieros.
            </span>
            <span>
              Con la idea inicial en mente, nos pusimos manos a la obra y
              desarrollamos una representación de las funciones exponenciales
              aplicada al cálculo de intereses. Nuestro objetivo era demostrar
              cómo estas funciones matemáticas pueden ser útiles en la vida
              cotidiana, especialmente en el ámbito financiero.
            </span>

            <span>
              Además, surgió la idea de expandir el proyecto y crear una
              plataforma más completa que ofreciera una amplia gama de
              información sobre matemática financiera. Queríamos que los
              usuarios tuvieran acceso a recursos y herramientas que les
              facilitaran la comprensión de conceptos financieros y la toma de
              decisiones informadas. De este modo, nuestra plataforma no solo
              resuelve un problema académico, sino que también tiene el
              potencial de beneficiar a la sociedad en general, proporcionando
              un recurso valioso para la educación financiera.
            </span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default about;
