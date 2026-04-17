import { useState } from "react";
import Form from "./components/Form";
import OutputBox from "./components/OutputBox";
import "./App.css";

function App() {
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (data) => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      setCoverLetter(result.result);
    } catch (err) {
      alert("Error generating");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>
        AI Cover Letter <br /> Generator
        </h1>

        <Form onGenerate={handleGenerate} />

        {loading && <p className="loading">⏳ Generating...</p>}

        {coverLetter && <OutputBox text={coverLetter} />}
      </div>
    </div>
  );
}

export default App;