<template>
  <div class="airticle-recommend">
    <div class="size-box">
      <span>
        <airticle-recommend class="recommend" :article="article">
        </airticle-recommend>
        <airticle-recommend class="recommend"  :article="article">
        </airticle-recommend>
        <airticle-recommend class="recommend"  :article="article">
        </airticle-recommend>
        <airticle-recommend class="recommend"  :article="article">
        </airticle-recommend>
        <airticle-recommend class="recommend"  :article="article">
        </airticle-recommend>
        <airticle-recommend class="recommend"  :article="article">
        </airticle-recommend>
      </span>
    </div>
  </div>
</template>

<script>
import { airticleRecommend } from '../layout'
export default {
  data() {
    return {
      article: {
        title: '',
        //图
        thumb: ''
      }
    }
  },
  components: {
    airticleRecommend
  }
}
</script>

<style lang="scss" scoped>
.airticle-recommend {
  .size-box {
    display: flex;
    span{
      display: flex;
      flex-wrap: wrap;
      .recommend{
        display: flex;
        width: 15.5em;
        height: 15.5em;
        margin:0 2em 2em 0;
        background-color: white;
      }
    }
  }
}
</style>

