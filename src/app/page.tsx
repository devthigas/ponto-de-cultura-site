"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-[160px] pb-20 bg-[radial-gradient(circle_at_80%_20%,rgba(255,205,56,0.15)_0%,rgba(255,63,115,0.05)_50%,transparent_100%)] relative overflow-hidden" id="home-hero">
        <div className="container mx-auto px-4 max-w-[1140px] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div className="fade-in flex flex-col items-start text-left">
            <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
              Ponto de Cultura Kombinação
            </span>
            <h1 className="font-title font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-deep-blue mb-6">
              A Kombi da Cultura está passando na sua rua! <span className="inline-block animate-bounce">🚐🎨</span>
            </h1>
            <p className="text-lg text-ink-soft mb-10 leading-relaxed">
              Promovemos formação artística, inclusão social e fortalecimento comunitário em Canela e Gramado, RS. Onde a nossa Kombi para, a arte acontece.
            </p>
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Link href="/projetos" className="w-full sm:w-auto text-center px-8 py-3.5 bg-primary hover:bg-[#e02f61] text-white font-title font-bold rounded-premium shadow-[0_8px_20px_rgba(255,63,115,0.25)] hover:shadow-[0_12px_24px_rgba(255,63,115,0.35)] hover:-translate-y-0.5 transition-all duration-300">
                Nossos Projetos
              </Link>
              <Link href="/contato" className="w-full sm:w-auto text-center px-8 py-3.5 border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-title font-bold rounded-premium hover:-translate-y-0.5 transition-all duration-300">
                Fale Conosco
              </Link>
            </div>
          </div>
          <div className="fade-in flex justify-center relative">
            <div className="relative z-10 w-full max-w-[550px] overflow-hidden" >
              <Image
                src="/assets/kombi_sketch.png"
                alt="Esboço da Kombi itinerante Kaiu da Kombi"
                width={600}
                height={375}
                priority
                className="w-full h-auto"
              />
              {/* Exhaust Smoke Puffs */}
              <div className="absolute bottom-[20%] right-[12%] flex items-center justify-center pointer-events-none">
                <div className="absolute w-3.5 h-3.5 bg-slate-400/40 rounded-full blur-[1px] animate-exhaust-puff-1"></div>
                <div className="absolute w-3.5 h-3.5 bg-slate-400/40 rounded-full blur-[1px] animate-exhaust-puff-2"></div>
                <div className="absolute w-3.5 h-3.5 bg-slate-400/40 rounded-full blur-[1px] animate-exhaust-puff-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-20" id="home-highlights">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center max-w-[700px] mx-auto mb-16 fade-in">
            <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
              O que fazemos
            </span>
            <h2 className="font-title font-bold text-3xl md:text-4xl text-deep-blue mb-4">
              Principais Frentes de Criação
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed">
              O Kombinação é feito de movimento, afeto e criação coletiva. Conheça as experiências que unem aprendizado, expressão e transformação social.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="fade-in bg-white border border-line rounded-premium p-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-premium hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300" id="highlight-kaiu">
              <div className="w-[60px] h-[60px] rounded-full bg-primary/10 flex items-center justify-center text-3xl mb-6">
                🎪
              </div>
              <h3 className="font-title font-bold text-xl text-deep-blue mb-3">Kaiu da Kombi</h3>
              <p className="text-ink-soft text-[0.95rem] leading-relaxed">
                Espetáculo itinerante que leva o circo, o riso e a poesia para ruas, praças e escolas. A Kombi vira palco, casa e cenário — e onde ela para, a magia acontece.
              </p>
            </div>

            {/* Card 2 */}
            <div className="fade-in bg-white border border-line rounded-premium p-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-premium hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300" id="highlight-music">
              <div className="w-[60px] h-[60px] rounded-full bg-primary/10 flex items-center justify-center text-3xl mb-6">
                🎵
              </div>
              <h3 className="font-title font-bold text-xl text-deep-blue mb-3">Música e Movimento</h3>
              <p className="text-ink-soft text-[0.95rem] leading-relaxed">
                Oficinas que aproximam crianças e jovens da linguagem musical por meio do corpo, ritmo e escuta. Aprender música é também descobrir novas formas de se conectar.
              </p>
            </div>

            {/* Card 3 */}
            <div className="fade-in bg-white border border-line rounded-premium p-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-premium hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300" id="highlight-play">
              <div className="w-[60px] h-[60px] rounded-full bg-primary/10 flex items-center justify-center text-3xl mb-6">
                🤹
              </div>
              <h3 className="font-title font-bold text-xl text-deep-blue mb-3">Jogando Para Cima</h3>
              <p className="text-ink-soft text-[0.95rem] leading-relaxed">
                Quando o corpo vira jogo e o movimento vira expressão. Projeto que une circo, educação e inclusão, mostrando que brincar de forma ativa também é aprender.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOME HISTORY BRIEF */}
      <section className="py-20 bg-slate-50" id="home-history-brief">
        <div className="container mx-auto px-4 max-w-[1140px] grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <div className="fade-in flex flex-col items-start">
            <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
              Quem Somos
            </span>
            <h2 className="font-title font-bold text-3xl md:text-4xl text-deep-blue mb-6">
              Do Sonho à Realidade Comunitária
            </h2>
            <p className="text-ink-soft mb-4 leading-relaxed">
              O <strong>Instituto de Reciclagem Sócio Educativa e Incentivo ao Desenvolvimento Econômico (SEIDE)</strong> é uma entidade artística e cultural sem fins lucrativos que acredita no poder da arte como ferramenta de transformação social.
            </p>
            <p className="text-ink-soft mb-4 leading-relaxed">
              Fundado em 2007, o Instituto foi certificado como Ponto de Cultura Kombinação em 2012. Desde então, a nossa Kombi virou símbolo de arte itinerante, cruzando bairros para levar educação e espetáculos culturais gratuitos e de qualidade.
            </p>
            <p className="text-ink-soft mb-8 leading-relaxed">
              Nossas ações são voltadas para crianças, adolescentes e jovens em situação de vulnerabilidade, oferecendo oficinas regulares de teatro, música, circo, dança, artesanato e literatura em escolas e espaços públicos.
            </p>
            <Link href="/movimento" className="px-8 py-3 border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-title font-bold rounded-premium hover:-translate-y-0.5 transition-all duration-300">
              Conheça Nosso Movimento
            </Link>
          </div>
          <div className="fade-in">
            <Image
              src="/assets/trupe.jpg"
              alt="Crianças e jovens em uma oficina de música do Ponto de Cultura Kombinação"
              width={550}
              height={400}
              className="w-full h-auto rounded shadow-premium border border-line"
            />
          </div>
        </div>
        </section>

      {/* STATS BANNER */}
      <section className="py-20" id="home-impact-stats">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="fade-in bg-white border border-line rounded-premium p-8">
              <h3 className="font-title font-extrabold text-4xl lg:text-5xl text-primary mb-2">+1.500</h3>
              <p className="font-title font-semibold text-ink-soft">Crianças e jovens impactados diretamente</p>
            </div>
            <div className="fade-in bg-white border border-line rounded-premium p-8">
              <h3 className="font-title font-extrabold text-4xl lg:text-5xl text-primary mb-2">~20</h3>
              <p className="font-title font-semibold text-ink-soft">Mulheres capacitadas por ano no artesanato</p>
            </div>
            <div className="fade-in bg-white border border-line rounded-premium p-8">
              <h3 className="font-title font-extrabold text-4xl lg:text-5xl text-primary mb-2">38</h3>
              <p className="font-title font-semibold text-ink-soft">Artistas locais integrados em nossas ações</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER SECTION */}
      <section className="pb-20" id="home-cta-banner">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="fade-in bg-[linear-gradient(135deg,var(--deep-blue)_0%,#052a48_100%)] text-white rounded-premium p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-center gap-8 shadow-premium relative overflow-hidden">
            <div className="absolute w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,205,56,0.15)_0%,transparent_70%)] -right-[50px] -top-[50px] z-0"></div>
            <div className="relative z-10 max-w-full md:max-w-[60%] text-center md:text-left">
              <h2 className="font-title font-bold text-2xl md:text-3xl text-white mb-3">
                Quer apoiar a nossa Kombi da Cultura?
              </h2>
              <p className="text-white/85 text-[1.05rem] leading-relaxed">
                O Ponto de Cultura Kombinação é mantido com muito amor e apoio de parceiros e patrocinadores locais. Descubra como colaborar.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
              <Link href="/contato" className="block text-center w-full px-8 py-3.5 bg-accent hover:bg-[#e5b62b] text-ink font-title font-bold rounded-premium shadow-[0_8px_20px_rgba(255,205,56,0.25)] hover:shadow-[0_12px_24px_rgba(255,205,56,0.35)] hover:-translate-y-0.5 transition-all duration-300">
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
