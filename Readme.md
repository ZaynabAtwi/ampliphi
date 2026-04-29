# AI-Powered Dynamic Pricing System

An end-to-end machine learning system designed to optimize pricing strategies through demand forecasting, price elasticity modeling, and real-time dynamic pricing optimization.

This platform enables data-driven revenue maximization by integrating predictive analytics with automated pricing intelligence.

---

## 🚀 System Overview

The system is built as a modular, decoupled architecture consisting of:

- **Frontend (React.js)** → Decision intelligence dashboard
- **Backend (FastAPI / Python)** → API orchestration + business logic
- **ML Engine** → Forecasting, elasticity modeling, pricing optimization

It is designed for scalability, extensibility, and production deployment in high-demand environments such as e-commerce, healthcare services, and subscription-based platforms.

---

## 🧠 Architecture

Dataset
Kaggle Dataset:[Hotel Revenue 2024](https://www.kaggle.com/datasets/omarsobhy14/hotel-revenue2024)

```
Frontend (React)
│
│ REST API Calls
▼
Backend (FastAPI)
│
├── Data Processing Layer (Pandas / NumPy)
├── ML Inference Layer
│ ├── Demand Forecasting Model
│ ├── Elasticity Model
│ └── Pricing Optimization Engine
│
└── Response Layer (JSON APIs)
```

### 🔹 Frontend
- React.js dashboard
- Pricing visualization
- Demand & revenue analytics
- Scenario simulation (what-if analysis)

### 🔹 Backend
- FastAPI REST architecture
- Feature engineering pipeline
- Model inference orchestration
- Business logic & constraints engine

### 🔹 Machine Learning Layer
- **Demand Forecasting** → Predicts future demand trends
- **Elasticity Modeling** → Measures price sensitivity
- **Dynamic Pricing Engine** → Computes optimal price points

---

## ⚙️ Features

### 📈 Demand Forecasting
- Time-series forecasting models (ARIMA / Prophet / LSTM)
- Seasonal decomposition and trend analysis
- Multi-horizon prediction (short & mid-term)
- Confidence interval estimation

### 📊 Elasticity Modeling
- Customer price sensitivity estimation
- Regression-based econometric modeling
- Segment-level elasticity insights
- Revenue sensitivity simulation

### 💰 Dynamic Pricing Engine
- Real-time price optimization
- Constraint-based pricing logic (min/max thresholds)
- Automated pricing recalibration
- Scenario-based price simulation

---

## 🏗️ Project Structure

```

.
├── backend/
│   ├── main.py
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── ml/
│   │   ├── demand_forecasting.py
│   │   ├── elasticity_model.py
│   │   └── pricing_engine.py
│   └── utils/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── public/
│
├── docs/
├── requirements.txt
└── README.md
```
---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/your-org/ai-pricing-system.git
cd ai-pricing-system
```

---

### 2. Backend Setup

Start the FastAPI backend server:

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
---

**Backend runs at:

```
http://127.0.0.1:8000
```
---

**API documentation:

```
http://127.0.0.1:8000/docs
```

---

### 3. Frontend Setup

Start the React frontend:

```bash
cd frontend
npm install
npm start
```

**Frontend runs at:

```
http://localhost:3000
```

Ensure the backend is running before launching the frontend.

---

## 🔧 System Design Principles

- **Modularity** → Independent ML, backend, and frontend layers  
- **Scalability** → Stateless API design for horizontal scaling  
- **Extensibility** → Pluggable ML models and pricing logic  
- **Observability** → Logging hooks for inference tracking  
- **Latency Optimization** → Efficient inference pipelines for near real-time pricing  

---

## 🔮 Future Enhancements

- Reinforcement Learning-based pricing optimization  
- Multi-armed bandit experimentation framework  
- Real-time streaming ingestion (Kafka / Spark)  
- Advanced customer segmentation using deep clustering  
- Kubernetes-based cloud deployment  
- AutoML pipeline for continuous model improvement  

---

## 📄 License

Proprietary — Internal / Enterprise Use Only
