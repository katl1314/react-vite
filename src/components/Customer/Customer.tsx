// 리액트 기능을 사용하기 위해 import함.
import React from "react";
import { H2 } from "../../Assets/Font/Font.style";
import {
    Gender,
    ICustomer,
    ICustomerInfo,
    ICustomerItem,
} from "../../Interface/interface";

const Customer = ({ info }: ICustomer) => {
    if (!Array.isArray(info)) {
        // 실제로 랜더링되는 영역
        return <CustomerItem customer={info} />;
    }

    // customers의 개수만큼 for루프를 이용하여 반복 처리한다.
    const customerItem = info.map((info, index) => (
        <CustomerItem key={`${info.name}_${index}`} customer={info} />
    ));
    return <div>{customerItem}</div>;
};

/**
 * 컴포넌트 구조화
 */
const CustomerProfileImage = ({ image, id, name }: Partial<ICustomerInfo>) => {
    return (
        <div>
            <img src={image} width="200" height="200" alt="profile" />
            <H2>
                {name},({id})
            </H2>
        </div>
    );
};

/**
 * NonNullable<Interface> :  null 또는 undefined로 구성하지 않는 새로운 타입을 반환함.
 */
const CustomerInfo = ({ number, gender, job, age }: Partial<ICustomerInfo>) => {
    // gender가 Nullable이면 male으로 대체함.
    const myGender = gender ?? "male";
    return (
        <div>
            <p>생년월일 : {number}</p>
            <p>성별 : {Gender[myGender]}</p>
            <p>직업 : {job}</p>
            <p>나이 : {age}</p>
        </div>
    );
};

const CustomerItem = ({ customer }: ICustomerItem) => {
    const { image, id, name, number, gender, job, age } = customer;
    return (
        <div className="customer-container">
            <CustomerProfileImage image={image} id={id} name={name} />
            <CustomerInfo number={number} gender={gender} job={job} age={age} />
        </div>
    );
};

// 컴포넌트 내보내기
export default Customer;
