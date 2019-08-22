const createInterestHTML = (interestObject) => {
    return `<section id="interestFlex--${interestObject.id}" class = "interest">
    <h3 id="interestName--${interestObject.id}">${interestObject.name}</h3>
    <h4 id="interestPlace--${interestObject.id}">${interestObject.place.name}</h4>
    <h5 id="interestCost--${interestObject.id}">Cost-$${interestObject.cost}</h5>
    <p id="interestDescription--${interestObject.id}">${interestObject.description}</p>
    <p id="interestReview--${interestObject.id}">${interestObject.review}</p>
    <button id="editInterest--${interestObject.id}" class = "hidden button">Edit</button>
    <button id="deleteInterest--${interestObject.id}" class = "hidden button">Delete</button>
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

const makePlaceObject = (name, boolean) => {
    return {
        name: name,
        visa_required: boolean
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
        <button id="editSaveInterest--${interestObject.id}" class="button">Save</button>
        <button id="cancelEditInterest--${interestObject.id}" class="button">Cancel</button>
</section>`
}

export default {
    createInterestHTML, makeInterestObject, makeDropdown, createInterestEditHTML, makePlaceObject
}