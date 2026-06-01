import { Month } from '../types';

export const month5: Month = {
  monthNumber: 5,
  title: "MLOps, Cloud, & Scale",
  theme: "Experiment Tracking, K8s, Observability, CI/CD",
  description: "The culmination of engineering. Bringing ML models into standard production MLOps lifecycles. Learning Cloud infrastructure, Kubernetes basics, robust observability, and secure distributed ML systems.",
  weeks: [
    {
      weekNumber: 1,
      title: "Model Registries & Experiment Tracking",
      theme: "MLflow, DVC, Model Versioning",
      days: [
        {
          dayNumber: 1,
          title: "MLflow Tracking Setup",
          focus: "Logging parameters, metrics",
          tasks: [
            { id: "m5-w1-d1-t1", title: "Local Tracking Server", description: "Spin up a local MLflow tracking server connected to a Postgres backend via Docker.", type: "deployment", duration: "2h" },
            { id: "m5-w1-d1-t2", title: "Instrumenting Code", description: "Add MLflow autologging and custom metric tracking (mlflow.log_metric) to the Month 2 XGBoost project.", type: "coding", duration: "3h" },
            { id: "m5-w1-d1-t3", title: "Nested Runs", description: "Utilize nested MLflow runs to track Optuna Hyperparameter optimization trials effectively.", type: "architecture", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Model Registry",
          focus: "Staging, Productionizing",
          tasks: [
            { id: "m5-w1-d2-t1", title: "Model Versioning", description: "Log trained artifacts. Transition models recursively through Staging to Production in the MLflow Model Registry.", type: "production", duration: "2h" },
            { id: "m5-w1-d2-t2", title: "Dynamic Fetching", description: "Refactor the FastAPI Inference server to dynamically pull the 'Production' tagged model on startup.", type: "coding", duration: "3h" },
            { id: "m5-w1-d2-t3", title: "Shadow Deployments", description: "Configure the API to fetch both 'Production' and 'Staging' models, returning Prod but silently scoring Staging.", type: "system_design", duration: "2h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Data Version Control (DVC)",
          focus: "Versioning datasets, S3 storage",
          tasks: [
            { id: "m5-w1-d3-t1", title: "DVC Initialization", description: "Initialize DVC in the repo. Configure a local MinIO (S3 mock) bucket as the remote storage backend.", type: "deployment", duration: "3h" },
            { id: "m5-w1-d3-t2", title: "Dataset Tracking", description: "Track a large dataset. Make data modifications, commit via DVC and Git simultaneously.", type: "coding", duration: "2h" },
            { id: "m5-w1-d3-t3", title: "DVC Pipelines", description: "Write a dvc.yaml file defining the DAG dependencies between data fetching, preparing, and training.", type: "architecture", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Feature Stores",
          focus: "Feast, Entity Data",
          tasks: [
            { id: "m5-w1-d4-t1", title: "Feast Setup", description: "Deploy Feast locally. Define Entity and Feature View definitions for the churn dataset.", type: "coding", duration: "3h" },
            { id: "m5-w1-d4-t2", title: "Batch vs Online Processing", description: "Materialize offline feature data from Parquet files into the online Redis cache via Feast CLI.", type: "optimization", duration: "2h" },
            { id: "m5-w1-d4-t3", title: "Inference via Feature Store", description: "Update the FastAPI server to only accept IDs (e.g., user_id) and pull the remaining features instantly from Feast at runtime.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "CI/CD for ML (CT/CD)",
          focus: "Continuous Training",
          tasks: [
            { id: "m5-w1-d5-t1", title: "GitHub Actions retrain", description: "Create a GitHub Actions workflow that automatically triggers a data pull and DVC/MLflow retrain schedule.", type: "deployment", duration: "3h" },
            { id: "m5-w1-d5-t2", title: "Model Promotion Gates", description: "Add automated tests: if the new model's Test MAE is lower than the current Prod MAE, automatically promote it via MLflow API.", type: "testing", duration: "3h" },
            { id: "m5-w1-d5-t3", title: "Security Scanning", description: "Integrate Bandit & Trivy into pipeline to scan code and docker images for vulnerabilities.", type: "production", duration: "1h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 1 Review",
          focus: "Lifecycle Management",
          tasks: [
            { id: "m5-w1-d6-t1", title: "End-to-end Lifecycle Testing", description: "Simulate a data drift event by pushing new data to DVC, confirming the automated retrain and promotion trigger works.", type: "testing", duration: "3h" },
            { id: "m5-w1-d6-t2", title: "LeetCode: System APIs", description: "Practice algorithmic API routing.", type: "coding", duration: "2h" },
            { id: "m5-w1-d6-t3", title: "System Design", description: "Whiteboard a complete MLOps infrastructure diagram including S3, MLflow, Feast, and Git.", type: "system_design", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Fully automated the ML lifecycle: Versioned Data (DVC) -> Tracked Training (MLflow) -> Online Features (Feast) -> Automated Deployment.",
        reading: "Google's 'Hidden Technical Debt in ML Systems' paper.",
        project: "Automated Continual Learning Pipeline built on GitHub actions.",
        debugging: "Resolved DVC caching remote connection failures.",
        assessment: "Quiz on the conceptual split between Model Registry and Feature Stores.",
        interviewPrep: "Describing CI vs CD vs CT (Continuous Training) in ML."
      }
    },
    {
      weekNumber: 2,
      title: "Cloud infrastructure & Orchestration",
      theme: "Docker Compose, Linux, K8s Concepts",
      days: [
        {
          dayNumber: 1,
          title: "Advanced Docker & Linux",
          focus: "Networking, Volumes",
          tasks: [
            { id: "m5-w2-d1-t1", title: "Container Networking", description: "Configure internal Docker bridges and restrictive firewalls between a Mock API, DB, and Web server.", type: "deployment", duration: "2h" },
            { id: "m5-w2-d1-t2", title: "Linux Process Management", description: "Master top, htop, grep, awk, sed. Write a bash script identifying zombie Python workers in a container.", type: "coding", duration: "3h" },
            { id: "m5-w2-d1-t3", title: "Nginx Reverse Proxy", description: "Set up Nginx as a reverse proxy in front of FastAPI. Configure SSL termination locally.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Kubernetes (K8s) Fundamentals",
          focus: "Pods, Deployments, Services",
          tasks: [
            { id: "m5-w2-d2-t1", title: "Minikube Setup", description: "Install Minikube/Kind. Deploy the FastAPI inference container utilizing basic Pod declarations.", type: "deployment", duration: "2h" },
            { id: "m5-w2-d2-t2", title: "K8s Deployments", description: "Create a Deployment YAML with 3 replicas. Observe self-healing by manually killing pods.", type: "testing", duration: "2h" },
            { id: "m5-w2-d2-t3", title: "Services & LoadBalancers", description: "Expose the Deployment internally with a ClusterIP and externally with a NodePort service.", type: "architecture", duration: "3h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Scalable ML Serving on K8s",
          focus: "Resources, HPA",
          tasks: [
            { id: "m5-w2-d3-t1", title: "Resource Limits", description: "Set strict CPU and Memory requests/limits in the container specs. Measure behavior when limits are exceeded (OOMKilled).", type: "optimization", duration: "3h" },
            { id: "m5-w2-d3-t2", title: "Horizontal Pod Autoscaling", description: "Implement HPA. Use a load testing tool to spike CPU usage and watch Kubernetes scale up pods automatically.", type: "production", duration: "2h" },
            { id: "m5-w2-d3-t3", title: "Liveness & Readiness Probes", description: "Write custom health check endpoints in FastAPI. Configure Kubernetes Liveness and Readiness probes to hit them.", type: "testing", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Infrastructure as Code (IaC)",
          focus: "Helm, Terraform Basics",
          tasks: [
            { id: "m5-w2-d4-t1", title: "Helm Chart Creation", description: "Package the FastAPI deployment, Service, and Ingress into a reusable Helm chart. Template the variables.", type: "deployment", duration: "3h" },
            { id: "m5-w2-d4-t2", title: "ConfigMaps & Secrets", description: "Extract environment variables (DB URLs, API Keys) into Kubernetes ConfigMaps and Secrets.", type: "production", duration: "2h" },
            { id: "m5-w2-d4-t3", title: "Terraform Intro", description: "Write a basic Terraform script to provision a mock AWS EC2 instance or local Docker container provider.", type: "architecture", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Distributed Systems Concepts",
          focus: "gRPC, Message Queues",
          tasks: [
            { id: "m5-w2-d5-t1", title: "gRPC Microservices", description: "Rewrite the FastAPI REST endpoints into a gRPC service using Protocol Buffers. Compare inference latency versus REST.", type: "coding", duration: "4h" },
            { id: "m5-w2-d5-t2", title: "RabbitMQ Async Workers", description: "Implement a RabbitMQ queue for heavy offline batch predictions. Run Celery or pure pika workers pulling from the queue.", type: "architecture", duration: "3h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 2 Review",
          focus: "Cloud scale",
          tasks: [
            { id: "m5-w2-d6-t1", title: "Debugging Microservices", description: "Debug a scenario where a K8s service cannot resolve internal DNS of another service.", type: "debugging", duration: "3h" },
            { id: "m5-w2-d6-t2", title: "Interview Prep: Architectures", description: "Describe a scalable ML serving architecture covering Load Balancing -> K8s -> Cache -> DB.", type: "system_design", duration: "2h" },
            { id: "m5-w2-d6-t3", title: "LeetCode: Distributed Systems Arrays", description: "Solve concurrency/threading based logic problems.", type: "coding", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Deployed scalable APIs utilizing Kubernetes Deployments, Services, and Horizontal Pod Autoscaling.",
        reading: "Kubernetes networking model and gRPC protocols.",
        project: "Helm-templated gRPC Model Serving Cluster.",
        debugging: "Solved complex OOMKilled issues due to memory leak masking in Python within K8s.",
        assessment: "Evaluated on K8s yaml component definitions.",
        interviewPrep: "Microservices versus Monolith architectures for ML."
      }
    },
    {
      weekNumber: 3,
      title: "Observability & Model Monitoring",
      theme: "Prometheus, Grafana, Drift",
      days: [
        {
          dayNumber: 1,
          title: "Application Metrics",
          focus: "Prometheus, OpenTelemetry",
          tasks: [
            { id: "m5-w3-d1-t1", title: "Prometheus Instrumentation", description: "Integrate prometheus-client into FastAPI. Track request counts, latency histograms, and error rates.", type: "coding", duration: "3h" },
            { id: "m5-w3-d1-t2", title: "Prometheus Deployment", description: "Deploy Prometheus Server via Docker Compose targeting the FastAPI /metrics endpoint.", type: "deployment", duration: "2h" },
            { id: "m5-w3-d1-t3", title: "Custom Business Metrics", description: "Expose custom metrics for the ML App: Average predicted probability, Number of Outlier inferences.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Visualizing Telemetry",
          focus: "Grafana Dashboards",
          tasks: [
            { id: "m5-w3-d2-t1", title: "Grafana Setup", description: "Bind Grafana to Prometheus. Build a robust Dashboard visualizing p95, p99 API latencies and server load.", type: "architecture", duration: "3h" },
            { id: "m5-w3-d2-t2", title: "Alerting Rules", description: "Configure Grafana alerts to fire HTTP webhooks (to Slack/Discord) if model latency exceeds 200ms for 5 minutes.", type: "monitoring", duration: "2h" },
            { id: "m5-w3-d2-t3", title: "Log Aggregation (ELK/Loki)", description: "Setup fluentd or Loki to collect structured JSON logs from the API container into a centralized viewer.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 3,
          title: "ML Specific Monitoring",
          focus: "Concept Drift, Data Drift",
          tasks: [
            { id: "m5-w3-d3-t1", title: "Data Drift Calculation", description: "Implement Population Stability Index (PSI) and Kolmogorov-Smirnov (KS) tests from scratch to compare training vs inference distributions.", type: "coding", duration: "3h" },
            { id: "m5-w3-d3-t2", title: "Evidently AI Integration", description: "Utilize EvidentlyAI to generate visual HTML reports summarizing Data Drift on a simulated drifting dataset.", type: "testing", duration: "2h" },
            { id: "m5-w3-d3-t3", title: "Drift Metric Export", description: "Refactor Evidently metrics to output continually to Prometheus, triggering Grafana Alerts on high covariate drift.", type: "monitoring", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Security & Privacy in ML",
          focus: "OWASP, PII redaction",
          tasks: [
            { id: "m5-w3-d4-t1", title: "Input Validation (OWASP)", description: "Fortify the API against malicious large payloads, DoS, and implement strict Pydantic parsing. Run a quick security audit.", type: "production", duration: "3h" },
            { id: "m5-w3-d4-t2", title: "PII Scrubbing", description: "Implement Microsoft Presidio to automatically detect and redact PII (SSN, emails, names) before saving payloads to the database.", type: "architecture", duration: "2h" },
            { id: "m5-w3-d4-t3", title: "Secrets Management", description: "Ensure zero hardcoded credentials exist. Use a local HashiCorp Vault container or pass injected K8s env variables securely.", type: "deployment", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Distributed Training Basics",
          focus: "Ray, DDP",
          tasks: [
            { id: "m5-w3-d5-t1", title: "PyTorch DDP", description: "Refactor the Month-3 Vision training script to utilize PyTorch DistributedDataParallel. Understand process ranks.", type: "architecture", duration: "3h" },
            { id: "m5-w3-d5-t2", title: "Ray Serve Introduction", description: "Deploy a small NLP model using Ray Serve, demonstrating Python-native scalable microservice capabilities.", type: "deployment", duration: "3h" },
            { id: "m5-w3-d5-t3", title: "Cost Optimization", description: "Read up on AWS Spot Instances vs On-Demand costs for training pipelines.", type: "reading", duration: "1h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 3 Review",
          focus: "Rigorous Production Standards",
          tasks: [
            { id: "m5-w3-d6-t1", title: "Chaos Engineering", description: "Take down the database and cache randomly. Ensure the ML API handles timeouts gracefully with 503 instead of crashing.", type: "debugging", duration: "3h" },
            { id: "m5-w3-d6-t2", title: "Interview Prep: CI/CD/CT", description: "Design an automated MLOps pipeline for a bank's fraud detection team securely.", type: "system_design", duration: "2h" },
            { id: "m5-w3-d6-t3", title: "LeetCode: Concurrency", description: "Solve final Leetcode medium problems covering tricky data flows.", type: "coding", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Instrumented full observability (Prometheus/Grafana) and statistical ML Drift Detection (Evidently).",
        reading: "Monitoring Machine Learning Models in Production guidelines and best practices.",
        project: "Real-time Telemetry and Drift Alerting framework over Kafka.",
        debugging: "Solved Grafana/Prometheus data-type mismatches internally.",
        assessment: "Quiz on PSI, KL-divergence thresholds, and alerting strategies.",
        interviewPrep: "How to safely roll out models (Canary Deployments / A-B testing)."
      }
    },
    {
      weekNumber: 4,
      title: "Final Portfolio Project",
      theme: "The Full Production MLOps Platform",
      days: [
        {
          dayNumber: 1,
          title: "Project: Infrastructure & Provisioning",
          focus: "GitOps, K8s configuration",
          tasks: [
            { id: "m5-w4-d1-t1", title: "Kubernetes Setup", description: "Deploy an entire ML stack into local K8s: Postgres, Redis, Feast, MLflow, Prometheus, and Grafana using Helm.", type: "deployment", duration: "4h" },
            { id: "m5-w4-d1-t2", title: "Networking & Ingress", description: "Configure external facing Ingress Controllers with routing rules linking to respective dashboards.", type: "architecture", duration: "3h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Project: Model Training Pipeline",
          focus: "Automated Training, MLflow",
          tasks: [
            { id: "m5-w4-d2-t1", title: "Training Script", description: "Finalize a robust LGBM Fraud Detection model fetching data straight from Feast, tracked strictly in MLflow.", type: "coding", duration: "4h" },
            { id: "m5-w4-d2-t2", title: "Dockerized Actions", description: "Wrap the script in a Docker container automatically executed by GitHub Actions upon Data-Update merge.", type: "production", duration: "3h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Project: High-Scale API Engine",
          focus: "FastAPI, Monitoring Integration",
          tasks: [
            { id: "m5-w4-d3-t1", title: "Fraud API Development", description: "Build the serving API logic. Pull the latest 'Production' tagged model and process JSON payloads.", type: "coding", duration: "4h" },
            { id: "m5-w4-d3-t2", title: "Metrics Exporters", description: "Implement Prometheus exporters sending input data distributions to Grafana.", type: "monitoring", duration: "3h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Project: Streaming & Drift",
          focus: "Kafka integration, Evidently",
          tasks: [
            { id: "m5-w4-d4-t1", title: "Message Queue Ingress", description: "Adapt the API to also consume a Kafka Stream continually emitting new synthetic transactions.", type: "deployment", duration: "3h" },
            { id: "m5-w4-d4-t2", title: "Drift Service", description: "Create a sidecar service checking the Kafka stream against training baselines hourly using Evidently.", type: " architecture", duration: "4h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Project: Documentation & Open Source",
          focus: "Polish, Code quality, Public repo",
          tasks: [
            { id: "m5-w4-d5-t1", title: "Engineering Documentation", description: "Write comprehensive Architecture documentation, setup guides, and high-quality API specifications.", type: "production", duration: "4h" },
            { id: "m5-w4-d5-t2", title: "Final Profiling", description: "Profile the entire infrastructure setup, lock dependencies, format with Ruff, type-check with MyPy.", type: "optimization", duration: "3h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Final Roadmap Review!",
          focus: "Assessment and Interview Readiness",
          tasks: [
            { id: "m5-w4-d6-t1", title: "Full System Presentation", description: "Host a mocked 1 hour System Architecture presentation detailing tradeoffs, scaling challenges, and features.", type: "system_design", duration: "3h" },
            { id: "m5-w4-d6-t2", title: "Mock Interview (Mid-Level MLE)", description: "Comprehensive 2-hour multi-stage interview: Python, Data Eng, ML Foundations, DL, and MLOps Infrastructure.", type: "testing", duration: "2h" },
            { id: "m5-w4-d6-t3", title: "Open Source Engagement", description: "Find 2 popular open source ML repositories (e.g. Scikit-learn, Langchain) and confidently read their engine logic.", type: "reading", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Constructed an entire corporate-grade MLOps ecosystem from absolute scratch.",
        reading: "Kubernetes Best Practices and Productionizing ML.",
        project: "Full Production MLOps Platform (End to End).",
        debugging: "Handled asynchronous queue bottlenecks and internal caching races.",
        assessment: "Passed Final Mid-Level Machine Learning Engineering Assessment.",
        interviewPrep: "Fired up and ready for Mid-Level / Strong Junior MLE interviews globally."
      }
    }
  ],
  portfolioProject: {
    id: "proj-5",
    title: "Full Production MLOps Platform",
    description: "The culmination of the 5-month journey. A massive, interconnected infrastructure orchestrated via Kubernetes/Helm defining a full ML platform. Tracking data natively (DVC), serving online features (Feast), automatically retaining (GitHub Actions/MLflow), deploying via robust REST (FastAPI), monitoring distributions (Evidently), and exposing metrics (Prometheus/Grafana).",
    architecture: ["Kubernetes", "Helm", "MLflow", "Feast", "EvidentlyAI", "Prometheus", "Grafana", "FastAPI", "Docker", "Kafka"],
    techStack: ["Python 3.12", "GitOps", "Bash", "Pydantic"],
    requirements: [
      { id: "req-5-1", description: "Strict separation of microservices deployable via singular Helm commands or Docker Compose orchestration." },
      { id: "req-5-2", description: "Real-time Grafana dashboard tracking custom application metrics alongside system CPU/Memory." },
      { id: "req-5-3", description: "Automated alert webhook firing upon mathematically proven Concept Drift." },
      { id: "req-5-4", description: "Zero-downtime model deployments seamlessly swapped via MLflow Registry." }
    ]
  },
  monthlyReview: {
    engineeringReview: "Exceptional mastery of software engineering paradigms applied to the Data space.",
    architectureReview: "Demonstrates true Mid-Level engineering capability. System is fault-tolerant and easily scalable.",
    mockInterview: "Passed exhaustive end-to-end System Design and MLE interviews.",
    technicalAssessment: "Graduated with production readiness capable of contributing safely to enterprise codebases."
  }
};
