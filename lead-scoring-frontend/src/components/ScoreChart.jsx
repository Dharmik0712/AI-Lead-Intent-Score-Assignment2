import React from "react";
import { Bar } from "react-chartjs-2";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ScoreChart({ leads }) {
const labels = leads.map((lead, i) => `#${i + 1}`);
const data = {
    labels,
    datasets: [
    {
        label: "Reranked Score",
        data: leads.map((lead) => lead.reranked_score),
        backgroundColor: "rgba(59, 130, 246, 0.6)", // Tailwind blue-500
        borderRadius: 4
    }
    ]
};

const options = {
    responsive: true,
    plugins: {
    legend: { position: "top" },
    title: {
        display: true,
        text: "Lead Reranked Score Distribution"
    }
    },
    scales: {
    y: {
        min: 0,
        max: 100,
        ticks: { stepSize: 10 }
    }
    }
};

return (
    <div className="mt-8">
    <Bar options={options} data={data} />
    </div>
);
}
