import numpy as np
from sklearn.linear_model import LinearRegression

def compute_elasticity(df):
    df = df.copy()
    df = df[(df['price'] > 0) & (df['demand'] > 0)]

    if len(df) < 5:
        return -0.5  # fallback value

    # Ensure X is 2D numeric array
    X = np.log(df[['price']].values)
    y = np.log(df['demand'].values)

    model = LinearRegression()
    model.fit(X, y)

    # model.coef_ is an array of shape (1,)
    return float(model.coef_[0])

