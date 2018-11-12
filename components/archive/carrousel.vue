<template>
  <div class="carrousel">
    <transition name="module" mode="out-in">
      <div class="swiper" v-swiper:swiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide item" v-for="(article, index) in article" :key="index">
            <div class="content">
              <img :src="article.thumb" :alt="article.title">
              <nuxt-link to="`" class="title">
                <span>{{ article.title }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 3500,
            disableOnInteraction: false
          },
          pagination: {
            clickable: true,
            el: '.swiper-pagination'
          },
          setWrapperSize: true,
          autoHeight: true,
          mousewheel: true,
          observeParents: true,
          grabCursor: true,
          preloadImages: false,
          lazy: true
        }
      }
    },
    props: {
      article: {
        type: Array
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .carrousel {
    height: 15em;
    margin-bottom: 1em;
    position: relative;
    overflow: hidden;
    background-color: $module-bg;

    > .swiper {

      .item {

        > .content {
          width: 100%;
          height: 15em;
          position: relative;
          overflow: hidden;

          > img {
            width: 100%;
            height: 100%; 
            display: flex;
            @include css3-prefix(transform, rotate(0deg) scale(1));
            @include css3-prefix(transition, transform 1s);

            &:hover {
              @include css3-prefix(transform, rotate(2deg) scale(1.1));
            }
          }

          > .title {
            position: absolute;
            top: 1.5rem;
            right: 2rem;
            color: $link-color;
            margin: 0;
            padding: 0 .6em;
            height: 2em;
            line-height: 2em;
            font-size: 1em;
            font-weight: bold;
            border-radius: 1px;
            letter-spacing: .3px;
            -webkit-background-clip: text;
            background: linear-gradient(to right, transparent, $module-hover-bg-opacity-3, $module-hover-bg, $module-bg);

            &:hover {
              color: $text-darken;
              background-color: $module-hover-bg-opacity-9;
            }
          }
        }
      }
    }

    &.mobile {
      min-height: 8rem;
      height: auto;

      > .swiper {

        .item {

          > .content {
            min-height: 8rem;
            height: auto;

            > .title {
              max-width: 75%;
              @include text-overflow;
            }
          }
        }
      }
    }
  }
</style>
