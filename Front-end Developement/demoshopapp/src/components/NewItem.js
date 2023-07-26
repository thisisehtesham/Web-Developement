import Item from "./Item";
import ItemDate from "./ItemDate";
import "./NewItem.css";
import ProductForm from "./ProductForm";

function NewItem() {
    function saveProduct() {
        console.log("i am inside new item");
        console.log(Item);

        //calling parent function
        props.Ehtesham(Item);
    }

    return (
        <div className="new-product">
            <ProductForm onsaveProduct={saveProduct} />
        </div>
    );
}

export default NewItem;
