import changeCategoryReducer from "./changeCategoryReducer";
import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import saveProductReducer from "./saveProductReducer";

const rootReducers = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
  cartReducer,
  saveProductReducer
});
export default rootReducers;
