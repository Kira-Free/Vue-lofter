
export default {
  news_list (state, { newslist, code }) {
    // console.log(newslist)
    if (newslist) {
      if (typeof code === 'number') {
        if (code === 1) {
          state.news = [newslist]
        } if (code === 2) {
          state.news.push(newslist)
        } else {
          state.news = [newslist]
        }
      } else {
        state.news = [newslist]
      }
    }
  },
  add_user (state, { user }) {
    state.user = user
  }
}
