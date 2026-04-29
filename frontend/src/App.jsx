import React, { useState, useEffect } from 'react';
import axios from "axios";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, ComposedChart
} from 'recharts';
import { TrendingUp, Target, BrainCircuit, AlertCircle, Layers } from 'lucide-react';

// --- Simple Stat Card ---
const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl border shadow-sm">
    <h3 className="text-slate-500 text-sm">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const App = () => {

  const [bookingData, setBookingData] = useState([]);
  const [elasticity, setElasticity] = useState(null);
  const [metrics, setMetrics] = useState(null);

  // ✅ FETCH FROM BACKEND
  useEffect(() => {

    axios.get("http://127.0.0.1:8000/forecast")
      .then(res => {
        const formatted = res.data.map((item, index) => ({
          daysToArrival: index,
          forecast: item.forecast,
          actual: item.actual || null,
          upperBound: item.forecast * 1.1,
          lowerBound: item.forecast * 0.9,
        }));
        setBookingData(formatted);
      })
      .catch(err => console.error(err));

    axios.get("http://127.0.0.1:8000/elasticity")
      .then(res => setElasticity(res.data.elasticity))
      .catch(err => console.error(err));

    axios.get("http://127.0.0.1:8000/metrics")
      .then(res => setMetrics(res.data))
      .catch(err => console.error(err));

  }, []);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* ✅ STATS */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Total Revenue" 
          value={metrics ? `$${metrics.total_revenue.toFixed(0)}` : "Loading..."} 
        />
        <StatCard 
          title="Elasticity" 
          value={metrics ? metrics.elasticity.toFixed(2) : "Loading..."} 
        />
        <StatCard 
          title="Avg Price" 
          value={metrics ? `$${metrics.avg_price.toFixed(2)}` : "Loading..."} 
        />
        <StatCard 
          title="Avg Demand" 
          value={metrics ? metrics.avg_demand.toFixed(1) : "Loading..."} 
        />
      </div>

      {/* ✅ FORECAST CHART */}
      <div className="bg-white p-6 rounded-xl mb-8">
        <h2 className="font-bold mb-4">Forecast</h2>

        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={bookingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="daysToArrival" />
            <YAxis />
            <Tooltip />

            <Area dataKey="upperBound" fillOpacity={0.2} />
            <Area dataKey="lowerBound" fillOpacity={0.2} />

            <Line dataKey="forecast" strokeWidth={3} />
            <Line dataKey="actual" strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* ✅ ELASTICITY */}
      <div className="bg-white p-6 rounded-xl">
        <h2 className="font-bold mb-2">Elasticity</h2>

        <p className="text-lg">
          {elasticity ? elasticity.toFixed(2) : "Loading..."}
        </p>

        <div className="mt-4 p-3 bg-indigo-50 rounded">
          <p className="text-sm">
            Insight: Demand is {elasticity < 1 ? "inelastic" : "elastic"}
          </p>
        </div>
      </div>

    </div>
  );
};

export default App;