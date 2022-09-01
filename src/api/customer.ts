interface IFetchOption {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body: string;
    headers: {};
}

const getFetch = (
    url: string,
    options: Partial<IFetchOption>,
    customer: {
        headers: Object;
    }
) => {
    options.headers = options.headers ?? customer.headers;
    return fetch(`http://localhost:3031/${url}`, options);
};

/**
 * options: {
 *  headers: {
 *    'Content-Type': 'application/json'
 *  },
 *  body: JSON.stringify(`{}`);
 * }
 */
export const customer = {
    headers: {
        "content-Type": "application/json",
    },
    async get(url: string, options: Partial<IFetchOption>) {
        options.method = "GET";
        return getFetch(url, options, this);
    },
    async post(url: string, options: Partial<IFetchOption>) {
        options.method = "POST";
        return getFetch(url, options, this);
    },
    async delete(url: string, options: Partial<IFetchOption>) {
        options.method = "DELETE";
        return getFetch(url, options, this);
    },
};
