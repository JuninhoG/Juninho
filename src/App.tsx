/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Globe, 
  MousePointer2, 
  Layout, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Twitter,
  Menu,
  X,
  Zap,
  Target,
  Rocket,
  ShieldCheck
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-blue rounded-lg flex items-center justify-center">
              <Zap className="text-white fill-white" size={24} />
            </div>
            <span className="text-2xl font-extrabold tracking-tighter">ADS<span className="text-brand-purple">LAB</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-medium hover:text-brand-purple transition-colors">Servicios</a>
            <a href="#resultados" className="text-sm font-medium hover:text-brand-purple transition-colors">Resultados</a>
            <a href="#proceso" className="text-sm font-medium hover:text-brand-purple transition-colors">Proceso</a>
            <button className="bg-white text-brand-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-purple hover:text-white transition-all duration-300">
              Diagnóstico Gratis
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#servicios" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Servicios</a>
              <a href="#resultados" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Resultados</a>
              <a href="#proceso" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Proceso</a>
              <button className="w-full bg-brand-purple text-white px-6 py-3 rounded-xl font-bold">
                Diagnóstico Gratis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-brand-purple/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-brand-purple mb-6">
            <Globe size={14} /> Presencia Global: PY • BR • US • CL
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8">
            Escalamos tu facturación con <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">anuncios que sí venden</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
            No somos una agencia más. Somos tu laboratorio de crecimiento. Transformamos clics en capital mediante estrategias de Paid Media de alto rendimiento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative bg-brand-purple text-white px-8 py-4 rounded-full text-lg font-bold overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Agendar Diagnóstico Gratis <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="px-8 py-4 rounded-full text-lg font-bold border border-white/10 hover:bg-white/5 transition-colors">
              Ver Casos de Éxito
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const countries = [
    { name: 'Paraguay', flag: '🇵🇾' },
    { name: 'Brasil', flag: '🇧🇷' },
    { name: 'USA', flag: '🇺🇸' },
    { name: 'Chile', flag: '🇨🇱' },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Empresas que confían en nuestro laboratorio</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {countries.map((country) => (
            <div key={country.name} className="flex items-center gap-3 text-xl font-bold">
              <span className="text-3xl">{country.flag}</span>
              <span className="tracking-tighter">{country.name}</span>
            </div>
          ))}
          {/* Placeholder for real logos */}
          <div className="text-2xl font-black tracking-tighter italic">TECH_CORP</div>
          <div className="text-2xl font-black tracking-tighter italic">GLOBAL_MARKET</div>
          <div className="text-2xl font-black tracking-tighter italic">NEXUS_INC</div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Gestión de Paid Media',
      description: 'Dominamos Meta Ads y Google Ads para poner tu oferta frente a los ojos correctos. Optimizamos cada centavo de tu inversión.',
      icon: <TrendingUp className="text-brand-purple" size={32} />,
      features: ['Meta Ads (FB/IG)', 'Google Search & Display', 'Retargeting Agresivo']
    },
    {
      title: 'Web de Alta Conversión',
      description: 'No diseñamos webs bonitas, diseñamos máquinas de ventas. UX/UI enfocada 100% en guiar al usuario hacia el checkout.',
      icon: <Layout className="text-brand-blue" size={32} />,
      features: ['Landing Pages CRO', 'E-commerce Escalables', 'Optimización de Velocidad']
    },
    {
      title: 'Estrategia de Contenido',
      description: 'Contenido que detiene el scroll. Creamos piezas visuales y copys que conectan emocionalmente y cierran ventas.',
      icon: <Target className="text-brand-purple" size={32} />,
      features: ['UGC & Video Ads', 'Copywriting Persuasivo', 'Identidad Visual de Marca']
    }
  ];

  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">The Lab Approach</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Combinamos ciencia de datos con creatividad audaz para desintegrar a tu competencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-purple/50 transition-all group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-white/80">
                    <CheckCircle2 size={16} className="text-brand-purple" /> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const metrics = [
    { label: 'ROAS Promedio', value: '4.8x', sub: '+120% vs año anterior' },
    { label: 'Costo por Lead', value: '-35%', sub: 'Optimización algorítmica' },
    { label: 'Inversión Gestionada', value: '$2M+', sub: 'En 4 mercados clave' },
    { label: 'Tasa de Conversión', value: '12%', sub: 'En Landing Pages' },
  ];

  return (
    <section id="resultados" className="py-24 bg-brand-purple/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight">
              The Proof: Resultados que <br /> <span className="text-brand-purple">hablan por sí solos</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              En Ads Lab no nos importan los "likes". Nos importa tu balance bancario. Hemos escalado marcas desde cero hasta facturaciones de 6 cifras mensuales.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-brand-purple/20 text-brand-purple">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Transparencia Total</h4>
                  <p className="text-white/50">Reportes en tiempo real de cada dólar invertido.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-brand-blue/20 text-brand-blue">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Escalabilidad Sin Límites</h4>
                  <p className="text-white/50">Sistemas diseñados para soportar el crecimiento masivo.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="p-8 rounded-3xl bg-brand-black border border-white/10 text-center">
                <div className="text-4xl md:text-5xl font-black text-brand-purple mb-2">{metric.value}</div>
                <div className="font-bold text-sm uppercase tracking-widest mb-1">{metric.label}</div>
                <div className="text-xs text-white/40">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: 'Auditoría', desc: 'Analizamos tus números actuales y detectamos fugas de capital.', icon: '01' },
    { title: 'Estrategia', desc: 'Diseñamos el funnel y la oferta irresistible para tu mercado.', icon: '02' },
    { title: 'Ejecución', desc: 'Lanzamos campañas y creativos con precisión quirúrgica.', icon: '03' },
    { title: 'Optimización', desc: 'Escalamos lo que funciona y cortamos lo que no. Sin piedad.', icon: '04' },
  ];

  return (
    <section id="proceso" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Nuestro Proceso</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Un sistema probado para llevar tu negocio al siguiente nivel de forma predecible.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 p-8 rounded-3xl bg-brand-black border border-white/10 hover:border-brand-blue transition-colors group">
                <div className="text-6xl font-black text-white/5 mb-6 group-hover:text-brand-blue/20 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-brand-black border border-white/10 rounded-[40px] overflow-hidden shadow-2xl shadow-brand-purple/10">
          <div className="grid md:grid-cols-2">
            <div className="p-10 lg:p-16 bg-gradient-to-br from-brand-purple to-brand-blue">
              <h2 className="text-4xl font-extrabold mb-6 leading-tight">¿Listo para dominar tu mercado?</h2>
              <p className="text-white/80 mb-10 text-lg">
                Agenda tu diagnóstico gratuito de 15 minutos. Analizaremos tu cuenta y te diremos exactamente cómo podemos ayudarte a escalar.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-bold">
                  <CheckCircle2 size={20} /> Sin compromiso de compra
                </div>
                <div className="flex items-center gap-3 font-bold">
                  <CheckCircle2 size={20} /> Análisis real de tus datos
                </div>
                <div className="flex items-center gap-3 font-bold">
                  <CheckCircle2 size={20} /> Hoja de ruta estratégica
                </div>
              </div>
            </div>
            
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              {/* Calendly Placeholder */}
              <div className="aspect-square bg-white/5 border border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center text-center p-8">
                <BarChart3 size={48} className="text-brand-purple mb-4" />
                <h3 className="text-xl font-bold mb-2">Calendly Widget</h3>
                <p className="text-white/40 text-sm mb-6">Aquí se integrará tu calendario de agendamiento directo.</p>
                <button className="w-full bg-white text-brand-black py-3 rounded-xl font-bold hover:bg-brand-purple hover:text-white transition-all">
                  Cargar Calendario
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-blue rounded-lg flex items-center justify-center">
              <Zap className="text-white fill-white" size={18} />
            </div>
            <span className="text-xl font-extrabold tracking-tighter">ADS<span className="text-brand-purple">LAB</span></span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-purple transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-purple transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-purple transition-colors"><Twitter size={20} /></a>
          </div>

          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Ads Lab. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Results />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
