import pandas as pd
def pricing_policy(row, elasticity):
    base_price = row['price']

    if row['forecast'] > 0.7:
        return base_price * 1.15
    elif elasticity < -1:
        return base_price * 0.9
    else:
        return base_price