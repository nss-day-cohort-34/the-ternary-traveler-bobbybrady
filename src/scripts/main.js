import data from "./data.js"
import render from "./render.js"
import factory from "./factory.js";


let allInterests = []
let allPlaces = []

const interestContainer = document.querySelector("#interestContainer")
const completedContainer = document.querySelector("#completedContainer")
const deleteDialog = document.querySelector("#deleteDialog")
const getAndRender = () => {
    data.getAllInterests().then(data => {
        interestContainer.innerHTML =""
        completedContainer.innerHTML =""
        data.forEach(interest => {
            if (interest.review !== "") {
                render.renderInterest(interest, completedContainer, factory.createInterestHTML)
            } else {
                render.renderInterest(interest, interestContainer, factory.createInterestHTML)
            }
        });
        allInterests = data
    })
}
getAndRender()

data.getAllPlaces().then(data => {
    allPlaces = data
})
const addInterestButton = document.querySelector("#addInterest")
const addInterestModal = document.querySelector("#interestDialog")
const nameEditDialog = document.querySelector("#nameEdit")
const placeEditDialog = document.querySelector("#placeEdit")
const costEditDialog = document.querySelector("#costEdit")
const descriptionEditDialog = document.querySelector("#descriptionEdit")
const reviewEditDialog = document.querySelector("#reviewEdit")
const saveInterest = document.querySelector("#saveInterest")
const cancelInterest = document.querySelector("#cancelInterest")
const progressContainer = document.querySelector("#progressContainer")
const addPlace = document.querySelector("#addPlace")
const addPlaceDialog = document.querySelector("#addPlaceDialog")
const inpputPlace = document.querySelector("#newPlace")
const visa = document.querySelector("#visa")
const saveNewPlace = document.querySelector("#addPlaceSave")
const cancelNewPlace = document.querySelector("#addPlaceCancel")


addInterestButton.addEventListener("click", () => {
    render.renderDropdown(allPlaces)
    addInterestModal.showModal()
})

saveInterest.addEventListener("click", () => {
    const newInterestObject = factory.makeInterestObject(nameEditDialog.value, parseInt(placeEditDialog.value), parseInt(costEditDialog.value), descriptionEditDialog.value, "")
    data.saveInterest(newInterestObject).then(() => {
        getAndRender()
    })
    nameEditDialog.value = ""
    placeEditDialog.value = ""
    costEditDialog.value = ""
    descriptionEditDialog.value = ""
    addInterestModal.close()
})

cancelInterest.addEventListener("click", () => {
    addInterestModal.close()
})

progressContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("editInterest")) {
        const id = event.target.id.split("--")[1]
        const getOneInterest = allInterests.find(interest => interest.id === parseInt(id))
        const newLocation = `#interestFlex--${id}`
        const newLocationDom = document.querySelector(newLocation)
        render.renderInterestEdit(getOneInterest, newLocationDom, factory.createInterestEditHTML)
        const cost = document.querySelector(`#interestCost--${id}`)
        const review = document.querySelector(`#interestReview--${id}`)
        cost.value = getOneInterest.cost
        review.value = getOneInterest.review
    }
})

progressContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("editSaveInterest")) {
        const id = event.target.id.split("--")[1]
        const getOneInterest = allInterests.find(interest => interest.id === parseInt(id))
        const cost = document.querySelector(`#interestCost--${id}`)
        const review = document.querySelector(`#interestReview--${id}`)
        const newInterestObject = factory.makeInterestObject(getOneInterest.name, getOneInterest.placeId, parseInt(cost.value), getOneInterest.description, review.value)
        data.editInterest(id, newInterestObject).then(() => {
            getAndRender()
        })
    }
})

progressContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("cancelEditInterest")) {
        getAndRender()
    }
})

completedContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("editInterest")) {
        const id = event.target.id.split("--")[1]
        const getOneInterest = allInterests.find(interest => interest.id === parseInt(id))
        const newLocation = `#interestFlex--${id}`
        const newLocationDom = document.querySelector(newLocation)
        render.renderInterestEdit(getOneInterest, newLocationDom, factory.completedInterestEditHTML)
        const cost = document.querySelector(`#interestCost--${id}`)
        const review = document.querySelector(`#interestReview--${id}`)
        const name = document.querySelector(`#interestName--${id}`)
        const description = document.querySelector(`#interestDescription--${id}`)
        cost.value = getOneInterest.cost
        review.value = getOneInterest.review
        name.value = getOneInterest.name
        description.value = getOneInterest.description
    }
})

completedContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("editSaveInterest")) {
        const id = event.target.id.split("--")[1]
        const getOneInterest = allInterests.find(interest => interest.id === parseInt(id))
        const cost = document.querySelector(`#interestCost--${id}`)
        const review = document.querySelector(`#interestReview--${id}`)
        const name = document.querySelector(`#interestName--${id}`)
        const description = document.querySelector(`#interestDescription--${id}`)
        const newInterestObject = factory.makeInterestObject(name.value, getOneInterest.place.id, parseInt(cost.value), description.value, review.value)
        data.editInterest(id, newInterestObject).then(() => {
            getAndRender()
        })
    }
})

completedContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("cancelEditInterest")) {
        getAndRender()
    }
})
let deleteID = 0
progressContainer.addEventListener("click" , () => {
    if (event.target.id.startsWith("deleteInterest")) {
        deleteID = event.target.id.split("--")[1]
        deleteDialog.showModal()
    }
})

progressContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("yesButton")) {
        data.deleteInterest(deleteID).then(data => {
            getAndRender()
            allInterests = data
            deleteDialog.close()
        })
    }
})

progressContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("noButton")) {
        deleteDialog.close()
    }
})

completedContainer.addEventListener("click" , () => {
    if (event.target.id.startsWith("deleteInterest")) {
        deleteID = event.target.id.split("--")[1]
        deleteDialog.showModal()
    }
})

completedContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("yesButton")) {
        data.deleteInterest(deleteID).then(data => {
            getAndRender()
            allInterests = data
            deleteDialog.close()
        })
    }
})

completedContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("noButton")) {
        deleteDialog.close()
    }
})

addPlace.addEventListener("click", () => {
    addPlaceDialog.showModal()
})

saveNewPlace.addEventListener("click", () => {
    const visaValue = new Boolean(visa.value)
    const newPlace = inpputPlace.value
    const newPlaceObject = factory.makePlaceObject(newPlace, visaValue)
    data.addPlace(newPlaceObject).then(() => {
        data.getAllPlaces().then(data => {
            allPlaces = data
            visa.value = ""
            inpputPlace.value = ""
        })
    })
    addPlaceDialog.close()
})

cancelNewPlace.addEventListener("click", () => {
    addPlaceDialog.close()
})

