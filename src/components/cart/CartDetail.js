import alertify from "alertifyjs";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeFromCart } from "../../redux/actions/cartActions";

class CartDetail extends Component {
  removeFromCart(product){
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + "Sepetten silindi");
  }
  render() {
    return (
      <table class="table">
        <thead>
         
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product </th>
            <th scope="col">Unit price</th>
            <th scope="col">Quantity</th>

          </tr>
        </thead>
        <tbody>
        {this.props.cart.map(cartItem => (
            <tr>
            <th scope="row">{cartItem.product.id}</th>
            <td>{cartItem.product.productName}</td>
            <td>{cartItem.product.unitPrice}</td>
            <td>{cartItem.quantity}</td>
            <td><a class="btn btn-danger" onClick={()=>this.props.actions.removeFromCart(cartItem.product)}>Sil</a></td>
            
            
          </tr>
            ))}
          
        </tbody>
      </table>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(removeFromCart, dispatch),
    },
  };
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
