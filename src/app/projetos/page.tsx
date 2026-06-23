"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projetos() {
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

  const projects = [
    {
      id: "projeto-kaiu-kombi",
      tag: "Espetáculo",
      tagBg: "bg-accent text-ink",
      image: "/assets/kaiu-da-kombi.jpg",
      alt: "A Kombi do espetáculo itinerante estacionada na praça decorada",
      title: "Kaiu da Kombi",
      description:
        "Um espetáculo itinerante que leva o circo, o riso e a poesia para as ruas, praças e escolas. A Kombi vira palco, casa e cenário — e onde ela para, a arte acontece de forma espontânea, integrando o público.",
      details: ["🎭 Teatro e Circo de Rua", "Itinerante / RS"],
      link: "/projetos/kaiu-da-kombi"
    },
    {
      id: "projeto-musica-movimento",
      tag: "Oficinas",
      tagBg: "bg-primary text-white",
      image: "/assets/musica-e-movimento.jpg",
      alt: "Grupo de jovens em oficina musical tocando instrumentos acústicos",
      title: "Música e Movimento",
      description:
        "Oficinas que aproximam crianças e jovens da linguagem musical por meio do corpo, do ritmo e da escuta. No Kombinação, aprender música é também descobrir novas formas de expressão e conexão com o outro.",
      details: ["🎵 Percussão e Canto", "Escolas de Gramado e Canela"],
      link: "/projetos/musica-e-movimento"
    },
    {
      id: "projeto-jogando-cima",
      tag: "Circo-Educação",
      tagBg: "bg-primary text-white",
      image: "/assets/jpc.jpg",
      alt: "Crianças praticando malabares nas oficinas de circo",
      title: "Jogando Para Cima",
      description:
        "Quando o corpo vira jogo e o movimento vira expressão. Um projeto de circo-educação focado em inclusão social, coordenação motora e trabalho em equipe, mostrando que aprender também é divertido.",
      details: ["🤹 Acrobacia e Malabares", "Sede & Escolas"],
      link: ""
    },
    {
      id: "projeto-fuxico-bunitas",
      tag: "Geração de Renda",
      tagBg: "bg-deep-blue text-white",
      image: "/assets/artesanato_comunidade.png",
      alt: "Artesanato feito com retalhos de pano coloridos pelo grupo Fuxico das Bunitas",
      title: "Fuxico das Bunitas",
      description:
        "Iniciativa de artesanato têxtil voltada para a autonomia e geração de renda de mulheres e mães da comunidade. As participantes expõem e comercializam seus trabalhos em feiras e lojas da Região das Hortênsias.",
      details: ["🧶 Costura Criativa e Fuxico", "Canela/RS"],
      link: ""
    },
  ];

  return (
    <>
      {/* PROJECTS HERO */}
      <section className="pt-[140px] pb-[60px] bg-[linear-gradient(180deg,rgba(10,78,130,0.05)_0%,transparent_100%)]" id="projetos-hero-section">
        <div className="container mx-auto px-4 max-w-[1140px] text-center">
          <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
            O que realizamos
          </span>
          <h1 className="font-title font-extrabold text-4xl md:text-5xl text-deep-blue mb-4">
            Nossos Projetos
          </h1>
          <p className="text-lg text-ink-soft max-w-[700px] mx-auto leading-relaxed">
            O Kombinação é feito de movimento, afeto e criação coletiva. Cada projeto nasce do desejo de levar arte, cultura e educação para a comunidade.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="pb-20" id="projetos-list-section">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {projects.map((proj) => (
              <div
                key={proj.id}
                id={proj.id}
                className="fade-in bg-white border border-line rounded-premium overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-premium hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-[240px] sm:h-[280px] w-full overflow-hidden bg-slate-100">
                  <span className={`absolute top-4 right-4 z-10 px-4 py-1.5 font-title font-bold text-[0.75rem] uppercase tracking-wider rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)] ${proj.tagBg}`}>
                    {proj.tag}
                  </span>
                  {proj.link ? (
                    <Link href={proj.link} className="block w-full h-full">
                      <Image
                        src={proj.image}
                        alt={proj.alt}
                        fill
                        sizes="(max-w-768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500 cursor-pointer"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={proj.image}
                      alt={proj.alt}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  {proj.link ? (
                    <Link href={proj.link} className="hover:text-primary transition-colors duration-200 block">
                      <h3 className="font-title font-bold text-2xl text-deep-blue mb-3">
                        {proj.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="font-title font-bold text-2xl text-deep-blue mb-3">
                      {proj.title}
                    </h3>
                  )}
                  <p className="text-ink-soft text-[0.95rem] leading-relaxed mb-6 flex-grow">
                    {proj.description}
                  </p>
                  
                  {proj.link && (
                    <div className="mb-6">
                      <Link href={proj.link} className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-[#e02f61] hover:underline">
                        Ver Detalhes do Projeto &rarr;
                      </Link>
                    </div>
                  )}

                  <div className="flex justify-between items-center border-t border-line pt-4 text-xs font-semibold text-ink-soft mt-auto">
                    <span>{proj.details[0]}</span>
                    <span>{proj.details[1]}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Portfólio Geral (Destaque) */}
            <div
              id="projeto-portfolio-geral"
              className="fade-in md:col-span-2 bg-gradient-to-br from-slate-50 to-[#dde2de]/30 border-2 border-dashed border-deep-blue rounded-premium p-10 md:p-12 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-premium hover:-translate-y-1 transition-all duration-300 mt-6"
            >
              <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
                Histórico de Editais
              </span>
              <h3 className="font-title font-bold text-2xl md:text-3xl text-deep-blue mb-4">
                Portfólio de Atividades
              </h3>
              <p className="text-ink-soft text-[0.98rem] leading-relaxed max-w-[800px] mx-auto mb-8">
                Desde 2007, o Ponto de Cultura Kombinação já participou de diversos editais, festivais e programas de fomento cultural em nível municipal, estadual e nacional (incluindo prêmios da Lei Paulo Gustavo, SEDAC RS, COMDICA e parcerias em escolas municipais de Gramado no TransformArte) — consolidando sua trajetória como referência regional em arte, educação e transformação social.
              </p>
              <Link
                href="/movimento#partnerships-timeline"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-title font-bold rounded-premium hover:-translate-y-0.5 transition-all duration-300"
              >
                Ver Histórico de Parcerias
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
