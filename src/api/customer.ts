interface IFetchOption {
    method: "get" | "post" | "put" | "patch" | "delete";
    body: string;
    header: {};
}

const getFetch = (url: string, options: Partial<IFetchOption>) => {
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
    async get(url: string, options: Partial<IFetchOption>) {
        options.method = "get";
        options.header = options.header ?? {
            "Content-Type": "application/json",
        };
        return getFetch(url, options);
    },
};
