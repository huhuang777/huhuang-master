<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <nuxt-link to>
          <span @click="goBeiAn">浙ICP备18052298号</span>
        </nuxt-link>
        <!-- <span> - </span> -->
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

        <!-- english -->
        <!-- chinese -->
        <span>
          <span>由&nbsp;</span>
          <nuxt-link to>NodePress</nuxt-link>
          <span>、</span>
          <nuxt-link to>Nuxt.js</nuxt-link>
          <span>&nbsp;和强作用力&nbsp;强力驱动&nbsp;</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <nuxt-link to="/about">关于我</nuxt-link>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <nuxt-link to>
            <span @click="goGongAn">
              <img :src="cdnUrl+'/images/beian.png'" alt /> 浙公网安备 33010802010439号
            </span>
          </nuxt-link>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'layout-footer',
  computed: {},
  methods: {
    goBeiAn() {
      const href = 'http://beian.miit.gov.cn'
      window.open(href, '_blank')
    },
    goGongAn() {
      const href =
        'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802010439'
      window.open(href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  margin-top: 1em;
  background-color: $module-bg;
  // border-bottom: 2px solid $primary-opacity-5;

  .container {
    position: relative;

    .footer-content {
      padding: 1em;
      font-size: 0.9em;
      text-align: center;
      text-transform: uppercase;
    }
  }
}
</style>
