import "./App.css";
import { useObserver } from "mobx-react-lite";
import { useEffect } from "react";
import { observer } from "mobx-react";

import { useStore } from "./context/RootStateContext";
import { ProductStore } from "./store/productStore";
// import { ProdustStoreImpl } from "./store/productStore";
// function App() {
//     const { productsStore } = useStore();
//     return useObserver(() => (
//         <div className="App">
//             <div className="product">
//                 <h1>Produk Mu</h1>
//                 <ul>
//                     {productsStore.products.map((d, i) => (
//                         <li key={i}>{JSON.stringify(d)}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     ));
// }

// const productStore = ProductStore;
const App = () => {
    const products = useStore();

    useEffect(() => {
        products.productsStore.loadProduct();
    }, []);

    return (
        <div className="App">
            <div className="product">
                <h1>Produk Mu</h1>
                <ul>
                    {products?.productsStore?.products.map((d, i) => (
                        <li key={d}>{JSON.stringify(d)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default observer(App);
