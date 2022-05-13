import { observable, action, makeObservable, makeAutoObservable } from "mobx";
import { getProduct } from "../function/product";
import axios from "axios";
import { observer } from "mobx-react";

class ProductsStoreImpl {
    products = observable([]);

    constructor() {
        // this.loadProduct();
        makeAutoObservable(this);
    }

    // @action
    loadProduct() {
        return getProduct().then((products) => this.products.replace(products));
        // return await axios
        //     .get("http://localhost:1234/product")
        //     .then((res) => (res.data = products))
        //     .catch((err) => console.log(err));
    }
}

export const ProductStore = new ProductsStoreImpl();
