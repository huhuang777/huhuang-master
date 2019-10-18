<template>
  <div class="articles">
    <div class="article-list">
      <transition name="module" mode="out-in">
        <transition-group name="fade" tag="div" v-if="article && article.length>0">
          <list-item
            :key="index"
            :article="item"
            @click.native="toDetail(item)"
            v-for="(item, index) in article"
          ></list-item>
        </transition-group>
      </transition>
    </div>
  </div>
</template>

<script>
import ListItem from './item.vue'
export default {
  data() {
    return {}
  },
  props: {
    article: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    mobileLayout() {
      return this.$store.state.option.mobileLayout
    }
  },
  components: {
    ListItem
  },
  methods: {
    toDetail(article) {
      if (this.mobileLayout) {
        this.$router.push(`/article/${article.id}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.articles {
}
</style>
