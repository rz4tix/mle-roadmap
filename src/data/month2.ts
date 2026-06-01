import { Month } from '../types';

export const month2: Month = {
  monthNumber: 2,
  title: "Machine Learning Foundations",
  theme: "Classical ML, Scikit-Learn, Feature Engineering",
  description: "Mastering classical Machine Learning algorithms. Implementing from scratch and using industry standard tools (Scikit-Learn, XGBoost). Focus on evaluation and production fitness.",
  weeks: [
    {
      weekNumber: 1,
      title: "Supervised Learning I (Linear/Trees)",
      theme: "Regression, Classification, Ensembles",
      days: [
        {
          dayNumber: 1,
          title: "Linear & Logistic Regression",
          focus: "Implementations & Under-the-hood",
          tasks: [
            { id: "m2-w1-d1-t1", title: "Regression from Scratch", description: "Implement OLS regression and Ridge/Lasso regularization from scratch.", type: "coding", duration: "3h" },
            { id: "m2-w1-d1-t2", title: "Logistic Regression", description: "Build Logistic Regression with sigmoid activation and cross-entropy loss from scratch.", type: "coding", duration: "2h" },
            { id: "m2-w1-d1-t3", title: "Scikit-Learn Usage", description: "Apply sklearn equivalents to the California Housing Dataset. Compare custom vs sklearn.", type: "testing", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Decision Trees & KNN",
          focus: "Non-parametric models",
          tasks: [
            { id: "m2-w1-d2-t1", title: "Decision Tree Implementation", description: "Code a recursive Decision Tree utilizing Gini Impurity for splits.", type: "coding", duration: "3h" },
            { id: "m2-w1-d2-t2", title: "KNN optimization", description: "Implement KNN. Optimize distance calculations using vectorized NumPy operations rather than loops.", type: "optimization", duration: "2h" },
            { id: "m2-w1-d2-t3", title: "Model Boundaries", description: "Visualize decision boundaries for Linear, Tree, and KNN models using matplotlib.", type: "reading", duration: "2h" } // categorized reading/viz
          ]
        },
        {
          dayNumber: 3,
          title: "Ensemble Methods (Bagging)",
          focus: "Random Forests",
          tasks: [
            { id: "m2-w1-d3-t1", title: "Random Forest from Scratch", description: "Build a Random Forest by aggregating your custom Decision Trees. Add feature bagging.", type: "coding", duration: "3h" },
            { id: "m2-w1-d3-t2", title: "OOB Error", description: "Calculate Out-Of-Bag (OOB) error estimates without a validation set.", type: "testing", duration: "2h" },
            { id: "m2-w1-d3-t3", title: "Sklearn Random Forest", description: "Tune RandomForestClassifier on a real dataset using GridSearchCV.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Advanced Ensembles (Boosting)",
          focus: "XGBoost, LightGBM, CatBoost",
          tasks: [
            { id: "m2-w1-d4-t1", title: "Gradient Boosting Mechanics", description: "Implement a simplified Gradient Boosting machine from scratch optimizing residuals.", type: "coding", duration: "3h" },
            { id: "m2-w1-d4-t2", title: "XGBoost vs LightGBM", description: "Implement XGBoost and LightGBM on a large categorical dataset. Compare training times and accuracy.", type: "optimization", duration: "2h" },
            { id: "m2-w1-d4-t3", title: "CatBoost Native Features", description: "Train a CatBoost model using its native categorical feature handling. Avoid one-hot encoding.", type: "coding", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Support Vector Machines (SVM)",
          focus: "Margins, Kernels",
          tasks: [
            { id: "m2-w1-d5-t1", title: "Linear SVM", description: "Implement Linear SVM using gradient descent and hinge loss.", type: "coding", duration: "3h" },
            { id: "m2-w1-d5-t2", title: "Kernel Trick", description: "Apply RBF and Polynomial kernels using sklearn.SVC. Analyze how C and Gamma affect the margin.", type: "optimization", duration: "2h" },
            { id: "m2-w1-d5-t3", title: "SVM Debugging", description: "Debug a scenario where an SVM takes too long to converge on a highly dimensional dataset.", type: "debugging", duration: "2h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 1 Review & System Design",
          focus: "Model Selection",
          tasks: [
            { id: "m2-w1-d6-t1", title: "Model Selection Exercise", description: "Given 5 distinct client scenarios, write architecture documents recommending the specific ML model and justifying why.", type: "architecture", duration: "3h" },
            { id: "m2-w1-d6-t2", title: "LeetCode: Trees", description: "Solve 3 Binary Tree LeetCode problems.", type: "coding", duration: "2h" },
            { id: "m2-w1-d6-t3", title: "Code Review", description: "Review a codebase that misuses cross-validation and leaks data.", type: "code_review", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Implemented 5 core ML algorithms entirely from scratch.",
        reading: "Read XGBoost paper and understood tree-building histograms.",
        project: "Comparative analysis notebook of algorithms vs datasets.",
        debugging: "Fixed data leakage in cross-validation loops.",
        assessment: "Quiz on bias/variance implications of different models.",
        interviewPrep: "Mock interview: 'Explain Random Forest vs Gradient Boosting'."
      }
    },
    {
      weekNumber: 2,
      title: "Unsupervised & Reinforcement",
      theme: "Clustering, PCA, RL Fundamentals",
      days: [
        {
          dayNumber: 1,
          title: "Clustering Dynamics",
          focus: "K-Means, DBSCAN",
          tasks: [
            { id: "m2-w2-d1-t1", title: "K-Means from Scratch", description: "Implement K-Means and K-Means++ initialization.", type: "coding", duration: "3h" },
            { id: "m2-w2-d1-t2", title: "DBSCAN", description: "Use DBSCAN for anomaly detection in a noisy dataset.", type: "testing", duration: "2h" },
            { id: "m2-w2-d1-t3", title: "Silhouette Scores", description: "Implement silhouette score calculation to programmatically find optimal K.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Dimensionality Reduction",
          focus: "PCA, t-SNE, UMAP",
          tasks: [
            { id: "m2-w2-d2-t1", title: "PCA Applications", description: "Use PCA to reduce a 500-dimension dataset down to 50 dimensions, retaining 95% variance.", type: "coding", duration: "2h" },
            { id: "m2-w2-d2-t2", title: "t-SNE & UMAP", description: "Visualize the MNIST dataset using t-SNE and UMAP. Compare the topological preservation.", type: "architecture", duration: "3h" },
            { id: "m2-w2-d2-t3", title: "Pipeline Integration", description: "Build an sklearn Pipeline that applies PCA before training a RandomForest.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Reinforcement Learning Basics",
          focus: "MDPs, Q-Learning",
          tasks: [
            { id: "m2-w2-d3-t1", title: "Markov Decision Processes", description: "Define state spaces, transition architectures, and reward matrices for a Gridworld.", type: "system_design", duration: "2h" },
            { id: "m2-w2-d3-t2", title: "Q-Learning Implementation", description: "Implement tabular Q-Learning to solve OpenAI Gym's FrozenLake environment.", type: "coding", duration: "3h" },
            { id: "m2-w2-d3-t3", title: "Epsilon-Greedy Strategy", description: "Tune the exploration vs exploitation tradeoff parameters.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Feature Engineering Deep Dive",
          focus: "Encoding, Imputation",
          tasks: [
            { id: "m2-w2-d4-t1", title: "Advanced Categorical Encoding", description: "Implement Target Encoding and Weight of Evidence (WoE) encoding. Prevent target leakage using k-fold techniques.", type: "coding", duration: "3h" },
            { id: "m2-w2-d4-t2", title: "Iterative Imputation", description: "Compare KNNImputer and IterativeImputer on missing data.", type: "optimization", duration: "2h" },
            { id: "m2-w2-d4-t3", title: "Feature Tools", description: "Use the Featuretools library for automated feature engineering on a relational dataset.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Feature Selection & Importance",
          focus: "SHAP, Permutation, RFE",
          tasks: [
            { id: "m2-w2-d5-t1", title: "Recursive Feature Elimination", description: "Implement an RFE pipeline to strip a dataset from 200 noisy features down to the top 20.", type: "optimization", duration: "2h" },
            { id: "m2-w2-d5-t2", title: "SHAP Values", description: "Calculate and plot SHAP summary and dependence plots for an XGBoost model.", type: "coding", duration: "3h" },
            { id: "m2-w2-d5-t3", title: "Permutation Importance", description: "Calculate permutation importance. Debug a model that relies heavily on a leaked feature.", type: "debugging", duration: "2h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 2 Review",
          focus: "Unsupervised & Features",
          tasks: [
            { id: "m2-w2-d6-t1", title: "Debugging Data Pipelines", description: "Debug a complex sklearn Pipeline where fit_transform behaves differently than transform.", type: "debugging", duration: "3h" },
            { id: "m2-w2-d6-t2", title: "Architectural Review", description: "Design a feature store concept on a whiteboard.", type: "system_design", duration: "2h" },
            { id: "m2-w2-d6-t3", title: "LeetCode: Graphs", description: "Solve BFS/DFS problems applicable to state-space searching.", type: "coding", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Mastered preprocessing pipelines, clustering, and fundamental RL.",
        reading: "Read about UMAP dimensionality reduction.",
        project: "Implemented automated feature selection engine using SHAP.",
        debugging: "Resolved target leakage in Target Encoding.",
        assessment: "Evaluated on feature engineering methodologies.",
        interviewPrep: "Feature engineering system design questions."
      }
    },
    {
      weekNumber: 3,
      title: "Model Evaluation & Engineering",
      theme: "Metrics, Validation, Hyperparameters",
      days: [
        {
          dayNumber: 1,
          title: "Evaluation Metrics Formulation",
          focus: "Precision, Recall, F1, ROC-AUC",
          tasks: [
            { id: "m2-w3-d1-t1", title: "Metrics from Scratch", description: "Implement Precision, Recall, F1, and PR-AUC from scratch using numpy.", type: "coding", duration: "3h" },
            { id: "m2-w3-d1-t2", title: "Class Imbalance", description: "Evaluate model performance on a 99:1 imbalanced dataset using appropriate metrics vs Accuracy.", type: "testing", duration: "2h" },
            { id: "m2-w3-d1-t3", title: "Custom Loss Metrics", description: "Write a custom asymmetric loss metric in LightGBM.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Cross Validation Strategies",
          focus: "KFold, Stratified, TimeSeries",
          tasks: [
            { id: "m2-w3-d2-t1", title: "Advanced Splitting", description: "Implement StratifiedKFold and GroupKFold to prevent target distribution skew.", type: "testing", duration: "2h" },
            { id: "m2-w3-d2-t2", title: "TimeSeries Split", description: "Implement expanding window cross-validation for sequential financial data.", type: "architecture", duration: "3h" },
            { id: "m2-w3-d2-t3", title: "Nested CV", description: "Implement nested cross-validation for unbiased evaluation of hyperparameter tuning.", type: "coding", duration: "2h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Hyperparameter Optimization",
          focus: "Optuna, Bayesian Optimization",
          tasks: [
            { id: "m2-w3-d3-t1", title: "Optuna Setup", description: "Set up Optuna for hyperparameter tuning an XGBoost model.", type: "coding", duration: "3h" },
            { id: "m2-w3-d3-t2", title: "Bayesian vs Grid", description: "Benchmark GridSearchCV, RandomizedSearchCV, and Optuna in optimization speed.", type: "optimization", duration: "2h" },
            { id: "m2-w3-d3-t3", title: "Pruning", description: "Implement Optuna pruning to cut off unpromising trials early.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Model Calibrations",
          focus: "Platt Scaling, Isotonic Regression",
          tasks: [
            { id: "m2-w3-d4-t1", title: "Calibration Curves", description: "Plot reliability diagrams (calibration curves) for a SVM classifier.", type: "testing", duration: "2h" },
            { id: "m2-w3-d4-t2", title: "Calibration Wrappers", description: "Use CalibratedClassifierCV with Platt scaling to fix poorly calibrated probabilities.", type: "coding", duration: "3h" },
            { id: "m2-w3-d4-t3", title: "Brier Score", description: "Calculate Brier Score loss before and after calibration.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Production ML Pipelines",
          focus: "Sklearn Pipelines, ColumnTransformer",
          tasks: [
            { id: "m2-w3-d5-t1", title: "Complex Sklearn Pipelines", description: "Build a robust pipeline using ColumnTransformer to handle numerical, categorical, and text data separately.", type: "architecture", duration: "3h" },
            { id: "m2-w3-d5-t2", title: "Custom Transformers", description: "Write custom Scikit-Learn transformers (inheriting BaseEstimator, TransformerMixin).", type: "coding", duration: "2h" },
            { id: "m2-w3-d5-t3", title: "Pipeline Serialization", description: "Serialize the fitted pipeline using joblib securely.", type: "deployment", duration: "2h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 3 Review",
          focus: "Rock Solid Models",
          tasks: [
            { id: "m2-w3-d6-t1", title: "Pipeline Debugging", description: "Fix a provided serialization bug where a custom class is missing on load.", type: "debugging", duration: "3h" },
            { id: "m2-w3-d6-t2", title: "LeetCode: Dynamic Programming", description: "Solve 3 fundamental DP algorithms.", type: "coding", duration: "2h" },
            { id: "m2-w3-d6-t3", title: "Interview Topic: Metric Choices", description: "Answer mock questions on when to prioritize Recall over Precision.", type: "system_design", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Mastered robust model evaluation, nested CV, and Optuna tuning.",
        reading: "Read documentation on Bayesian Optimization specifics.",
        project: "Architected a completely leak-proof training pipeline.",
        debugging: "Fixed pipeline state mismatches between train/predict.",
        assessment: "Evaluated on metric selection for specific domain cases.",
        interviewPrep: "Evaluating models in highly imbalanced domains."
      }
    },
    {
      weekNumber: 4,
      title: "Portfolio Project (Classical ML)",
      theme: "House Price Prediction Service",
      days: [
        {
          dayNumber: 1,
          title: "Project: Data & Features",
          focus: "Data preparation",
          tasks: [
            { id: "m2-w4-d1-t1", title: "Exploratory Data Analysis", description: "Perform deep EDA on the Ames Housing Dataset. Identify multicollinearity.", type: "testing", duration: "3h" },
            { id: "m2-w4-d1-t2", title: "Feature Factory", description: "Build the automated feature engineering pipeline transforming the raw data.", type: "coding", duration: "4h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Project: Modeling & Tuning",
          focus: "XGBoost, Ensembles",
          tasks: [
            { id: "m2-w4-d2-t1", title: "Base Models", description: "Establish baselines with Linear Regression and Random Forest.", type: "coding", duration: "2h" },
            { id: "m2-w4-d2-t2", title: "Advanced Tuning", description: "Tune an XGBoost model using Optuna over 100 trials with cross-validation.", type: "optimization", duration: "5h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Project: Inference API",
          focus: "FastAPI, Serialization",
          tasks: [
            { id: "m2-w4-d3-t1", title: "Model Packaging", description: "Serialize the model and the ColumnTransformer safely using ONNX or Joblib.", type: "deployment", duration: "2h" },
            { id: "m2-w4-d3-t2", title: "FastAPI Inference Server", description: "Write a FastAPI server that loads the model into memory on startup and serves predictions.", type: "coding", duration: "5h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Project: Testing & Docker",
          focus: "Unit tests, Containerization",
          tasks: [
            { id: "m2-w4-d4-t1", title: "API Tests", description: "Write pytest cases leveraging FastAPI TestClient to test the /predict endpoint.", type: "testing", duration: "3h" },
            { id: "m2-w4-d4-t2", title: "Dockerization", description: "Write a multi-stage Dockerfile to containerize the FastAPI service securely without running as root.", type: "production", duration: "4h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Project: CI/CD & Docs",
          focus: "GitHub Actions, OpenAPI",
          tasks: [
            { id: "m2-w4-d5-t1", title: "CI/CD Deployment", description: "Create a GitHub action that runs tests, builds the Docker image, and pushes to a registry.", type: "deployment", duration: "4h" },
            { id: "m2-w4-d5-t2", title: "Documentation", description: "Generate OpenAPI docs automatically. Write a comprehensive README.md with architecture diagrams.", type: "architecture", duration: "3h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Month 2 Wrap Up & Assessment",
          focus: "Engineering Review",
          tasks: [
            { id: "m2-w4-d6-t1", title: "End-to-End Review", description: "Perform a self-directed code review of the entire House Price Prediction Server.", type: "code_review", duration: "3h" },
            { id: "m2-w4-d6-t2", title: "Mock ML Interview", description: "General classical ML concept checking, algorithms, bias/variance, and metrics.", type: "system_design", duration: "2h" },
            { id: "m2-w4-d6-t3", title: "LeetCode: String Manipulation", description: "Solve String processing problems (important for NLP data prep later).", type: "coding", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Built a fully functioning, containerized, CI/CD-integrated ML inference server.",
        reading: "Read extensive documentation on FastAPI concurrent request handling.",
        project: "House Price Prediction Service (End to End).",
        debugging: "Resolved pathing issues and memory limits inside Docker containers.",
        assessment: "Passed Month 2 Technical Assessment on Model Deployment.",
        interviewPrep: "API design for ML models."
      }
    }
  ],
  portfolioProject: {
    id: "proj-2",
    title: "House Price Prediction Service (End-to-End)",
    description: "An end-to-end regression service. From tabular EDA and advanced feature engineering (Target encoding, robust scaling) to hyperparameter tuning via Optuna. Concluded by wrapping the finalized XGBoost model in a production-grade FastAPI server, tested, and containerized.",
    architecture: ["Scikit-Learn", "XGBoost", "FastAPI", "Docker", "Optuna", "Pytest"],
    techStack: ["Python 3.12", "Joblib", "Uvicorn", "GitHub Actions"],
    requirements: [
      { id: "req-2-1", description: "Model achieves target MAE baseline." },
      { id: "req-2-2", description: "API latency is consistently under 50ms per request." },
      { id: "req-2-3", description: "Dockerfile is optimized (under 400MB) using multi-stage builds." },
      { id: "req-2-4", description: "Graceful error handling implemented for invalid inference inputs via Pydantic." }
    ]
  },
  monthlyReview: {
    engineeringReview: "Excellent encapsulation of ML logic behind an API. Strict adherence to typing.",
    architectureReview: "Separation of concerns between training and serving is clear and maintained.",
    mockInterview: "Passed Classical ML mock interview.",
    technicalAssessment: "Score: 90%. Solid understanding of XGBoost internals and API design."
  }
};
