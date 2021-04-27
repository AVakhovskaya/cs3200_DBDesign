import userService from "./user-service"
import appointmentService from "./appointment-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const AppointmentFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findAppointmentById(id)
        }
    }, []);
    const createAppointment = (appointment) =>
        appointmentService.createAppointment(appointment)
            .then(() => history.goBack())

    const findAppointmentById = (id) =>
        appointmentService.findAppointmentById(id)
            .then(appointment => setAppointment(appointment))

    const deleteAppointment = (id) =>
        appointmentService.deleteAppointment(id)
            .then(() => history.goBack())

    const updateAppointment = (id, newAppointment) =>
        appointmentService.updateAppointment(id, newAppointment)
            .then(() => history.goBack())


    return (
        <div>
            <h2>Appointment Editor</h2>
            <label>Id</label>
            <input className="form-control" value={appointment.id}/><br/>
            <label>patientid</label>
            <input className="form-control"
                   onChange={(e) =>
                       setAppointment(appointment =>
                           ({...appointment, patientid: e.target.value}))}
                   value={appointment.patientid}/><br/>
            <label>physicianid</label>

            <input className="form-control"
                   onChange={(e) =>
                       setAppointment(appointment =>
                           ({...appointment, physicianid: e.target.value}))}
                   value={appointment.physicianid}/><br/>
            <label>date of appointment</label>
            <input className="form-control"
                   onChange={(e) =>
                       setAppointment(appointment =>
                           ({...appointment, dateOfAppointment: e.target.value}))}
                   value={appointment.dateOfAppointment}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()}}>
                Cancel
            </button>

            <button className="btn btn-danger"
                    onClick={() => deleteAppointment(appointment.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createAppointment(appointment)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateAppointment(appointment.id, appointment)}>
                Save
            </button>
        </div>
    )
}

export default AppointmentFormEditor