import React, { useEffect, useState } from "react";
import photo from "./foto-fernando.webp";
import cvFile from "./Fernando_Alegre_CV.pdf";
import logoMeli from "./logos/mercadolibre.webp";
import logoOh from "./logos/ohgiftcard.webp";
import logoBaufest from "./logos/baufest.webp";
import { FaJava, FaLinkedin } from "react-icons/fa";
import { SiSpringboot, SiDocker, SiGit, SiMysql, SiPostman, SiJunit5, SiCursor, SiClaude, SiGithubcopilot, SiGooglegemini, SiModelcontextprotocol, SiGo, SiApachemaven, SiGradle } from "react-icons/si";
import { BsOpenai } from "react-icons/bs";
import { TbApi, TbTopologyStar3, TbTestPipe, TbMail, TbDownload, TbCode, TbStack2, TbSitemap, TbUsersGroup, TbMapPin, TbBrain, TbRobot, TbPuzzle } from "react-icons/tb";

// Boceto de portfolio — Fernando Alegre
// Requiere: react-icons, las fuentes "Bricolage Grotesque" e "IBM Plex Sans" (Google Fonts),
// y en la misma carpeta: foto-fernando.webp, Fernando_Alegre_CV.pdf y la carpeta logos/.

const EMAIL = "falegre777@gmail.com";
const LINKEDIN = "https://linkedin.com/in/fernando-alegre/";

