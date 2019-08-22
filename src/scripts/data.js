const getAllInterests = () => {
    return fetch("http://localhost:8088/interests?_expand=place")
    .then(entries => entries.json())
}

const getAllPlaces = () => {
    return fetch("http://localhost:8088/places")
    .then(entries => entries.json())
}
const saveInterest = (interestObject) => {
    return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(interestObject)
    })
}

const editInterest = (ID, updatedObject) => {
    return fetch(`http://localhost:8088/interests/${ID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedObject)
    }).then(data => data.json())
        .then(() => {
        })
}

const deleteInterest = (entryID) => {
    return fetch(`http://localhost:8088/interests/${entryID}`,
        {
            method: "DELETE",

        })
        .then(data => data.json())
}

export default {
    getAllInterests, saveInterest, getAllPlaces, editInterest, deleteInterest
}