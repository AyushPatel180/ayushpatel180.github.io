export const PROFILE = {
  name: "Ayush Patel",
  role: "Machine Learning Engineer",
  tagline: "Building AI systems that think, learn, and scale.",
  email: "work.ayushpatel18@gmail.com",
  phone: "+91 8200880686",
  location: "Ahmedabad, Gujarat, India",
  linkedin: "https://www.linkedin.com/in/ayush-patel18/",
  github: "https://github.com/AyushPatel180",
  resumeLink: "Ayush-Patel-Resume-ML.pdf"
};

export const EDUCATION = [
  {
    degree: "Master's in Data Science",
    org: "Dhirubhai Ambani Institute of Information and Communication Technology",
    score: "8.54 CGPA",
    period: "Jul 2023 – May 2025",
    place: "Gandhinagar, Gujarat"
  },
  {
    degree: "Bachelor's in Statistics",
    org: "St. Xavier's College",
    score: "7.74 CGPA",
    period: "Jul 2020 – Apr 2023",
    place: "Ahmedabad, Gujarat"
  }
];

export const EXPERIENCE = [
  {
    company: "F(x) Data Labs",
    role: "Associate Machine Learning Engineer",
    period: "Dec 2024 – Present",
    bullets: [
      "Architected and deployed production-grade AI backend systems using Python, FastAPI, and Weaviate vector database, achieving sub-5 second response times for semantic search operations.",
      "Implemented RAG (Retrieval-Augmented Generation) pipelines with OpenAI GPT models, reducing manual processing time by 80% and achieving 95% accuracy in automated form generation.",
      "Designed hybrid semantic search algorithms combining vector embeddings with traditional search methods, improving search relevance by 40% and user satisfaction scores.",
      "Containerized applications with Docker Compose and implemented comprehensive logging, monitoring, and error-handling systems for enterprise-grade reliability and scalability.",
      "Collaborated with cross-functional teams to integrate AI solutions into existing workflows, ensuring seamless deployment and user adoption across the organization."
    ],
    tags: ["Python","FastAPI","Weaviate","OpenAI","LangChain","Docker","RAG","Vector Search","MLOps"]
  }
];

export const PROJECTS = [
  {
    title: "AI Tutor — LLM + RAG + LoRA Fine-tuning",
    desc: "Developed an intelligent tutoring system using LLaMA-3 with LoRA fine-tuning and RAG capabilities. The system ingests YouTube transcripts, creates knowledge embeddings, and provides personalized educational responses with context-aware learning.",
    highlights: ["Perplexity 1.05","BLEU 0.55","ROUGE-L 0.74","<4.3s avg latency","YouTube transcript processing"],
    links: {
      repo: "https://github.com/AyushPatel180",
      demo: null
    },
    tags: ["LLaMA-3","PEFT","LoRA","RAG","LangChain","FAISS","Fine-tuning"]
  },
  {
    title: "Automated Form Generation — AI + RAG",
    desc: "Built an intelligent form generation system using RAG and OpenAI GPT models that automatically creates structured forms from unstructured documents. Achieved 95% accuracy in form field extraction and reduced manual form creation time by 80%.",
    highlights: ["95% form accuracy","80% time reduction","Document processing","Structured output"],
    links: {
      repo: "https://github.com/AyushPatel180",
      demo: null
    },
    tags: ["OpenAI","RAG","Document Processing","FastAPI","Python","NLP"]
  },
  {
    title: "Fashion Item Classification — CNN + FastAPI",
    desc: "Built a real-time fashion classification system using CNN architecture with Keras/TensorFlow. Deployed via FastAPI on AWS EC2 with Docker containerization, serving 70k+ images across 10 fashion categories.",
    highlights: ["88% test accuracy","4–5s inference latency","70k images, 10 classes","Real-time API"],
    links: {
      repo: "https://github.com/AyushPatel180",
      demo: null
    },
    tags: ["TensorFlow","Keras","FastAPI","Docker","AWS","CNN","Computer Vision"]
  },
  {
    title: "Numerology Chatbot — OpenAI + LangChain",
    desc: "Created an intelligent chatbot with personality adaptation using OpenAI GPT models and LangChain framework. Integrated Pinecone vector database for context retrieval and MySQL for conversation persistence.",
    highlights: ["35% response quality improvement","5-7s latency reduction","Persona-aware responses","Context retention"],
    links: {
      repo: "https://github.com/AyushPatel180",
      demo: null
    },
    tags: ["OpenAI","LangChain","Pinecone","MySQL","AWS","Chatbot","NLP"]
  },
  {
    title: "Customer Lifetime Value Prediction — ML + Analytics",
    desc: "Developed a comprehensive customer analytics system using Random Forest models to predict customer lifetime value from 9,000+ insurance records. Built interactive dashboards and implemented natural language SQL queries via LLM integration.",
    highlights: ["9,000+ records processed","200+ SQL queries optimized","Interactive dashboards","LLM-powered analytics"],
    links: {
      repo: "https://github.com/AyushPatel180",
      demo: null
    },
    tags: ["Python","SQL","Power BI","LLM","MySQL","Random Forest","Analytics"]
  }
];

export const SKILLS = {
  "Languages": ["Python","SQL","JavaScript"],
  "Frameworks": ["PyTorch","TensorFlow","Keras","LangChain","FastAPI","Streamlit","React"],
  "Databases": ["PostgreSQL","MySQL","MongoDB"],
  "Vector DBs": ["FAISS","Pinecone","Weaviate","Chroma"],
  "Cloud & Tools": ["AWS","Git","GitHub","Power BI","Tableau","Excel","VS Code","Docker"]
};
