const {Link, useHistory} = window.ReactRouterDOM;

import AppointmentService from "./appointment-service"
const { useState, useEffect } = React;

const AppointmentList = () => {
    const history = useHistory()
    const [Appointments, setAppointments] = useState([])
    useEffect(() => {
        findAllAppointments()
    }, [])

    const findAllAppointments = () =>
        AppointmentService.findAllAppointments()
            .then(Appointments => setAppointments(Appointments))
    return(
        <div>
            <h2>Appointment List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/appointments/new")}>
                Add Appointment
            </button>

            <ul className="list-group">
                {
                    Appointments.map(Appointment =>
                        <li className="list-group-item" key={Appointment.id}>
                            <Link to={`/appointments/${Appointment.id}`}>
                                {Appointment.patientid},
                                {Appointment.physicianid},
                                {Appointment.dateOfAppointment}
                                {Appointment.prescriptions}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default AppointmentList;