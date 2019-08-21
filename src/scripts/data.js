const getAllInterests = () => {
    return fetch("http://localhost:8088/interests?_expand=place")
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

export default {
    getAllInterests, saveInterest
}