import fetch from 'node-fetch';
const API_URL = process.env.API_URL

const get = (endPoint, urlParam, requestInit = {}) => {
    return fetch(API_URL + '/' + endPoint + '?' + new URLSearchParams(urlParam).toString(),
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            ...requestInit
        }
    );
};

const post = (endPoint, body, requestInit = {}) => {
    return fetch(API_URL + '/' + endPoint,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            ...requestInit
        }
    );
};

const put = (endPoint, body, requestInit = {}) => {
    return fetch(API_URL + '/' + endPoint,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            ...requestInit
        }
    );
};

const patch = (endPoint, body, requestInit = {}) => {
    return fetch(API_URL + '/' + endPoint,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            ...requestInit
        }
    );
};


(async () => {
    // GET - Pegar
    // const useResponse = await get('users/502');
    // const user = await useGetResponse.json();
    // console.log(user);

    // POST - Criar
    // const userResponse = await post('users',
    //     {
    //         "id": "6000",
    //         "firstName": "CRIADO Márcia",
    //         "lastName": "CRIADO Carvalho",
    //         "userName": "CRIADO marcia_carvalho81",
    //         "indexRef": 1,
    //         "createdAt": "2016-12-08T00:49:39.870Z"
    //     },
    // );

    // PUT - Atualizar
    // const userResponse = await put('users',
    //     {
    //         "id": "6000",
    //         "firstName": "EDITADO - CRIADO Márcia",
    //         "lastName": "EDITADO - CRIADO Carvalho",
    //         "userName": "EDITADO - CRIADO marcia_carvalho81",
    //         "indexRef": 1,
    //         "createdAt": "2016-12-08T00:49:39.870Z"
    //     }
    // );

    // PATCH     - Atualizar
    const userResponse = await patch('users/6000',
        {
            "id": "6000",
            "firstName": "EDITADO - CRIADO Márcia",
        }
    );
    const user = await userResponse.json();
    console.log(user);
})();
