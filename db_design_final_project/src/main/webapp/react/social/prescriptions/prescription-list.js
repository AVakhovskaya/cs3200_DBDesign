const {Link, useHistory} = window.ReactRouterDOM;

import prescriptionService, {findAllPrescriptions} from "./prescription-service"
const { useState, useEffect } = React;

const PrescriptionList = () => {
    const history = useHistory()
    const [prescriptions, setPrescriptions] = useState([])
    useEffect(() => {
        findAllPrescriptions()
    }, [])
    const findAllPrescriptions = () =>
        prescriptionService.findAllPrescriptions()
            .then(prescriptions => setPrescriptions(prescriptions))
    return(
        <div>
            <h2>Prescription List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/prescriptions/new")}>
                Add Prescription
            </button>
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
        </div>
    )
}

export default PrescriptionList;