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
    project_one(p = query) {
        return server(`project/one_project/?project_id=${p.id}`,"get")
    },
    // category api
    category_add(data) {
        return server(`category/create`, "post", data);
    },
    category_items_add(data) {
        return server(`category/create_items`, "post", data);
    },
    category_all() {
        return server(`category/all`, "get")
    },
    category_update(data) {
        return server(`category/update`, "put", data);
    },
    category_item_update(data) {
        return server(`category/update_item`, "put", data);
    },
    category_one(p = query) {
        return server(`category/one_category?category_id=${p.id}`)
    },
    category_item_one(p = query) {
        return server(`category/one_category_item?id=${p.id}`)
    },
    // targets api
    target_add(data) {
        return server(`target/create`, "post", data);
    },
    target_all() {
        return server(`target/all`, "get");
    },
    target_update(data) {
        return server(`target/update`, "put", data);
    },
    target_update_count_watch(data) {
        return server(`target/update_count_watches`, "put", data);
    },
    target_one(p = query) {
        return server(`target/one_target?id=${p = id}`, "get");
    },
    // files api
    file_add(data) {
        return server(`file/add`, "post", util.formData(data))
    },
    file_files_source(data) {
        return server(`file/files_by_source_id`, "post", (data))
    },
    file_files_id(data) {
        return server(`file/files_by_id`, "post", util.formData(data))
    },
    file_update_id(data) {
        return server(`file/update_file_by_id`, "put",  util.formData(data))
    },
};
