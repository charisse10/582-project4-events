import Events from './Events';

export default function User() {
    return (
        <div>
            <div className="container">
                <div className="user-header">
                    <h1> Welcome Max! </h1>
                </div>
            </div>
            <div class="user-events">
                    <Events/>
            </div>
        </div>
    )
}