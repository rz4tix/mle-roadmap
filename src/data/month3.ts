import { Month } from '../types';

export const month3: Month = {
  monthNumber: 3,
  title: "Deep Learning & Computer Vision",
  theme: "Neural Networks, PyTorch, CNNs, Object Detection",
  description: "Transitioning to Deep Learning architecture. Mastering PyTorch fundamentals, computational graphs, and Computer Vision from basic classification to modern object detection.",
  weeks: [
    {
      weekNumber: 1,
      title: "Deep Learning & PyTorch Basics",
      theme: "Neural Networks & Backpropagation",
      days: [
        {
          dayNumber: 1,
          title: "Neural Networks from Scratch",
          focus: "Perceptrons, MLPs, Backprop",
          tasks: [
            { id: "m3-w1-d1-t1", title: "MLP Implementation", description: "Build a Multi-Layer Perceptron (MLP) from scratch purely in NumPy to understand the math.", type: "coding", duration: "3h" },
            { id: "m3-w1-d1-t2", title: "Backpropagation Engine", description: "Implement backpropagation and chain rule gradient updates manually.", type: "optimization", duration: "2h" },
            { id: "m3-w1-d1-t3", title: "Activation Functions", description: "Implement ReLU, Sigmoid, and Tanh. Analyze vanishing gradients.", type: "reading", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Introduction to PyTorch",
          focus: "Tensors, Autograd",
          tasks: [
            { id: "m3-w1-d2-t1", title: "Tensor Operations", description: "Translate all NumPy array manipulations from Day 1 into PyTorch Tensors. Use GPU device placement.", type: "coding", duration: "2h" },
            { id: "m3-w1-d2-t2", title: "Autograd Exploration", description: "Utilize PyTorch's autograd to automatically compute gradients. Compare with manual implementation.", type: "testing", duration: "3h" },
            { id: "m3-w1-d2-t3", title: "Custom nn.Module", description: "Build your first subclass of torch.nn.Module.", type: "architecture", duration: "2h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Training Loops & Optimizers",
          focus: "Loss functions, Training patterns",
          tasks: [
            { id: "m3-w1-d3-t1", title: "Standard Training Loop", description: "Write a clean, reusable PyTorch training and validation loop.", type: "coding", duration: "3h" },
            { id: "m3-w1-d3-t2", title: "Optimizers", description: "Compare SGD, Adam, and AdamW behavior on a synthetic noisy dataset.", type: "optimization", duration: "2h" },
            { id: "m3-w1-d3-t3", title: "Learning Rate Schedulers", description: "Implement ReduceLROnPlateau and CosineAnnealingLR.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "DataLoaders & Datasets",
          focus: "Custom Datasets, Transforms",
          tasks: [
            { id: "m3-w1-d4-t1", title: "Custom Dataset Class", description: "Create a subclass of torch.utils.data.Dataset for arbitrary CSV data.", type: "coding", duration: "2h" },
            { id: "m3-w1-d4-t2", title: "DataLoader Optimization", description: "Understand and optimize num_workers, pin_memory=True, and prefetch_factor.", type: "optimization", duration: "3h" },
            { id: "m3-w1-d4-t3", title: "Data Augmentation", description: "Implement torchvision.transforms for basic image augmentation.", type: "architecture", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Debugging Neural Networks",
          focus: "TensorBoard, Dead Neurons",
          tasks: [
            { id: "m3-w1-d5-t1", title: "TensorBoard Integration", description: "Integrate SummaryWriter to track loss, accuracy, and visualize model graphs.", type: "monitoring", duration: "3h" },
            { id: "m3-w1-d5-t2", title: "Gradient Clipping", description: "Implement gradient clipping to prevent exploding gradients.", type: "debugging", duration: "2h" },
            { id: "m3-w1-d5-t3", title: "Diagnosing Dead ReLUs", description: "Write a hook to monitor activations and identify dead neurons during training.", type: "debugging", duration: "2h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 1 Review",
          focus: "Deep Learning Foundations",
          tasks: [
            { id: "m3-w1-d6-t1", title: "Refactor Training Engine", description: "Refactor your training loop into a reusable Engine class (similar to Ignite/Lightning).", type: "architecture", duration: "3h" },
            { id: "m3-w1-d6-t2", title: "LeetCode: Linked Lists", description: "Solve 3 fundamental Linked List algorithms.", type: "coding", duration: "2h" },
            { id: "m3-w1-d6-t3", title: "DL Math Review", description: "Review matrix dimensions during forward and backward passes of a 3-layer MLP.", type: "reading", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Fluently built custom PyTorch Modules, Datasets, and robust training loops.",
        reading: "Read PyTorch internals and Autograd mechanics.",
        project: "Reusable standard PyTorch training engine boilerplate.",
        debugging: "Hooked into PyTorch internals to debug dead neurons.",
        assessment: "Quiz on PyTorch tensor contiguous memory and device management.",
        interviewPrep: "Whiteboard a PyTorch model and training loop from memory."
      }
    },
    {
      weekNumber: 2,
      title: "Computer Vision & CNNs",
      theme: "Convolutions, OpenCV, Architectures",
      days: [
        {
          dayNumber: 1,
          title: "Convolutional Operations",
          focus: "Filters, Stride, Padding",
          tasks: [
            { id: "m3-w2-d1-t1", title: "CNN Building Blocks", description: "Implement a Conv2D operation manually using numpy to understand strides and padding.", type: "coding", duration: "3h" },
            { id: "m3-w2-d1-t2", title: "PyTorch ConvNets", description: "Build a basic CNN in PyTorch for MNIST classification.", type: "coding", duration: "2h" },
            { id: "m3-w2-d1-t3", title: "Receptive Field Calculation", description: "Calculate the receptive field theoretically for a 4-layer CNN.", type: "architecture", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "OpenCV & Image Processing",
          focus: "OpenCV, Filtering, Edge Detection",
          tasks: [
            { id: "m3-w2-d2-t1", title: "OpenCV Fundamentals", description: "Read, resize, and convert images to grayscale using cv2. Understand BGR vs RGB.", type: "coding", duration: "2h" },
            { id: "m3-w2-d2-t2", title: "Edge Detection", description: "Implement Sobel and Canny edge detection on sample images.", type: "testing", duration: "3h" },
            { id: "m3-w2-d2-t3", title: "Morphological Operations", description: "Apply erosion, dilation, and closing to remove noise from binary masks.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Advanced CNN Architectures",
          focus: "ResNet, VGG, Inception",
          tasks: [
            { id: "m3-w2-d3-t1", title: "ResNet Implementation", description: "Implement a ResNet BasicBlock with skipped connections from scratch in PyTorch.", type: "coding", duration: "3h" },
            { id: "m3-w2-d3-t2", title: "1x1 Convolutions", description: "Study and implement 1x1 convolutions for dimensionality reduction (Inception style).", type: "architecture", duration: "2h" },
            { id: "m3-w2-d3-t3", title: "Reading: ResNet Paper", description: "Read the original 'Deep Residual Learning for Image Recognition' paper.", type: "reading", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Transfer Learning & Fine-tuning",
          focus: "Pre-trained models, Feature Extraction",
          tasks: [
            { id: "m3-w2-d4-t1", title: "Feature Extraction", description: "Load a pre-trained ResNet50 from torchvision. Freeze weights, replace the final classification head.", type: "coding", duration: "2h" },
            { id: "m3-w2-d4-t2", title: "Fine-tuning", description: "Unfreeze the last two convolutional blocks and fine-tune on a custom Dogs vs Cats dataset.", type: "optimization", duration: "3h" },
            { id: "m3-w2-d4-t3", title: "Discriminative Learning Rates", description: "Apply different learning rates to the backbone vs the custom head.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Advanced Image Augmentation",
          focus: "Albumentations, Mixup, Cutmix",
          tasks: [
            { id: "m3-w2-d5-t1", title: "Albumentations Integration", description: "Replace torchvision transforms with the Albumentations library in the custom Dataset.", type: "coding", duration: "3h" },
            { id: "m3-w2-d5-t2", title: "Mixup Implementation", description: "Implement Mixup training (blending two images and their one-hot labels).", type: "optimization", duration: "2h" },
            { id: "m3-w2-d5-t3", title: "Focal Loss", description: "Implement Focal Loss to handle hard misclassified examples in an imbalanced dataset.", type: "production", duration: "2h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 2 Review",
          focus: "Deploying Vision Basics",
          tasks: [
            { id: "m3-w2-d6-t1", title: "Model Export", description: "Export the fine-tuned ResNet model to TorchScript and ONNX.", type: "deployment", duration: "3h" },
            { id: "m3-w2-d6-t2", title: "LeetCode: Matrices", description: "Solve Grid/Matrix-based coding problems.", type: "coding", duration: "2h" },
            { id: "m3-w2-d6-t3", title: "Interview Prep", description: "Explain why bounding box regression is used in object detection (Preview).", type: "system_design", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Implemented CNNs, ResNet blocks, and deployed standard image classification models.",
        reading: "Read ResNet and Focal Loss papers.",
        project: "End-to-end Transfer Learning script with Albumentations.",
        debugging: "Debugged frozen vs unfrozen layer gradient updates.",
        assessment: "Calculate output tensor dimensions after convolution pooling operations manually.",
        interviewPrep: "Discussing tradeoffs between VGG, ResNet, and EfficientNet."
      }
    },
    {
      weekNumber: 3,
      title: "Object Detection & Segmentation",
      theme: "YOLO, U-Net, Bounding Boxes",
      days: [
        {
          dayNumber: 1,
          title: "Object Detection Fundamentals",
          focus: "IoU, mAP, Anchors",
          tasks: [
            { id: "m3-w3-d1-t1", title: "IoU Implementation", description: "Write a function to calculate Intersection over Union (IoU) between two bounding boxes.", type: "coding", duration: "2h" },
            { id: "m3-w3-d1-t2", title: "NMS Implementation", description: "Implement Non-Maximum Suppression (NMS) to filter redundant bounding boxes.", type: "optimization", duration: "3h" },
            { id: "m3-w3-d1-t3", title: "mAP Understanding", description: "Calculate Mean Average Precision (mAP) theoretically for a toy prediction set.", type: "testing", duration: "2h" }
          ]
        },
        {
          dayNumber: 2,
          title: "YOLO Architecture",
          focus: "Ultralytics, Real-time detection",
          tasks: [
            { id: "m3-w3-d2-t1", title: "YOLOv8 Integration", description: "Set up the Ultralytics YOLOv8 library. Perform inference on a video stream.", type: "deployment", duration: "3h" },
            { id: "m3-w3-d2-t2", title: "Custom YOLO Training", description: "Format a dataset in YOLO format and fine-tune a YOLOv8-nano model for defect detection.", type: "coding", duration: "3h" },
            { id: "m3-w3-d2-t3", title: "Video Processing Pipeline", description: "Write an OpenCV script that reads video, applies YOLO predictions, and writes output.", type: "production", duration: "1h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Semantic Segmentation",
          focus: "U-Net, Mask generation",
          tasks: [
            { id: "m3-w3-d3-t1", title: "U-Net Architecture", description: "Build the U-Net architecture (Encoder, Bottleneck, Decoder with skip connections) in PyTorch.", type: "architecture", duration: "3h" },
            { id: "m3-w3-d3-t2", title: "Dice Coefficient", description: "Implement Dice Loss and Dice Coefficient for measuring segmentation mask overlap.", type: "testing", duration: "2h" },
            { id: "m3-w3-d3-t3", title: "Transposed Convolutions", description: "Study ConvTranspose2d vs Upsample for decoding spatial dimensions.", type: "optimization", duration: "2h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Sequence Models (RNNs/LSTMs)",
          focus: "Time Series prep, Sequence Data",
          tasks: [
            { id: "m3-w3-d4-t1", title: "RNN from Scratch", description: "Build a vanilla Recurrent Neural Network unrolled over time in PyTorch.", type: "coding", duration: "2h" },
            { id: "m3-w3-d4-t2", title: "LSTM Architecture", description: "Implement an LSTM cell integrating Forget, Input, and Output gates.", type: "architecture", duration: "3h" },
            { id: "m3-w3-d4-t3", title: "Time Series Forecasting", description: "Train an LSTM to forecast a univariate sine wave dataset.", type: "testing", duration: "2h" }
          ]
        },
        {
          dayNumber: 5,
          title: "TorchServe & Deployment Basics",
          focus: "Model Archives, TorchServe",
          tasks: [
            { id: "m3-w3-d5-t1", title: "Custom Handlers", description: "Write a custom TorchServe handler for the image classification model handling pre/post processing.", type: "deployment", duration: "3h" },
            { id: "m3-w3-d5-t2", title: "MAR File packaging", description: "Use torch-model-archiver to package the model, handler, and artifacts into a .mar file.", type: "deployment", duration: "2h" },
            { id: "m3-w3-d5-t3", title: "Local Inference Testing", description: "Start torchserve via Docker and test the inference endpoint with cURL.", type: "testing", duration: "2h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Week 3 Review",
          focus: "Advanced Models",
          tasks: [
            { id: "m3-w3-d6-t1", title: "Model Optimization", description: "Apply PyTorch dynamic quantization to reduce model footprint.", type: "optimization", duration: "3h" },
            { id: "m3-w3-d6-t2", title: "LeetCode: Stacks and Queues", description: "Solve Stack/Queue based technical questions.", type: "coding", duration: "2h" },
            { id: "m3-w3-d6-t3", title: "System Design", description: "Design an automated traffic camera system processing 100fps video feeds via ML.", type: "system_design", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Deployed YOLOv8 models for real-time video detection; built U-Nets and LSTMs.",
        reading: "Object detection metrics (mAP, IoU) and U-Net paper.",
        project: "Real-time OpenCV + YOLO defect detection pipeline.",
        debugging: "Fixed exploding gradients in custom unrolled RNN.",
        assessment: "Quiz on sequence generation and detection anchor boxes.",
        interviewPrep: "Handling multiple bounding box intersections in production."
      }
    },
    {
      weekNumber: 4,
      title: "Portfolio Project (Computer Vision)",
      theme: "Computer Vision Inspection System",
      days: [
        {
          dayNumber: 1,
          title: "Project: Data & Setup",
          focus: "Dataset curation & Pipeline",
          tasks: [
            { id: "m3-w4-d1-t1", title: "Dataset Generation", description: "Download an industrial defect dataset. Format annotations for YOLO and semantic segmentation.", type: "architecture", duration: "4h" },
            { id: "m3-w4-d1-t2", title: "Augmentation Pipeline", description: "Build a robust Albumentations pipeline simulating various lighting conditions and noise.", type: "coding", duration: "3h" }
          ]
        },
        {
          dayNumber: 2,
          title: "Project: Model Training",
          focus: "Distributed Training Simulation",
          tasks: [
            { id: "m3-w4-d2-t1", title: "YOLO Fine-Tuning", description: "Fine-tune YOLOv8 on the defect dataset. Optimize hyperparameters for mAP50-95.", type: "optimization", duration: "4h" },
            { id: "m3-w4-d2-t2", title: "PyTorch Lightning Migration", description: "Convert standard PyTorch scripts to PyTorch Lightning to utilize automatic Mixed Precision and Checkpointing.", type: "architecture", duration: "3h" }
          ]
        },
        {
          dayNumber: 3,
          title: "Project: Serving Infrastructure",
          focus: "TorchServe, Streaming",
          tasks: [
            { id: "m3-w4-d3-t1", title: "TorchServe Deployment", description: "Deploy the trained model utilizing TorchServe inside a Docker container.", type: "deployment", duration: "4h" },
            { id: "m3-w4-d3-t2", title: "API Gateway Construction", description: "Build a FastAPI reverse proxy that accepts image uploads, routes to TorchServe, and formats the JSON response.", type: "production", duration: "3h" }
          ]
        },
        {
          dayNumber: 4,
          title: "Project: Optimization & Edge",
          focus: "ONNX, TensorRT concepts",
          tasks: [
            { id: "m3-w4-d4-t1", title: "ONNX Runtime inference", description: "Export the model to ONNX. Write an inference script using onnxruntime instead of PyTorch. Benchmark speed.", type: "optimization", duration: "4h" },
            { id: "m3-w4-d4-t2", title: "Edge Deployment Design", description: "Write an architecture doc detailing how this ONNX model would run on a Jetson Nano.", type: "system_design", duration: "3h" }
          ]
        },
        {
          dayNumber: 5,
          title: "Project: Finalization",
          focus: "Tests, Docs, Polish",
          tasks: [
            { id: "m3-w4-d5-t1", title: "Load Testing", description: "Use Locust or k6 to load test the FastAPI -> TorchServe pipeline and observe bottlenecks.", type: "testing", duration: "4h" },
            { id: "m3-w4-d5-t2", title: "CI/CD & Documentation", description: "Polish README, ensure GitHub Actions handle formatting and testing.", type: "production", duration: "3h" }
          ]
        },
        {
          dayNumber: 6,
          title: "Month 3 Review & Assessment",
          focus: "Deep Learning Engineering",
          tasks: [
            { id: "m3-w4-d6-t1", title: "Architecture Presentation", description: "Present the vision pipeline (latency, bottlenecks, dataset challenges).", type: "architecture", duration: "3h" },
            { id: "m3-w4-d6-t2", title: "Mock ML Interview", description: "Deep Learning internals: Backprop, CNN architectures, PyTorch autograd engine.", type: "system_design", duration: "2h" },
            { id: "m3-w4-d6-t3", title: "LeetCode: Backtracking", description: "Solve Backtracking problems to build algorithmic depth.", type: "coding", duration: "2h" }
          ]
        }
      ],
      review: {
        practical: "Built a production-grade CV inspection API utilizing FastAPI, TorchServe, and ONNX.",
        reading: "Read about ONNX graph optimizations.",
        project: "Computer Vision Defect Inspection System.",
        debugging: "Debugged PyTorch Memory Leaks during long training sessions.",
        assessment: "Passed Month 3 Technical Assessment on Deep Learning fundamentals.",
        interviewPrep: "Mock System Design: Architecting a low-latency video inference pipeline."
      }
    }
  ],
  portfolioProject: {
    id: "proj-3",
    title: "Computer Vision Inspection System",
    description: "An automated defect detection API. Integrates YOLOv8 fine-tuned models, exports them to ONNX for speed, and serves them via a robust FastAPI/TorchServe layer capable of handling concurrent image streams.",
    architecture: ["PyTorch Lightning", "YOLOv8", "TorchServe", "ONNX", "FastAPI", "Docker"],
    techStack: ["Python 3.12", "Albumentations", "Locust", "OpenCV"],
    requirements: [
      { id: "req-3-1", description: "YOLO model deployed within TorchServe and wrapped cleanly via FastAPI." },
      { id: "req-3-2", description: "Inference endpoint supports batched tensor processing." },
      { id: "req-3-3", description: "ONNX Runtime benchmark proves a >30% speedup vs native PyTorch on CPU." },
      { id: "req-3-4", description: "Extensive data augmentation pipeline utilizing Albumentations." }
    ]
  },
  monthlyReview: {
    engineeringReview: "High quality PyTorch code. Good utilization of PyTorch Lightning for boilerplate reduction.",
    architectureReview: "Clean separation of the REST API (FastAPI) and the high-throughput inference engine (TorchServe).",
    mockInterview: "Passed CV and PyTorch internal mock interview.",
    technicalAssessment: "Score: 94%. Deep grasp of convolutional mathematics and backpropagation."
  }
};
