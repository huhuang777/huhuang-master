<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <span>浙ICP备18052298号</span>
        <!-- <span> - </span> -->
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

        <!-- english -->
         <!-- chinese -->
        <span>
          <span>由&nbsp;</span>
          <nuxt-link to="">NodePress</nuxt-link>
          <span>、</span>
          <nuxt-link to="">Nuxt.js</nuxt-link>
          <span>&nbsp;和强作用力&nbsp;强力驱动&nbsp;</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <nuxt-link to="/about">关于我</nuxt-link>
          <span>&nbsp;</span>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'layout-footer',
    computed: {

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
        font-size: .9em;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
</style>
