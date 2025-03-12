document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let apiUrl = "https://renomenergyservicespvtltd2--devsand.sandbox.my.salesforce.com/services/apexrest/feedback";

    let data = {
        customerName: document.getElementById("customerName").value,
        communicationResponse: document.getElementById("communicationResponse").value,
        complaintHandling: document.getElementById("complaintHandling").value,
        customerServiceResponse: document.getElementById("customerServiceResponse").value,
        deliveryCommitment: document.getElementById("deliveryCommitment").value,
        generationPerformance: document.getElementById("generationPerformance").value
    };

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        alert("Response: " + result);
    })
    .catch(error => {
        alert("Error: " + error);
    });
});