// ---------- Contenido en español e inglés ----------
const content = {
  es: {
    nav: { experience: "Experiencia", day: "Mi día", cases: "Casos", contact: "Contacto" },
    switchTo: "EN",
    switchLabel: "Ver en inglés",
    presents: "Un portfolio de",
    role: "Ingeniero de software backend",
    credits: [
      ["Lenguajes", "Java y Go"],
      ["Framework", "Spring Boot"],
      ["Arquitectura", "Microservicios y APIs REST"],
      ["Equipo actual", "Créditos, Mercado Libre"],
      ["Desde", "Buenos Aires, Argentina"],
    ],
    ctaExperience: "Ver experiencia",
    ctaCv: "Descargar CV",
    aboutTitle: "Sobre mí",
    about:
      "Programo backend con Java y Spring. Me enfoco en soluciones eficientes y escalables, con fuerte orientación al trabajo en equipo, la responsabilidad y la mejora continua.",
    photoAlt: "Foto de Fernando Alegre",
    expTitle: "Experiencia",
    expLead: "Cinco años construyendo backend, de Jr a Middle.",
    logoAlt: "Logo de",
    jobs: [
      { period: "May 2026 – hoy", role: "Ingeniero de software, Middle", items: ["Desarrollo backend en el equipo de Créditos."] },
      {
        period: "2023 – 2026",
        role: "Software Developer Ssr",
        items: [
          "Resolución de tareas de complejidad media con buenas prácticas y la estrategia de calidad definida.",
          "Diseño y documentación de flujos medios y complejos; participación en mejoras de arquitectura.",
          "Ciclo completo de desarrollo, desde la idea hasta la implementación y las pruebas.",
          "Desarrollo de APIs REST.",
        ],
      },
      {
        period: "2021 – 2023",
        role: "Software Developer Jr",
        items: [
          "Desarrollo de funcionalidades según requerimientos.",
          "Corrección de errores y mantenimiento de código existente.",
          "Documentación y pruebas unitarias.",
        ],
      },
    ],
    dayTitle: "Un día de trabajo",
    draft: "Borrador",
    dayLead: "Cómo se ve una jornada típica, de la planificación al despliegue.",
    day: [
      ["Mañana", "Planificación con el equipo", "Repasamos prioridades y bloqueos del día."],
      ["Diseño", "Pensar el flujo antes del código", "Diagramo y documento cómo viaja cada request entre servicios."],
      ["Desarrollo", "Código y pruebas", "Implemento en Java y Spring Boot, con tests en JUnit y Mockito."],
      ["Revisión", "Code review", "Reviso y recibo feedback de pull requests del equipo."],
      ["Cierre", "Despliegue y seguimiento", "Verifico que lo nuevo funcione bien en cada ambiente."],
    ],
    casesTitle: "Casos de estudio",
    casesLead: "Proyectos contados en detalle: el problema, cómo lo resolví y qué aprendí.",
    cases: [
      ["Créditos en Mercado Libre", "Backend para productos de crédito"],
      ["APIs REST en Oh! Gift Card", "Diseño y documentación de flujos"],
      ["Mis comienzos en Baufest", "De requerimiento a funcionalidad"],
    ],
    soon: "En preparación",
    skillsTitle: "Habilidades",
    skillGroups: ["Lenguajes, frameworks y build", "Arquitectura", "Datos", "Calidad", "Herramientas", "Herramientas de IA", "Desarrollo con IA"],
    microservices: "Microservicios",
    restApis: "APIs REST",
    agents: "Agentes",
    eduTitle: "Formación",
    education: [
      ["Analista de Sistemas", "ISFT N°172", "2019 – 2022"],
      ["Técnico Universitario en Artes Audiovisuales", "Universidad Nacional de Avellaneda", "2013 – 2018"],
    ],
    langTitle: "Idiomas",
    langs: "Español nativo, inglés A2",
    contactTitle: "Hablemos",
    sendMail: "Enviar mail",
  },
  en: {
    nav: { experience: "Experience", day: "My day", cases: "Case studies", contact: "Contact" },
    switchTo: "ES",
    switchLabel: "Ver en español",
    presents: "A portfolio by",
    role: "Backend software engineer",
    credits: [
      ["Languages", "Java and Go"],
      ["Framework", "Spring Boot"],
      ["Architecture", "Microservices and REST APIs"],
      ["Current team", "Credits, Mercado Libre"],
      ["Based in", "Buenos Aires, Argentina"],
    ],
    ctaExperience: "See experience",
    ctaCv: "Download CV",
    aboutTitle: "About me",
    about:
      "I build backend systems with Java and Spring. I focus on efficient, scalable solutions, with a strong commitment to teamwork, ownership and continuous improvement.",
    photoAlt: "Photo of Fernando Alegre",
    expTitle: "Experience",
    expLead: "Five years building backend, from Junior to Mid-level.",
    logoAlt: "Logo of",
    jobs: [
      { period: "May 2026 – present", role: "Software Engineer, Mid-level", items: ["Backend development on the Credits team."] },
      {
        period: "2023 – 2026",
        role: "Software Developer, Semi-Senior",
        items: [
          "Delivered medium-complexity tasks following best practices and the team's quality strategy.",
          "Designed and documented medium and complex flows; took part in architecture improvements.",
          "Worked across the full development cycle, from idea to implementation and testing.",
          "Built REST APIs.",
        ],
      },
      {
        period: "2021 – 2023",
        role: "Software Developer, Junior",
        items: [
          "Built features based on requirements.",
          "Fixed bugs and maintained existing code.",
          "Wrote documentation and unit tests.",
        ],
      },
    ],
    dayTitle: "A day at work",
    draft: "Draft",
    dayLead: "What a typical day looks like, from planning to deployment.",
    day: [
      ["Morning", "Planning with the team", "We go over the day's priorities and blockers."],
      ["Design", "Flow before code", "I diagram and document how each request moves between services."],
      ["Build", "Code and tests", "I implement in Java and Spring Boot, with JUnit and Mockito tests."],
      ["Review", "Code review", "I review my team's pull requests and get feedback on mine."],
      ["Wrap-up", "Deploy and monitor", "I check that new changes work well in every environment."],
    ],
    casesTitle: "Case studies",
    casesLead: "Projects in depth: the problem, how I solved it and what I learned.",
    cases: [
      ["Credits at Mercado Libre", "Backend for credit products"],
      ["REST APIs at Oh! Gift Card", "Designing and documenting flows"],
      ["Getting started at Baufest", "From requirement to feature"],
    ],
    soon: "Coming soon",
    skillsTitle: "Skills",
    skillGroups: ["Languages, frameworks and build", "Architecture", "Data", "Testing", "Tools", "AI tools", "AI development"],
    microservices: "Microservices",
    restApis: "REST APIs",
    agents: "Agents",
    eduTitle: "Education",
    education: [
      ["Systems Analyst", "ISFT N°172", "2019 – 2022"],
      ["University Technician in Audiovisual Arts", "Universidad Nacional de Avellaneda", "2013 – 2018"],
    ],
    langTitle: "Languages",
    langs: "Spanish (native), English (A2)",
    contactTitle: "Let's talk",
    sendMail: "Send an email",
  },
};

