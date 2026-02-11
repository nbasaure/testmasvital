import { useState, useCallback } from "react";
import QuizHero from "@/components/QuizHero";
import QuizProgress from "@/components/QuizProgress";
import QuizQuestion from "@/components/QuizQuestion";
import QuizEmailCapture from "@/components/QuizEmailCapture";
import QuizResult from "@/components/QuizResult";
import { questions, calculateResults, type ProductKey } from "@/lib/quizData";

type QuizStep = "hero" | "questions" | "email" | "result";

const Index = () => {
  const [step, setStep] = useState<QuizStep>("hero");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<{
    primary: ProductKey;
    secondary: ProductKey;
    showCombo: boolean;
  } | null>(null);

  const handleStart = useCallback(() => {
    setStep("questions");
  }, []);

  const handleAnswer = useCallback((answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // All questions answered, show email capture
      setStep("email");
    }
  }, [answers, currentQuestion]);

  const handleEmailSubmit = useCallback((email: string) => {
    console.log("Email captured:", email);
    // Calculate results
    const res = calculateResults(answers);
    setResult(res);
    setStep("result");
  }, [answers]);

  return (
    <div className="min-h-screen bg-background">
      {step === "hero" && <QuizHero onStart={handleStart} />}

      {step === "questions" && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
          <QuizProgress current={currentQuestion} total={questions.length} />
          <QuizQuestion
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
            questionIndex={currentQuestion}
          />
        </div>
      )}

      {step === "email" && (
        <div className="min-h-screen flex items-center justify-center px-6 py-12">
          <QuizEmailCapture onSubmit={handleEmailSubmit} />
        </div>
      )}

      {step === "result" && result && (
        <div className="min-h-screen flex items-center justify-center px-6 py-12">
          <QuizResult
            primary={result.primary}
            secondary={result.secondary}
            showCombo={result.showCombo}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
