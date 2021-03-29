import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavbarText,
  UncontrolledDropdown,
} from "reactstrap";
import { bindActionCreators } from "redux";
import { removeFromCart } from "../../redux/actions/cartActions";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <div>
        <NavbarText>Sepetiniz boş</NavbarText>
      </div>
    );
  }
  renderCart() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Sepetiniz
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cart.map((cartItem) => (
              <DropdownItem>
                <Badge
                  color="danger"
                  onClick={() =>
                    this.props.actions.removeFromCart(cartItem.product)
                  }
                >
                  -
                </Badge>

                {cartItem.product.productName}
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem><Link to={"/cart"}>Sepete Git</Link> </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderCart() : this.renderEmpty()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(removeFromCart, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
