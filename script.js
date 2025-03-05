/* script.js */

function addRecommendation() {
    let input = document.getElementById("new-recommendation");
    let list = document.getElementById("recommendation-list");
    
    if (input.value.trim() !== "") {
        let newItem = document.createElement("li");
        newItem.textContent = input.value;
        list.appendChild(newItem);
        
        alert("Recommendation added successfully!");
        input.value = "";
    } else {
        alert("Please enter a valid recommendation.");
    }
}
