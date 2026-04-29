from fastapi import FastAPI
from app.data_loader import load_data
from app.elasticity import compute_elasticity
from app.forecasting import demand_forecast
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

df = load_data()

@app.get("/")
def root():
    return {"message": "Ampliphi API Running"}

@app.get("/elasticity")
def get_elasticity():
    value = compute_elasticity(df)
    return {"elasticity": value}

@app.get("/forecast")
def get_forecast():
    forecast_df = demand_forecast(df)
    return forecast_df.to_dict(orient="records")

@app.get("/metrics")
def get_metrics():
    return {
        "elasticity": compute_elasticity(df),
        "avg_price": float(df['price'].mean()),
        "avg_demand": float(df['demand'].mean()),
        "avg_occupancy": float(df['occupancy'].mean()),
        "total_revenue": float(df['revenue'].sum())
    }

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)