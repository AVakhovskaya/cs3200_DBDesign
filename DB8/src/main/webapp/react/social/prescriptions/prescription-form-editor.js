import prescriptionService, {findPrescriptionsById} from "./prescription-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const PrescriptionFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [prescription, setPrescription] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findPrescriptionsById(id)
        }
    }, []);
    const createPrescription = (prescription) =>
        prescriptionService.createPrescription(prescription)
            .then(() => history.goBack())
    const findPrescriptionsById = (id) =>
        prescriptionService.findPrescriptionsById(id)
            .then(prescription => setPrescription(prescription))
    const deletePrescription = (id) =>
        prescriptionService.deletePrescription(id)
            .then(() => history.goBack())
    const updatePrescription = (id, newPrescription) =>
        prescriptionService.updatePrescription(id, newPrescription)
            .then(() => history.goBack())
    return (
        <div>
            <h2>Prescription Editor</h2>
            <label>Id</label>
            <input className="form-control" value={prescription.id}/><br/>
            <label>AppointmentID</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPrescription(prescription =>
                           ({...prescription, appointmentid: e.target.value}))}
                   value={prescription.appointmentid}/><br/>
            <label>Medicine Name</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPrescription(prescription =>
                           ({...prescription, medicinename: e.target.value}))}
                   value={prescription.medicinename}/><br/>
            <label>Date of Refill</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPrescription(prescription =>
                           ({...prescription, dateofrefill: e.target.value}))}
                   value={prescription.dateofrefill}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deletePrescription(prescription.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createPrescription(prescription)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updatePrescription(prescription.id, prescription)}>
                Save
            </button>
        </div>
    )
}

export default PrescriptionFormEditor