import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({categories, product, onSave, onChange}) => {
  return (
    <div>
      <form onSubmit={onSave}>
        <h3>{product.id ? "Güncelle" : "Ekle"}</h3>
        <TextInput
          name="productName"
          label="Product Name"
          onChange={onChange}
          value={product.productName}
        ></TextInput>
        <SelectInput
          name="categoryId"
          label="Kategori"
          value={product.categoryId || ""} 
          defaultOption="Seçiniz"
          options={categories.map(category => ({
            value: category.id,
            text: category.categoryName,
          }))}
          onChange={onChange}
        ></SelectInput>
        <TextInput
          name="unitsInStock"
          label="Units in stock"
          onChange={onChange}
          value={product.unitsInStock}
        ></TextInput>
        <TextInput
          name="quantityPerUnit"
          label="Quantity per unit"
          onChange={onChange}
          value={product.quantityPerUnit}
        ></TextInput>
        <TextInput
          name="unitPrice"
          label="Unit Price"
          onChange={onChange}
          value={product.unitPrice}
        ></TextInput>
        <button className="btn btn-success" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};
export default ProductDetail;
