import http from "./httpServices";

const addNewUserService = (data) => {
    return http.post("/users",data)
}
 
export default addNewUserService;