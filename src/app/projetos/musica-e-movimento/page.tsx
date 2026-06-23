"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, CheckCircle, Award } from "lucide-react";
import InteractiveGallery from "@/components/gallery";

export default function MusicaEMovimentoDetail() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    fadeElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    { src: "/assets/oficinas_musica.png", alt: "Crianças em oficina de flauta e canto", caption: "Alunos das escolas públicas de Canela aprendendo instrumentos acústicos" },
    { src: "/assets/oficinas_circo.png", alt: "Grupo praticando equilibrismo com pratos", caption: "Desenvolvimento psicomotor através do circo nas escolas municipais" },
    { src: "/assets/artesanato_comunidade.png", alt: "Mulheres do grupo Fuxico das Bunitas produzindo artesanato", caption: "Espaço de convivência e oficinas de artesanato para as mães da comunidade" },
    { src: "/assets/kombi_cultural.png", alt: "Kombi de caravana enfeitada com artes", caption: "Nossa Kombi itinerante levando educação artística e inclusão por toda a região" }
  ];

  const results = [
    { text: "Amplia o acesso à arte e à cultura em territórios periféricos e rurais" },
    { text: "Estimula o desenvolvimento cognitivo e emocional por meio da expressão corporal e sonora" },
    { text: "Cria conexões reais entre educação, cultura e comunidade escolar" },
    { text: "Fortalece o sentimento de pertencimento e o olhar coletivo através do fazer artístico" },
  ];

  return (
    <>
      {/* FULL WIDTH BANNER */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-slate-900 overflow-hidden">
        <Image
          src="/assets/oficinas_musica.png"
          alt="Oficina de Música e Movimento"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full pb-12 pt-24">
          <div className="container mx-auto px-4 max-w-[1140px]">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 text-white/80 hover:text-accent font-semibold mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" /> Voltar para Projetos
            </Link>
            <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-accent mb-3">
              Oficinas Artísticas
            </span>
            <h1 className="font-title font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Música e Movimento
            </h1>
            <p className="text-xl text-white/90 font-semibold max-w-[700px] leading-relaxed">
              Arte, corpo e som em sintonia com a educação.
            </p>
          </div>
        </div>
      </section>

      {/* DETAIL CONTENT */}
      <section className="py-16 bg-white" id="oficinas-detail">
        <div className="container mx-auto px-4 max-w-[1140px] grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-16 items-start">
          {/* Left Column: Description & Info */}
          <div className="fade-in flex flex-col gap-10">
            {/* Sobre o Projeto */}
            <div>
              <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
                Sobre o Projeto
              </span>
              <p className="text-lg text-ink leading-relaxed mb-6">
                O <strong>Música e Movimento</strong> é um projeto que transforma a escola em palco de expressão. Por meio de oficinas artísticas, ele une música (percussão corporal), teatro, dança (sapateado) e circo (malabares) como ferramentas pedagógicas — despertando criatividade, autoconfiança e pertencimento.
              </p>
              <p className="text-ink-soft text-[1.05rem] leading-relaxed">
                As atividades acontecem em escolas públicas da zona rural e periferia de Canela (RS), no contraturno escolar, e são totalmente gratuitas. Mais do que ensinar técnicas artísticas, o projeto cria oportunidades de aprendizado coletivo, movimento e escuta — dentro e fora da sala de aula.
              </p>
            </div>

            {/* O que acontece na prática */}
            <div className="border-t border-line pt-10">
              <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
                O que acontece na prática
              </span>
              <p className="text-ink leading-relaxed mb-6 font-semibold text-[1.1rem]">
                Durante o processo, crianças e adolescentes participam de oficinas regulares que exploram o corpo, o ritmo, o improviso e o trabalho em grupo.
              </p>
              <p className="text-ink-soft text-[1.05rem] leading-relaxed mb-4">
                Cada encontro é uma nova experiência: o corpo vira instrumento, o som vira história e a arte se transforma em ponte para o conhecimento.
              </p>
              <p className="text-ink-soft text-[1.05rem] leading-relaxed">
                O percurso formativo culmina em um <strong>Espetáculo musical, teatral e performático</strong>, aberto à comunidade escolar e ao público em geral — um momento de celebração onde os alunos se tornam protagonistas da própria arte.
              </p>
            </div>

            {/* Para quem é? */}
            <div className="border-t border-line pt-10">
              <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
                Para quem é?
              </span>
              <p className="text-ink-soft text-[1.05rem] leading-relaxed">
                Destinado a crianças e adolescentes de escolas públicas, especialmente das comunidades rurais e periféricas de Canela (RS). Mas segue sendo um projeto aberto para qualquer escola, iniciativa social ou empresa que queira transformar seu espaço em um ambiente de expressão, criatividade e pertencimento.
              </p>
            </div>

            {/* Resultados & Impacto */}
            <div className="border-t border-line pt-10">
              <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
                Resultados & Impacto
              </span>
              <p className="text-ink-soft text-[1.05rem] leading-relaxed mb-6">
                Além do desenvolvimento individual, todo o processo é registrado em formato audiovisual — com a produção de um videoclipe e um minidocumentário divulgados gratuitamente no YouTube, ampliando o alcance das ações e eternizando as experiências vividas.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-line rounded-[12px] p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-ink-soft leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Memórias que viraram movimento */}
            <div className="border-t border-line pt-10">
              <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
                Memórias que viraram movimento
              </span>
              <p className="text-ink-soft text-[1.05rem] leading-relaxed">
                Cada oficina, ensaio e apresentação é um registro vivo da arte em construção. As imagens do Música e Movimento mostram o brilho no olhar de quem descobre, pela primeira vez, o poder da expressão através do corpo e do som.
              </p>
            </div>

            {/* Galeria de Fotos */}
            <div className="border-t border-line pt-10">
              <InteractiveGallery images={galleryImages} />
            </div>
          </div>

          {/* Right Column: Sticky Sidebar Card */}
          <div className="fade-in lg:sticky lg:top-24 bg-slate-50 border border-line rounded-premium p-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
            <h3 className="font-title font-bold text-2xl text-deep-blue mb-6 pb-4 border-b border-line">
              Ficha Técnica
            </h3>
            
            <div className="flex flex-col gap-6 mb-8 text-sm">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-ink-soft">Categoria</span>
                  <span className="text-ink font-bold">Oficinas / Percussão, Teatro e Dança</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-ink-soft">Localização</span>
                  <span className="text-ink font-bold">Escolas Municipais de Canela e Gramado</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-ink-soft">Preço</span>
                  <span className="text-primary font-extrabold uppercase">100% Gratuito</span>
                </div>
              </div>
            </div>

            <Link
              href="/contato?subject=oficinas"
              className="block w-full text-center px-6 py-3.5 bg-primary hover:bg-[#e02f61] text-white font-title font-bold rounded-premium shadow-[0_8px_20px_rgba(255,63,115,0.25)] hover:shadow-[0_12px_24px_rgba(255,63,115,0.35)] hover:-translate-y-0.5 transition-all duration-300 mb-4 cursor-pointer"
            >
              Inscrever Minha Escola
            </Link>
            
            <a
              href="https://wa.me/5554999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3.5 border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-title font-bold rounded-premium hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-slate-50 border-t border-line" id="oficinas-cta">
        <div className="container mx-auto px-4 max-w-[1140px] text-center fade-in">
          <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
            Parcerias Pedagógicas
          </span>
          <h2 className="font-title font-bold text-3xl md:text-4xl text-deep-blue mb-4">
            Leve o Música e Movimento para a sua escola
          </h2>
          <p className="text-lg text-ink-soft max-w-[700px] mx-auto mb-10 leading-relaxed">
            Seja você gestor escolar, professor ou representante de prefeitura, estamos abertos a novos convênios para expandir nossas oficinas gratuitas de formação.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contato?subject=oficinas"
              className="px-8 py-3.5 bg-primary hover:bg-[#e02f61] text-white font-title font-bold rounded-premium shadow-[0_8px_20px_rgba(255,63,115,0.25)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Solicitar Parceria
            </Link>
            <a
              href="https://wa.me/5554999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-title font-bold rounded-premium hover:-translate-y-0.5 transition-all duration-300"
            >
              Falar com a Equipe
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
