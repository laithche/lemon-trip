"use client";
import { useLanguage } from "@/src/context/LanguageContext";
import { useState } from "react";

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState<"success" | "error" | null>(null);

  async function handleSubmit(event: React.BaseSyntheticEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessageStatus(null); // Resetta lo stato a ogni tentativo

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "6fd1982f-8362-4248-b9a3-9b66cfad8027");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setMessageStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setMessageStatus("error");
      }
    } catch (error) {
      console.error("Errore invio:", error);
      setMessageStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-96px)] flex items-center justify-center p-6 relative overflow-hidden">

      <div className="relative z-10 w-full max-w-lg">
        <div className="relative bg-zinc-800 backdrop-blur-xl border border-white/10 p-8 rounded-[30px] shadow-[0_10_80px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* riflessi */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 blur-[50px] rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#C2F148]/5 blur-[50px] rounded-full" />

          {/* etichetta */}
          <div className="flex justify-between items-center mb-8 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
            <span>{'//'} LT-PKG-01</span>
            <span className="bg-[#C2F148] text-black px-2 py-0.5 font-bold tracking-tighter">READY</span>
          </div>

          <h1 className="font-mono text-3xl font-black text-white mb-2 tracking-tighter">
            {t.contact.title}
          </h1>
          <p className="font-mono text-[10px] text-white/50 mb-8 uppercase tracking-widest leading-relaxed">
            {t.contact.subtitle}
          </p>

          {/* feedback */}
          {messageStatus === "success" && (
            <div className="bg-[#C2F148] text-black font-mono text-[10px] p-3 mb-6 font-bold uppercase animate-pulse">
              {t.contact.success}
            </div>
          )}
          
          {messageStatus === "error" && (
            <div className="bg-red-500 text-white font-mono text-[10px] p-3 mb-6 font-bold uppercase">
              {t.contact.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-1">
              <label className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#C2F148]">{t.contact.email}</label>
              <input 
                name="email"
                required
                type="email" 
                className="w-full bg-black/40 border-b border-white/10 p-3 text-sm text-white outline-none focus:border-[#C2F148] transition-all placeholder:text-white/10" 
                placeholder="USER@EMAIL.COM" 
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#C2F148]">{t.contact.subject}</label>
              <input 
                name="subject"
                required
                type="text" 
                className="w-full bg-black/40 border-b border-white/10 p-3 text-sm text-white outline-none focus:border-[#C2F148] transition-all placeholder:text-white/10" 
                placeholder="SUBJECT" 
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#C2F148]">{t.contact.message}</label>
              <textarea 
                name="message"
                required
                rows={3} 
                className="w-full bg-black/40 border-b border-white/10 p-3 text-sm text-white outline-none focus:border-[#C2F148] transition-all resize-none placeholder:text-white/10" 
                placeholder="YOUR_TEXT..." 
              />
            </div>

            <button 
              disabled={isSubmitting}
              type="submit"
              className={`w-full mt-4 border border-[#C2F148] py-4 font-mono text-[10px] tracking-[0.3em] transition-all duration-300 ${isSubmitting ? 'bg-zinc-800 text-zinc-500 border-zinc-700 cursor-not-allowed' : 'text-[#C2F148] hover:bg-[#C2F148] hover:text-black'}`}
            >
              {isSubmitting ? "SENDING..." : t.contact.send}
            </button>
          </form>

          <div className="mt-10 flex items-end justify-between font-mono text-[8px] text-white/30 uppercase">
             <div className="flex flex-col gap-1">
               <span>DATE: 2026</span>
               <span>LOC: SPACE</span>
             </div>
             <div className="h-6 w-16 bg-[repeating-linear-gradient(90deg,white,white_1px,transparent_1px,transparent_3px)]" />
          </div>
        </div>
      </div>
    </div>
  );
}