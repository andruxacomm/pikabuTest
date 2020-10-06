const state = () => ({
    comments: [],
});

const getters = {
    getComments(state) {
        return state.comments;
    },
};

const mutations = {
    setComments(state, comments) {
        state.comments = comments;
    },
};

const actions = {
    //
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
