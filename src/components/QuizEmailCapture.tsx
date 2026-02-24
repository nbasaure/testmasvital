import { useState } from "react";
import { motion } from "framer-motion";

interface QuizEmailCaptureProps {
  onSubmit: (email: string) => void;
}

const benefits = [
  { icon: "🎯", text: "Recomendación 100% personalizada según tu perfil" },
  { icon: "🚀", text: "Basada en tus hábitos y necesidades reales" },
  { icon: "🎁", text: "Descuento exclusivo en tu primer pedido" },
];

const QuizEmailCapture = ({ onSubmit }: QuizEmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Por favor ingresa tu email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Por favor ingresa un email válido");
      return;
    }
    onSubmit(trimmed);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto text-center"
    >
      {/* Analyzing animation */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
        <div className="flex justify-center gap-1.5 mb-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-primary"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
          ¡Tu diagnóstico está listo!
        </h2>
        <p className="text-muted-foreground font-body">
          Ingresa tu email para ver tu recomendación personalizada.
        </p>
      </motion.div>

      {/* Benefit bullets */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-7 p-5 rounded-2xl bg-secondary/60 border border-border text-left space-y-3"
      >
        {benefits.map((b, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-lg shrink-0">{b.icon}</span>
            <span className="text-sm font-body text-foreground/80">{b.text}</span>
          </div>
        ))}
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            placeholder="tu@email.com"
            className="w-full px-6 py-4 rounded-xl bg-card border border-border text-foreground font-body text-base placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
          {error && (
            <p className="mt-2 text-sm text-destructive font-body">{error}</p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-4 px-6 bg-accent text-accent-foreground font-body font-semibold text-base rounded-xl glow-gold transition-all duration-300 hover:brightness-110"
        >
          Ver mi diagnóstico →
        </motion.button>

        <p className="text-xs text-muted-foreground/60 font-body flex items-center justify-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Tus datos están seguros. No enviamos spam.
        </p>
      </form>
    </motion.div>
  );
};

export default QuizEmailCapture;
