import { useState } from "react";

export default function Form({ onGenerate }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    skills: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (file) {
      data.append("resume", file);
    }

    onGenerate(data);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Your Name" onChange={handleChange} required />
      <input name="role" placeholder="Job Role" onChange={handleChange} required />
      <input name="company" placeholder="Company" onChange={handleChange} required />
      <textarea name="skills" placeholder="Skills" onChange={handleChange} required />

      <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} />

      <button type="submit">Generate</button>
    </form>
  );
}