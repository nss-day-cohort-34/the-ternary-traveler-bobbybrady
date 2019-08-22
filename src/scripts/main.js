import data from "./data.js"
import render from "./render.js"
import factory from "./factory.js";


let allInterests = []
let allPlaces = []

const interestContainer = document.querySelector("#interestContainer")
const completedContainer = document.querySelector("#completedContainer")

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



