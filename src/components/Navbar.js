export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="container">
                    <div className="header-flex">
                        <div className="logo">
                            <img src="/dot.png" alt="logo" />
                            <a href="/">com / events</a>
                        </div>
                        <div className="access">
                            <a href="/user">USER</a>
                            <a href="/admin">ADMIN</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}