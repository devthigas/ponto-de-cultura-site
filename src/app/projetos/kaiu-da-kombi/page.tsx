"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, CheckCircle, Award } from "lucide-react";
import InteractiveGallery from "@/components/gallery";

export default function KaiuDaKombiDetail() {
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
    { src: "/assets/kombi.png", alt: "Kombi de picadeiro com artistas do circo", caption: "Espetáculo itinerante com toda a trupe reunida no picadeiro do circo" },
    { src: "/assets/kombi_cultural.png", alt: "Caravana da Kombi com guitarras e bandeirolas", caption: "Ilustração do Ponto de Cultura Kombinação como caravana de arte" },
    { src: "/assets/oficinas_circo.png", alt: "Crianças em oficina de malabarismo e equilíbrio", caption: "Alunos das oficinas de circo-educação praticando malabares com pratos" },
    { src: "/assets/oficinas_musica.png", alt: "Jovens em oficina musical tocando violão", caption: "Oficinas musicais e de expressão corporal realizadas nas escolas" }
  ];

  const timelineItems = [
    { text: "Projeto Estação Cultural (Canela/RS) — 20 apresentações em 2023 e 6 em 2024" },
    { text: "Comemoração dos 50 anos do Parque Caracol (Canela/RS) — Intervenção performática (2023)" },
    { text: "23ª Feira do Livro de Canela (2024)" },
    { text: "18º Festival Palco Giratório SESC (Porto Alegre/RS)" },
    { text: "Abertura do Ano Letivo de 2025 (Canela/RS)" },
    { text: "Encerramento do projeto PNAB Canela – Cultura Viva (2025) com a versão “Mais uma vez Kaiu da Kombi”" },
  ];

  return (
    <>
      {/* FULL WIDTH BANNER */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-slate-900 overflow-hidden">
        <Image
          src="/assets/kaiu-da-kombi.jpg"
          alt="Espetáculo Kaiu da Kombi"
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
            <h1 className="font-title font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Kaiu da Kombi
            </h1>
            <p className="text-xl text-white/90 font-semibold max-w-[700px] leading-relaxed">
              Quando o circo estaciona, a emoção começa.
            </p>
          </div>
        </div>
      </section>

      {/* DETAIL CONTENT */}
      <section className="py-16 bg-white" id="espetaculo-detail">
        <div className="container mx-auto px-4 max-w-[1140px] grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-16 items-start">
          {/* Left Column: Description & Info */}
          <div className="fade-in flex flex-col gap-10">
            {/* Sobre o Espetáculo */}
            <div>
              <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
                Sobre o Espetáculo
              </span>
              <p className="text-lg text-ink leading-relaxed mb-6">
                O <strong>Kaiu da Kombi</strong> nasceu como um respiro artístico em meio à pandemia — um espetáculo audiovisual criado entre 2020 e 2021, quando o encontro com o público ainda era sonho. A partir de 2023, esse sonho saiu das telas e ganhou as ruas, praças e corações das pessoas.
              </p>
              <p className="text-ink-soft text-[1.05rem] leading-relaxed">
                Misturando circo, teatro, dança e performance, o espetáculo resgata a essência dos antigos shows populares e transforma cada espaço em palco. Com humor, delicadeza e poesia, o Kombinação transforma arte em empatia — mostrando que a cultura é ponte entre memórias, sentimentos e gente.
              </p>
            </div>

            {/* A História */}
            <div className="border-t border-line pt-10">
              <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
                A História
              </span>
              <p className="text-ink leading-relaxed mb-6 font-semibold text-[1.1rem]">
                Baseado na narrativa de Noa Blum, o espetáculo conta a história de um idoso que vive sozinho, preso às lembranças de uma vida que já não é presente — ou talvez nunca tenha sido.
              </p>
              <p className="text-ink-soft text-[1.05rem] leading-relaxed mb-4">
                A peça mergulha na solidão e na saudade, especialmente vividas por pessoas idosas, que passam seus dias cercadas de memórias, esperando companhia, afeto ou apenas um olhar.
              </p>
              <p className="text-ink-soft text-[1.05rem] leading-relaxed">
                Através de acrobacias, malabares, equilibrismo, palhaçaria, teatro e dança, o Kaiu da Kombi dá corpo às emoções humanas e convida o público a enxergar beleza até nas ausências. Com figurinos para-realistas e atmosfera nostálgica, o espetáculo cria um universo sensível e sonhador — onde cada gesto conta uma história e cada riso carrega um pedaço de lembrança.
              </p>
            </div>

            {/* Trajetória */}
            <div className="border-t border-line pt-10">
              <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
                Trajetória e Apresentações
              </span>
              <p className="text-ink-soft text-[1.05rem] leading-relaxed mb-8">
                Desde a estreia presencial em Canela (RS), o espetáculo tem circulado por eventos culturais, feiras e festivais, sempre com acesso gratuito e integração com a comunidade local.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {timelineItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-line rounded-[12px] p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-ink-soft leading-relaxed">{item.text}</span>
                  </div>
                ))}
                
                {/* Destaque Prêmio Olhares da Cena */}
                <div className="md:col-span-2 flex items-start gap-4 bg-accent/10 border-2 border-dashed border-accent rounded-premium p-6 mt-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-amber-700 flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-title font-bold text-deep-blue text-lg mb-1">Prêmio Olhares da Cena (2025)</h4>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      Vencedor na categoria <strong>Melhor Cenário</strong> no 14º Prêmio Olhares da Cena, coroando o trabalho plástico do espetáculo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conceito */}
            <div className="border-t border-line pt-10">
              <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
                Conceito e Impacto
              </span>
              <p className="text-ink-soft text-[1.05rem] leading-relaxed">
                Mais que um espetáculo, o Kaiu da Kombi é um convite ao encontro — entre artistas e público, entre passado e presente, entre o que fomos e o que ainda podemos ser. Ele reafirma a arte como ferramenta de empatia, memória e transformação social, resgatando o poder das histórias contadas ao vivo, olho no olho.
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
                  <span className="text-ink font-bold">Teatro e Circo de Rua</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-ink-soft">Circulação</span>
                  <span className="text-ink font-bold">Itinerante / Rio Grande do Sul</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-ink-soft">Preço</span>
                  <span className="text-primary font-extrabold uppercase">Gratuito / Acesso Livre</span>
                </div>
              </div>
            </div>

            <Link
              href="/contato?subject=espetaculo"
              className="block w-full text-center px-6 py-3.5 bg-primary hover:bg-[#e02f61] text-white font-title font-bold rounded-premium shadow-[0_8px_20px_rgba(255,63,115,0.25)] hover:shadow-[0_12px_24px_rgba(255,63,115,0.35)] hover:-translate-y-0.5 transition-all duration-300 mb-4 cursor-pointer"
            >
              Solicitar Apresentação
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
      <section className="py-20 bg-slate-50 border-t border-line" id="espetaculo-cta">
        <div className="container mx-auto px-4 max-w-[1140px] text-center fade-in">
          <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
            Leve o Circo para Sua Região
          </span>
          <h2 className="font-title font-bold text-3xl md:text-4xl text-deep-blue mb-4">
            Quer contratar o Kaiu da Kombi?
          </h2>
          <p className="text-lg text-ink-soft max-w-[700px] mx-auto mb-10 leading-relaxed">
            É muito fácil! Seja para uma prefeitura, edital cultural, escola ou evento corporativo, levamos toda a nossa trupe e estrutura móvel de rua.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contato?subject=espetaculo"
              className="px-8 py-3.5 bg-primary hover:bg-[#e02f61] text-white font-title font-bold rounded-premium shadow-[0_8px_20px_rgba(255,63,115,0.25)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Solicitar Apresentação
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
