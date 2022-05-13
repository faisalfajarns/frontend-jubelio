import React, { createContext, useContext } from "react";
import { ProductStore } from "../store/productStore";

const RootStateContext = createContext();

const productsStore = ProductStore;
export const RootStateProvider = ({ children }) => {
    console.log("ps", productsStore);
    return (
        <RootStateContext.Provider value={{ productsStore }}>
            {children}
        </RootStateContext.Provider>
    );
};

export const useStore = () => useContext(RootStateContext);
