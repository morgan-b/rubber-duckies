import React from 'react'

function Notifications(props) {
    return (
        <div className="card m-3 text-center">
            <p>{props.notification}</p>
        </div>
    )
}

export default Notifications
