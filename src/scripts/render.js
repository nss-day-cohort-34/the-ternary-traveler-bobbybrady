import factory from "./factory.js"


const interestContainer = document.querySelector("#interestContainer")
const renderInterest = (interestArray) => {
    interestContainer.innerHTML = ""
    interestArray.forEach(interestObject => {
        const convertedEntry = factory.createInterestHTML(interestObject)
        interestContainer.innerHTML += convertedEntry
    });
}

export default {
    renderInterest
}