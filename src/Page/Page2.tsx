import React, { useState } from "react";
import styled from "styled-components";
import useProduct from "../Hook/useProduct";
import { IProduct } from "./interface/Product.interface";
import { H2 } from "../Font/Font.style";
import { getProduct } from "../util/async/AsyncProduct";
import { useQuery } from "react-query";
const Page = React.memo(() => {
    let [product, setProduct] = useProduct({ initParma: [], method: "get" });
    const fetchProductList = async () => {
        const response = await getProduct("http://localhost:3031/products", {
            method: "get",
        });

        const data = await response?.json();
        return data;
    };
    const { data } = useQuery("products", fetchProductList);
    if (data) {
        product = data;
    }

    const defaultProduct: IProduct = {
        id: -1,
        image: "",
        name: "",
        price: 0,
        stock: 0,
        type: "",
    };
    const [selectProduct, setSelectProduct] =
        useState<IProduct>(defaultProduct);
    const clickItem = (selectProduct: IProduct) => {
        setSelectProduct(selectProduct);
    };

    return (
        <>
            <H2>상품 재고 관리</H2>
            <InventoryWrap>
                <InventoryListView product={product} clickItem={clickItem} />
                <InventoryDetailView product={selectProduct} />
            </InventoryWrap>
        </>
    );
});

const InventoryDetailView = ({ product }: { product: IProduct }) => {
    return (
        <div>
            <div
                style={{
                    position: "fixed",
                    backgroundColor: "#efefef",
                    padding: "10px",
                }}
            >
                <H2 style={{ textAlign: "center" }}>선택한 항목</H2>
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                    />
                </div>
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>{product.stock}</div>
                <div>{product.type}</div>
            </div>
        </div>
    );
};

const InventoryListView = ({
    product,
    clickItem,
}: {
    product: IProduct[] | IProduct;
    clickItem: (res: IProduct) => void;
}) => {
    const handlerClickInventory = (item: IProduct) => {
        clickItem(item);
    };

    const items =
        Array.isArray(product) &&
        product.map((item) => (
            <div
                key={`inverntroy_${item.id}`}
                className="item_view"
                onClick={handlerClickInventory.bind(null, item)}
            >
                <div>
                    <p>{item.name}</p>
                </div>
                <div>
                    <img
                        src={item.image}
                        alt={item.name}
                        width="230"
                        height="230"
                    />
                </div>
                <div>
                    <p>가격: {item.price}</p>
                </div>
                <div>
                    <p>재고량: {item.stock}</p>
                </div>
                <div>
                    <p>타입: {item.type}</p>
                </div>
            </div>
        ));

    return <Inventory>{items}</Inventory>;
};

const InventoryWrap = styled.div`
    display: flex;
    flex: 1 1;
`;

const Inventory = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    & > .item_view {
        margin: 20px;
        border: 1px solid black;
        padding: 20px;
        border-radius: 15px;
        transition-duration: 1s;
        & > div {
            padding: 5px 0px;
            & > p {
                font-family: "Happiness-Sans-Title";
            }
        }
        & > div:first-child {
            font-size: 20px;
            font-weight: 700;
        }
        &:hover {
            background-color: black;
            opacity: 0.8;
            cursor: pointer;
            color: white;
        }
    }
`;
export default Page;
