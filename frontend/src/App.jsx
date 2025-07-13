import React, { useState, useEffect } from "react";
import LeadForm from "./components/LeadForm";
import LeadTable from "./components/LeadTable";
import ScoreChart from "./components/ScoreChart";

function App() {
  const [leads, setLeads] = useState(() => {
    const saved = localStorage.getItem("scoredLeads");
    return saved ? JSON.parse(saved) : [];
  });

  const handleNewLead = (lead) => {
    const updatedLeads = [...leads, lead];
    setLeads(updatedLeads);
    localStorage.setItem("scoredLeads", JSON.stringify(updatedLeads));
  };

  useEffect(() => {
    const saved = localStorage.getItem("scoredLeads");
    if (saved) {
      setLeads(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">AI Lead Scoring Dashboard</h1>
      <LeadForm onSubmit={handleNewLead} />
      <LeadTable leads={leads} />
      <ScoreChart leads={leads} />
    </div>
  );
}

export default App;
