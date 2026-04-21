async function checkClaim() {
    const claim = document.getElementById("claimInput").value;
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = ` <p>
        <i class="fa-solid fa-hourglass-half fa-spin"></i>
        Analyzing claim...
    </p>`;

    const response = await fetch("http://16.28.99.25:5000/check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ claim })
    });

    const data = await response.json();

    let color = "#333";
    if (data.verdict.includes("True")) color = "#22c55e";
    else if (data.verdict.includes("False")) color = "#ef4444";
    else color = "#f59e0b";

    resultDiv.innerHTML = `
        <div class="card">
            <h2 style="color:${color}">${data.verdict}</h2>

            <p><strong>Claim:</strong> ${data.claim}</p>

            <p><strong>Confidence Score:</strong> ${data.confidence}</p>

            <p><strong>Keywords:</strong> ${data.keywords.join(", ")}</p>

            <h3>Sources</h3>
            <ul>
                ${data.sources.map(s => `<li><a href="${s}" target="_blank">Source</a></li>`).join("")}
            </ul>

            <h3>Reasoning</h3>
            <ul>
                ${data.reasoning.map(r => `<li>${r}</li>`).join("")}
            </ul>
        </div>
    `;
}