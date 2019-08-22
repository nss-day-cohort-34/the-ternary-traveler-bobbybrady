import factory from "./factory.js"



const renderInterestEdit = (interest, domLocation, createFunction) => {
    domLocation.innerHTML = ""
        const convertedEntry = createFunction(interest)
        domLocation.innerHTML += convertedEntry
}

const renderInterest = (interest, domLocation, createFunction) => {
    const convertedEntry = createFunction(interest)
    domLocation.innerHTML += convertedEntry
}

const interestDropdown = document.querySelector("#placeEdit")
const renderDropdown = (interestArray) => {
    interestDropdown.innerHTML = ""
    interestArray.forEach(interestObject => {
        const convertedEntry = factory.makeDropdown(interestObject)
        interestDropdown.innerHTML += convertedEntry
    });
}



export default {
    renderInterest, renderDropdown,renderInterestEdit,
}