"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Movimento() {
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

  const languages = [
    { icon: "🎵", title: "Música", desc: "Aulas focadas em técnica vocal, percussão e instrumentalização acústica." },
    { icon: "🎪", title: "Arte Circense", desc: "Ensino de malabares, equilíbrio, acrobacias de solo e aéreas." },
    { icon: "🎭", title: "Arte Cênica", desc: "Desenvolvimento de expressão corporal, teatro de bonecos e improvisação." },
    { icon: "💃", title: "Dança", desc: "Expressão corporal através de aulas de jazz, ballet e sapateado." },
    { icon: "🧶", title: "Artesanato", desc: "Oficinas de modelagem e aproveitamento de materiais com reciclagem." },
    { icon: "🎨", title: "Artes Visuais", desc: "Trabalhos práticos com cerâmica, fanzine, colagem, pintura e desenho." },
    { icon: "✍️", title: "Literatura & Mídia", desc: "Oficinas de escrita criativa, quadrinhos e fundamentos do cinema." },
  ];

  const timelineItems = [
    { date: "2017 - 2019", title: "Conselhos Municipais", desc: "Atuação no COMDICA (Conselho Municipal dos Direitos da Criança e do Adolescente) e no CMAS (Conselho de Assistência Social) de Canela/RS, focando na valorização e defesa da infância e juventude." },
    { date: "2017 / 2018", title: "Prefeitura de Canela, RS", desc: "Realização de apresentações artísticas gratuitas e integradas à comunidade, reunindo talentos regionais e os alunos das oficinas socioculturais do projeto." },
    { date: "2018", title: "Selo Empresa Amiga Kombinação", desc: "Criação do programa de incentivo financeiro direto corporativo, onde marcas locais financiavam as atividades da ONG e recebiam performances e artesanato exclusivo." },
    { date: "2021", title: "Atividade \"Live de Quinta\"", desc: "Implementação do quadro digital de entrevistas semanais com líderes de impacto, artistas e ativistas sociais que impulsionam causas transformadoras." },
    { date: "2022 - 2024", title: "Programa TransformArte (Gramado, RS)", desc: "Parceria com as Secretarias Municipais de Cultura e de Educação de Gramado, realizando oficinas contínuas de 7 linguagens artísticas em 9 escolas da rede municipal." },
    { date: "2023", title: "Prefeitura de Gramado & GRAMADOTUR", desc: "Intervenção performática no Dia da Cultura Gramadense e condução da Oficina \"Equilíbrio\" dentro do conceituado Programa de Artes Pedro Henrique Benetti." },
    { date: "2023 / 2024", title: "Projeto Estação Cultural Canela", desc: "Parceria com a produtora S & S Eventos nos finais de semana, levando arte-educação e atividades interativas para pontos turísticos e praças de Canela." },
    { date: "2024 - 2025", title: "Parceria Continuada de Educação", desc: "Formalização de novos convênios pedagógicos com a Secretaria Municipal de Educação da Prefeitura de Gramado para a manutenção das frentes de arte nas escolas." },
    { date: "Lei Paulo Gustavo (2023)", title: "Edital Municipal LPG Canela/RS", desc: "Premiação por mérito para agentes culturais, reconhecendo o Ponto de Cultura Kombinação por sua histórica e relevante contribuição ao desenvolvimento artístico-cultural regional." },
  ];

  return (
    <>
      {/* MOVEMENT HERO */}
      <section className="pt-[140px] pb-[60px] bg-[linear-gradient(180deg,rgba(10,78,130,0.05)_0%,transparent_100%)]">
        <div className="container mx-auto px-4 max-w-[1140px] text-center">
          <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
            Quem Somos
          </span>
          <h1 className="font-title font-extrabold text-4xl md:text-5xl text-deep-blue mb-4">
            Kombinação em Ação
          </h1>
          <p className="text-lg text-ink-soft max-w-[700px] mx-auto leading-relaxed">
            Descubra a história e o propósito por trás do Movimento Cultural. Conheça a nossa missão de capacitação, inclusão e valorização artística.
          </p>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="pb-8" id="mission-focus-section">
        <div className="container mx-auto px-4 max-w-[1140px] text-center">
          <div className="fade-in bg-white border border-line rounded-premium p-10 max-w-[800px] mx-auto shadow-premium" id="main-mission-card">
            <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
              Nossa Missão
            </span>
            <h2 className="font-title font-bold text-deep-blue text-xl sm:text-2xl leading-relaxed">
              "Ser uma incubadora de projetos artísticos e educacionais, promovendo a inclusão social por meio da capacitação de jovens e da valorização cultural."
            </h2>
          </div>
        </div>
      </section>

      {/* THREE PRINCIPLES */}
      <section className="py-16" id="mvv-section">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-12 fade-in">
            <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
              Nossos Valores
            </span>
            <h2 className="font-title font-bold text-3xl text-deep-blue">
              Pilares do Nosso Movimento
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 01 */}
            <div className="fade-in bg-white border border-line rounded-premium p-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-premium transition-all duration-300">
              <div className="w-[70px] h-[70px] rounded-full bg-primary/10 text-primary font-title text-2xl font-extrabold flex items-center justify-center mb-6">
                01
              </div>
              <h3 className="font-title font-bold text-xl text-deep-blue mb-4">Arte e Mercado</h3>
              <p className="text-ink-soft text-[0.95rem] leading-relaxed">
                <strong>Acesso ao mercado de trabalho com arte e propósito:</strong> Formar artistas também é preparar pessoas para o mundo. No Kombinação, a arte é caminho para gerar renda, abrir portas e ocupar espaços com criatividade, técnica e expressão. Ampliamos o acesso ao mercado de trabalho por meio da cultura — de forma real, digna e possível.
              </p>
            </div>

            {/* 02 */}
            <div className="fade-in bg-white border border-line rounded-premium p-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-premium transition-all duration-300">
              <div className="w-[70px] h-[70px] rounded-full bg-[rgba(255,205,56,0.15)] text-[#d19e0b] font-title text-2xl font-extrabold flex items-center justify-center mb-6">
                02
              </div>
              <h3 className="font-title font-bold text-xl text-deep-blue mb-4">Cidadania na Prática</h3>
              <p className="text-ink-soft text-[0.95rem] leading-relaxed">
                <strong>Cidadania na prática, e não só no discurso:</strong> Aqui, cidadania não é só uma palavra bonita. É vivida no palco, nas oficinas, nas rodas de conversa e nos projetos colaborativos. A cada ação, reforçamos que toda pessoa tem direito à voz, à arte e ao pertencimento.
              </p>
            </div>

            {/* 03 */}
            <div className="fade-in bg-white border border-line rounded-premium p-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-premium transition-all duration-300">
              <div className="w-[70px] h-[70px] rounded-full bg-deep-blue/10 text-deep-blue font-title text-2xl font-extrabold flex items-center justify-center mb-6">
                03
              </div>
              <h3 className="font-title font-bold text-xl text-deep-blue mb-4">Base de Transformação</h3>
              <p className="text-ink-soft text-[0.95rem] leading-relaxed">
                <strong>Cultura, educação e assistência como base da transformação:</strong> A gente acredita no poder de uma ideia. E quando ela nasce no coletivo, se conecta com a educação e encontra apoio, ela vira transformação real. No Ponto de Cultura Kombinação, ideias viram ação — com arte, com afeto e com impacto social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY DETAIL */}
      <section className="py-20 bg-slate-50" id="movimento-history-detail">
        <div className="container mx-auto px-4 max-w-[1140px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div className="fade-in">
            <Image
              src="/assets/kombi_cultural.png"
              alt="Ilustração da Kombi enfeitada e decorada que representa o Ponto de Cultura"
              width={500}
              height={400}
              className="w-full h-auto rounded-premium shadow-premium border border-line"
            />
          </div>
          <div className="history-content fade-in flex flex-col items-start">
            <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
              História & Propósito
            </span>
            <h2 className="font-title font-bold text-3xl md:text-4xl text-deep-blue mb-6">
              O Instituto SEIDE e a Trajetória Cultural
            </h2>
            <p className="text-ink-soft mb-4 leading-relaxed">
              O <strong>Instituto de Reciclagem Sócio Educativa e Incentivo ao Desenvolvimento Econômico (SEIDE)</strong> é uma entidade artística e cultural sem fins lucrativos que acredita no poder da arte como ferramenta de transformação social.
            </p>
            <p className="text-ink-soft mb-4 leading-relaxed">
              Fundado em 2007, o Instituto foi certificado como <strong>Ponto de Cultura Kombinação</strong> em 2012, através do Edital 11/2012 da SEDAC RS. Desde então, vem participando ativamente da Rede RS de Pontos de Cultura e da Comissão Nacional, levando sua voz para encontros, fóruns estaduais e a Teia Nacional da Diversidade (Natal/RN).
            </p>
            <p className="text-ink-soft mb-4 leading-relaxed">
              Nosso caminho começou com oficinas de artesanato voltadas para mulheres — hoje conhecidas como <strong>Fuxico das Bunitas</strong>. Essa iniciativa, que nasceu junto com o SEIDE, segue firme até hoje, promovendo autonomia, empoderamento e geração de renda por meio da arte. As participantes expõem seus trabalhos em feiras, eventos e no comércio local, mostrando que o talento e a criatividade podem abrir portas.
            </p>
            <p className="text-ink-soft mb-0 leading-relaxed">
              Mais do que ensinar técnicas, o Kombinação é uma incubadora de projetos — um espaço onde a arte se conecta à educação e abre caminhos para novas oportunidades de vida.
            </p>
          </div>
        </div>
      </section>

      {/* ARTISTIC LANGUAGES GRID */}
      <section className="py-20" id="artistic-languages">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center max-w-[700px] mx-auto mb-16 fade-in">
            <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
              Nossas Frentes
            </span>
            <h2 className="font-title font-bold text-3xl md:text-4xl text-deep-blue mb-4">
              Linguagens Artísticas e Formações
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed">
              Atuamos como um núcleo de formação artística para crianças, adolescentes e jovens em situação de vulnerabilidade social em parceria com escolas e prefeituras.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, idx) => (
              <div key={idx} className="fade-in bg-white border border-line rounded-premium p-6 flex gap-4 items-start hover:shadow-premium hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl bg-primary/5 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {lang.icon}
                </div>
                <div>
                  <h4 className="font-title font-bold text-[#0a4e82] mb-1">{lang.title}</h4>
                  <p className="text-xs text-ink-soft leading-relaxed">{lang.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS & IMPACT */}
      <section className="container mx-auto px-4 max-w-[1140px] my-16" id="impact-statistics">
        <div className="fade-in bg-[linear-gradient(135deg,var(--deep-blue)_0%,#052a48_100%)] text-white rounded-premium py-16 px-8 md:px-12 shadow-premium text-center">
          <div className="mb-10">
            <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-accent mb-3">
              Impacto Social
            </span>
            <h2 className="font-title font-bold text-3xl text-white">Resultados de Impacto desde 2012</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="font-title font-extrabold text-4xl lg:text-5xl text-accent mb-2">+1.500</div>
              <div className="text-xs text-white/85 font-semibold">Crianças e jovens atendidos</div>
            </div>
            <div>
              <div className="font-title font-extrabold text-4xl lg:text-5xl text-accent mb-2">~20</div>
              <div className="text-xs text-white/85 font-semibold">Mulheres por ano no Fuxico</div>
            </div>
            <div>
              <div className="font-title font-extrabold text-4xl lg:text-5xl text-accent mb-2">38</div>
              <div className="text-xs text-white/85 font-semibold">Artistas da região apoiados</div>
            </div>
            <div>
              <div className="font-title font-extrabold text-4xl lg:text-5xl text-accent mb-2">Centenas</div>
              <div className="text-xs text-white/85 font-semibold">De pessoas nas mostras</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="font-title font-extrabold text-4xl lg:text-5xl text-accent mb-2">~50</div>
              <div className="text-xs text-white/85 font-semibold">Pontos de Cultura parceiros (Rede RS)</div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS & TIMELINE */}
      <section className="py-20" id="partnerships-timeline">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center max-w-[700px] mx-auto mb-16 fade-in">
            <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
              Reconhecimentos & Parcerias
            </span>
            <h2 className="font-title font-bold text-3xl md:text-4xl text-deep-blue mb-4">
              Linha de Parcerias e Histórico
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed">
              Nossa atuação ao longo dos anos consolidou projetos conjuntos e articulações essenciais para a sustentabilidade da nossa causa.
            </p>
          </div>
          
          <div className="timeline relative max-w-[900px] mx-auto py-4">
            {timelineItems.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className={`relative w-full md:w-1/2 px-4 py-4 md:py-6 md:px-8 ${isLeft ? "md:left-0 text-left" : "md:left-1/2 text-left md:-translate-x-[0px] md:pl-8"}`}>
                  {/* Point icon */}
                  <div className={`absolute w-5 h-5 bg-white border-4 border-primary rounded-full z-10 top-1/2 -translate-y-1/2 hidden md:block ${isLeft ? "-right-2.5" : "-left-2.5"}`}></div>
                  
                  <div className="bg-white border border-line rounded-premium p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-premium hover:border-primary/20 transition-all duration-300">
                    <span className="inline-block font-title font-bold text-primary text-sm mb-2">
                      {item.date}
                    </span>
                    <h3 className="font-title font-bold text-base text-deep-blue mb-2">{item.title}</h3>
                    <p className="text-xs text-ink-soft leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-20 bg-slate-50" id="movimento-impact-banner">
        <div className="container mx-auto px-4 max-w-[1140px] text-center fade-in">
          <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
            Nosso Impacto
          </span>
          <h2 className="font-title font-bold text-3xl md:text-4xl text-deep-blue mb-4">
            Mais de 10 Anos de Transformação
          </h2>
          <p className="text-lg text-ink-soft max-w-[700px] mx-auto mb-10 leading-relaxed">
            Durante esta jornada de oficinas contínuas e espetáculos itinerantes, o Ponto de Cultura já impactou milhares de crianças, adolescentes e mulheres artesãs em Canela e Gramado/RS.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/projetos" className="px-8 py-3 bg-primary hover:bg-[#e02f61] text-white font-title font-bold rounded-premium shadow-[0_8px_20px_rgba(255,63,115,0.25)] hover:-translate-y-0.5 transition-all duration-300">
              Conheça Nossos Projetos
            </Link>
            <Link href="/contato" className="px-8 py-3 border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-title font-bold rounded-premium hover:-translate-y-0.5 transition-all duration-300">
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
