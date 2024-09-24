import { createContext, useState } from "react";

const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState(null);

    return (
        <OrderContext.Provider value={{ order, setOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContext;
