import "./App.css";
import { ICustomerInfo } from "./Interface/interface";

import { useQuery } from "react-query";
import React, { useRef } from "react";
// 절대 경로
import { customer } from "@/api/customer";
import useCustomer from "./Hook/useCustomer";
import Controller from "./components/Controller";
import Content from "./components/Content";

const customers: ICustomerInfo[] = [];

export const MyContext = React.createContext({
    customers,
    handlerCustomerAdd: () => {},
    handlerDelete: (_id: number) => {},
});
function App() {
    const { customersList, setCustomersList } = useCustomer(customers);
    const nameRef = useRef(null); // name ref
    const jobRef = useRef(null); // job ref
    const getAsyncCustomer = async () => {
        try {
            const response = await customer.get("customer", {});
            const data = await response.json();
            return data;
        } catch (err: any) {
            throw new Error(err);
        }
    };

    // 서버의 최신 데이터를 가리키기 위해 useQuery를 사용하였다.
    const { isLoading } = useQuery(["customer"], getAsyncCustomer, {
        refetchOnWindowFocus: true,
        retryDelay: 3000,
        onSuccess: (data: ICustomerInfo[]) => {
            setCustomersList(data);
        },
        onError: (err) => {
            console.error(err);
        },
    });

    const handlerCustomerAdd = () => {
        if (nameRef.current && jobRef.current) {
            // useRef를 이용하여 DOM엘리먼트에 접근한다.
            // 인자로 넘어온 초기값은 useRef 객체의 current프로퍼티에 저장됨.
            const elName: HTMLInputElement = nameRef?.current;
            const elJob: HTMLInputElement = jobRef?.current;

            // radio버튼은 :checked를 추가하여 선택한 항목만 반환하도록 한다.
            const elRadio: HTMLInputElement = document.querySelector(
                "input[name='gender']:checked"
            ) as HTMLInputElement;

            // 임의의 데이터를 전달해보자.
            const body = {
                name: elName.value,
                image: `https://placeimg.com/64/64/${customersList.length + 1}`,
                number: Math.floor(Math.random() * 100000),
                gender: elRadio.value,
                job: elJob.value,
            };
            customer
                .post("customer", { body: JSON.stringify(body) })
                .then((res) => res.json())
                .then((data) => setCustomersList(data));
        }
    };

    const handlerDelete = (_id: number) => {
        customer
            .delete(`customer/${_id}`, {})
            .then((res) => res.json())
            .then(() => {
                const data: ICustomerInfo[] = [];
                customersList.forEach((item) => {
                    if (item.id !== _id) {
                        data.push(item);
                    }
                });
                setCustomersList(data);
            });
    };

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <MyContext.Provider
                    value={{
                        customers: customersList,
                        handlerCustomerAdd,
                        handlerDelete,
                    }}
                >
                    <Content
                        children={
                            <Controller nameRef={nameRef} jobRef={jobRef} />
                        }
                    ></Content>
                </MyContext.Provider>
            )}
        </div>
    );
}

const Loading = () => {
    return <div>로딩중...</div>;
};

export default App;
