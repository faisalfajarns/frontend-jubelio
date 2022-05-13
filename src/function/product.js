import axios from "axios";

export const getProduct = async () => {
    return await axios
        .get("http://localhost:1234/product")
        .then((res) => res.data);
};
