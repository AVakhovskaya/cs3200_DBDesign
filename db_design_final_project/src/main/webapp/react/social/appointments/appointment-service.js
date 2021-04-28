// TODO: declare URL where server listens for HTTP requests
const APPOINTMENTS_URL = "http://localhost:8080/api/appointments"

// TODO: retrieve all users from the server
export const findAllAppointments = () =>
    fetch(APPOINTMENTS_URL )
        .then(response => response.json())

// TODO: retrieve a single user by their ID
export const findAppointmentById = (id) =>
    fetch(`${APPOINTMENTS_URL }/${id}`)
        .then(response => response.json())
//
// export const findPrescriptionsByApptId = (prescriptionApptId) =>
//     fetch(`http://localhost:8080/api/prescriptions/byappt/${prescriptionApptId}`)
//         .then(response => response.json())

// TODO: delete a user by their ID
export const deleteAppointment = (id) =>
    fetch(`${APPOINTMENTS_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new user
export const createAppointment = (appointment) =>
    fetch(APPOINTMENTS_URL, {
        method: 'POST',
        body: JSON.stringify(appointment),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// TODO: update a user by their ID
export const updateAppointment = (id, appointment) =>
    fetch(`${APPOINTMENTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(appointment),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service

export default {
    findAllAppointments,
    findAppointmentById,
    // findPrescriptionsByApptId,
    deleteAppointment,
    createAppointment,
    updateAppointment
}