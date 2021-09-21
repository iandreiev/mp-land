import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import VueAxios from "vue-axios"
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "https://monopolylife.ru/api/"
// Vue.axios.defaults.baseURL = "http://localhost:3031/"

const USER = "user"
const PROJECTS = "projects"
const CATS = "categories"

export default new Vuex.Store({
  state: {
    accessToken:'',
    user: [],
    auth: false,
    projects: [],
    categories: [],
    userprojects: [],
    wallet: [],
    notifications: [],
    messages: [],
    bids: [],
    history: [],
    setup: [],
    videos:[],
    locale: 'ru',
    showRegister: false,
    showLogin: false,
    showLangs: false,
    showUserNav: false,
    showProject: false,
    showPayout: false,
    showThanks: false,
    showWrong: false,
    passport_1: null,
    passport_2: null,
    passport_3: null,
    isMobile: false,
    isLoading: true,
    investings: [],
    stat: [],
    withdraws: [],
    last: true,
    first: true,
    isSearch: false,
    isEmailVerify: false,
    isPhoneVerify: false,
    isReset: false,
    isMailSent: false,
    isPlayer: false,
    rateBTC: null,
    currentProduct:{},
    currentUserProject: null,
    user_ip: '',
    msg_counter:{}
  },
  mutations: {
    debug(state) {
    state.msg_counter = {},
      state.accessToken = '',
      state.user = [],
        state.auth = false,
        state.projects = [],
        state.categories = [],
        state.userprojects = [],
        state.wallet = [],
        state.notifications = [],
        state.messages = [],
        state.bids = [],
        state.history = [],
        state.setup = [],
        state.locale = 'ru',
        state.showRegister = false,
        state.showLogin = false,
        state.showLangs = false,
        state.showProject = false,
        state.showPayout = false,
        state.showThanks = false,
        state.showWrong = false,
        state.passport_1 = null,
        state.passport_2 = null,
        state.isMobile = false,
        state.isLoading = true,
        state.investings = [],
        state.stat = [],
        state.withdraws = [],
        state.last = true,
        state.first = true,
        state.isSearch = false,
        state.isEmailVerify = false,
        state.isPhoneVerify = false,
        state.isReset = false,
        state.isMailSent = false
    },
    logout(state) {
      state.user = []
      state.auth = false,
        state.projects = [],
        state.userprojects = [],
        state.wallet = [],
        state.notifications = [],
        state.messages = [],
        state.bids = [],
        state.history = [],
        state.passport_1 = null,
        state.passport_2 = null
      state.investings = [],
        state.stat = [],
        state.withdraws = [],
        state.msg_counter = {}
    },
    REFRESH_TOKEN(state,accessToken){
      state.accessToken = accessToken
    },
    SAVE_USER(state, user) {
      state.user = user
      state.auth = true
      window.localStorage.setItem('user', JSON.stringify(state.user));
      window.localStorage.setItem('auth', JSON.stringify(state.auth));
    },
    SAVE_PROJECTS(state, projects) {
      state.projects = projects
    },
    SAVE_VIDEOS(state, videos) {
      state.videos = videos
    },
    SAVE_USER_PROJECTS(state, userprojects) {
      state.userprojects = userprojects
    },
    SAVE_USER_WALLET(state, wallet) {
      state.wallet = wallet;
    },
    SAVE_NOTIFICATIONS(state, notifications) {
      state.notifications = notifications
    },
    SAVE_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SAVE_MESSAGES(state, messages) {
      state.messages = messages
    },
    SAVE_BIDS(state, bids) {
      state.bids = bids
    },
    SAVE_INVEST(state, investings) {
      state.investings = investings
    },
    SAVE_STAT(state, stat) {
      state.stat = stat
    },
    SAVE_WITHDRAWS(state, withdraws) {
      state.withdraws = withdraws
    },
    SAVE_HISTORY(state, history) {
      state.history = history
    },
    SAVE_SETUP(state, setup) {
      state.setup = setup
    },
    SAVE_LOCALE(state, locale) {
      state.locale = locale
      window.localStorage.setItem('locale', JSON.stringify(state.locale));
    },
    SHOW_REGISTER(state, showRegister) {
      state.showRegister = showRegister
    },
    SHOW_LOGIN(state, showLogin) {
      state.showLogin = showLogin
    },
    SHOW_PROJECT(state, showProject) {
      state.showProject = showProject
    },
    SHOW_PAYOUT(state, showPayout) {
      state.showPayout = showPayout
    },
    SHOW_THANKS(state, showThanks) {
      state.showThanks = showThanks
    },
    SHOW_WRONG(state, showWrong) {
      state.showWrong = showWrong
    },
    SAVE_PASSPORT_1(state, passport1) {
      state.passport_1 = passport1
    },
    SAVE_PASSPORT_2(state, passport2) {
      state.passport_2 = passport2
    },
    SAVE_PASSPORT_3(state, passport3) {
      state.passport_3 = passport3
    },
    IS_MOBILE(state, isMobile) {
      state.isMobile = isMobile
    },
    IS_LOADING(state, isLoading) {
      state.isLoading = isLoading
    },
    IS_LAST(state, last) {
      state.last = last
    },
    IS_FIRST(state, first) {
      state.first = first
    },
    IS_SEARCH(state, isSearch) {
      state.isSearch = isSearch
    },
    IS_EMAIL(state, isEmailVerify) {
      state.isEmailVerify = isEmailVerify
    },
    IS_MAIL_SENT(state, isMailSent) {
      state.isMailSent = isMailSent
    },
    IS_PHONE(state, isPhoneVerify) {
      state.isPhoneVerify = isPhoneVerify
    },
    IS_RESET(state, isReset) {
      state.isReset = isReset
    },
    IS_PLAYER(state,isPlayer){
      state.isPlayer = isPlayer
    },
    saveRateBTC(state, rateBTC){
      state.rateBTC = rateBTC
    },
    SET_CURRENT_PRODUCT(state, currentProduct){
      state.currentProduct = currentProduct
    },
    CURRENT_MODAL_PROJECT(state, currentUserProject){
      state.currentUserProject = currentUserProject
    },
    SET_DROPDOWN_LANG(state,arg){
      state.showLangs = arg
    },
    SET_DROPDOWN_USER(state,arg){
      state.showUserNav = arg
    },
    SET_IP(state,ip){
      state.user_ip = ip
    },
    SET_MSG_COUNTER(state,counter){
      state.msg_counter = counter
    }
  },
  actions: {
    getUserNots({commit,state},id){
      let options = {
        url:`${"notifications/user/" + state.user.id}`,
        method:'get'
      }

      Vue.axios(options)
      .then(res=>commit('SAVE_NOTIFICATIONS', res.data))
    },
    getUserMsgsCount({commit},id){
      let options = {
        url:`${"msg/user/count/" + id + '/1'}`,
        method:'get'
      }

      Vue.axios(options)
      .then(res=>commit('SET_MSG_COUNTER', res.data))
    },  
    getUserMsgs({commit},id){
      let options = {
        url:`${"chat/" + id}`,
        method:'get'
      }

      Vue.axios(options)
      .then(res=>commit('SAVE_MESSAGES', res.data))
    },
    getUserIP({commit}){
      let options = {
        url: 'https://ipinfo.io/?token=ae4719bcd65f8b',
        method:'get'
      }
      Vue.axios(options)
      .then(res=>{
        commit('SET_IP', res.data)
      })
      .catch(err=>{
        throw new Error(`We get an error! ${err}`);
      })
    },
    reloadUserState({commit}, data){
        data.forEach(i=>{
          Vue.axios({
            url: i.endpoint,
            method:i.method
          })
          .then(res=>{
            console.log(res.data)
            commit(i.state, res.data)})
          .catch(err => console.error(err))
        })
    
    },
    getUser({ commit }) {
      Vue.axios.post(USER)
        .then(res => {
          commit('SAVE_USER', res.data)
        })
        .catch(err => {
          console.log(err)
          throw new Error(`We get an error! ${err}`);
        })
    },
    getProjects({ commit }) {
      Vue.axios.post(PROJECTS)
        .then(res => {
          commit('SAVE_PROJECTS', res.data)
        })
        .catch(err => {
          console.log(err)
          throw new Error(`We get an error! ${err}`);
        })
    },

  },
  modules: {
  },
  plugins: [createPersistedState()]
})
