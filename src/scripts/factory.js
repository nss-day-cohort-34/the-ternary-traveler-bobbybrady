const createInterestHTML = (interestObject) => {
    return `<section id="interestFlex--${interestObject.id}">
    <h3 id="interestName--${interestObject.id}">${interestObject.name}</h3>
    <h4 id="interestPlace--${interestObject.id}">${interestObject.place.name}</h4>
    <h5 id="interestCost--${interestObject.id}">cost-$${interestObject.cost}</h5>
    <p id="interestDescription--${interestObject.id}">${interestObject.description}</p>
    <p id="interestReview--${interestObject.id}">${interestObject.review}</p>
  </section>`
}

const makeInterestObject = (name, placeId, cost, description, review) => {
    return {
        name: name,
        placeId: placeId,
        cost: cost,
        description: description,
        review: ""
    }
}

export default {
    createInterestHTML, makeInterestObject
}