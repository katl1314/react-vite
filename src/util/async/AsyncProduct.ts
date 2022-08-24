import { IProduct } from "../../Page/interface/Product.interface";

export type MethodType = "get" | "post" | "patch" | "pull" | "delete";

export interface IOptions {
    method: MethodType;
    id?: number;
}
export interface IUseProduct extends IOptions {
    initParma: IProduct[];
}

export const getProduct = (url: string, { method, id }: IOptions) => {
    switch (method) {
        case "get": {
            if (id) {
                url = `${url}/${id}`;
            }
            return fetch(url);
        }
        case "post": {
            return fetch(url);
        }
    }
};

export const getData = async (method: MethodType, id?: number) => {
    try {
        const response = await getProduct("http://localhost:3031/products", {
            method,
            id,
        });
        const products: Array<IProduct> | IProduct = await response?.json();
        return products;
    } catch (err: any) {
        console.error(err.message);
    }
};
