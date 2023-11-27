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
    user_add(data){
        return server(`user/add`,"post",data)
    },
    user_update(data){
        return server(`user/update`,"put",data)
    }
};
