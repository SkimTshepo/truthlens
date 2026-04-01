async function checkClaim() {
    const claim = document.getElementById("claimInput").value;

    const response = await fetch("http://127.0.0.1:5000/check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ claim: claim })
    });

    const data = await response.json();

    document.getElementById("result").innerText =
        `Verdict: ${data.verdict}\nSource: ${data.source}`;
}