// Íconos de la portada, en el mismo orden que "credits"
const creditIcons = [TbCode, TbStack2, TbSitemap, TbUsersGroup, TbMapPin];

const companies = [
  { name: "Mercado Libre", logo: logoMeli },
  { name: "Oh! Gift Card", logo: logoOh },
  { name: "Baufest", logo: logoBaufest },
];

// [nombre, ícono, color de marca] — sin color usa el del texto
const skillTools = (t) => [
  [["Java", FaJava, "#E76F00"], ["Go", SiGo, "#00ADD8"], ["Spring Boot", SiSpringboot, "#6DB33F"], ["Maven", SiApachemaven, "#C71A36"], ["Gradle", SiGradle, "#02303A"]],
  [[t.microservices, TbTopologyStar3], [t.restApis, TbApi]],
  [["MySQL", SiMysql, "#4479A1"]],
  [["JUnit", SiJunit5, "#25A162"], ["Mockito", TbTestPipe]],
  [["Docker", SiDocker, "#2496ED"], ["Git", SiGit, "#F05032"], ["Postman", SiPostman, "#FF6C37"]],
  [["Cursor", SiCursor], ["Claude", SiClaude, "#D97757"], ["ChatGPT", BsOpenai], ["Copilot", SiGithubcopilot], ["Gemini", SiGooglegemini, "#8E75B2"]],
  [["LLMs", TbBrain], [t.agents, TbRobot], ["MCP", SiModelcontextprotocol], ["Skills", TbPuzzle]],
];

// ---------- Scroll suave que desacelera ----------
// Curva tipo cubic-bezier(0.33, 0, 0.15, 1): arranca suave y frena de a poco al final.
function bezier(x1, y1, x2, y2) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sx = (u) => ((ax * u + bx) * u + cx) * u;
  const sy = (u) => ((ay * u + by) * u + cy) * u;
  return (x) => {
    let lo = 0, hi = 1, u = x;
    for (let i = 0; i < 24; i++) {
      const v = sx(u);
      if (Math.abs(v - x) < 1e-5) break;
      v < x ? (lo = u) : (hi = u);
      u = (lo + hi) / 2;
    }
    return sy(u);
  };
}
const ease = bezier(0.33, 0, 0.15, 1);
let activeScroll = 0; // permite cortar un scroll anterior si se hace otro click

