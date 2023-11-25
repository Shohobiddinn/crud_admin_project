import server from "./server";
import query from "./query";
import util from "./util";

export default {
    login(data) {
        return server(`auth/token`, "post", util.formData(data));
    }
};
