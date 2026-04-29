import pandas as pd
def demand_forecast(df):
    df = df.copy()
    if 'Date' in df.columns:
        df = df.sort_values('Date')
    else:
        # if no Date, just use current order
        df = df.reset_index(drop=True)

    # Ensure demand numeric and drop NA for rolling
    df['demand'] = pd.to_numeric(df['demand'], errors='coerce')

    # Use a rolling window and drop rows without forecasts
    df['forecast'] = df['demand'].rolling(3, min_periods=1).mean()

    return df[['Date', 'forecast']].dropna(subset=['forecast'])
