import Add from "./Add";
import Events from "./Events";

export default function User() {
    return (
        <div>
            <div className="container">
                <div className="admin-header">
                    <h1> Welcome Admin! </h1>
                </div>
            </div>
            <div className="form">
                    <Add />
            </div>
            <div className="admin-events">
                    <Events />
            </div>
        </div>
    )
}