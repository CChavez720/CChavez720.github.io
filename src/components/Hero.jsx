import Tetraedro3D from "./Tetraedro";
import Piramide3D from "./Piramide3D";
import Teseracto3D from "./Teseracto3D";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-24 mb-24"
    >
      {/* Figuras laterales */}
      <Tetraedro3D
        className="hidden md:block absolute top-16 left-24 w-56 h-56 lg:w-72 lg:h-72 z-0"
      />
      <Piramide3D
        className="hidden md:block absolute bottom-16 right-24 w-60 h-60 lg:w-80 lg:h-80 z-0"
      />

      {/* Teseracto central */}
      <Teseracto3D className="opacity-30 z-0" />

      {/* Contenido */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 pb-3 leading-[1.2] bg-gradient-to-r from-neon via-white to-glitch text-transparent bg-clip-text">
          Hola, soy Camilo
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6">
          Ingeniero en Informática.
        </p>
      </div>
    </section>
  );
}
