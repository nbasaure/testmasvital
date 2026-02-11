import { motion } from "framer-motion";
import { products, type ProductKey } from "@/lib/quizData";

interface QuizResultProps {
  primary: ProductKey;
  secondary: ProductKey;
  showCombo: boolean;
}

const QuizResult = ({ primary, secondary, showCombo }: QuizResultProps) => {
  const mainProduct = products[primary];
  const secondaryProduct = products[secondary];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="text-6xl block mb-4"
        >
          {mainProduct.emoji}
        </motion.span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          {mainProduct.subtitle}
        </h2>
        <p className="text-muted-foreground font-body">Tu diagnóstico personalizado</p>
      </div>

      {/* Main product card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="rounded-2xl bg-card border border-border shadow-quiz overflow-hidden mb-6"
      >
        <div className="p-8 md:p-10">
          <p className="text-foreground/80 font-body leading-relaxed mb-6">
            {mainProduct.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl bg-secondary/50">
            <img
              src={mainProduct.imageUrl}
              alt={mainProduct.name}
              className="w-32 h-32 object-contain rounded-lg"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                {mainProduct.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body mb-4">
                {mainProduct.benefit}
              </p>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={mainProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-full transition-all hover:brightness-110"
              >
                Ver mi recomendación
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Secondary recommendation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="rounded-2xl bg-card border border-border shadow-quiz overflow-hidden"
      >
        <div className="p-6 md:p-8">
          <p className="text-sm font-body text-muted-foreground mb-4 uppercase tracking-wide">
            {showCombo ? "🔥 Complemento recomendado — ¡Combo ideal!" : "También te puede interesar"}
          </p>
          <div className="flex items-center gap-4">
            <img
              src={secondaryProduct.imageUrl}
              alt={secondaryProduct.name}
              className="w-20 h-20 object-contain rounded-lg"
            />
            <div className="flex-1">
              <h4 className="font-display font-semibold text-foreground">
                {secondaryProduct.emoji} {secondaryProduct.name}
              </h4>
              <p className="text-sm text-muted-foreground font-body mt-1">
                {secondaryProduct.benefit}
              </p>
            </div>
            <a
              href={secondaryProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 border border-primary text-primary font-body text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Ver producto
            </a>
          </div>
        </div>
      </motion.div>

      {/* Restart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-8"
      >
        <button
          onClick={() => window.location.reload()}
          className="text-sm text-muted-foreground font-body underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Volver a hacer el test
        </button>
      </motion.div>
    </motion.div>
  );
};

export default QuizResult;
