import UserList from "./users/user-list";
import AppointmentList from "./appointments/appointment-list";
import AppointmentFormEditor from "./appointments/appointment-form-editor";
import UserFormEditor from "./users/user-form-editor";
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
                <Route path={["/appointments","/"]} exact={true}>
                    <AppointmentList/>
                </Route>

                <Route path="/appointments/:id" exact={true}>
                    <AppointmentFormEditor/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;
