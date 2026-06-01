import { Month } from '../types';

export const month1: Month = {
  monthNumber: 1,
  title: "Engineering Foundations & Data",
  theme: "Python, SWE, Math, & Data Engineering",
  description: "Transitioning from basic scripting to professional software engineering. Mastering Python internals, math for ML, and modern data pipelines.",
  weeks: [
    {
      weekNumber: 1,
      title: "Advanced Python & SWE",
      theme: "Clean Code & System Tooling",
      days: [
        {
          dayNumber: 1,
          title: "Environment & Package Management",
          focus: "Poetry, uv, Virtual Environments",
          tasks: [
            { id: "m1-w1-d1-t1", title: "Setup Local Environment", description: "Install and configure uv and Poetry. Create a template ML project structure with standardized pyproject.toml.", type: "coding", duration: "2h" },
            { id: "m1-w1-d1-t2", title: "Dependency Management Deep Dive", description: "Read about dependency resolution. Resolve a complex version conflict manually using pip and Poetry.", type: "reading", duration: "2h" },
            { id: "m1-w1-d1-t3", title: "Git & GitFlow Architecture", description: "Set up a repository using GitFlow. Create hooks for pre-commit (black, isort, mypy).", type: "architecture", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "OOP & SOLID Principles",
          focus: "Python Classes, Interfaces, Inheritance",
          tasks: [
            { id: "m1-w1-d2-t1", title: "Refactor to SOLID", description: "Take a procedural data processing script and refactor it into SOLID-compliant classes using Abstract Base Classes (abc).", type: "coding", duration: "3h" },
            { id: "m1-w1-d2-t2", title: "Design Patterns in ML", description: "Implement Factory and Strategy patterns for a mock model training pipeline (e.g., swapping out algorithms dynamically).", type: "system_design", duration: "2h" },
            { id: "m1-w1-d2-t3", title: "Type Hints & Mypy", description: "Add strict type hints to the entire codebase. Run mypy --strict and resolve all errors.", type: "debugging", duration: "2h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Functional & Async Python",
          focus: "Asyncio, Map/Reduce, Generators",
          tasks: [
            { id: "m1-w1-d3-t1", title: "Async Data Fetcher", description: "Write an asyncio application to fetch data from 100 mock API endpoints concurrently.", type: "coding", duration: "3h" },
            { id: "m1-w1-d3-t2", title: "Generator Pipelines", description: "Implement a lazy-evaluated data pipeline using Python generators for reading large CSVs without OOM errors.", type: "optimization", duration: "2h" },
            { id: "m1-w1-d3-t3", title: "Functional Refactoring", description: "Convert stateful loops into pure functions using map, filter, and functools.", type: "code_review", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Testing & CI/CD",
          focus: "Pytest, Mocks, GitHub Actions",
          tasks: [
            { id: "m1-w1-d4-t1", title: "Unit Testing Suite", description: "Write comprehensive unit tests with pytest for the data pipeline. Use fixtures and parametrizations.", type: "testing", duration: "3h" },
            { id: "m1-w1-d4-t2", title: "Integration & Mocking", description: "Use assert_called_with and patch from unittest.mock to isolate database calls.", type: "testing", duration: "2h" },
            { id: "m1-w1-d4-t3", title: "CI/CD Pipeline Setup", description: "Create a GitHub Actions workflow that runs linting, mypy, and pytest on every push.", type: "deployment", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Profiling & Optimization",
          focus: "cProfile, memory_profiler",
          tasks: [
            { id: "m1-w1-d5-t1", title: "CPU Profiling", description: "Use cProfile to identify bottlenecks in a matrix multiplication script. Optimize it using built-ins.", type: "optimization", duration: "3h" },
            { id: "m1-w1-d5-t2", title: "Memory Profiling", description: "Debug a memory leak in a data processing script using memory_profiler.", type: "debugging", duration: "2h" },
            { id: "m1-w1-d5-t3", title: "Logging & Exceptions", description: "Implement structured JSON logging with custom exception hierarchies for an ML task.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 1 Review & System Design",
          focus: "Assessment and Interview Prep",
          tasks: [
            { id: "m1-w1-d6-t1", title: "Code Review Exercise", description: "Review an intentionally flawed PR containing poorly written ML code. Leave professional comments.", type: "code_review", duration: "2h" },
            { id: "m1-w1-d6-t2", title: "System Design Prep", description: "Whiteboard a system design for a scalable batch prediction service.", type: "system_design", duration: "2h" },
            { id: "m1-w1-d6-t3", title: "LeetCode: Arrays & HashMaps", description: "Solve 3 medium LeetCode problems focused on data structures vital for ML processing.", type: "coding", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Built a solid template repository with poetry, pytest, and CI/CD.",
        reading: "Read PEP8, SOLID principles, and Python Asyncio documentation.",
        project: "Refactored legacy code into a modern, typed, tested package.",
        debugging: "Resolved memory leaks and strict type errors.",
        assessment: "Quiz on Python GIL, asyncio vs threading, and design patterns.",
        interviewPrep: "Mock interview on Python internals and system design basics."
      }
    },
    {
      weekNumber: 2,
      title: "Mathematics for ML",
      theme: "LinAlg, Calculus, & Optimization",
      days: [
        {
          dayNumber: 1,
          title: "Applied Linear Algebra",
          focus: "Vectors, Matrices, Eigenvectors",
          tasks: [
            { id: "m1-w2-d1-t1", title: "Matrix Operations from Scratch", description: "Implement basic matrix multiplication and transposition in pure Python.", type: "coding", duration: "2h" },
            { id: "m1-w2-d1-t2", title: "Numpy Vectorization", description: "Rewrite the pure Python matrix operations using NumPy. Benchmark the performance difference.", type: "optimization", duration: "2h" },
            { id: "m1-w2-d1-t3", title: "Eigenvectors & PCA", description: "Study eigenvectors. Manually implement a basic Principal Component Analysis (PCA) using numpy.linalg.eig.", type: "coding", duration: "3h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Calculus & Gradients",
          focus: "Derivatives, Partial Derivatives, Chain Rule",
          tasks: [
            { id: "m1-w2-d2-t1", title: "Derivatives implementation", description: "Write functions to compute numerical derivatives using finite differences.", type: "coding", duration: "2h" },
            { id: "m1-w2-d2-t2", title: "Chain Rule Practice", description: "Calculate partial derivatives for a complex nested function on paper, then implement the forward and backward pass.", type: "architecture", duration: "3h" },
            { id: "m1-w2-d2-t3", title: "Loss Functions", description: "Implement MSE and Cross-Entropy loss functions along with their analytical gradients.", type: "coding", duration: "2h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Optimization Algorithms",
          focus: "Gradient Descent, Adam, Momentum",
          tasks: [
            { id: "m1-w2-d3-t1", title: "Vanilla Gradient Descent", description: "Implement Gradient Descent to find the minimum of a 2D convex function.", type: "coding", duration: "2h" },
            { id: "m1-w2-d3-t2", title: "Stochastic & Mini-batch GD", description: "Modify the GD implementation to use mini-batches and stochastic updates.", type: "optimization", duration: "3h" },
            { id: "m1-w2-d3-t3", title: "Advanced Optimizers", description: "Read the Adam optimizer paper. Implement momentum-based SGD.", type: "reading", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Probability & Statistics",
          focus: "Distributions, Bayes, MLE",
          tasks: [
            { id: "m1-w2-d4-t1", title: "Probability Distributions", description: "Visualize Normal, Binomial, and Poisson distributions using matplotlib and scipy.stats.", type: "coding", duration: "2h" },
            { id: "m1-w2-d4-t2", title: "Maximum Likelihood Estimation", description: "Implement MLE to estimate the parameters of a normal distribution from synthetic data.", type: "coding", duration: "3h" },
            { id: "m1-w2-d4-t3", title: "Bayes Theorem", description: "Write a Naive Bayes classifier from scratch for a simple text classification task.", type: "coding", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Information Theory",
          focus: "Entropy, KL Divergence, Gini",
          tasks: [
            { id: "m1-w2-d5-t1", title: "Entropy Calculation", description: "Implement functions to calculate Shannon Entropy and Information Gain for a dataset.", type: "coding", duration: "3h" },
            { id: "m1-w2-d5-t2", title: "KL Divergence", description: "Measure the difference between two probability distributions using KL Divergence.", type: "optimization", duration: "2h" },
            { id: "m1-w2-d5-t3", title: "Bias/Variance Tradeoff", description: "Simulate underfitting and overfitting using polynomial regression of varying degrees.", type: "testing", duration: "2h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 2 Review",
          focus: "Math Concept Consolidation",
          tasks: [
            { id: "m1-w2-d6-t1", title: "Math Interview Concepts", description: "Practice answering verbal ML math questions (e.g., 'Explain the chain rule in backprop').", type: "reading", duration: "2h" },
            { id: "m1-w2-d6-t2", title: "Debugging Math Code", description: "Fix bugs in a flawed gradient descent implementation that diverges.", type: "debugging", duration: "2h" },
            { id: "m1-w2-d6-t3", title: "LeetCode: Two Pointers", description: "Solve 3 moderate Two Pointer problems.", type: "coding", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Implemented core ML math algorithms from scratch (GD, PCA, Naive Bayes).",
        reading: "Read Adam optimizer paper and Info Theory basics.",
        project: "Built a miniature auto-grad engine for single variables.",
        debugging: "Fixed diverging gradients and Vanishing/Exploding gradient simulations.",
        assessment: "Written test on matrix derivatives and MLE.",
        interviewPrep: "Math-focused ML engineer screen questions."
      }
    },
    {
      weekNumber: 3,
      title: "Data Engineering Fundamentals",
      theme: "Pipelines, Spark, Polars",
      days: [
        {
          dayNumber: 1,
          title: "Modern Data Manipulation",
          focus: "Pandas vs Polars vs PyArrow",
          tasks: [
            { id: "m1-w3-d1-t1", title: "Polars Migration", description: "Rewrite a complex Pandas group-by and merge pipeline into Polars. Compare execution times.", type: "coding", duration: "3h" },
            { id: "m1-w3-d1-t2", title: "PyArrow Memory Basics", description: "Read and write partitioned Parquet files using PyArrow. Analyze memory usage.", type: "optimization", duration: "2h" },
            { id: "m1-w3-d1-t3", title: "Data Quality Metrics", description: "Implement Great Expectations or custom assertions to validate incoming data schema.", type: "testing", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "ETL & DuckDB",
          focus: "In-memory analytics, ELT patterns",
          tasks: [
            { id: "m1-w3-d2-t1", title: "DuckDB Setup", description: "Build an ELT pipeline that loads JSON data into DuckDB and transforms it using SQL.", type: "coding", duration: "3h" },
            { id: "m1-w3-d2-t2", title: "Feature Engineering Pipeline", description: "Create a reproducible feature engineering script that handles missing values and scaling.", type: "architecture", duration: "2h" },
            { id: "m1-w3-d2-t3", title: "Code Review", description: "Review peer data pipeline for SQL injection vulnerabilities and inefficiency.", type: "code_review", duration: "2h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Distributed Data (Spark)",
          focus: "Apache Spark, RDDs, DataFrames",
          tasks: [
            { id: "m1-w3-d3-t1", title: "PySpark Fundamentals", description: "Set up local PySpark. Write a job to compute word counts on a large text dataset using RDD transformations.", type: "coding", duration: "3h" },
            { id: "m1-w3-d3-t2", title: "Spark SQL", description: "Query the same dataset using Spark SQL DataFrames.", type: "coding", duration: "2h" },
            { id: "m1-w3-d3-t3", title: "Spark UI & Debugging", description: "Analyze the DAG in Spark UI. Debug a sluggish join operation by introducing broadcasting.", type: "debugging", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Streaming Data Concepts",
          focus: "Kafka, Pub/Sub",
          tasks: [
            { id: "m1-w3-d4-t1", title: "Kafka Local Setup", description: "Run Kafka via Docker Compose. Create a Python producer that streams synthetic transaction data.", type: "deployment", duration: "3h" },
            { id: "m1-w3-d4-t2", title: "Kafka Consumer", description: "Write a consumer that computes real-time rolling averages of the transactions.", type: "coding", duration: "2h" },
            { id: "m1-w3-d4-t3", title: "System Design: Streaming", description: "Design an architecture for a real-time fraud detection pipeline on a whiteboard.", type: "system_design", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Orchestration with Airflow",
          focus: "DAGs, Tasks, Scheduling",
          tasks: [
            { id: "m1-w3-d5-t1", title: "Airflow Setup", description: "Deploy local Airflow. Write a DAG that triggers the ETL script daily.", type: "deployment", duration: "3h" },
            { id: "m1-w3-d5-t2", title: "Custom Operators", description: "Create a custom Airflow operator that checks data drift via a simple statistical test.", type: "coding", duration: "2h" },
            { id: "m1-w3-d5-t3", title: "Task Dependencies", description: "Configure complex branch logic in the DAG based on intermediate data quality checks.", type: "architecture", duration: "2h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 3 Review",
          focus: "Data Pipe Assessments",
          tasks: [
            { id: "m1-w3-d6-t1", title: "Pipeline Optimization", description: "Take a slow, Pandas-based pipeline and optimize it to run 10x faster using Polars and Parquet.", type: "optimization", duration: "3h" },
            { id: "m1-w3-d6-t2", title: "Data Eng Interview Prep", description: "Practice SQL window functions and complex joins.", type: "reading", duration: "2h" },
            { id: "m1-w3-d6-t3", title: "LeetCode: Sliding Window", description: "Solve 3 Sliding Window problems (relevant to streaming analytics).", type: "coding", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Built end-to-end data pipelines using Airflow, Kafka, PySpark, and Polars.",
        reading: "Data Mesh and Lambda Architecture whitepapers.",
        project: "Real-time Kafka consumer writing rolling aggregates to DuckDB.",
        debugging: "Spark DAG optimization and memory tuning.",
        assessment: "System Design for high-throughput ingress.",
        interviewPrep: "Data structure manipulation and SQL."
      }
    },
    {
      weekNumber: 4,
      title: "Databases & Storage",
      focus: "Postgres, Redis, Vector Databases",
      theme: "Production Data Storage",
      days: [
        {
          dayNumber: 1,
          title: "Relational DBs (PostgreSQL)",
          focus: "Indexing, Query Optimization",
          tasks: [
            { id: "m1-w4-d1-t1", title: "Postgres Schema Design", description: "Design a normalized schema for a machine learning model registry.", type: "architecture", duration: "2h" },
            { id: "m1-w4-d1-t2", title: "Index Optimization", description: "Analyze queries using EXPLAIN ANALYZE. Add B-Tree and GIN indexes to optimize slow queries.", type: "optimization", duration: "3h" },
            { id: "m1-w4-d1-t3", title: "Connection Pooling", description: "Implement PgBouncer or SQLAlchemy connection pooling for a Python API.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Key-Value Stores (Redis)",
          focus: "Caching, Low Latency Access",
          tasks: [
            { id: "m1-w4-d2-t1", title: "Feature Caching", description: "Implement a Redis cache layer for ML inference features to reduce DB load.", type: "coding", duration: "3h" },
            { id: "m1-w4-d2-t2", title: "Redis Pub/Sub", description: "Use Redis Pub/Sub to trigger asynchronous model inference tasks.", type: "architecture", duration: "2h" },
            { id: "m1-w4-d2-t3", title: "Cache Invalidation", description: "Design policies for cache eviction (LRU, TTL) and implement them.", type: "system_design", duration: "2h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Search Engines (Elasticsearch)",
          focus: "Full-text search, Inverted Index",
          tasks: [
            { id: "m1-w4-d3-t1", title: "Elasticsearch Setup", description: "Deploy ES via Docker. Ingest 10k documents using the bulk API.", type: "deployment", duration: "2h" },
            { id: "m1-w4-d3-t2", title: "Search Queries", description: "Write complex boolean queries and aggregations using the Python ES client.", type: "coding", duration: "3h" },
            { id: "m1-w4-d3-t3", title: "BM25 Implementation", description: "Read about BM25 scoring and manually calculate it for a small toy corpus.", type: "reading", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Vector Databases",
          focus: "Qdrant, Milvus, Weaviate",
          tasks: [
            { id: "m1-w4-d4-t1", title: "Qdrant Integration", description: "Set up Qdrant. Generate embeddings holding synthetic vectors and upsert them.", type: "coding", duration: "3h" },
            { id: "m1-w4-d4-t2", title: "Vector Search", description: "Perform k-NN and ANN searches utilizing HNSW indexing.", type: "optimization", duration: "2h" },
            { id: "m1-w4-d4-t3", title: "Metadata Filtering", description: "Combine vector similarity search with metadata filtering (e.g., date restrictions).", type: "testing", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Portfolio Project Integration",
          focus: "Bringing it all together",
          tasks: [
            { id: "m1-w4-d5-t1", title: "Project: Data Layer", description: "Start the Monthly Portfolio Project. Build the data extraction and Postgres/Qdrant schemas.", type: "coding", duration: "4h" },
            { id: "m1-w4-d5-t2", title: "API Skeleton", description: "Setup a basic FastAPI server that interacts with the databases asynchronously.", type: "coding", duration: "3h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Month 1 Review & Assessment",
          focus: "Mock Interviews & Finalization",
          tasks: [
            { id: "m1-w4-d6-t1", title: "Project Wrap-up", description: "Finalize tests and Dockerize the portfolio project.", type: "deployment", duration: "3h" },
            { id: "m1-w4-d6-t2", title: "Mock Interview", description: "Simulate a live coding SWE/Data interview (System Design + Leetcode Medium).", type: "system_design", duration: "2h" },
            { id: "m1-w4-d6-t3", title: "Architecture Review", description: "Present the Monthly project architecture and defend technology choices.", type: "code_review", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Deployed Postgres, Redis, and Qdrant in a unified Docker Compose setup.",
        reading: "Read about HNSW algorithms and database transaction isolation levels.",
        project: "Completed Customer Churn Prediction Platform data foundations.",
        debugging: "Solved N+1 query problems in Postgres.",
        assessment: "Passed Month 1 Technical Assessment.",
        interviewPrep: "Mock System Design: Design a caching layer for ML Features."
      }
    }
  ],
  portfolioProject: {
    id: "proj-1",
    title: "Customer Churn Prediction Platform (Data Tier)",
    description: "Build the robust fundamental data tier for an ML churn prediction platform. Ingests raw CRM data via Airflow and Kafka, processes it via Polars, stores structured features in Postgres, and caches hot features in Redis.",
    architecture: ["Airflow", "Kafka", "Polars", "PostgreSQL", "Redis", "Docker", "FastAPI"],
    techStack: ["Python 3.12", "Poetry", "Pytest", "GitHub Actions", "Docker Compose"],
    requirements: [
      { id: "req-1", description: "Fully Dockerized environment with Docker Compose." },
      { id: "req-2", description: "Strict typing (mypy passed) and formatted code (ruff/black)." },
      { id: "req-3", description: "Airflow DAG scheduling daily ETL pulls from a mock API." },
      { id: "req-4", description: "Database migrations configured using Alembic." },
      { id: "req-5", description: "Over 80% test coverage using Pytest." }
    ]
  },
  monthlyReview: {
    engineeringReview: "Successfully implemented modern SWE practices. The codebase is clean, tested, and containerized.",
    architectureReview: "The Data Tier architecture demonstrates a strong understanding of batch vs streaming needs.",
    mockInterview: "Passed Python and Data Engineering fundamentals mock interview.",
    technicalAssessment: "Score: 92%. Solid grasp of LinAlg, Calculus, OOP, and DB Indexing."
  }
};
