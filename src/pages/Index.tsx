import { useState, useCallback } from "react";
import QuizHero from "@/components/QuizHero";
import QuizProgress from "@/components/QuizProgress";
import QuizQuestion from "@/components/QuizQuestion";
import QuizEmailCapture from "@/components/QuizEmailCapture";
import QuizResult from "@/components/QuizResult";
import { questions, calculateResults, type ProductKey } from "@/lib/quizData";
import logo from "@/assets/logo-masvital.png";

type QuizStep = "hero" | "questions" | "email" | "result";

const InnerLayout = ({ children, logo }: { children: React.ReactNode; logo: string }) => (
  <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
    {/* Decorative background blobs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/6 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/6 blur-3xl" />
    </div>
    {/* Logo top-left */}
    <div className="absolute top-6 left-6 z-10">
      <img src={logo} alt="Más Vital" className="h-8 md:h-10" />
    </div>
    <div className="relative z-10 w-full flex flex-col items-center">
      {children}
    </div>
  </div>
);

const Index = () => {
  const [step, setStep] = useState<QuizStep>("hero");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<{
    primary: ProductKey;
    secondary: ProductKey;
    showCombo: boolean;
    scores: Record<ProductKey, number>;
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
      setStep("email");
    }
  }, [answers, currentQuestion]);

  const handleEmailSubmit = useCallback((email: string) => {
    console.log("Email captured:", email);
    const res = calculateResults(answers);
    setResult(res);
    setStep("result");
  }, [answers]);

  return (
    <div className="min-h-screen bg-background">
      {step === "hero" && <QuizHero onStart={handleStart} />}

      {step === "questions" && (
        <InnerLayout logo={logo}>
          <QuizProgress current={currentQuestion} total={questions.length} />
          <QuizQuestion
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
            questionIndex={currentQuestion}
          />
        </InnerLayout>
      )}

      {step === "email" && (
        <InnerLayout logo={logo}>
          <QuizEmailCapture onSubmit={handleEmailSubmit} />
        </InnerLayout>
      )}

      {step === "result" && result && (
        <InnerLayout logo={logo}>
          <QuizResult
            primary={result.primary}
            secondary={result.secondary}
            showCombo={result.showCombo}
            scores={result.scores}
          />
        </InnerLayout>
      )}
    </div>
  );
};

export default Index;