function targetFor(el) {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const y = el.getBoundingClientRect().top + window.scrollY - 16;
  return Math.max(0, Math.min(y, max)); // no apuntar más abajo de lo que se puede bajar
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = window.scrollY;
  const jump = (y) => window.scrollTo({ top: y, behavior: "instant" });
  const distance = Math.abs(targetFor(el) - start);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || distance < 2) {
    jump(targetFor(el));
    return;
  }
  // Más distancia = un poco más de tiempo, entre 0,9 y 1,5 segundos
  const duration = Math.min(1500, Math.max(900, distance * 0.4));
  const token = ++activeScroll;
  const stop = () => {
    activeScroll++;
    ["wheel", "touchstart", "keydown"].forEach((ev) => window.removeEventListener(ev, stop));
  };
  ["wheel", "touchstart", "keydown"].forEach((ev) => window.addEventListener(ev, stop, { passive: true }));

  let t0 = null;
  const frame = (now) => {
    if (token !== activeScroll) return;
    if (t0 === null) t0 = now;
    const p = Math.min(1, (now - t0) / duration);
    // El destino se recalcula en cada cuadro por si algo cambia de tamaño (imágenes, fuentes)
    const end = targetFor(el);
    jump(start + (end - start) * ease(p));
    if (p < 1) requestAnimationFrame(frame);
    else {
      stop();
      // Actualiza la URL con la sección. En vistas previas embebidas (iframe) el navegador
      // puede bloquearlo; en ese caso se ignora y el scroll funciona igual.
      try {
        history.replaceState(null, "", "#" + id);
      } catch (e) {}
    }
  };
  requestAnimationFrame(frame);
}

function SectionLink({ to, className, children }) {
  return (
    <a
      href={"#" + to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(to);
      }}
    >
      {children}
    </a>
  );
}

