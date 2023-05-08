import logo from '../../img/aurora-logo-transparent.png';

function Head() {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width={90} height={90} className="d-inline-block align-text-center" />
                        <span className="fw-bold h1 ms-2" style={{color: '#0a0994',}}>Aurora Marine</span>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Head;