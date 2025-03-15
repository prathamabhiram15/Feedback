let apiUrl = "https://renomenergyservicespvtltd2--devsand.sandbox.my.salesforce-sites.com/services/apexrest/feedback";

fetch(apiUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(response => response.text())
.then(result => {
    if (result.includes("Success")) {
        alert("Feedback submitted successfully!");
    } else {
        alert("Error: " + result);
    }
})
.catch(error => alert("Request Failed: " + error));
