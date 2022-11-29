//base url, osea, el url que te trae la api
/* const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";
 */

const UserServices = {};

//Funciones para conectar con la api
/* const getOnePost = async (token, id) => {
    const response = await fetch(`${BASE_URL}/post/one/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (response.ok) {
        const post = await response.json();
        return post;
    }

    return {};
}

UserServices.getOnePost = getOnePost; */



UserServices.login = async (username, password) => {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    if (response.ok) {
        const {token} = await response.json();
        return token;
    }

    return undefined;
}

UserServices.verifyToken = async (token) => {
    const response = await fetch(`${BASE_URL}/auth/whoami`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (response.ok) {
        const data = await response.json();;
        return data;
    }

    return undefined;
}

export default UserServices;