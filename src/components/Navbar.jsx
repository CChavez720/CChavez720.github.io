import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-techblue bg-opacity-90 backdrop-blur-md fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <a
          href="#inicio"
          className="text-2xl font-bold tracking-widest text-white hover:text-neon transform transition-transform duration-300 hover:scale-110"
        >
          Camilo.dev
        </a>
        <ul className="flex gap-6 text-sm md:text-base mt-4 md:mt-0">
          <li>
            <a
              href="#sobre-mi"
              className="inline-block text-white hover:text-neon transform transition duration-300 ease-in-out hover:scale-110"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className="inline-block text-white hover:text-neon transform transition duration-300 ease-in-out hover:scale-110"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="inline-block text-white hover:text-neon transform transition duration-300 ease-in-out hover:scale-110"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
