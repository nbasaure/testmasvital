export type ProductKey = "melena" | "magnesio" | "omega3" | "multivitaminico" | "biotina";

export interface QuizOption {
  text: string;
  scores: Partial<Record<ProductKey, number>>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  emoji: string;
  options: QuizOption[];
}

export interface ProductInfo {
  key: ProductKey;
  name: string;
  subtitle: string;
  emoji: string;
  description: string;
  benefit: string;
  url: string;
  imageUrl: string;
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuál es tu mayor desafío hoy?",
    emoji: "🎯",
    options: [
      { text: "Me cuesta concentrarme o recordar cosas", scores: { melena: 5, multivitaminico: 1 } },
      { text: "Me siento tenso/a o me cuesta dormir", scores: { magnesio: 5, melena: 1 } },
      { text: "Me siento inflamado/a o con molestias articulares", scores: { omega3: 5, magnesio: 1 } },
      { text: "Estoy constantemente cansado/a", scores: { multivitaminico: 5, magnesio: 2 } },
      { text: "He notado caída o debilitamiento del cabello", scores: { biotina: 5, multivitaminico: 1 } },
    ],
  },
  {
    id: 2,
    question: "¿Cómo describirías tu nivel de energía?",
    emoji: "⚡",
    options: [
      { text: "Alto y estable", scores: { melena: 1, omega3: 1 } },
      { text: "Subidas y bajadas", scores: { magnesio: 2, multivitaminico: 2 } },
      { text: "Bajo casi todo el día", scores: { multivitaminico: 3, magnesio: 2, melena: 1 } },
    ],
  },
  {
    id: 3,
    question: "¿Cómo duermes normalmente?",
    emoji: "😴",
    options: [
      { text: "Duermo profundo", scores: { omega3: 1, melena: 1 } },
      { text: "Me cuesta quedarme dormido/a", scores: { magnesio: 3, melena: 1 } },
      { text: "Me despierto durante la noche", scores: { magnesio: 3, multivitaminico: 1 } },
      { text: "Me levanto cansado/a", scores: { magnesio: 2, multivitaminico: 2 } },
    ],
  },
  {
    id: 4,
    question: "¿Tu rutina incluye actividad física?",
    emoji: "🏃",
    options: [
      { text: "No", scores: { multivitaminico: 2, magnesio: 1 } },
      { text: "1–2 veces por semana", scores: { omega3: 1, multivitaminico: 1 } },
      { text: "3–5 veces por semana", scores: { omega3: 2, magnesio: 1 } },
      { text: "Entreno intenso", scores: { omega3: 3, magnesio: 2, multivitaminico: 1 } },
    ],
  },
  {
    id: 5,
    question: "¿Qué te gustaría mejorar primero?",
    emoji: "✨",
    options: [
      { text: "Memoria y enfoque", scores: { melena: 4, multivitaminico: 1 } },
      { text: "Dormir mejor", scores: { magnesio: 4, melena: 1 } },
      { text: "Energía diaria", scores: { multivitaminico: 4, magnesio: 1 } },
      { text: "Rendimiento físico", scores: { omega3: 4, multivitaminico: 1 } },
      { text: "Cabello / piel / uñas", scores: { biotina: 4, multivitaminico: 1 } },
    ],
  },
  {
    id: 6,
    question: "¿Cuál es tu rango de edad?",
    emoji: "📊",
    options: [
      { text: "18–25", scores: { multivitaminico: 1, biotina: 1 } },
      { text: "26–35", scores: { melena: 1, magnesio: 1 } },
      { text: "36–45", scores: { omega3: 1, magnesio: 1, melena: 1 } },
      { text: "46+", scores: { omega3: 2, magnesio: 1, multivitaminico: 1 } },
    ],
  },
];

