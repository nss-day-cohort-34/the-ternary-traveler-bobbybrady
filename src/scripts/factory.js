const createInterestHTML = (interestObject) => {
    return `<section id="interestFlex--${interestObject.id}">
    <h3 id="interestName--${interestObject.id}">${interestObject.name}</h3>
    <h4 id="interestPlace--${interestObject.id}">${interestObject.place.name}</h4>
    <h5 id="interestCost--${interestObject.id}">cost-$${interestObject.cost}</h5>
    <p id="interestDescription--${interestObject.id}">${interestObject.description}</p>
    <p id="interestReview--${interestObject.id}">${interestObject.review}</p>
    <button id="editInterest--${interestObject.id}">Edit</button>
    <button id="deleteInterest--${interestObject.id}">Delete</button>
  </section>`
}

const makeInterestObject = (name, placeId, cost, description, review) => {
    return {
        name: name,
        placeId: placeId,
        cost: cost,
        description: description,
        review: review
    }
}

const makeDropdown = (interestObject) => {
return `<option value="${interestObject.id}">${interestObject.name}</option>`
}

const createInterestEditHTML = (interestObject) => {
    return `<section id="interestEditFlex--${interestObject.id}">
        <h3 id="interestName--${interestObject.id}">${interestObject.name}</h3>
        <h4 id="interestPlace--${interestObject.id}">${interestObject.place.name}</h4>
        <label for="cost">Cost</label>
        <input type="text" id="interestCost--${interestObject.id}">
        <p id="interestDescription--${interestObject.id}">${interestObject.description}</p>
        <label for="review">Review</label>
        <input type="text" id="interestReview--${interestObject.id}">
        <button id="editSaveInterest--${interestObject.id}">Save</button>
        <button id="cancelEditInterest--${interestObject.id}">Cancel</button>
</section>`
}

export default {
    createInterestHTML, makeInterestObject, makeDropdown, createInterestEditHTML
}