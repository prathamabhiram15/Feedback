document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const apiUrl = "https://your-salesforce-instance.my.salesforce.com/services/apexrest/feedback";
        const accessToken = "YOUR_ACCESS_TOKEN";  // Replace with a valid Salesforce access token

        const data = {
            customerName: document.getElementById("customerName").value.trim(),
            communicationResponse: document.getElementById("communicationResponse").value,
            complaintHandling: document.getElementById("complaintHandling").value,
            customerServiceResponse: document.getElementById("customerServiceResponse").value,
            deliveryCommitment: document.getElementById("deliveryCommitment").value,
            generationPerformance: document.getElementById("generationPerformance").value
        };

        if (!data.customerName) {
            alert("Please enter the Customer Name.");
            return;
        }

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.status === "Success") {
                alert("✅ Feedback submitted successfully!");
                document.getElementById("feedbackForm").reset();
            } else {
                alert("⚠️ Error: " + result.message);
            }
        })
        .catch(error => {
            alert("❌ Request Failed: " + error);
            console.error("Error:", error);
        });
    });
});
