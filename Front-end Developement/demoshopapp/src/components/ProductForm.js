import { useState } from "react";
import "./ProductForm.css";
import ItemDate from "./ItemDate";

function ProductForm() {
    // const [fullProductInput, setfulProductInput] = useState({
    //     title:'',
    //     date:''
    // });

    // function setfulProductInput(event, prevState) {
    //     //return object with updated parameters
    //     return{...prevState, title:event.target.value};
    // }

    const [newtitle, setTitle] = useState("");
    const [newdate, setDate] = useState("");

    function titleChangeHandler(event) {
        setTitle(event.target.value);
        //console.log(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
        // console.log(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const ItemDate = {
            title: newtitle,
            date: newdate,
        };
        // console.log(productDate);
        props.onSaveProduct(ItemDate);

        setTitle(" ");
        setDate(" ");
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div className="new-product_control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={newtitle}
                        onChange={titleChangeHandler}
                    ></input>
                </div>
                <div className="new-product_control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={newdate}
                        onChange={dateChangeHandler}
                        min="2023-01-01"
                        max="2023-12-12"
                    ></input>
                </div>
                <div className="new-product_button">
                    <button type="submit">Add Product</button>
                </div>
            </div>
        </form>
    );
}

export default ProductForm;
