const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Campus Compass AI Backend Running 🚀");
});

app.post("/generate", async (req, res) => {
  try {
    const { goal } = req.body;

    if (!goal) {
      return res.status(400).json({
        error: "Goal is required",
      });
    }

    const roadmap = `
🎯 Career Goal Analysis

Goal:
${goal}

📚 Skills To Learn
• Data Structures & Algorithms
• OOPs
• DBMS
• Operating Systems
• Computer Networks
• React.js
• Node.js

🗓 Weekly Study Plan

Monday:
DSA Practice

Tuesday:
React Development

Wednesday:
DBMS + SQL

Thursday:
Node.js

Friday:
Projects

Saturday:
Mock Interviews

Sunday:
Revision

💼 Placement Preparation

• Solve 2 coding problems daily
• Build 3 projects
• Improve LinkedIn profile
• Practice aptitude
• Give mock interviews

🚀 Project Ideas

1. AI Resume Analyzer
2. Campus Compass AI
3. AI Notes Generator
`;

    res.json({
      result: roadmap,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Server Error",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});