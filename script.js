// Get references to the HTML elements
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");

// Add an event listener to the button
addButton.addEventListener("click", addListItem);

function addListItem() {
    // Get the value from the input field and remove extra whitespace
    const newItemText = itemInput.value.trim();

    // Check if the input value is not empty
    if (newItemText !== "") {
        // Create a new list item element
        const newLi = document.createElement("li");

        // Set the text content of the new list item to the user's input
        newLi.textContent = newItemText;

        // Append the new list item to the unordered list
        itemList.appendChild(newLi);

        // Clear the input field after adding the item
        itemInput.value = "";
        
        // Optional: return focus to the input field
        itemInput.focus();
    }
}
