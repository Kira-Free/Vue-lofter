
export default {
  news_list (state, { newslist }) {
    console.log(newslist)
    if (newslist) {
      state.news.push(newslist)
      console.log(state.news)
    } else {
      console.log('error')
    }
  },
  add_user (state, { user }) {
    state.user = user
  }
}
