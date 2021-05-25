import React from 'react'

function AddUserForm(props) {
    return (
        <>
          <form className="m-2">
                <h4 className="m-3">Add an Existing User to Your Network</h4>

                <section className="mb-2">
                    <label className="form-label">User's username</label>
                    <input
                        value={props.username}
                        type="text"
                        onChange={props.usernameChange}
                        className="form-control"
                        id="username" />
                </section>

                <section className="mb-2">
                    <label className="form-label">User's password</label>
                    <input
                        value={props.password}
                        type="password"
                        onChange={props.PassChange}
                        className="form-control"
                        id="user-password" />
                </section>
                
                <button id="adduser" className="btn btn-dark localBtn m-3" onClick={props.handleAddUser}>Add User</button>
            </form>      
        </>
    )
}

export default AddUserForm
