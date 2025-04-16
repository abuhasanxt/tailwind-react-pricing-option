import React from "react";
import { Line, LineChart, Pie, PieChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Student A",
    physics: 78,
    chemistry: 82,
    math: 91,
  },
  {
    id: 2,
    name: "Student B",
    physics: 85,
    chemistry: 79,
    math: 88,
  },
  {
    id: 3,
    name: "Student C",
    physics: 92,
    chemistry: 87,
    math: 94,
  },
  {
    id: 4,
    name: "Student D",
    physics: 67,
    chemistry: 72,
    math: 70,
  },
  {
    id: 5,
    name: "Student E",
    physics: 74,
    chemistry: 76,
    math: 80,
  },
  {
    id: 6,
    name: "Student F",
    physics: 88,
    chemistry: 90,
    math: 85,
  },
  {
    id: 7,
    name: "Student G",
    physics: 81,
    chemistry: 84,
    math: 78,
  },
  {
    id: 8,
    name: "Student H",
    physics: 90,
    chemistry: 89,
    math: 93,
  },
  {
    id: 9,
    name: "Student I",
    physics: 69,
    chemistry: 71,
    math: 75,
  },
  {
    id: 10,
    name: "Student J",
    physics: 76,
    chemistry: 77,
    math: 82,
  },
];

const ResultsChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey="chemistry" stroke="red"></Line>
      </LineChart>
      <PieChart width={800} height={600}> 
      <Pie data={resultData} dataKey="math" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />

      </PieChart>
    </div>
  );
};

export default ResultsChart;
