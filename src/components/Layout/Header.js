import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" className="app-navbar bg-primary">
      <Container>
        <Navbar.Brand className="text-white">Bug Squasher</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
