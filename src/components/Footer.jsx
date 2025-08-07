import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-white py-8 px-4 mt-20 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Camilo Chávez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
