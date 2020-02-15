import {
  getNewsList
} from '../api'
import { Toast } from 'vant'

export default {
  async newSave ({ commit }, object) {
    const result = await getNewsList(object.index || 1)
    // console.log(result)
    // console.log(object)
    if (result.success_code === 200) {
      commit('news_list', { newslist: result })
    } else {
      Toast(result.message)
    }
  },
  addUser ({ commit }, user) {
    commit('add_user', { user })
  }
}
