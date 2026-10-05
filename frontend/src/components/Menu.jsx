import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
//MUI composant React un visuel graphique (badge pour étendre)
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingCart } from 'use-shopping-cart';
//Barre de navigation
const StyledBadge = styled(Badge)(({ theme }) => ({//Badge : etendre ou modifier les styles de base design
  '& .MuiBadge-badge': {//Utilser ou étendre le badge
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
function Menu() {//Barre de navigation
  const {cartCount}=useShoppingCart()//Récupérer cartCount
  return (//Return JSX : c'est le D.O.M (un serveur de développent / Serveur de production)
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
       <Link to="/cart"> <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartCount} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton></Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link}to="/BookReader">Book Reader</Nav.Link>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/CatBook">Categorie Book</Nav.Link>
            <Nav.Link as={Link}to="/SCatBook">Sous Categorie book</Nav.Link>
            <Nav.Link as={Link}to="/Commande">Commande</Nav.Link>
            
            
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;