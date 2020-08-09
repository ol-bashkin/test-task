import UserService from "@/service/UserService.js";

export const namespaced = true;

export const state = {
    user: null
};
export const mutations = {
    SET_USER_DATA(store, userData) {
        localStorage.setItem("user", JSON.stringify(userData));
        store.user = userData;
    },
    CLEAR_USER_DATA(state) {
        state.user = null;
        localStorage.removeItem("user");
        location.reload();
    }
};
export const actions = {
    async login({ commit }, credentials) {
        let response = {};
        try {
            response = await UserService.login(credentials);
            if (response.status === "Success") {
                commit("SET_USER_DATA", response.data.user);
            }
        } catch (err) {
            response.status = err;
            alert("Произошла ошибка: " + err);
        }
        return response.status;
    },
    async register(_, data) {
        let response = {};
        try {
            response = await UserService.register(data);
        } catch (err) {
            response.status = err;
            alert("Произошла ошибка: " + err);
        }
        return response.status;
    },
    logout({ commit }) {
        commit("CLEAR_USER_DATA");
    }
};
