import { createStore } from "vuex";
export default createStore({
    state() {
        return {
            user: JSON.parse(localStorage["user"] || null),
        }
    },
    mutations: {
        setUser(state, user) {
            localStorage["user"] = JSON.stringify(user);
            state.user = user;
          },
    },
    actions:{
        setUser(ctx, user) {
            ctx.commit("setUser", user);
          },
    }
    
});
