import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contacto() {
  return (
    <section id="contacto" className="pt-24 text-center fade-in">
      <h3 className="text-2xl font-bold mb-4">Contáctame</h3>
      <p className="text-gray-300 mb-6 max-w-xl mx-auto">
        ¿Tienes una propuesta, colaboración o estás interesado en trabajar conmigo? Puedes contactarme a través de las siguientes plataformas:
      </p>
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="mailto:cam.chavez@duocuc.cl"
          className="hover:text-neon transform transition duration-300 ease-in-out hover:scale-110"
          aria-label="Correo"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/CChavez720"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neon transform transition duration-300 ease-in-out hover:scale-110"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/camilo-antonio-chavez-chavez-7b1151373/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neon transform transition duration-300 ease-in-out hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
