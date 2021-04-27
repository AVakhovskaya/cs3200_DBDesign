const PRESCRIPTIONS_URL = "http://localhost:8080/api/prescriptions"

export const findAllPrescriptions = () =>
    fetch(PRESCRIPTIONS_URL)
        .then(response => response.json())

export const findPrescriptionsById = (id) =>
    fetch(`${PRESCRIPTIONS_URL}/${id}`)
        .then(response => response.json())


export const deletePrescription = (id) =>
    fetch(`${PRESCRIPTIONS_URL}/${id}`, {
        method: "DELETE"
    })


export const createPrescription = (prescription) =>
    fetch(PRESCRIPTIONS_URL, {
        method: 'POST',
        body: JSON.stringify(prescription),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updatePrescription = (id, prescription) =>
    fetch(`${PRESCRIPTIONS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(prescription),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllPrescriptions,
    findPrescriptionsById,
    deletePrescription,
    createPrescription,
    updatePrescription
}