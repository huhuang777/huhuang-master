<template>
  <div class="page" :class="{ mobile: mobileLayout }">
    <div class="detail">
      <div class="content">
        <div class="about">
          <div class="about-all">
            <div class="about-me">
              <div class="desc">
                <p class="item">
                  <i class="iconfont icon-user"></i>
                  <!-- <span v-if="langIsEn"><span class="first-letter">I</span>'m Troye.</span> -->
                  <span>
                    <span class="first-letter">我</span>
                    <span>，JS栈开发，</span>
                    <strong>95后小鲜肉代表人物</strong></span>
                </p>
                <p class="item">
                  <i class="iconfont icon-music"></i>
                  <nuxt-link to="">R&B, Soul, Rock, Alternative rock.</nuxt-link>
                </p>
                <p class="item">
                  <i class="iconfont icon-like"></i>
                  <!-- <span v-if="langIsEn">music.</span> -->
                  <span>
                    <strong>音乐、纪录片、地理、历史、Coding、游戏（文明、LOL）、美剧、微观世界</strong>
                  </span>
                </p>
                <p class="item">
                  <i class="iconfont icon-coffee"></i>
                  <span class="accounts">
                    <span>
                      <a href="https://github.com/huhuang777"
                         target="_blank"
                         class="github"
                         rel="external nofollow noopenter">
                        <i class="iconfont icon-github"></i>
                      </a>
                      <a href="mailto:huhuang777@foxmail.com"
                         target="_blank"
                         class="mail"
                         rel="external nofollow noopenter">
                        <i class="iconfont icon-mail"></i>
                      </a>
                      <a href="https://juejin.im/user/5b4d99d8e51d4518ef2cd3fe"
                         target="_blank"
                         class="juejin"
                         rel="external nofollow noopenter">
                        <i class="iconfont icon-juejin"></i>
                      </a>
                      <a href="https://www.zhihu.com/people/hu-huang-71-42/activities"
                         target="_blank"
                         class="zhihu"
                         rel="external nofollow noopenter">
                        <i class="iconfont icon-zhihu"></i>
                      </a>
                      <a href="https://space.bilibili.com/39149131/#/video"
                         target="_blank"
                         class="bilibili"
                         rel="external nofollow noopenter">
                        <i class="iconfont icon-bilibili-copy"></i>
                      </a>
                    </span>
                    <span v-if="!mobileLayout">
                      <a href="https://www.quora.com/profile/Troye-Hu"
                         target="_blank"
                         class="quora"
                         rel="external nofollow noopenter">
                        <i class="iconfont icon-quora"></i>
                      </a>
                      <a href="https://twitter.com/huhuang0220"
                         target="_blank"
                         class="twitter"
                         rel="external nofollow noopenter">
                        <i class="iconfont icon-twitter"></i>
                      </a>
                      <a href="https://www.facebook.com/troye.pingkman"
                         target="_blank"
                         class="facebook"
                         rel="external nofollow noopenter">
                        <i class="iconfont icon-facebook"></i>
                      </a>
                      <a href="https://www.instagram.com/troyehu/"
                         target="_blank"
                         class="instagram"
                         rel="external nofollow noopenter">
                        <i class="iconfont icon-instagram"></i>
                      </a>
                    </span>
                  </span>
                </p>
                <p class="item">
                  <i class="iconfont icon-code"></i>
                  <!-- <span class="skills" v-if="langIsEn">Talk is cheap. fuck me.</span> -->
                  <span>
                    <strong>Vue、React、NodeJS...</strong>
                  </span>
                </p>
              </div>
              <div class="gravatar">
                <div class="background be-2">
                  <img :src='cdnUrl+"/images/about-background-be-2.jpg"' alt="background" class="image">
                </div>
                <div class="background be-1">
                  <img :src='cdnUrl+"/images/about-background-be-1.jpg"' alt="background" class="image">
                </div>
                <div class="background star-1">
                  <img :src='cdnUrl+"/images/about-background-star-1.png"' alt="background-star" class="image">
                </div>
                <div class="background star-2">
                  <img :src='cdnUrl+"/images/about-background-star-2.png"' alt="background-star" class="image">
                </div>
                <img :src='cdnUrl+"/images/user.png"' class="avatar">
                <div class="desc">
                  <h2 class="name"><strong>TroyeHu</strong></h2>
                  <p class="skill">JS Stack Developer.</p>
                </div>
                <a class="followme" 
                   href="" 
                   @click.stop.prevent=""
                   v-if="!mobileLayout">{{'Friend me' }}</a>
                <div class="wechat" v-if="!mobileLayout"></div>
              </div>
            </div>
            <div class="links">
              <h2 class="title">Friends</h2>
              <div class="link-list">
                <div class="link-item" v-for="(link,index) in links" :key="index">
                  <a :href="link.site || 'javascript:;'">
                    <img class="avatar" :src="link.avatar" :alt="link.name">
                    <div class="info">
                      <div class="name">{{ link.name }}</div>
                      <div class="slogan">{{ link.slogan }}</div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="link-apply">
                <router-link to="/guestbook?from=about">申请友链</router-link>
              </div>
            </div>
            <div class="about-map" v-if="!mobileLayout">
              <iframe :src='cdnUrl+"/partials/map.html"' style="width: 100%; height: 236px;"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    head() {
      return {
        title: `${ '关于我' + ' | '}About`
      }
    },
    data () {
        return {
            langIsEn:false,
            gravatar:"",
            links:[{
              name:"友情链接",
              slogan:"slogan",
              avatar:this.cdnUrl+"/images/user.png"
            },{
              name:"友情链接",
              slogan:"slogan",
              avatar:this.cdnUrl+"/images/user.png"
            },{
              name:"友情链接",
              slogan:"slogan",
              avatar:this.cdnUrl+"/images/user.png"
            }]
        }
    },
    methods: {
    },
    computed: {
      mobileLayout() {
        return false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page {

    &.mobile {

      > .detail {
        margin: 0;

        > .content {

          > .about {

            > .about-all {

              > .about-me {
                flex-direction: column-reverse;

                > .gravatar {
                  width: 100%;
                  margin-bottom: 1rem;
                  flex-direction: row;
                  padding: 2rem 0;

                  > .background {
                    height: 100%;

                    &.star-1,
                    &.star-2 {

                      > .image {
                         width: 4rem;
                       }
                    }

                    > .image {
                      width: 200%;
                      height: auto;
                    }
                  }

                  > .avatar {
                    width: 25%;
                    margin-top: 0;
                    margin-left: 6%;
                  }

                  > .desc {
                    width: 50%;
                    margin-left: 5%;
                    text-align: left;
                    z-index: 1;
                    color: $white;

                    > .name,
                    > .skill {
                      margin: 1rem 0;
                    }
                  }

                  > .favorite {
                    margin: 1rem 0;
                    margin-bottom: 2rem;
                  }
                }

                > .desc {
                  width: 100%;
                  padding: 1em;
                  overflow: hidden;

                  > .item {
                    @include text-overflow();

                    > .iconfont {
                      margin-right: 1rem;
                    }

                    > .accounts {
                      bottom: auto;
                    }
                  }
                }
              }

              > .about-map {
                display: none;
              }

              > .about-project {
                height: auto;

                > .project-link {
                  height: auto;
                  padding-top: 1rem;
                  overflow: hidden;

                  > .title {
                    font-size: 2em;
                  }
                }
              }
            }
          }
        }
      }
    }

    > .detail {

      > .content {
        width: 100%;
        overflow:  hidden;

        > .about {

          .about-me {
            width: 100%;
            height: auto;
            margin-bottom: 1em;
            overflow: hidden;
            display: flex;
            justify-content: space-between;

            .gravatar {
              width: 25%;
              display: flex;
              align-items: center;
              flex-direction: column;
              position: relative;
              justify-content: flex-start;
              background-color: $module-bg;
              padding-bottom: 1rem;
              @keyframes aboutbg-be-1 {
                0% { transform: translate3d(0%, 0%, 0) }
                25% { transform: translate3d(-50%, -50%, 0) }
                50% { transform: translate3d(-50%, 0%, 0) }
                75% { transform: translate3d(0%, -50%, 0) }
                100% { transform: translate3d(0%, 0%, 0) }
              }

              @keyframes aboutbg-be-2 {
                0% { transform: translate3d(0%, 0%, 0) }
                25% { transform: translate3d(0%, -50%, 0) }
                50% { transform: translate3d(-20%, 0%, 0) }
                75% { transform: translate3d(-30%, -50%, 0) }
                100% { transform: translate3d(0%, 0%, 0) }
              }

              @keyframes aboutbg-star {
                0% { opacity: 1; }
                25% { opacity: .5; }
                50% { opacity: .8; }
                75% { opacity: .2; }
                100% { opacity: 1; }
              }

              > .background {
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                height: 36%;
                top: 0;
                right: 0;
                z-index: 0;
                overflow: hidden;

                &.be-1 {
                  opacity: .66;

                  > .image {
                    width: auto;
                    height: 200%;
                    animation: aboutbg-be-1 88s linear infinite;
                  }
                }

                &.be-2 {
                  opacity: 1;

                  > .image {
                    width: auto;
                    height: 200%;
                    animation: aboutbg-be-2 66s linear infinite;
                  }
                }

                &.star-1,
                &.star-2 {
                  width: auto;
                  height: auto;
                  right: 1rem;

                  > .image {
                    width: 5rem;
                    height: auto;
                    animation: aboutbg-star 6s linear infinite;
                  }
                }
              }

              &:hover {

                > .avatar {
                  @include css3-prefix(transform, rotate(360deg));
                }


                > .wechat {
                  visibility: visible;
                  opacity: .8;
                }
              }

              > .avatar {
                width: 40%;
                height: auto;
                z-index: 1;
                margin-top: 5rem;
                max-width: 100%;
                display: block;
                border-radius: 100%;
                border: .4rem solid $module-bg;
                box-sizing: content-box;
                @include css3-prefix(transition, transform 1s);
              }

              > .desc {
                text-align: center;

                > .skill {
                  margin-top: .466rem;
                }
              }

              > .followme {
                margin-top: 1.166rem;
                display: inline-block;
                color: $primary;
                border: 1px solid $primary;
                border-radius: 1px;
                width: 56%;
                height: 2.68rem;
                text-align: center;
                line-height: 2.46rem;
                &:hover {
                  color: $white;
                  background-color: $primary;
                }
              }

              > .wechat {
                opacity: 0;
                visibility: hidden;
                position: absolute;
                top: .6rem;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url('/images/wechat.png');
                background-size: contain;
                background-position: bottom;
                z-index: 9;
              }
            }

            > .desc {
              width: 73%;
              padding: 2em 3em;
              background-color: $module-bg;

              .item {
                line-height: 2.5em;
                min-height: 2.5em;

                &:first-child {

                  > span {
                    display: inline;

                    > .first-letter {
                      font-size: $font-size-h1;
                    }
                  }
                }

                &:last-child {
                  margin-bottom: 0;
                }

                > .iconfont {
                  width: 2rem;
                  font-size: 1.5rem;
                  text-align: center;
                  margin-right: 2rem;
                  display: inline-block;
                  color: rgba(191, 191, 191, 0.5);

                  &.icon-code {
                    color: black;
                  }

                  &.icon-like {
                    color: pink;
                  }

                  &.icon-coffee {
                    color: brown;
                  }

                  &.icon-friend {
                    color: green;
                  }
                }

                > .friends {

                  > a {
                    margin-right: 1em;
                    text-transform: capitalize;
                  }
                }

                > .accounts {

                  a {
                    margin-right: 1.35em;

                    > .iconfont {
                      font-size: 1.6rem;
                    }

                    &:hover {

                      &.github {
                        color: #24282d;
                      }

                      &.juejin {
                        color: #2b6df6;
                      }

                      &.zhihu {
                        color: #3582f7;
                      }

                      &.weibo {
                        color: #d53437;
                      }

                      &.youtube {
                        color: #ec3323;
                      }

                      &.bilibili {
                        color: #449fd1;
                      }

                      &.stackoverflow {
                        color: #e6863d;
                      }

                      &.algorithm {
                        color: #fea116;
                      }

                      &.quora {
                        color: #b92b27;
                      }

                      &.linkedin {
                        color: #478cc5;
                      }

                      &.twitter {
                        color: #499feb;
                      }

                      &.instagram {
                        color: #000;
                      }
                    }
                  }
                }
              }
            }
          }
          .links {
            padding: 16px;
            background-color: $module-bg;
            border-radius: 2px;
            margin-bottom: 16px;
            .title{
              margin-bottom: 16px;
              text-align: center;
            }
            .link-apply {
              margin:"";
              text-align:center
            }
        
            .link-list {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: flex-start;
              flex-wrap: wrap;
              .link-item{
                flex: 0 0 25%;
                width: 25%;
                padding: 8px;
                a{
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-start;
                  align-items: flex-start;
                  flex-wrap: nowrap;
                  padding: 12px;
                  background:$body-bg;
                  border-radius: 2px;
                  &:hover {
                    background:$module-hover-bg
                  }
                  .avatar{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin-right: 8px;
                  }
                  .info{
                    flex: 1 0;
                    height: 40px;
                    padding:2px 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    overflow: hidden;
                    .name{
                      font-size: 1.2rem; 
                      font-weight: 600;
                    }
                    .slogan {
                      @include text-overflow();
                    }
                  }
                }
              }
            }
          }
          .about-map {
            width: 100%;
            padding: .5em;
            margin-bottom: 1em;
            overflow: hidden;
            background-color: $module-bg;
            position: relative;

            /*
            &:hover {
              &:before {
                opacity: 1;
              }
            }

            &:before {
              content: 'Take me, Anywhere';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              line-height: 21rem;
              font-size: $font-size-h1 * 1.3;
              background-color: $module-hover-bg-darken-40;
              color: $white;
              font-weight: bold;
              text-align: center;
              opacity: 0;
              transition: opacity .2s;
            }
            */
          }

          .about-project {
            width: 100%;
            height: 16em;
            padding: .5em;
            overflow: hidden;
            background-color: $module-bg;

            .project-link {
              height: 15em;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;

              &:hover {
                background-color: $module-hover-bg;
              }

              .title {
                margin-bottom: .5em;
                font-size: 3em;
                text-transform: uppercase;
              }
            }
          }
        }
      }
    }
  }
</style>
