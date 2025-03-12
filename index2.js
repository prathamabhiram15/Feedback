document.addEventListener("DOMContentLoaded", function() {
    // Dynamically set Customer Name (example)
    document.getElementById("customerName").value = "John Doe"; // Fetch dynamically if needed

    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let customerName = document.getElementById("customerName").value;
        let communicationResponse = document.getElementById("communicationResponse").value;
        let complaintHandling = document.getElementById("complaintHandling").value;
        let customerServiceResponse = document.getElementById("customerServiceResponse").value;
        let deliveryCommitment = document.getElementById("deliveryCommitment").value;
        let generationPerformance = document.getElementById("generationPerformance").value;

        fetch("https://your-salesforce-instance.my.salesforce.com/services/apexrest/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                customerName: customerName,
                communicationResponse: communicationResponse,
                complaintHandling: complaintHandling,
                customerServiceResponse: customerServiceResponse,
                deliveryCommitment: deliveryCommitment,
                generationPerformance: generationPerformance
            })
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error Submitting Feedback");
        });
    });
});
