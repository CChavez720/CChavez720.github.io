import Tetraedro from "./Tetraedro";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-24 mb-24"
    >
      <Tetraedro />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-neon via-white to-glitch text-transparent bg-clip-text">
          Hola, soy Camilo
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6">
          Ingeniero en Informática.
        </p>
      </div>
    </section>
  );
}
