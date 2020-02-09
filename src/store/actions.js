import {
  getNewsList
} from '../api'
import { Toast } from 'vant'

export default {
  async newSave ({ commit }, object) {
    const result = await getNewsList(object.index || 1, object.code)
    console.log(result)
    // console.log(object)
    if (result.success_code === 200) {
      commit('news_list', { newslist: result, code: object.code })
    } else {
      if (object.code !== 1) {
        Toast(result.message)
      }
    }
  },
  addUser ({ commit }, user) {
    commit('add_user', { user })
  }
}
