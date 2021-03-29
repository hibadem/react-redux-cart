import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

class  Navi extends Component {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);
constructor(props){
    super(props);
    this.state={isOpen:false};
    this.toggle = this.toggle.bind(this);

}
toggle(){
    this.setState({isOpen:!this.state.isOpen});
}
render(){
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><Link to="/saveproduct/">Ürün Ekle</Link></NavLink>
            </NavItem>
           <CartSummary />
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}
}
export default Navi;