// 열거형
export enum Gender {
    male = "남자",
    female = "여자",
}

// 인터페이스
export interface ICustomerInfo {
    id: number;
    image: string;
    name: string;
    number: string | number;
    gender: "male" | "female";
    job: string;
    age: number;
}

export interface ICustomerItem {
    customer: NonNullable<ICustomerInfo>;
}

export interface ICustomer {
    info: ICustomerInfo;
}