// ---------- Estilos ----------
const css = `
:root{
  --night:#101A2E; --night-ink:#E8ECF4; --night-muted:#8E9AB3;
  --bg:#F3F5F8; --ink:#172033; --muted:#5B6577; --line:#D5DBE5;
  --accent:#2F5BEA; --accent-soft:#DCE5FF;
  --display:"Bricolage Grotesque", system-ui, sans-serif;
  --body:"IBM Plex Sans", system-ui, sans-serif;
  --pop:cubic-bezier(.3,.7,.4,1.4);
}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--ink);font-family:var(--body);font-size:17px;line-height:1.6}
a{color:var(--accent)}
a:focus-visible,button:focus-visible{outline:3px solid var(--accent);outline-offset:3px;border-radius:2px}
.wrap{max-width:1040px;margin:0 auto;padding:0 24px}

/* Portada: créditos de cine */
.hero{background:var(--night);color:var(--night-ink);min-height:100vh;display:flex;flex-direction:column}
.nav{display:flex;justify-content:space-between;align-items:center;padding:22px 24px;max-width:1040px;width:100%;margin:0 auto}
.nav strong{font-family:var(--display);font-weight:600;font-size:18px}
.nav ul{display:flex;gap:24px;list-style:none}
.nav ul a{color:var(--night-muted);text-decoration:none;font-size:15px}
.nav ul a:hover{color:var(--night-ink)}
.nav-right{display:flex;align-items:center;gap:24px}
.nav-in{display:inline-flex}
.nav-in svg{width:20px;height:20px;color:#0A66C2;background:#fff;border-radius:3px;transition:transform .2s var(--pop)}
.nav-in:hover svg{transform:scale(1.2)}
.lang{background:none;border:1px solid #33415E;color:var(--night-ink);font:600 13px var(--body);padding:5px 10px;border-radius:999px;cursor:pointer;transition:border-color .2s}
.lang:hover{border-color:var(--night-ink)}
.roll{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:48px 24px 72px;overflow:hidden}
.roll-inner{animation:rise 2.6s cubic-bezier(.2,.7,.2,1) both}
@keyframes rise{from{transform:translateY(40vh);opacity:0}to{transform:none;opacity:1}}
.presents{color:var(--night-muted);font-size:16px;margin-bottom:14px}
.name{font-family:var(--display);font-weight:700;font-size:clamp(48px,9vw,112px);line-height:.95;letter-spacing:-.02em}
.role{font-family:var(--display);font-size:clamp(20px,2.6vw,28px);color:var(--night-muted);margin-top:16px}
.credits{margin:56px auto 0;display:grid;grid-template-columns:1fr 1fr;column-gap:28px;row-gap:12px;max-width:560px}
.credits dt{display:flex;justify-content:flex-end;align-items:center;gap:8px;color:var(--night-muted);font-size:15px;height:30px}
.credits dt svg{width:18px;height:18px;flex:none;color:#7FA0FF}
.credits dd{text-align:left;font-family:var(--display);font-size:20px;line-height:30px}
.cta{margin-top:56px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border-radius:999px;font-weight:500;text-decoration:none;font-size:16px;transition:transform .2s,border-color .2s}
.btn svg{width:18px;height:18px;transition:transform .2s var(--pop)}
.btn:hover{transform:translateY(-2px)}
.btn:hover svg{transform:translateY(2px)}
.btn-main{background:var(--night-ink);color:var(--night)}
.btn-ghost{color:var(--night-ink);border:1px solid #33415E}
.btn-ghost:hover{border-color:var(--night-ink)}

/* Secciones */
section{padding:96px 0;border-bottom:1px solid var(--line)}
h2{font-family:var(--display);font-weight:700;font-size:clamp(32px,4.5vw,48px);letter-spacing:-.015em;line-height:1.05;margin-bottom:12px}
.lead{color:var(--muted);max-width:60ch;margin-bottom:48px}
.about .wrap{display:grid;grid-template-columns:240px 1fr;gap:56px;align-items:center}
.photo{width:240px;height:240px;border-radius:50%;display:block;box-shadow:0 0 0 8px var(--bg),0 0 0 9px var(--line)}
.about p{font-size:clamp(20px,2.4vw,26px);line-height:1.45;max-width:34ch;font-family:var(--display);font-weight:400}

/* Experiencia: línea de tiempo */
.timeline{list-style:none;position:relative;padding-left:32px}
.timeline::before{content:"";position:absolute;left:6px;top:8px;bottom:8px;width:2px;background:var(--line)}
.job{position:relative;padding-bottom:48px}
.job:last-child{padding-bottom:0}
.job::before{content:"";position:absolute;left:-32px;top:17px;width:14px;height:14px;border-radius:50%;background:var(--bg);border:2px solid var(--muted)}
.job.current::before{background:var(--accent);border-color:var(--accent);box-shadow:0 0 0 5px var(--accent-soft)}
.job-head{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
.job-title{display:flex;align-items:center;gap:14px}
.logo{width:48px;height:48px;border-radius:12px;border:1px solid var(--line);display:block;flex:none;transition:transform .2s var(--pop),box-shadow .2s}
.job-title:hover .logo{transform:scale(1.15);box-shadow:0 6px 16px rgba(23,32,51,.14)}
.job h3{font-family:var(--display);font-size:26px;font-weight:600}
.job-title h3{transform-origin:left center;transition:transform .2s var(--pop),color .2s}
.job-title:hover h3{transform:scale(1.08);color:var(--accent)}
.job-title{cursor:default}
.period{color:var(--muted);font-size:15px;white-space:nowrap}
.job .r{color:var(--accent);font-weight:500;margin:8px 0 12px 62px}
.job ul{margin-left:62px;padding-left:20px;color:var(--muted);max-width:68ch}
.job li{margin-bottom:6px}

/* Día a día */
.day{display:grid;grid-template-columns:repeat(5,1fr);border-top:2px solid var(--ink)}
.step{padding:20px 18px 0 0}
.step .when{font-size:14px;color:var(--accent);font-weight:600;margin-bottom:8px}
.step h3{font-family:var(--display);font-size:20px;font-weight:600;line-height:1.2;margin-bottom:8px}
.step p{color:var(--muted);font-size:15px;line-height:1.5}
.draft{display:inline-block;background:var(--accent-soft);color:var(--accent);font-size:13px;font-weight:600;padding:3px 10px;border-radius:999px;margin-left:10px;vertical-align:middle}

/* Casos */
.cases{list-style:none}
.case{display:flex;justify-content:space-between;align-items:baseline;gap:24px;padding:28px 0;border-top:1px solid var(--line)}
.case:last-child{border-bottom:1px solid var(--line)}
.case h3{font-family:var(--display);font-size:clamp(22px,3vw,32px);font-weight:600;line-height:1.15}
.case p{color:var(--muted)}
.status{color:var(--muted);font-size:15px;white-space:nowrap}

/* Habilidades y formación */
.two{display:grid;grid-template-columns:1fr 1fr;gap:64px}
.skill{display:grid;grid-template-columns:180px 1fr;gap:16px;padding:14px 0;border-top:1px solid var(--line)}
.skill dt{color:var(--muted);font-size:15px}
.skill dd{display:flex;flex-wrap:wrap;gap:8px 20px}
.tool{display:inline-flex;align-items:center;gap:8px;font-weight:500}
.tool svg{width:22px;height:22px;flex:none;color:var(--ink);transition:transform .2s var(--pop)}
.tool:hover svg{transform:scale(1.3)}
.edu{padding:14px 0;border-top:1px solid var(--line)}
.edu h3{font-size:18px;font-weight:600}
.edu p{color:var(--muted);font-size:15px}

/* Contacto */
.contact{background:var(--night);color:var(--night-ink);border:0;text-align:center}
.contact h2{margin-bottom:20px}
.contact .mail{font-family:var(--display);font-size:clamp(22px,4vw,40px);color:var(--night-ink);text-decoration-color:var(--accent);text-underline-offset:8px}
.links{display:flex;justify-content:center;gap:12px;margin-top:32px;flex-wrap:wrap}
.links a{display:inline-flex;align-items:center;gap:10px;padding:12px 20px;border:1px solid #33415E;border-radius:999px;color:var(--night-ink);text-decoration:none;font-weight:500;transition:border-color .2s}
.links a:hover{border-color:var(--night-ink)}
.links svg{width:20px;height:20px;transition:transform .2s var(--pop)}
.links a:hover svg{transform:scale(1.2)}
.links .in svg{color:#0A66C2;background:#fff;border-radius:3px}

@media (max-width:820px){
  .nav ul{display:none}
  .about .wrap{grid-template-columns:1fr;gap:32px}
  .job .r,.job ul{margin-left:0}
  .logo{width:40px;height:40px;border-radius:10px}
  .photo{width:160px;height:160px}
  .day{grid-template-columns:1fr;border-top:0}
  .step{border-top:2px solid var(--ink);padding:16px 0 24px}
  .two{grid-template-columns:1fr;gap:48px}
  .skill{grid-template-columns:1fr;gap:2px}
  .case{flex-direction:column;gap:6px}
  section{padding:72px 0}
}
@media (prefers-reduced-motion:reduce){
  .roll-inner{animation:none}
  .btn:hover,.btn:hover svg,.tool:hover svg,.job-title:hover .logo,.job-title:hover h3,.links a:hover svg,.nav-in:hover svg{transform:none}
}
`;

