export default function Navbar() {
    return (
        <div>
            <nav>
                <div class="container">
                    <div class="header-flex">
                        <div class="logo">
                            <img src="/dot.png" alt="logo" />
                            <a href="/">com / events</a>
                        </div>
                        <div class="access">
                            <a href="/user">USER</a>
                            <a href="/admin">ADMIN</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}