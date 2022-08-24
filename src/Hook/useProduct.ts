import { useState, useEffect } from "react";
import { IProduct } from "../Page/interface/Product.interface";
import { getData, MethodType, IOptions } from "../util/async/AsyncProduct";

const useProduct = ({
    initParma,
    method,
    id,
}: {
    initParma: IProduct[] | IProduct;
    method: MethodType;
    id?: string;
}): [
    IProduct[] | IProduct,
    (product: IProduct | IProduct[]) => void,
    ({ method, id }: IOptions) => void
] => {
    const [product, setProduct] = useState(initParma);

    useEffect(() => {
        getData(method).then((res) => res && setProduct(res));
    }, []);

    const handlerAsyncChange = ({ method, id }: IOptions) => {
        getData(method, id).then((res) => {
            res && setProduct(res);
        });
    };

    const handlerChange = (product: IProduct | IProduct[]) => {
        setProduct(product);
    };

    return [product, handlerChange, handlerAsyncChange];
};

export default useProduct;
