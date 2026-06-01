import { Month } from '../types';

export const month4: Month = {
  monthNumber: 4,
  title: "NLP & LLM Engineering",
  theme: "Transformers, Hugging Face, RAG, Agents",
  description: "Moving into modern Natural Language Processing. Focusing on Transformer architecture, Hugging Face tooling, LLM fine-tuning, Retrieval-Augmented Generation (RAG), and Agentic systems.",
  weeks: [
    {
      weekNumber: 1,
      title: "NLP Foundations & Embeddings",
      theme: "Tokenization, Word2Vec, Attention",
      days: [
        {
          dayNumber: 1,
          title: "Text Preprocessing & Tokenization",
          focus: "BPE, WordPiece, regex",
          tasks: [
            { id: "m4-w1-d1-t1", title: "Regex & Text Cleaning", description: "Build a robust pipeline using regex to clean messy HTML and social media text.", type: "coding", duration: "2h" },
            { id: "m4-w1-d1-t2", title: "BPE Implementation", description: "Implement Byte Pair Encoding (BPE) tokenization from scratch.", type: "architecture", duration: "3h" },
            { id: "m4-w1-d1-t3", title: "Hugging Face Tokenizers", description: "Use the `tokenizers` library to train a custom WordPiece tokenizer on a specific corpus.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Word Embeddings",
          focus: "Word2Vec, FastText",
          tasks: [
            { id: "m4-w1-d2-t1", title: "Skip-Gram Implementation", description: "Implement a basic Word2Vec Skip-Gram model in PyTorch using Embedding layers.", type: "coding", duration: "3h" },
            { id: "m4-w1-d2-t2", title: "FastText Utilization", description: "Train a FastText model using Gensim to capture subword information for Out-Of-Vocabulary words.", type: "deployment", duration: "2h" },
            { id: "m4-w1-d2-t3", title: "Embedding Visualization", description: "Extract trained embeddings and visualize linguistic relationships (King - Man + Woman) via t-SNE.", type: "testing", duration: "2h" }
          ]
        },
        {
          dayNumber: 3,
          title: "The Attention Mechanism",
          focus: "Self-Attention, Multi-head",
          tasks: [
            { id: "m4-w1-d3-t1", title: "Scaled Dot-Product Attention", description: "Write out the core attention math Operations (Q, K, V) in PyTorch.", type: "coding", duration: "3h" },
            { id: "m4-w1-d3-t2", title: "Multi-Head Attention", description: "Expand the self-attention block into a Multi-Head Attention PyTorch Module.", type: "architecture", duration: "2h" },
            { id: "m4-w1-d3-t3", title: "Attention Masks", description: "Implement causal (look-ahead) masks for autoregressive generation.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "The Transformer Architecture",
          focus: "Encoders, Decoders",
          tasks: [
            { id: "m4-w1-d4-t1", title: "Transformer Block", description: "Assemble the Multi-Head Attention, LayerNorm, and FeedForward networks into a singular Transformer Encoder block.", type: "coding", duration: "3h" },
            { id: "m4-w1-d4-t2", title: "Positional Encoding", description: "Implement the sinusoidal positional encoding function proposed in 'Attention is All You Need'.", type: "architecture", duration: "2h" },
            { id: "m4-w1-d4-t3", title: "Reading: The Paper", description: "Read and break down 'Attention is All You Need'.", type: "reading", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Hugging Face Transformers",
          focus: "BERT, RoBERTa, Pipelines",
          tasks: [
            { id: "m4-w1-d5-t1", title: "HF Pipeline API", description: "Use `pipeline` for Sentiment Analysis, NER, and Summarization.", type: "coding", duration: "2h" },
            { id: "m4-w1-d5-t2", title: "BERT Fine-tuning API", description: "Use the `Trainer` API to fine-tune DistilBERT for a custom classification task.", type: "optimization", duration: "3h" },
            { id: "m4-w1-d5-t3", title: "Model Hub Publishing", description: "Push the fine-tuned model to the Hugging Face Hub programmatically.", type: "deployment", duration: "2h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 1 Review",
          focus: "Transformer Foundations",
          tasks: [
            { id: "m4-w1-d6-t1", title: "Implementation Debugging", description: "Debug shape mismatches in a custom Transformer implementation.", type: "debugging", duration: "3h" },
            { id: "m4-w1-d6-t2", title: "LeetCode: Dynamic Programming Strings", description: "Solve String specific DP problems (e.g. Edit Distance).", type: "coding", duration: "2h" },
            { id: "m4-w1-d6-t3", title: "System Design", description: "Design a scalable sentiment analysis pipeline utilizing Kafka and BERT.", type: "system_design", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Implemented the core Transformer blocks (Attention, Positional Encoding) from scratch.",
        reading: "Attention is All You Need.",
        project: "Fine-tuned DistilBERT via Hugging Face Trainer.",
        debugging: "Resolved complex PyTorch tensor dimension broadcasting errors.",
        assessment: "Quiz on the math inside the Q*K.T / sqrt(d) operation.",
        interviewPrep: "Explain tokenization tradeoffs (WordPiece vs BPE)."
      }
    },
    {
      weekNumber: 2,
      title: "Retrieval-Augmented Generation (RAG)",
      theme: "Vector DBs, LlamaIndex, LangChain",
      days: [
        {
          dayNumber: 1,
          title: "Text Embeddings & Vector Search",
          focus: "Sentence Transformers",
          tasks: [
            { id: "m4-w2-d1-t1", title: "Information Retrieval", description: "Use `sentence-transformers` to generate embeddings for a set of legal documents.", type: "coding", duration: "2h" },
            { id: "m4-w2-d1-t2", title: "Vector DB Integration", description: "Store and retrieve these embeddings in Qdrant (revisiting Month 1).", type: "deployment", duration: "3h" },
            { id: "m4-w2-d1-t3", title: "Chunking Strategies", description: "Implement Character, Recursive, and Semantic chunking. Compare retrieval quality.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Introduction to LangChain",
          focus: "Prompts, Chains, Memory",
          tasks: [
            { id: "m4-w2-d2-t1", title: "LangChain Basics", description: "Build PromptTemplates and simple LLMChains connecting to OpenAI or local LLMs.", type: "coding", duration: "2h" },
            { id: "m4-w2-d2-t2", title: "Conversational Buffer Memory", description: "Attach Memory modules to maintain context in a chatbot UI.", type: "architecture", duration: "3h" },
            { id: "m4-w2-d2-t3", title: "Output Parsers", description: "Guarantee JSON output from an LLM by implementing PydanticOutputParser.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Building Naive RAG",
          focus: "Document Loaders, Retrievers",
          tasks: [
            { id: "m4-w2-d3-t1", title: "End-to-end RAG Pipeline", description: "Combine Document Loaders, VectorStoreRetrievers, and a Generation chain into a single script.", type: "coding", duration: "3h" },
            { id: "m4-w2-d3-t2", title: "LlamaIndex Exploration", description: "Re-build the identical RAG pipeline using LlamaIndex. Note architectural differences.", type: "architecture", duration: "2h" },
            { id: "m4-w2-d3-t3", title: "Prompt Engineering", description: "Modify the system prompt to explicitly prevent hallucination when retrieved context is empty.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Advanced RAG Techniques",
          focus: "HyDE, Re-ranking, Maximal Marginal Relevance",
          tasks: [
            { id: "m4-w2-d4-t1", title: "Re-ranking Models", description: "Integrate a Cross-Encoder (e.g., Cohere or open-source bge-reranker) to re-rank the top 10 retrieved chunks.", type: "coding", duration: "3h" },
            { id: "m4-w2-d4-t2", title: "Hypothetical Document Embeddings", description: "Implement HyDE: prompt the LLM to write a hypothetical answer, embed it, and search.", type: "architecture", duration: "2h" },
            { id: "m4-w2-d4-t3", title: "MMR Search", description: "Implement Maximal Marginal Relevance to increase diversity of retrieved context docs.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Evaluating LLMs & RAG",
          focus: "RAGAS, TruLens, LLM-as-a-judge",
          tasks: [
            { id: "m4-w2-d5-t1", title: "RAGAS Framework", description: "Use RAGAS to calculate faithfulness, answer relevance, and context precision on your RAG pipeline.", type: "testing", duration: "3h" },
            { id: "m4-w2-d5-t2", title: "LLM-as-a-judge", description: "Write an evaluation prompt using GPT-4 to grade the local LLMs outputs based on guidelines.", type: "testing", duration: "2h" },
            { id: "m4-w2-d5-t3", title: "Logging Traces", description: "Integrate LangSmith to trace chain executions visually.", type: "monitoring", duration: "2h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 2 Review",
          focus: "Productionizing RAG",
          tasks: [
            { id: "m4-w2-d6-t1", title: "Security: Prompt Injection", description: "Test the RAG pipeline against basic prompt injection attacks and implement guardrails.", type: "production", duration: "3h" },
            { id: "m4-w2-d6-t2", title: "LeetCode: Search", description: "Solve Binary Search / Search Space problems.", type: "coding", duration: "2h" },
            { id: "m4-w2-d6-t3", title: "System Design", description: "Design an enterprise internal KB search tool accommodating 5 million documents.", type: "system_design", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Built a state-of-the-art RAG pipeline utilizing advanced re-ranking and MMR.",
        reading: "RAG evaluation methodologies and papers.",
        project: "Advanced Document Q&A Bot with RAGAS evaluation metrics.",
        debugging: "Resolved hallucinations caused by poor chunking strategies.",
        assessment: "Evaluated on LangChain internal architectures.",
        interviewPrep: "RAG architecture tradeoffs (Dense vs Sparse retrieval)."
      }
    },
    {
      weekNumber: 3,
      title: "LLM Fine-Tuning & Serving",
      theme: "PEFT, LoRA, Quantization, vLLM",
      days: [
        {
          dayNumber: 1,
          title: "Quantization & Local LLMs",
          focus: "Ollama, GGUF, bitsandbytes",
          tasks: [
            { id: "m4-w3-d1-t1", title: "Local Deployment", description: "Run Llama-3 locally using Ollama. Interact via standard API.", type: "deployment", duration: "2h" },
            { id: "m4-w3-d1-t2", title: "bitsandbytes Integration", description: "Load a large model in 4-bit precision using `transformers` and `bitsandbytes` in PyTorch.", type: "optimization", duration: "3h" },
            { id: "m4-w3-d1-t3", title: "Inference Benchmarking", description: "Compare TTFT (Time To First Token) and Token-per-second of BF-16 vs 4-bit quantization.", type: "testing", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Parameter-Efficient Fine-Tuning",
          focus: "LoRA, QLoRA",
          tasks: [
            { id: "m4-w3-d2-t1", title: "LoRA Theory", description: "Read the LoRA paper. Implement basic low-rank matrix decomposition in NumPy.", type: "reading", duration: "2h" },
            { id: "m4-w3-d2-t2", title: "PEFT Library Setup", description: "Configure the PEFT library with LoraConfig targeting specifically Q/V projection layers.", type: "architecture", duration: "2h" },
            { id: "m4-w3-d2-t3", title: "SFT Trainer", description: "Use TRL (Transformer Reinforcement Learning) library's SFTTrainer to run a QLoRA fine-tune on Llama-3.", type: "coding", duration: "3h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Dataset Preparation for LLMs",
          focus: "Instruction Tuning formats",
          tasks: [
            { id: "m4-w3-d3-t1", title: "ChatML Formatting", description: "Write scripts converting unstructured FAQ data into ChatML/ShareGPT format for instruction tuning.", type: "coding", duration: "3h" },
            { id: "m4-w3-d3-t2", title: "Data Mixing", description: "Create a balanced dataset mix retaining base knowledge while introducing custom behaviors.", type: "optimization", duration: "2h" },
            { id: "m4-w3-d3-t3", title: "Dataset Generation", description: "Use GPT-4 to synthetic-generate high-quality instruction-response pairs.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "High-Performance Serving",
          focus: "vLLM, TGI, PagedAttention",
          tasks: [
            { id: "m4-w3-d4-t1", title: "vLLM Setup", description: "Deploy vLLM in a Docker container configuring GPU layers and PagedAttention.", type: "deployment", duration: "3h" },
            { id: "m4-w3-d4-t2", title: "Continuous Batching", description: "Read about and benchmark Continuous Batching vs static batching under simulated load.", type: "optimization", duration: "2h" },
            { id: "m4-w3-d4-t3", title: "LoRA Integration Server", description: "Serve the base model with hot-swappable LoRA adapters using vLLM.", type: "architecture", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Agentic Systems",
          focus: "Tool calling, ReAct, AutoGPT",
          tasks: [
            { id: "m4-w3-d5-t1", title: "Function Calling Implementation", description: "Create a LangChain Agent that executes custom Python APIs (e.g., retrieving weather or executing DB queries).", type: "coding", duration: "3h" },
            { id: "m4-w3-d5-t2", title: "ReAct Pattern", description: "Write a prompt utilizing the Reason-Act-Observe pattern. Parse outputs manually.", type: "architecture", duration: "2h" },
            { id: "m4-w3-d5-t3", title: "Agentic Debugging", description: "Investigate agent looping or tool failure edge cases using LangSmith logs.", type: "debugging", duration: "2h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 3 Review",
          focus: "Generative AI Systems",
          tasks: [
            { id: "m4-w3-d6-t1", title: "LLM System Design", description: "Architect a scalable customer support bot system combining RAG, generic chats, and Tool Calling.", type: "system_design", duration: "3h" },
            { id: "m4-w3-d6-t2", title: "LeetCode: Graph Traversal", description: "Graph algorithms for reasoning paths.", type: "coding", duration: "2h" },
            { id: "m4-w3-d6-t3", title: "Interview Topic: Cost/Latency", description: "Analyze the tradeoff between using GPT-4 vs Self-hosting Llama-8B vs Fine-tuning small models.", type: "reading", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Fine-tuned Llama-3 using QLoRA and deployed it using the high-performance vLLM engine.",
        reading: "LoRA and PagedAttention papers.",
        project: "Agentic Slack bot executing arbitrary SQL functions based on natural language.",
        debugging: "Resolved CUDA OOM errors during QLoRA training.",
        assessment: "Evaluated on when to choose RAG vs Fine-tuning vs Prompt Engineering.",
        interviewPrep: "Mock Interview: Design a cost-effective internal Generative AI pipeline."
      }
    },
    {
      weekNumber: 4,
      title: "Portfolio Project (LLM Pipeline)",
      theme: "RAG & Agentic Knowledge Platform",
      days: [
        {
          dayNumber: 1,
          title: "Project: Infrastructure & Embeddings",
          focus: "Qdrant, Data ingestion",
          tasks: [
            { id: "m4-w4-d1-t1", title: "Data Pipeline", description: "Build an Airflow pipeline that pulls Notion docs, chunks them, embeds with bge-large, and pushes to Qdrant.", type: "coding", duration: "4h" },
            { id: "m4-w4-d1-t2", title: "Hybrid Search Setup", description: "Configure Qdrant for hybrid search (dense vectors + sparse BM25).", type: "architecture", duration: "3h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Project: LLM Engineering",
          focus: "Advanced RAG Agent",
          tasks: [
            { id: "m4-w4-d2-t1", title: "Agent Router Construction", description: "Build an LLM router that classifies queries to use RAG, SQL Agent, or casual chat.", type: "coding", duration: "3h" },
            { id: "m4-w4-d2-t2", title: "Advanced RAG Flow", description: "Implement Self-RAG (grading retrieval relevance via LLM before generating response) using LangGraph.", type: "architecture", duration: "4h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Project: Serving & APIs",
          focus: "FastAPI, SSE Streams",
          tasks: [
            { id: "m4-w4-d3-t1", title: "Streaming Outputs", description: "Build a FastAPI server utilizing Server Sent Events (SSE) to stream the generator tokens back to the client instantaneously.", type: "production", duration: "4h" },
            { id: "m4-w4-d3-t2", title: "vLLM Integration", description: "Connect the FastAPI server to a separate vLLM inference container on a local network.", type: "deployment", duration: "3h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Project: Evaluation & Tracing",
          focus: "Quality Metrics, LangSmith",
          tasks: [
            { id: "m4-w4-d4-t1", title: "Automated Evaluations", description: "Run a test suite over 50 ground-truth questions using RAGAS via Pytest. Fail the build if precision drops below 0.85.", type: "testing", duration: "4h" },
            { id: "m4-w4-d4-t2", title: "Tracing via OpenTelemetry", description: "Instrument the Python FastAPI microservice with OpenTelemetry generating traces for every LLM call.", type: "monitoring", duration: "3h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Project: Optimization & Security",
          focus: "Prompt Injection guards",
          tasks: [
            { id: "m4-w4-d5-t1", title: "Security Guardrails", description: "Implement LlamaGuard or custom heuristics to block malicious prompt injections.", type: "production", duration: "3h" },
            { id: "m4-w4-d5-t2", title: "Containerization & Compose", description: "Create a complex Docker Compose file orchestrating Qdrant, Airflow, FastAPI API, and the vLLM engine.", type: "deployment", duration: "4h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Month 4 Review & Assessment",
          focus: "Gen AI Capabilities",
          tasks: [
            { id: "m4-w4-d6-t1", title: "Project Code Review", description: "A rigorous peer-review simulation focusing on API latency, prompt optimization, and error handling for LLM timeouts.", type: "code_review", duration: "3h" },
            { id: "m4-w4-d6-t2", title: "Mock ML Interview", description: "LLM Engineering interview (Evaluating when to use RAG vs LoRA, explaining Attention).", type: "system_design", duration: "2h" },
            { id: "m4-w4-d6-t3", title: "LeetCode: System Design", description: "Focus fully on scaling algorithms.", type: "coding", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Production-ready Advanced RAG architecture with streaming responses, routing, and automated evaluation.",
        reading: "Self-RAG papers and production LangGraph routing paradigms.",
        project: "Enterprise Knowledge LLM Agent Platform.",
        debugging: "Handled LLM API connection drops and context-window overflow edge cases.",
        assessment: "Passed Month 4 API server and LLM design technical assessment.",
        interviewPrep: "RAG Evaluation methodologies."
      }
    }
  ],
  portfolioProject: {
    id: "proj-4",
    title: "Enterprise Knowledge LLM Agent Platform",
    description: "A production-grade GenAI Platform utilizing Advanced Retrieval-Augmented Generation (Self-RAG, Hybrid Search). Incorporates LangGraph for autonomous routing, Qdrant for vector storage, and streams tokens to a UI via FastAPI Server Sent Events.",
    architecture: ["vLLM", "FastAPI", "Qdrant", "LangGraph", "Docker Compose", "RAGAS"],
    techStack: ["Python 3.12", "OpenTelemetry", "Pytest", "SentenceTransformers"],
    requirements: [
      { id: "req-4-1", description: "Must implement Server-Sent Events (SSE) for instantaneous typing effect." },
      { id: "req-4-2", description: "Pipeline integrated into automated RAGAS testing pipeline." },
      { id: "req-4-3", description: "LangGraph state management must safely handle tool hallucination loops." },
      { id: "req-4-4", description: "Security layers added to sanitize both Prompts and outputs." }
    ]
  },
  monthlyReview: {
    engineeringReview: "Exceptional integration of modern LLM tooling. The usage of streaming SSE showcases backend engineering prowess.",
    architectureReview: "The decoupling of the LLM Inference Server (vLLM) and the Application Logic (FastAPI) is fully production-appropriate.",
    mockInterview: "Passed Gen-AI Engineering Architect mock interview.",
    technicalAssessment: "Score: 96%. Excellent grasp of PEFT, RAG metrics, and Tokenization."
  }
};
