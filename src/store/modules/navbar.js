import axios from "axios";

const state = () => ({
    pageCategories: [],
    pageCategoryMajors: [],
    pages: [],
    modal: {},
})

export const mutations = {
    SET_PAGES_DATA(state, payload) {
        state.pageCategories = payload.pageCategories
        state.pageCategoryMajors = payload.pageCategoryMajors
        state.pages = payload.pages
    },
    SET_MODAL_DATA(state, payload) {
        if (payload) {
            state.modal = payload.slidders[0]
        }
    },
}

export const actions = {
    getPagesData({
        commit
    }) {
        return new Promise((resolve, reject) => {
            axios.get("http://localhost:8000/api/page").then((response) => {
                commit("SET_PAGES_DATA", response.data.data)
                commit("SET_MODAL_DATA", response.data.data.modal)
                resolve()
            }, error => {
                reject(error);
            })
        });
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}