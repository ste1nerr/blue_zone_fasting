import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';

const data = [
  { week: 1, weight: 93 },
  { week: 2, weight: 81 },
  { week: 3, weight: 39 },
  { week: 4, weight: 21 },
];

const WeightLossChart = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 0, right: 40, left: 0, bottom: 0 }}
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DB4F36" />
              <stop offset="50%" stopColor="#F3CD7D" />
              <stop offset="100%" stopColor="#96BA68" />
            </linearGradient>
            <linearGradient id="blackGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={true} horizontal={false} stroke="#ddd" strokeWidth={0.5} strokeDasharray="5 5"/>
          <XAxis
            dataKey="week"
            tickFormatter={(value) => `Week ${value}`}
            style={{ fill: '#999999', fontSize: '14px', fontFamily: 'Roboto, sans-serif', fontWeight:'600' }} 
          />
          <YAxis
            tick={() => null}
            axisLine={{ stroke: '#999999', strokeWidth: 0.001 }}
            tickLine={{ stroke: '#999999', strokeWidth: 0.001 }}
            domain={[0, 120]}
          />
          <Line type="monotone" dataKey="weight" stroke="url(#colorUv)" strokeWidth={8} dot={{
            fill: 'white',
            stroke: '#999999',
            strokeWidth: 4,
            r: 6,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
          }} />
          <text x="50%" y="95%" dominantBaseline="middle" textAnchor="middle" fill="#666">
            <tspan x="0%" dy="1.5em">Week 1</tspan>
            <tspan x="25%" dy="0em">Week 2</tspan>
            <tspan x="50%" dy="0em">Week 3</tspan>
            <tspan x="75%" dy="0em">Week 4</tspan>
          </text>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightLossChart;
