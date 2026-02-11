import { motion, AnimatePresence } from "framer-motion";
import type { QuizQuestion as QuizQuestionType } from "@/lib/quizData";

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (index: number) => void;
  questionIndex: number;
}

const QuizQuestion = ({ question, onAnswer, questionIndex }: QuizQuestionProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionIndex}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="text-center mb-10">
          <span className="text-5xl mb-4 block">{question.emoji}</span>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
            {question.question}
          </h2>
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAnswer(index)}
              className="w-full text-left p-5 rounded-xl bg-card border border-border shadow-quiz hover:shadow-quiz-hover hover:border-primary/30 transition-all duration-300 group"
            >
              <span className="font-body text-base text-foreground group-hover:text-primary transition-colors">
                {option.text}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuizQuestion;
