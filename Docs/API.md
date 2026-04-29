# API Documentation

## Base URL
http://localhost:8000

---

## POST /pricing/calculate

### Description
Calculate optimal price for a hotel room.

### Request

```json
{
  "Price": 180,
  "date": "2026-05-01",
  "Elasticity": 0.75,
  "Forecast": .....
}
