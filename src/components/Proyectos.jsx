export default function Proyectos() {
  return (
    <section id="proyectos" className="fade-in pt-24 mb-24">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8 border-b-2 border-neon inline-block">Proyectos</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta 1 */}
          <div className="border border-glitch rounded-md p-6 hover:shadow-glitch transition">
            <h4 className="font-bold text-lg mb-2">SARA – IA para prevenir abandono escolar</h4>
            <p className="text-sm text-gray-300 mb-3">
              Sistema predictivo con aprendizaje automático y visualización de riesgo.
              Apoya a colegios vulnerables.
            </p>
            <a href="https://github.com/CChavez720/SARA" className="text-blue-400 hover:underline">Ver en GitHub</a>
          </div>

          {/* Tarjeta 2 */}
          <div className="border border-glitch rounded-md p-6 hover:shadow-glitch transition">
            <h4 className="font-bold text-lg mb-2">E-commerce React + Java</h4>
            <p className="text-sm text-gray-300 mb-3">
              Tienda moderna con frontend React, backend Java y panel administrativo para productos y pedidos.
            </p>
            <a href="https://github.com/CChavez720/ecommerce" className="text-blue-400 hover:underline">Ver en GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
