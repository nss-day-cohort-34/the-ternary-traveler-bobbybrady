import data from "./data.js"
import render from "./render.js"
import factory from "./factory.js";
import { constants } from "perf_hooks";


let allInterests = []

data.getAllInterests().then(data => {
    render.renderInterest(data)
    allInterests = data
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

addInterestButton.addEventListener("click", () => {
    addInterestModal.showModal()
})

saveInterest.addEventListener("click", () => {
    const placeId = allInterests.find(interest => interest.place.name = placeEditDialog.value)
    const newInterestObject = factory.makeInterestObject(nameEditDialog.value, placeId.place.id, parseInt(costEditDialog.value), descriptionEditDialog.value)
    data.saveInterest(newInterestObject).then(() => {
        data.getAllInterests().then(data => {
            render.renderInterest(data)
            allInterests = data
        })
    })
    addInterestModal.close()
})

cancelInterest.addEventListener("#click", () => {
    addInterestModal.close()
})




