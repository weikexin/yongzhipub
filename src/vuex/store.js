import Vue from 'vue'
import Vuex from 'vuex'

import selected from './selectedPage'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedPage : selected.PAGE_HOME,
    captionState : {
      isShow : false
    }
  },

  mutations: {
    setCaptionShow(state, isShow){
      state.captionState.isShow = isShow
    },
    setCaption(state, caption){
      state.captionState.caption = caption
    },
    switchMenu (state, type) {
      // 变更状态
      // switch (type) {
      //   case config.TYPE_PROJECT:
      //     console.log('switch to itemsProject')
      //     state.menuItems = nav.itemsProject
      //     break
      //   case config.TYPE_DATABASE:
      //     console.log('switch to itemsDatabase')
      //     state.menuItems = nav.itemsDatabase
      //     break
      //   default:
      //     state.menuItems = nav.items
      // }
    }
  }
})

export default store
