"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackText, setFeedbackText] = useState("");

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setFeedbackText("");

    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject || !message.trim()) {
      setStatus("error");
      setFeedbackText("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (!validateEmail(email.trim())) {
      setStatus("error");
      setFeedbackText("Por favor, insira um e-mail válido.");
      return;
    }

    setStatus("loading");

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFeedbackText("Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setFeedbackText("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
    }
  };

  return (
    <>
      {/* CONTACT HERO */}
      <section className="pt-[140px] pb-[60px] bg-[linear-gradient(180deg,rgba(10,78,130,0.05)_0%,transparent_100%)]" id="contato-hero-section">
        <div className="container mx-auto px-4 max-w-[1140px] text-center">
          <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary mb-3">
            Fale Conosco
          </span>
          <h1 className="font-title font-extrabold text-4xl md:text-5xl text-deep-blue mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-ink-soft max-w-[700px] mx-auto leading-relaxed">
            Dúvidas sobre matrículas, ideias de parcerias ou interesse em voluntariado? Deixe sua mensagem no formulário abaixo.
          </p>
        </div>
      </section>

      {/* CONTACT GRID SECTION */}
      <section className="pb-20" id="contato-content-section">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-stretch">
            
            {/* Left: Information Card */}
            <div
              className="fade-in bg-deep-blue text-white rounded-premium p-8 md:p-10 lg:p-12 shadow-premium flex flex-col justify-between"
              id="contato-info-card"
            >
              <div>
                <h2 className="font-title font-bold text-3xl text-white mb-4">
                  Canais de Atendimento
                </h2>
                <p className="text-white/85 text-[0.98rem] leading-relaxed mb-10">
                  Se preferir um contato direto ou queira fazer uma visita institucional à sede do Instituto SEIDE, utilize as informações abaixo:
                </p>

                <div className="flex flex-col gap-8">
                  {/* Sede */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-title font-bold text-lg text-white mb-1">Nossa Sede</h4>
                      <p className="text-white/75 text-[0.92rem] leading-relaxed">
                        Canela, Rio Grande do Sul - Brasil
                        <br />
                        CEP: 95680-000
                      </p>
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-title font-bold text-lg text-white mb-1">E-mail</h4>
                      <p className="text-white/75 text-[0.92rem]">
                        contato@culturapontokombi.com.br
                      </p>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-title font-bold text-lg text-white mb-1">
                        Telefone / WhatsApp
                      </h4>
                      <p className="text-white/75 text-[0.92rem]">(54) 99999-9999</p>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-title font-bold text-lg text-white mb-1">
                        Horário de Atendimento
                      </h4>
                      <p className="text-white/75 text-[0.92rem] leading-relaxed">
                        Segunda a Sexta: 08:30 às 11:30 e 13:30 às 17:30
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div
              className="fade-in bg-white border border-line rounded-premium p-8 md:p-10 lg:p-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] flex flex-col justify-center"
              id="contato-form-wrapper"
            >
              {status === "success" && (
                <div className="bg-[#def7ec] text-[#03543f] border border-[#bcf0da] rounded-[12px] p-4 mb-6 font-semibold text-sm">
                  {feedbackText}
                </div>
              )}
              {status === "error" && (
                <div className="bg-[#fde8e8] text-[#9b1c1c] border border-[#f8b4b4] rounded-[12px] p-4 mb-6 font-semibold text-sm">
                  {feedbackText}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="font-semibold text-sm text-ink mb-2 block">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[12px] border-2 border-line bg-slate-50 text-ink placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                    placeholder="Ex: Maria Souza"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-semibold text-sm text-ink mb-2 block">
                    Seu E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[12px] border-2 border-line bg-slate-50 text-ink placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                    placeholder="Ex: maria@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="font-semibold text-sm text-ink mb-2 block">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[12px] border-2 border-line bg-slate-50 text-ink focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                    required
                  >
                    <option value="" disabled>
                      Selecione uma opção...
                    </option>
                    <option value="oficinas">Inscrição em Oficinas</option>
                    <option value="voluntariado">Quero ser Voluntário</option>
                    <option value="parcerias">Apoio / Parcerias</option>
                    <option value="espetaculo">Contratação do Espetáculo</option>
                    <option value="outros">Outros Assuntos</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="font-semibold text-sm text-ink mb-2 block">
                    Sua Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[12px] border-2 border-line bg-slate-50 text-ink placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-200 resize-y min-h-[130px]"
                    placeholder="Escreva aqui sua mensagem..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full text-center px-8 py-3.5 bg-primary hover:bg-[#e02f61] text-white font-title font-bold rounded-premium shadow-[0_8px_20px_rgba(255,63,115,0.25)] hover:shadow-[0_12px_24px_rgba(255,63,115,0.35)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            </div>

          </div>

          {/* Map Block */}
          <div className="fade-in map-container mt-12 overflow-hidden border border-line rounded-premium shadow-premium" id="contato-map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27807.411649987487!2d-50.82902377317769!3d-29.36214553258524!2m3!1f0!2f0!3f0!3m2!1i1024|2i768|4f13.1!3m3!1m2!1s0x9519315c1e5bf991%3A0xe54e38e1b6ad7fde!2sCanela%2C%20RS%2C%2095680-000!5e0!3m2!1spt-BR!2sbr!4v1687459021435!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              style={{ border: 0, display: "block" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização de Canela, Rio Grande do Sul"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