export const products: Record<ProductKey, ProductInfo> = {
  melena: {
    key: "melena",
    name: "Melena de León 600 mg",
    subtitle: "Enfoque y Claridad Mental",
    emoji: "🧠",
    description: "Según tus respuestas, tu principal desafío es la claridad mental y la concentración. La Melena de León es un hongo adaptógeno que apoya la función cognitiva, la comunicación neuronal y el eje intestino-cerebro.",
    benefit: "Apoya la función cognitiva, la memoria y la comunicación neuronal de forma natural.",
    url: "https://masvitalsuplementos.cl/products/melena-de-leon",
    imageUrl: "https://masvitalsuplementos.cl/cdn/shop/files/Melena_de_leon_suplemento_alimenticio.webp?v=1768268875&width=533",
  },
  magnesio: {
    key: "magnesio",
    name: "Bisglicinato de Magnesio 1.000 mg",
    subtitle: "Sueño y Relajación",
    emoji: "😴",
    description: "Tus respuestas indican que el estrés y la calidad de sueño son tus principales desafíos. El Bisglicinato de Magnesio es la forma más biodisponible de magnesio, ideal para relajar el sistema nervioso y mejorar el descanso.",
    benefit: "Favorece la relajación muscular, mejora la calidad del sueño y reduce la tensión.",
    url: "https://masvitalsuplementos.cl/products/bisglicinato-de-magnesio",
    imageUrl: "https://masvitalsuplementos.cl/cdn/shop/files/MercadoLibreMAGNESIO.png?v=1763774582&width=533",
  },
  omega3: {
    key: "omega3",
    name: "Omega 3 Premium EPA 800 mg DHA 400 mg",
    subtitle: "Corazón y Rendimiento",
    emoji: "❤️",
    description: "Según tu perfil, necesitas apoyo antiinflamatorio y cardiovascular. El Omega 3 con alta concentración de EPA y DHA es clave para reducir la inflamación, proteger tu corazón y mejorar el rendimiento físico.",
    benefit: "Reduce la inflamación, protege el corazón y mejora el rendimiento deportivo.",
    url: "https://masvitalsuplementos.cl/products/omega-3-premium",
    imageUrl: "https://masvitalsuplementos.cl/cdn/shop/files/Omega_3_premium_suplemento_alimenticio.jpg?v=1768339762&width=533",
  },
  multivitaminico: {
    key: "multivitaminico",
    name: "Multivitamínico Premium",
    subtitle: "Energía y Defensas",
    emoji: "⚡",
    description: "Tu cuerpo necesita un impulso integral de vitaminas y minerales esenciales. El Multivitamínico Premium aporta la base nutricional diaria para combatir el cansancio y fortalecer tus defensas.",
    benefit: "Aporta vitaminas y minerales esenciales para energía diaria y sistema inmune.",
    url: "https://masvitalsuplementos.cl/products/multivitaminico-premium",
    imageUrl: "https://masvitalsuplementos.cl/cdn/shop/files/2.png?v=1767197070&width=533",
  },
  biotina: {
    key: "biotina",
    name: "Biotina Premium",
    subtitle: "Cabello, Piel y Uñas",
    emoji: "💇‍♀️",
    description: "Tus respuestas revelan que tu prioridad es la salud de tu cabello, piel y uñas. La Biotina Premium con Zinc es la combinación perfecta para fortalecer desde adentro y frenar la caída del cabello.",
    benefit: "Fortalece cabello, uñas y piel desde el interior con biotina y zinc.",
    url: "https://masvitalsuplementos.cl/products/biotina-anticaida-cabello",
    imageUrl: "https://masvitalsuplementos.cl/cdn/shop/files/MercadoLibreBIOTINA_66ed88b9-5292-47b8-9ec2-750aefdd252a.png?v=1767197238&width=533",
  },
};

export function calculateResults(answers: number[]): { primary: ProductKey; secondary: ProductKey; scores: Record<ProductKey, number>; showCombo: boolean } {
  const scores: Record<ProductKey, number> = {
    melena: 0,
    magnesio: 0,
    omega3: 0,
    multivitaminico: 0,
    biotina: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const option = question.options[answerIndex];
      for (const [key, value] of Object.entries(option.scores)) {
        scores[key as ProductKey] += value;
      }
    }
  });

  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a) as [ProductKey, number][];
  const primary = sorted[0][0];
  const secondary = sorted[1][0];
  const diff = sorted[0][1] - sorted[1][1];
  const showCombo = diff <= 3;

  return { primary, secondary, scores, showCombo };
}
