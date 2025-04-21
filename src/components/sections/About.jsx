import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "CSS",
    "JQuery",
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

const backendSkills = ["Java", "Python", "Node.js", "AWS", "MongoDB", "GraphQL", "MySQL", "Spring", "Express.js"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >

      <RevealOnScroll>
      
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Sobre Mí
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">              
            Desarrollador apasionado con experiencia en crear aplicaciones web escalables y diseñar soluciones innovadoras que mejoran la experiencia del usuario.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Educación </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Lic. En Literatura y Lingüística</strong> - Universidad de Chile (2019 - 2020)</li>
                <li>
                  <strong> Técnico en Analista Programador </strong> - DUOCUC
                  (2024-2026)
                </li>
                <li>
                  <strong>Bootcamp Desarrollo FullStack</strong> - Generation Chile (2024-2025)
                </li>
                <li>
                  <strong>Cert. Create REST APIs with Spring and Java</strong> - Codecademy (2025)
                </li>                
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Experiencia Laboral </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Freelance (2024 - Presente){" "}
                  </h4>
                  <p>
                  Desarrollo de sitios responsivos, usables y optimizados con buenas prácticas en HTML, CSS, JavaScript y frameworks.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Técnico en Dimensionado en Homecenter Sodimac (2023 - Presente){" "}
                  </h4>
                  <p>
                    Optimización de recursos, mantenimiento de herramientas y servicio técnico personalizado para clientes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Traductor Contact-Center (2022-2023){" "}
                  </h4>
                  <p>
                    Traducción en tiempo real, resolución de consultas y documentación en CRM para clientes y agentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};