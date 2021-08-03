import { handleResponse } from '../_helpers/handle-response';
import { authHeader } from '../_helpers/auth-header';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://193.176.243.57:180/api/login/users`, requestOptions)
     .then(handleResponse);
}