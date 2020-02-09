<template>
    <div>
      <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
      >
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item><img src="https://img.yzcdn.cn/vant/apple-1.jpg"></van-swipe-item>
          <van-swipe-item><img src="https://img.yzcdn.cn/vant/apple-2.jpg"></van-swipe-item>
          <van-swipe-item><img src="https://img.yzcdn.cn/vant/apple-1.jpg"></van-swipe-item>
          <van-swipe-item><img src="https://img.yzcdn.cn/vant/apple-2.jpg"></van-swipe-item>
        </van-swipe>
        <love v-for="(item,index) in newslist" :item='item' :key="index"/>
      </van-pull-refresh>
      <!-- {{newslist}} -->
    </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import love from '../../components/Love.vue'
export default {
  data () {
    return {
      isLoading: false,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  mounted () {
    this.newSave({ index: 1, code: 0 })
  },
  methods: {
    ...mapActions(['newSave']),
    onRefresh () {
      console.log(this.newslist.length)
      let array = { index: this.newslist.length, code: 1 }
      // console.log(array)
      this.newSave(array) // 1为刷新
      this.$nextTick(() => {
        setTimeout(() => {
          this.isLoading = false
        }, 500)
      })
    }
  },
  components: {
    love
  },
  computed: {
    ...mapGetters(['newslist'])
  }
}
</script>
<style lang="scss" scoped>
  img{
    width:100%;
    height: 200px;
  }
  .cell{
    padding:0;
  }
</style>
