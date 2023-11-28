import server from "./server";
import query from "./query";
import util from "./util";

export default {
    login(data) {
        return server(`auth/token`, "post", util.formData(data));
    },
    project_all() {
        return server("project/all", "get",)
    },

    // users api
    user_all(p = query) {
        const search = p.search ? `search=${p.search}` : ``;
        return server(`user?id=${p.id}&page=${p.page}&status=${p.status}&limit=${p.limit}&${search}`, "get")

    },
    user_add(data) {
        return server(`user/add`, "post", data)
    },
    user_update(data) {
        return server(`user/update`, "put", data)
    },
    // project api
    project_add(data) {
        return server(`project/create`, "post", data)
    },
    project_all(p = query) {
        const search = p.search ? `search=${p.search}` : ``;
        return server(`project/all`, "get")
    },
    project_update(data) {
        return server(`project/update`, "put", data)
    },
    project_one(p = query){
        return server(`project/one_project?id=${p.id}`)
    }

};
