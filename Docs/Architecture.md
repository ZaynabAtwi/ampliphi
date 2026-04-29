# System Architecture

## Overview

Ampliphi is designed as a scalable pricing intelligence system for hotels.

## Components

### 1. API Layer
- Built with FastAPI
- Handles all client requests

### 2. Pricing Engine
- Core logic for price optimization
- Uses rule-based logic (current)
- Extensible to ML / RL models

### 3. Forecasting Module
- Predicts occupancy and demand
- Can integrate time-series models

### 4. Database
- PostgreSQL
- Stores hotel, booking, and pricing data

### 5. External Integrations
- Competitor pricing APIs
- Event data providers
- Property Management Systems (PMS)

---

## Data Flow

1. Client sends request
2. API processes request
3. Pricing engine calculates price
4. Data retrieved from DB and external sources
5. Response returned

---

## Future Architecture (AWS)

- ECS Fargate → service hosting
- S3 → data storage
- SQS → async tasks
- CloudWatch → monitoring
