import React from "react";

export default function LeadTable({ leads }) {
if (!leads.length) return null;

const sortedLeads = [...leads].sort(
    (a, b) => b.reranked_score - a.reranked_score
);

return (
    <div className="mt-6">
    <h2 className="text-lg font-semibold mb-2">Scored Leads (Sorted by Reranked Score)</h2>
    <table className="w-full border text-sm text-left">
        <thead className="bg-gray-100">
        <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Initial Score</th>
            <th className="border px-4 py-2">Reranked Score</th>
            <th className="border px-4 py-2">Comment</th>
        </tr>
        </thead>
        <tbody>
        {sortedLeads.map((lead, index) => (
            <tr key={index} className="border">
            <td className="border px-4 py-2">{lead.name}</td>
            <td className="border px-4 py-2">{lead.email}</td>
            <td className="border px-4 py-2">{lead.initial_score}</td>
            <td className="border px-4 py-2">{lead.reranked_score}</td>
            <td className="border px-4 py-2">{lead.comment}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
}
