const factsDiv = document.getElementById("facts"); // Find div to display data
window.addEventListener('load', callRandomDogFactsAPI) // Adds an event listener to the window that detects the load event

const contactForm = document.getElementById("contactform"); // Find form to get data
const confirmDiv = document.getElementById("confirmation"); // Find div to display data
const contactDiv = document.getElementById("contact"); // Find div with contact form
contactForm.addEventListener('submit', confirmSubmission) // Adds an event listener to the form that detects submit event

//Call to the API and get a random dog fact
async function callRandomDogFactsAPI() {
    //Try and run the following code
    try {
        const response = await fetch("https://dogapi.dog/api/v2/facts"); //Call the API and get a random fact
        const data = await response.json(); //Get a random fact from the response
        console.log(data); //Output the random fact to the console
        displayData(data); //Pass the random fact to the displayData function
    }
    //Catch the error if it the code in the try block fails
    catch (error) {
        console.log(error); //Output the error to the console
        const p = document.getElementById("error"); // Find the P element with the ID of error
        p.innerHTML = "Sorry there's an error! 🤕" // Displays a error message
    }
}

//Displays the data on the page
//Parameters: Data - The data to display from the API
function displayData(data) {
      const para = document.createElement("p"); //Create a p element to display the data
      para.innerHTML = `Random Fact: ${data.data[0].attributes.body}`; //Add the first fact to the p element
      factsDiv.appendChild(para); //Append the p element to the facts div on the page
}

function confirmSubmission(){
    const para2 = document.createElement("p"); //Create a p element to display the data
    para2.innerHTML = `Thank you for providing your details ${document.getElementById("fname").value} ${document.getElementById("lname").value}! We will be in touch within 1-2 business days.`; //Add the user details to the p element
    confirmDiv.appendChild(para2); //Append the p element to the confirmation div on the page
    contactDiv.removeChild(contactForm); //Remove the form element from the page
}
