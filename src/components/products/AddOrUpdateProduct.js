import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {getCategories} from "../../redux/actions/categoryActions";
import {saveProduct} from "../../redux/actions/productActions";
import ProductDetail from './ProductDetail';

function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props //bu fonksiyonun propslarına üstekileri ekler
}){
    const [product,setProducts] = useState({...props.product});
    useEffect(()=>{
        if(!categories.length){ 
            //tıklanarak kategori bilgisi gelmez ise  kategorileri getirmek için
            getCategories();
        }
        
        setProducts({...props.product});
    },[props.product]);//[props.product]'ı izle sonra sonlandır.Sonsuz döngüye girmesin
    function handleChange(event){
        const {name,value} = event.target; //inputun name ve value'suna erişmek
        setProducts(previousProduct => ({
            ...previousProduct,
            [name]:name === "categoryId" ? parseInt(value,10):value //inputumuz id olduğunda string gitmemesi için
        }));
    };
    function handleSave(event){
        event.preventDefault();
        saveProduct(product).then(()=>{//ürünleri ekle sonra anasayfaya yönlendir
            history.push("/");//react ile gelen bir şey history ile route yönlendirmeleri yapılabilir.
        })
    }
    return (
        <div>
        <ProductDetail product={product} categories={categories} onChange={handleChange} onSave={handleSave} ></ProductDetail>
        </div>
    )
}
export function getProductById(products,productId){
    let product = products.find(product=>product.id == productId)||null;
    return product;
}
function mapStateToProps(state,ownProps){
    const productId = ownProps.match.params.productId;
    const product = productId && state.productListReducer.length>0 
    ? getProductById(state.productListReducer,productId) : {}
    return {
        product,
        products:state.productListReducer,
        categories:state.categoryListReducer
        
    };
    
};
const mapDispatchToProps = {
    getCategories,saveProduct
  
};
export default connect(mapStateToProps,mapDispatchToProps)(AddOrUpdateProduct);