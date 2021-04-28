const {Link,useParams,useHistory} = window.ReactRouterDOM;

import prescriptionService, {findAllPrescriptions, findPrescriptionsByApptId} from "./prescription-service"
const { useState, useEffect } = React;

const PrescriptionListForAppt = () => {
    const {apptid} = useParams()
    const history = useHistory()
    const [prescriptions, setPrescriptions] = useState([])
    useEffect(() => {
        findPrescriptionsByApptId(apptid)
    }, [])
    const findPrescriptionsByApptId = (apptid) =>
        prescriptionService.findPrescriptionsByApptId(apptid)
            .then(prescriptions => setPrescriptions(prescriptions))
    return(
        <div>
            <h2>Prescription List</h2>
            <ul className="list-group">
                {
                    prescriptions.map(prescription =>
                        <li className="list-group-item" key={prescription.id}>
                            <Link to={`/prescriptions/${prescription.id}`}>
                                {prescription.id},
                                {prescription.medicinename},
                                {prescription.dateofrefill}
                            </Link>
                        </li>)
                }
            </ul>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()}}>
                Cancel
            </button>
        </div>
    )
}

export default PrescriptionListForAppt;