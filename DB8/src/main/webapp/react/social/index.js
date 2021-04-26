import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import PrescriptionList from "./prescriptions/prescription-list";
import PrescriptionFormEditor from "./prescriptions/prescription-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
                <Route path={["/prescriptions", "/"]} exact={true}>
                    <PrescriptionList/>
                </Route>
                <Route path="/prescriptions/:id" exact={true}>
                    <PrescriptionFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
