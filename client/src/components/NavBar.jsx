import { Nav } from "react-bootstrap";

function NavBar() {
    return (
        <>
            <Nav
                // Placeholderrr
            >
                <Nav.Item>
                    <Nav.Link>
                        {/* home, ACTIVE */}
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        {/* home, ACTIVE */}
                        Metrix
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        {/* home, ACTIVE */}
                        Data Viz
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        {/* home, ACTIVE */}
                        Graphs+
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        {/* home, ACTIVE */}
                        Charts+
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        {/* home, ACTIVE */}
                        Visual Representation
                        {/* with Three.js or D3.js */}
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default NavBar;