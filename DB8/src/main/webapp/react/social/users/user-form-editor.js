import userService from "./user-service"
const {useState, useEffect} = React;
const {useParams,useHistory} = window.ReactRouterDOM;
const UserFormEditor = () => {
        const {id} = useParams()
        const [user, setUser] = useState({})


        const findUserById = (id) =>
            userService.findUserById(id)
                .then(user => setUser(user))
        const deleteUser = (id) =>
            userService.deleteUser(id)
                .then(() => history.go(-1))

    useEffect(() => {
        if(id !== "new") {
            findUserById(id)
        }

    }, []);
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => history.go(-1))

    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.go(-1))

        return (
        <div>
            <h2>User Editor</h2>
            <label>Id</label>
                <input value={user.id}/><br/>
            <input className="form-control"/>
            <label>First Name</label>
            <input  onChange={(e) =>
                setUser(user =>
                    ({...user, firstName: e.target.value}))}
                                   className="form-control"/>
            <label>Last Name</label>
            <input onChange={(e) =>
                setUser(user =>
                    ({...user, lastName: e.target.value}))}
                                   className="form-control"/>
            <label>Username</label>
            <input onChange={(e) =>
                setUser(user =>
                    ({...user, username: e.target.value}))}
                                   className="form-control"/>
            <label>Password</label>
            <input onChange={(e) =>
                setUser(user =>
                    ({...user, password: e.target.value}))}
                                   className="form-control"/>
            <br/>
            <button className="btn btn-warning"  onClick={() => {
                    history.go(-1)}}
            >Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                <button className="btn btn-primary" onClick={() => updateUser(user.id, user)}>Save</button>
            <button className="btn btn-success"  onClick={() => createUser(user)}>
                Create</button>
        </div>
    )
}

export default UserFormEditor