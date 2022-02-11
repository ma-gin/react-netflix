import { Navbar, Nav, Image, Dropdown } from "react-bootstrap";
// backoffices is wrong linked, check it
const MyNavbar = function () {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <Image
            src="./img\Netflix_Logo_RGB.png"
            alt="Netflix logo"
            width={130}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#TV Shows">TV Shows</Nav.Link>
            <Nav.Link href="#Movies">Movies</Nav.Link>
            <Nav.Link href="#RecentlyAdded">Recently Added</Nav.Link>
            <Nav.Link href="#My List">My List</Nav.Link>
            <Nav.Link href="backoffice.html">Backoffice</Nav.Link>
          </Nav>

          <Image
            src="./img/icons8-ricerca.svg"
            className="lens"
            alt="lens image"
            width={25}
          />
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              KIDS
              <Image
                className="mx-2"
                src="./img/icons8-jingle-bell-128.png"
                width={20}
              />
              <Image src="./img/icons8-avatar-128.png" width={30} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
