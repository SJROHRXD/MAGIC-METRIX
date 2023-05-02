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
                        Page 1
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        Page 2
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        Page 3
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        Page 4
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        Page 404
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default NavBar;