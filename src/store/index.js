import { createStore } from "vuex";
export default createStore({
    state() {
        return {
            count: 10,
            isUser: false
        }
    },
    mutations: {
        qosh(state) {
            state.count = state.count + 2

        }

    }
    
});
