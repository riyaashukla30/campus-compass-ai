import { useState } from "react";
import axios from "axios";

export default function App() {
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/generate", {
        goal,
      });

      setResult(res.data.result);
    } catch (error) {
      setResult("Error generating roadmap");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <h1 style={styles.title}>🎓 Campus Compass AI</h1>
        <p style={styles.subtitle}>
          Your Personal AI Career Mentor
        </p>

        <textarea
          placeholder="Enter your goal..."
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          style={styles.textarea}
        />

        <button onClick={generatePlan} style={styles.button}>
          {loading ? "Generating..." : "Generate Roadmap 🚀"}
        </button>
      </div>

      <div style={styles.rightPanel}>
        <h2>📊 AI Generated Roadmap</h2>
        <div style={styles.resultBox}>
          {result || "Your roadmap will appear here..."}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "#0b1220",
    color: "white",
    fontFamily: "Arial",
  },
  leftPanel: {
    width: "40%",
    padding: "40px",
    background: "#111827",
  },
  rightPanel: {
    width: "60%",
    padding: "40px",
    overflowY: "auto",
  },
  title: {
    fontSize: "32px",
  },
  subtitle: {
    color: "#9ca3af",
    marginBottom: "20px",
  },
  textarea: {
    width: "100%",
    height: "200px",
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  },
  button: {
    marginTop: "15px",
    padding: "12px 20px",
    background: "#6366f1",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  resultBox: {
    marginTop: "20px",
    whiteSpace: "pre-wrap",
    background: "#1f2937",
    padding: "20px",
    borderRadius: "10px",
  },
};