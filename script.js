// script.js

// Save UX/UI Description
function saveDescription() {
  const description = document.querySelector("textarea").value;
  alert("UX/UI Description Saved: " + description);
}

// Add Behavior Insights
function addBehavior() {
  const behaviorList = document.getElementById("behavior-list");
  const newBehavior = document.createElement("li");
  newBehavior.textContent = "New user behavior insight added!";
  behaviorList.appendChild(newBehavior);
}

// Generate AI-Driven Recommendations
function generateInsights() {
  const output = document.getElementById("recommendations-output");
  output.innerHTML = `
    <h3>AI Recommendations:</h3>
    <ul>
      <li>Highlight key features with clear CTAs.</li>
      <li>Optimize navigation for ease of use.</li>
      <li>Include more visuals for engagement.</li>
    </ul>
  `;
}
