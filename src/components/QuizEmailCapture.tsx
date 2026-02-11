import { useState } from "react";
import { motion } from "framer-motion";

interface QuizEmailCaptureProps {
  onSubmit: (email: string) => void;
}

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
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
          Estamos analizando tus respuestas…
        </h2>
        <p className="text-muted-foreground font-body">
          Ingresa tu email para recibir tu diagnóstico personalizado.
        </p>
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
          className="w-full py-4 px-6 bg-primary text-primary-foreground font-body font-semibold text-base rounded-xl transition-all duration-300 hover:brightness-110"
        >
          Ver mi diagnóstico
        </motion.button>

        <p className="text-xs text-muted-foreground/60 font-body">
          Respetamos tu privacidad. No enviamos spam.
        </p>
      </form>
    </motion.div>
  );
};

export default QuizEmailCapture;
