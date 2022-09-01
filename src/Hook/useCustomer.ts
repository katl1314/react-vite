import { ICustomerInfo } from "@/Interface/interface";
import { useState } from "react";

const useCustomer = (init: ICustomerInfo[]) => {
    const [customersList, setCustomersList] = useState(init);

    const handlerChange = (data: ICustomerInfo | ICustomerInfo[]) => {
        if (Array.isArray(data)) {
            setCustomersList(data);
        } else {
            setCustomersList([...customersList, data]);
        }
    };

    return { customersList, setCustomersList: handlerChange };
};

export default useCustomer;
