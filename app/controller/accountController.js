import request from 'superagent'

/**
 * Adds 'Authorization' header to the request object.
 */
const addAuthorizationHeader = (accessToken, apiRequest) => (
accessToken
    ? apiRequest.set('Authorization', `Bearer ${accessToken}`)
    : apiRequest
);
  
/**
 * Accepts a 'form' object containing a set of key-value pairs and returns
 * a URI encoded string, which can be transmitted in the request body as
 * x-www-form-urlencoded data.
 */

const register = (accessToken) =>
new Promise((resolve, reject) => {
    addAuthorizationHeader(accessToken, request.get('https://axoncodes.com/dcapi/user'))
    .then(res=>console.log("res", res))
    // const response = await fetch('https://axoncodes.com/dcapi/user')
    // const user = await response.json()
    // return user;
 })

export default {
    register
}