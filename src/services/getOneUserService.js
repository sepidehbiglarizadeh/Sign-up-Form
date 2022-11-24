import http from "./httpServices";

const getOneUserService = () => {
    return http.get("/users/1");
}
 
export default getOneUserService;