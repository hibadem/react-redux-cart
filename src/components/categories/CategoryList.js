import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategories,changeCategory } from "../../redux/actions/categoryActions";
import { getProducts } from "../../redux/actions/productActions";
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  selectCategory = (category) => {
     this.props.actions.changeCategory(category);
     this.props.actions.getProducts(category.id);
  }
  render() {
    return (
      <div>
        <h3> <span class="badge badge-warning">Category </span></h3>
        {/* CategoryList sayısı : {this.props.categories.length} */}
        <ul className="list-group">
          {this.props.categories.map((category) => (
            <li className={"list-group-item " + (category.id === this.props.currentCategory.id ? 'active' : '')} onClick={()=>this.selectCategory(category)} class="list-group-item">{category.categoryName}</li>
          ))}
        </ul>
        <h3>şuanki kategori : {this.props.currentCategory.categoryName}</h3>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(getCategories, dispatch),
      changeCategory: bindActionCreators(changeCategory,dispatch),
      getProducts: bindActionCreators(getProducts,dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
