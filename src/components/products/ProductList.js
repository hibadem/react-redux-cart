import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../../redux/actions/cartActions";
import { getProducts } from "../../redux/actions/productActions";
import alertify from 'alertifyjs';
import { Link } from "react-router-dom";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = (product) =>{
    this.props.actions.addToCart({quantity:1,product});
    alertify.success(product.productName + " Sepete Eklendi")
  }
  render() {
    return (
      <div>
        <h3>
          <span class="badge badge-warning">Product </span> -{" "}
          <span class="badge badge-info">
            {this.props.currentCategory.categoryName}
          </span>
        </h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category Id</th>
              <th scope="col">Product</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Unit In Stock</th>
              <th scope="col">Quantity Per Unit</th>
            </tr>
          </thead>
          <tbody>
            
              {this.props.products.map((product) => (
                <tr >
                  <th scope="row" >{product.id}</th>
                  <td>{product.categoryId}</td>
                  <td><Link to={"/saveproduct/"+product.id}>{product.productName}</Link></td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitInStock}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td><button type="submit" class="btn btn-success" onClick={()=>this.addToCart(product)}>Ekle</button></td>
                  </tr>
              ))}
            
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(getProducts, dispatch),
      addToCart: bindActionCreators(addToCart,dispatch)
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
