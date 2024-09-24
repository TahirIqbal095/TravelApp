import { useContext } from "react";
import OrderContext from "../context/OrderProvider";

const useOrder = () => {
    return useContext(OrderContext);
};

export default useOrder;
