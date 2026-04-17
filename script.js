
async function checkClaim() {
    const claim = document.getElementById("claimInput").value;

    document.getElementById("result").innerHTML = "Checking... ⏳";

    try{
    const response = await fetch("16.28.99.25:5000/check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ claim: claim })
    });

    const data = await response.json();

    document.getElementById("result").innerHTML = `
        <div class="result-card">
            <p><strong>Verdict:</strong> ${data.verdict}</p>
            <p><strong>Source:</strong> ${data.source}</p>
        </div>
    `;
    }catch (error) {
        document.getElementById("result").innerHTML = "Something went wrong ❌";
    }
}