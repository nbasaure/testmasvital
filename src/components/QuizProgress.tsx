import { motion } from "framer-motion";

interface QuizProgressProps {
  current: number;
  total: number;
}

const QuizProgress = ({ current, total }: QuizProgressProps) => {
  return (
    <div className="w-full max-w-sm mx-auto mb-10">
      {/* Pill dot step indicators */}
      <div className="flex items-center justify-center gap-1.5 mb-3">
        {Array.from({ length: total }, (_, i) => (
          <motion.div
            key={i}
            layout
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`h-1.5 rounded-full transition-colors duration-300 ${
              i < current
                ? "bg-primary w-6"
                : i === current
                ? "bg-primary w-10"
                : "bg-border w-2"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs font-body">
        <span className="text-muted-foreground">Pregunta {current + 1} de {total}</span>
        <span className="font-semibold text-primary">
          {Math.round(((current + 1) / total) * 100)}% completado
        </span>
      </div>
    </div>
  );
};

export default QuizProgress;
