const state = {
    browserHeaderTitle: 'Bates-'
}
const getters = {
    browserHeaderTitle: state => state.browserHeaderTitle
}
const mutations = {
    SET_BROWSERHEADERTITLE: (state, params) => {
        state.browserHeaderTitle = params.browserHeaderTitle
    }
}
const actions = {}
export default {
    state,
    getters,
    mutations,
    actions
}