// ---------- Página ----------
function App() {
  const [lang, setLang] = useState(() =>
    typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("en") ? "en" : "es"
  );
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const cvLink = (className) => (
    <a className={className} href={cvFile} download="Fernando_Alegre_CV.pdf">
      <TbDownload aria-hidden="true" />
      {t.ctaCv}
    </a>
  );

  return (
    <>
      <style>{css}</style>

      <header className="hero">
        <nav className="nav" aria-label="Principal">
          <strong>FA</strong>
          <div className="nav-right">
            <ul>
              <li><SectionLink to="experiencia">{t.nav.experience}</SectionLink></li>
              <li><SectionLink to="dia">{t.nav.day}</SectionLink></li>
              <li><SectionLink to="casos">{t.nav.cases}</SectionLink></li>
              <li><SectionLink to="contacto">{t.nav.contact}</SectionLink></li>
            </ul>
            <a className="nav-in" href={LINKEDIN} aria-label="LinkedIn"><FaLinkedin /></a>
            <button className="lang" onClick={() => setLang(lang === "es" ? "en" : "es")} aria-label={t.switchLabel}>
              {t.switchTo}
            </button>
          </div>
        </nav>
        <div className="roll">
          <div className="roll-inner">
            <p className="presents">{t.presents}</p>
            <h1 className="name">Fernando Alegre</h1>
            <p className="role">{t.role}</p>
            <dl className="credits">
              {t.credits.map(([k, v], i) => {
                const Icon = creditIcons[i];
                return (
                <React.Fragment key={k}>
                  <dt><Icon aria-hidden="true" />{k}</dt>
                  <dd>{v}</dd>
                </React.Fragment>
                );
              })}
            </dl>
            <div className="cta">
              <SectionLink to="experiencia" className="btn btn-main">{t.ctaExperience}</SectionLink>
              {cvLink("btn btn-ghost")}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="about">
          <div className="wrap">
            <img className="photo" src={photo} alt={t.photoAlt} width="240" height="240" />
            <div>
              <h2>{t.aboutTitle}</h2>
              <p>{t.about}</p>
            </div>
          </div>
        </section>

        <section id="experiencia">
          <div className="wrap">
            <h2>{t.expTitle}</h2>
            <p className="lead">{t.expLead}</p>
            <ol className="timeline">
              {/* Orden cronológico: del primer trabajo al actual (el actual es el índice 0 de la lista) */}
              {t.jobs.map((j, i) => ({ j, i })).reverse().map(({ j, i }) => (
                <li key={companies[i].name} className={"job" + (i === 0 ? " current" : "")}>
                  <div className="job-head">
                    <div className="job-title">
                      <img className="logo" src={companies[i].logo} alt={t.logoAlt + " " + companies[i].name} width="48" height="48" />
                      <h3>{companies[i].name}</h3>
                    </div>
                    <span className="period">{j.period}</span>
                  </div>
                  <p className="r">{j.role}</p>
                  <ul>{j.items.map((x) => <li key={x}>{x}</li>)}</ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="dia">
          <div className="wrap">
            <h2>{t.dayTitle} <span className="draft">{t.draft}</span></h2>
            <p className="lead">{t.dayLead}</p>
            <div className="day">
              {t.day.map(([when, title, text]) => (
                <div className="step" key={when}>
                  <p className="when">{when}</p>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="casos">
          <div className="wrap">
            <h2>{t.casesTitle}</h2>
            <p className="lead">{t.casesLead}</p>
            <ul className="cases">
              {t.cases.map(([title, sub]) => (
                <li className="case" key={title}>
                  <div>
                    <h3>{title}</h3>
                    <p>{sub}</p>
                  </div>
                  <span className="status">{t.soon}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="wrap two">
            <div>
              <h2>{t.skillsTitle}</h2>
              <dl>
                {skillTools(t).map((list, i) => (
                  <div className="skill" key={t.skillGroups[i]}>
                    <dt>{t.skillGroups[i]}</dt>
                    <dd>
                      {list.map(([name, Icon, color]) => (
                        <span className="tool" key={name}>
                          <Icon aria-hidden="true" style={color ? { color } : undefined} />
                          {name}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2>{t.eduTitle}</h2>
              {t.education.map(([title, place, years]) => (
                <div className="edu" key={title}>
                  <h3>{title}</h3>
                  <p>{place}, {years}</p>
                </div>
              ))}
              <div className="edu">
                <h3>{t.langTitle}</h3>
                <p>{t.langs}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="contact">
          <div className="wrap">
            <h2>{t.contactTitle}</h2>
            <a className="mail" href={"mailto:" + EMAIL}>{EMAIL}</a>
            <div className="links">
              <a className="in" href={LINKEDIN}><FaLinkedin aria-hidden="true" />LinkedIn</a>
              <a href={"mailto:" + EMAIL}><TbMail aria-hidden="true" />{t.sendMail}</a>
              {cvLink("")}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
