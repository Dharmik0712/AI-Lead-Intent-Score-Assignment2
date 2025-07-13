import React, { useState } from "react";
import axios from "axios";

const defaultForm = {
name: "",
email: "",
phone_number: "",
age: 30,
age_group: "26-35",
city: "Mumbai",
city_tier: 1,
family_background: "Single",
occupation: "Salaried",
income: 500000,
credit_score: 700,
education_level: "Graduate",
num_site_visits: 3,
avg_time_on_page: 40.0,
form_filled: 1,
whatsapp_reply_count: 1,
clicked_ad: 1,
bounced: 0,
referral_source: "Email",
ip_geolocation_verified: 1,
device_type: "Mobile",
campaign_id: "CAMP001",
crm_segment_tag: "A",
linkedin_profile_exists: 1,
news_sentiment_about_company: 0.2,
company_size: "200-1000",
industry_type: "Tech",
comment: "",
consent: false,
};

export default function LeadForm({ onSubmit }) {
const [form, setForm] = useState(defaultForm);

const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consent) {
    alert("Please provide consent to proceed.");
    return;
    }
    try {
        const res = axios.post("https://ai-lead-intent-score-assignment-backend.onrender.com/score", form);

    onSubmit(res.data);
    alert("Lead scored successfully!");
    } catch (error) {
    console.error(error);
    alert("Error scoring lead. Check console.");
    }
};

return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto bg-white p-6 shadow-md rounded-md">
    <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="w-full p-2 border rounded"
        required
        />
    </div>

    <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter your email"
        className="w-full p-2 border rounded"
        required
        />
    </div>

    <div>
        <label className="block mb-1 font-semibold">Phone Number</label>
        <input
        name="phone_number"
        value={form.phone_number}
        onChange={handleChange}
        placeholder="Enter your phone number"
        className="w-full p-2 border rounded"
        required
        />
    </div>

    <div>
        <label className="block mb-1 font-semibold">Age</label>
        <input
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
        />
    </div>

    <div>
        <label className="block mb-1 font-semibold">Age Group</label>
        <select
        name="age_group"
        value={form.age_group}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        >
        <option value="18-25">18–25</option>
        <option value="26-35">26–35</option>
        <option value="36-50">36–50</option>
        <option value="51+">51+</option>
        </select>
    </div>

    <div>
        <label className="block mb-1 font-semibold">Comment</label>
        <textarea
        name="comment"
        value={form.comment}
        onChange={handleChange}
        placeholder="Add any relevant comments (e.g., urgent, not interested)"
        className="w-full p-2 border rounded"
        />
    </div>

    <div className="flex items-center">
        <input
        type="checkbox"
        name="consent"
        checked={form.consent}
        onChange={handleChange}
        className="mr-2"
        />
        <label className="font-semibold">I consent to data processing</label>
    </div>

    <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
    >
        Submit
    </button>
    </form>
);
}
