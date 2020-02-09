<template>
    <div class="personal">
      <div class="key" :key="getuser.id" v-if="getuser.id">
        <div class="personal_title">
          <div class="image">
            <van-image
              round
              width="80"
              height="80"
              lazy-load
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <div class="name">
            <p>念</p>
            <span>ID:nian9832</span>
          </div>
          <div class="i">
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="hobby">
          <div class="focus">
            <div class="num">4</div>
            <div class="name">关注</div>
          </div>
          <div class="fans">
            <div class="num">0</div>
            <div class="name">粉丝</div>
          </div>
          <div class="recommended">
            <div class="num">7</div>
            <div class="name">推荐</div>
          </div>
        </div>
        <div class="iconList">
          <div class="like">
            <div class="like_1">
              <div class="like_2">
                <van-icon class="icon" name="like-o" />
                <div>收到的喜欢</div>
              </div>
            </div>
          </div>
          <div class="like">
            <div class="like_1">
              <div class="like_2">
                <van-icon class="icon" name="chat-o" />
                <div>评论</div>
              </div>
            </div>
          </div>
          <div class="like">
            <div class="like_1">
              <div class="like_2">
                <van-icon class="icon" name="friends-o" />
                <div>聊天</div>
              </div>
            </div>
          </div>
          <div class="like">
            <div class="like_1">
              <div class="like_2">
                <van-icon class="icon" name="volume-o" />
                <div>通知</div>
              </div>
            </div>
          </div>
        </div>
        <van-collapse class="collapse" v-model="activeName" accordion>
          <van-collapse-item title="我的收藏" name="1">内容</van-collapse-item>
          <van-collapse-item title="达人认证" name="2">内容</van-collapse-item>
          <van-collapse-item title="设置" name="3"><van-button @click.prevent="logOut" square type="danger">退出登录</van-button></van-collapse-item>
        </van-collapse>
      </div>
      <LoR v-else></LoR>
    </div>
</template>

<script>
import LoR from './personal/LoR.vue'
import {
  mapGetters
} from 'vuex'
import Vue from 'vue'
import { Lazyload } from 'vant'
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true
})
export default {
  data () {
    return {
      activeName: '1'
    }
  },
  components: {
    LoR
  },
  created () {
    let user = 'user'
    if (sessionStorage.getItem(user)) {
      this.$store.dispatch('addUser', JSON.parse(sessionStorage.getItem(user)))
      // console.log([JSON.parse(sessionStorage.getItem(user))][0].id)
      // console.log(this.$store.state.user)
      // console.log(this.getuser.id)
    }
  },
  computed: {
    ...mapGetters(['getuser'])
  },
  methods: {
    logOut () {
      // console.log('1')
      this.$store.dispatch('addUser', '')
      sessionStorage.removeItem('user')
    }
  }
}
</script>
<style lang="scss">
.personal{
  display:flex;
  height:100%;
  // justify-content:center;
  align-items:center;
  flex-direction:column;
  .key{
    width:100%;
  }
  .personal_title{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:8px;
    .image{
      flex:2;
      // background:red;
    }
    .name{
      padding-left:7px;
      text-align:left;
      flex:5;
      font-size:12px;
      color:#bbb;
      // background:blue;
      p{
        font-size:18px;
        margin:0;
        color:#000;
      }
    }
    .i{
      flex:1;
      font-size:25px;
      color:#bbb;
    }
  }
  .hobby{
    margin-top:1%;
    margin-bottom:2%;
    display:flex;
    width:100%;
    align-items:center;
    justify-content:space-around;
    .focus{
      flex:1;
    }
    .fans{
      flex:1;
    }
    .recommended{
      flex:1;
    }
  }
  .iconList{
    box-shadow: 1px 1px 5px 1px #ddd;
    padding:8px;
    margin:2%;
    width:92%;
    display:flex;
    justify-content:center;
    align-items:center;
    .like{
      font-size:10px;
      flex:1;
      text-align:center;
      .like_1{
        // background-color:red;
        .icon{
          padding:8px;
          background-color:red;
          border-radius:50%;
          font-size:18px;
          color:#fff;
        }
      }
    }
  }
  .collapse{
    margin-top:10px;
    width:100%;
    display:flex;
    flex-direction:column;
  }
}
</style>
