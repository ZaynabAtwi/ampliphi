import pandas as pd
from pathlib import Path

def load_data():
    BASE_DIR = Path(__file__).resolve().parent.parent
    data_path = BASE_DIR / "data" / "hotel_data.csv"

    df = pd.read_csv(data_path)

    print("COLUMNS:", df.columns.tolist())

    df = df.dropna(how='all')  # only drop rows that are entirely NaN

    # Convert date if present
    if 'Date' in df.columns:
        df['Date'] = pd.to_datetime(df['Date'], dayfirst=True, errors='coerce')

    df['ADR'] = pd.to_numeric(df.get('ADR'), errors='coerce')
    df['Bookings'] = pd.to_numeric(df.get('Bookings'), errors='coerce')
    df['price'] = df['ADR']
    df['demand'] = df['Bookings']

    # Remove zeros for elasticity calculations
    df = df[df['price'] > 0]
    df = df[df['demand'] > 0]

    # Optional columns
    if 'Revenue' in df.columns:
        df['revenue'] = df['Revenue']
    else:
        df['revenue'] = df['price'] * df['demand']

    df['occupancy'] = pd.to_numeric(df.get('Occupancy_Rate'), errors='coerce')

    df = df.dropna(subset=['ADR', 'Bookings'])

    print("DATA SHAPE:", df.shape)
    print(df[['price', 'demand']].head())

    return df
