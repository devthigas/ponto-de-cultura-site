"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Trupe() {
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

  const members = [
    {
      id: "trupe-member-eduardo",
      name: "Eduardo Colombo Corrêa",
      role: "Coord. Artístico & Diretor",
      image: "/assets/duds.avif",
      alt: "Retrato ilustrado de Eduardo Colombo Corrêa, Coordenador Artístico e Diretor",
      bio: "Lidera toda a concepção cênica e artística do Kombinação, além de atuar diretamente como diretor de espetáculos e oficineiro de malabares.",
    },
    {
      id: "trupe-member-renata",
      name: "Renata Mesquita Zimmermann",
      role: "Coord. Administrativa",
      image: "/assets/rena.avif",
      alt: "Retrato ilustrado de Renata Mesquita Zimmermann, Coordenadora Administrativa",
      bio: "Responsável pela gestão estratégica de captação, estruturação de editais e fomento ao desenvolvimento social sustentável da instituição.",
    },
    {
      id: "trupe-member-marizete",
      name: "Marizete Oliveira de Mesquita",
      role: "Coord. Pedagógica & Pintura",
      image: "/assets/icone-kombi.avif",
      alt: "Retrato ilustrado de Marizete Oliveira de Mesquita, Coordenadora Pedagógica",
      bio: "Organiza as diretrizes educativas e formativas das oficinas do Ponto, atuando também diretamente como oficineira de artes visuais e pintura.",
    },
    {
      id: "trupe-member-caroline",
      name: "Caroline Dias Flores",
      role: "Coordenadora Financeira",
      image: "/assets/icone-kombi.avif",
      alt: "Retrato de Caroline Dias Flores, Coordenadora Financeira",
      bio: "Supervisiona todo o planejamento de orçamentos, prestações de contas de projetos e o controle administrativo do Ponto de Cultura.",
    },
    {
      id: "trupe-member-sandra",
      name: "Sandra Oliveira Jorge",
      role: "Coord. de Figurinos",
      image: "/assets/icone-kombi.avif",
      alt: "Retrato de Sandra Oliveira Jorge, Coordenadora de Figurinos",
      bio: "Responsável pela criação, confecção e conservação de todas as indumentárias e adereços dos espetáculos circenses e intervenções.",
    },
    {
      id: "trupe-member-david",
      name: "David Soares Domingos",
      role: "Coord. de Cenários & Malabares",
      image: "/assets/icone-kombi.avif",
      alt: "Retrato de David Soares Domingos, Coordenador de Cenário",
      bio: "Gere a estrutura cenográfica das apresentações de rua e apoia as oficinas como monitor e instrutor de artes circenses.",
    },
  ];

  return (
    <>
      {/* TRUPE HERO */}
      <section className="pt-[140px] pb-[60px] bg-[linear-gradient(180deg,rgba(10,78,130,0.05)_0%,transparent_100%)]" id="trupe-hero-section">
        <div className="container mx-auto px-4 max-w-[1140px] text-center">
          <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
            Quem Faz Acontecer
          </span>
          <h1 className="font-title font-extrabold text-4xl md:text-5xl text-deep-blue mb-4">
            Nossa Trupe
          </h1>
          <p className="text-lg text-ink-soft max-w-[700px] mx-auto leading-relaxed">
            No Kombinação, cada projeto ganha vida porque existe uma trupe apaixonada por arte, educação e transformação social. Conheça as pessoas por trás desse movimento.
          </p>
        </div>
      </section>

      {/* TRUPE GRID */}
      <section className="pb-20" id="trupe-members-section">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member.id}
                id={member.id}
                className="fade-in bg-white border border-line rounded-premium p-8 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-premium hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-4 border-white shadow-[0_0_0_3px_#ffcd38] mx-auto mb-6 relative">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="130px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-title font-bold text-xl text-deep-blue mb-1">
                  {member.name}
                </h3>
                <div className="text-xs font-bold font-title tracking-wider uppercase text-primary mb-4">
                  {member.role}
                </div>
                <p className="text-ink-soft text-[0.9rem] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BECOME A VOLUNTEER SECTION */}
      <section className="py-20 bg-slate-50 border-t border-line" id="trupe-join-team">
        <div className="container mx-auto px-4 max-w-[1140px] text-center fade-in">
          <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
            Junte-se a Nós
          </span>
          <h2 className="font-title font-bold text-3xl md:text-4xl text-deep-blue mb-4">
            Quer fazer parte da nossa trupe?
          </h2>
          <p className="text-lg text-ink-soft max-w-[700px] mx-auto mb-10 leading-relaxed">
            Seja doando seu tempo como oficineiro voluntário de Teatro ou Música, auxiliando em eventos ou patrocinando um projeto social, a sua energia será muito bem-vinda.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-[#e02f61] text-white font-title font-bold rounded-premium shadow-[0_8px_20px_rgba(255,63,115,0.25)] hover:-translate-y-0.5 transition-all duration-300"
            id="btn-trupe-join"
          >
            Quero ser Voluntário
          </Link>
        </div>
      </section>
    </>
  );
}
