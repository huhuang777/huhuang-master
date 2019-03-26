<template>
  <div class="error">
    <div class="error-content">
      <h1 class="error-code">{{ error.statusCode||404 }}</h1>
      <div class="error-wrapper-message">
        <h2 class="error-message">Sorry, the page you were looking for doesn’t exist.</h2>
      </div>
      <p class="error-link">
        <nuxt-link class="link" to="/">Go back to home page </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'empty',
    props: ['error'],
    mounted() {
      console.log(this.error);
    },
    beforeDestroy() {

    }
  }
</script>

<style lang="scss" scoped>
  .error {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    z-index: 999;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $module-bg;

    @keyframes error-item {
      0% {
        opacity: 0;
        transform: translate3d(0, -30%, 0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    > .error-content {

      > .error-code,
      > .error-link,
      > .error-wrapper-message {
        animation: error-item ease-out both .5s .3s;
      }

      > .error-code {
        text-transform: uppercase;
        font-size: 12rem;
        margin: 0;
      }

      > .error-wrapper-message {

        > .error-message {
          margin-top: 0;
        }
      }
    }
  }
</style>
