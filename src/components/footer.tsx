import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-[#f3f4f6] pt-20 pb-8 border-t-5 border-primary" id="main-footer">
      <div className="container mx-auto px-4 max-w-[1140px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Col 1: Brand */}
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <Image
              src="/assets/logo_white.png"
              alt="Logotipo Ponto de Cultura Kombinação"
              width={40}
              height={50}
              className="w-auto h-[50px]"
            />
          </div>
          <div className="font-title font-extrabold text-2xl text-white tracking-tight">
            Ponto de Cultura Kombinação
          </div>
          <p className="text-[#9ca3af] text-[0.95rem] leading-relaxed">
            Ponto de Cultura certificado em Canela, RS. Uma iniciativa do Instituto SEIDE para promover arte, inclusão social e cidadania ativa.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.instagram.com/culturapontokombi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@pontodeculturakombinacao"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="YouTube"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.522 3.543 12 3.543 12 3.543s-7.522 0-9.388.513a3.003 3.003 0 0 0-2.11 2.107C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.478 20.457 12 20.457 12 20.457s7.522 0 9.388-.513a3.003 3.003 0 0 0 2.11-2.107C24 15.971 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Institutional */}
        <div className="flex flex-col gap-4">
          <h4 className="font-title font-bold text-white text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-accent">
            Institucional
          </h4>
          <ul className="flex flex-col gap-3 list-none p-0 m-0 text-[#9ca3af]">
            <li>
              <Link href="/" className="hover:text-accent hover:pl-1 transition-all duration-200">
                Início
              </Link>
            </li>
            <li>
              <Link href="/movimento" className="hover:text-accent hover:pl-1 transition-all duration-200">
                Nosso Movimento
              </Link>
            </li>
            <li>
              <Link href="/projetos" className="hover:text-accent hover:pl-1 transition-all duration-200">
                Nossos Projetos
              </Link>
            </li>
            <li>
              <Link href="/trupe" className="hover:text-accent hover:pl-1 transition-all duration-200">
                Nossa Trupe
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-accent hover:pl-1 transition-all duration-200">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Key Projects */}
        <div className="flex flex-col gap-4">
          <h4 className="font-title font-bold text-white text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-accent">
            Projetos principais
          </h4>
          <ul className="flex flex-col gap-3 list-none p-0 m-0 text-[#9ca3af]">
            <li>
              <Link href="/projetos#projeto-kaiu-kombi" className="hover:text-accent hover:pl-1 transition-all duration-200">
                Kaiu da Kombi
              </Link>
            </li>
            <li>
              <Link href="/projetos#projeto-musica-movimento" className="hover:text-accent hover:pl-1 transition-all duration-200">
                Música e Movimento
              </Link>
            </li>
            <li>
              <Link href="/projetos#projeto-jogando-cima" className="hover:text-accent hover:pl-1 transition-all duration-200">
                Jogando Para Cima
              </Link>
            </li>
            <li>
              <Link href="/projetos#projeto-fuxico-bunitas" className="hover:text-accent hover:pl-1 transition-all duration-200">
                Fuxico das Bunitas
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Location/Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-title font-bold text-white text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-accent">
            Localização
          </h4>
          <div className="flex flex-col gap-4 text-[#9ca3af] text-[0.95rem]">
            <div className="flex items-start gap-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 text-primary mt-1"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Canela, Rio Grande do Sul - Brasil</span>
            </div>
            <div className="flex items-start gap-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 text-primary mt-1"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>contato@culturapontokombi.com.br</span>
            </div>
            <div className="flex items-start gap-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 text-primary mt-1"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>(54) 99999-9999</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1140px] border-t border-white/10 pt-8 flex flex-wrap justify-between gap-4 text-[#9ca3af] text-[0.875rem]">
        <p>&copy; 2026 Ponto de Cultura Kombinação. Todos os direitos reservados.</p>
        <p>Desenvolvido para o Instituto SEIDE</p>
      </div>
    </footer>
  );
}
