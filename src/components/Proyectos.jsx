export default function Proyectos() {
  return (
    <section id="proyectos" className="fade-in pt-24 mb-24">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8 border-b-2 border-neon inline-block">Proyectos</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta 1 */}
          <div className="border border-glitch rounded-md p-6 hover:shadow-glitch transition">
            <h4 className="font-bold text-lg mb-2">Snake Glitch – Juego en Python</h4>
            <p className="text-sm text-gray-300 mb-3">
              Versión mejorada del clásico Snake, desarrollada con Pygame. 
              Incluye enemigos "glitch", portales y efectos visuales únicos para una experiencia más desafiante.
            </p>
            <a href="https://github.com/CChavez720/SnakeGlitch" 
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            >Ver en GitHub</a>
          </div>

          {/* Tarjeta 2 */}
          <div className="border border-glitch rounded-md p-6 hover:shadow-glitch transition">
            <h4 className="font-bold text-lg mb-2">RegistrAPP – Asistencia con QR y Geolocalización</h4>
            <p className="text-sm text-gray-300 mb-3">
              Aplicación para registrar asistencia mediante códigos QR y validación por geolocalización,
              optimizando el control de presencia en eventos y clases.
            </p>
            <a href="https://github.com/CChavez720/RegistrAPP" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
            >Ver en GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
