<template>
  <div class="index-home">
    <!-- <Tag :navList="navList"></Tag> -->
    <carrousel :article="article"></carrousel>
    <!-- <latest-article :article="article"></latest-article> -->
    <article-list :article="article" @loadmore="loadmoreArticle"></article-list>
  </div>
</template>

<script>
import {Tag,LatestArticle,articleList,Carrousel} from "../components/archive"
export default {
  data () {
    return {
      navList:[{
        navName:"开发纪要",
        link:"/category/code",
      }],
      article:[{
        title:"Git 原理入门",
        keywords:["Git","工作"],
        description:"Seven times have I despised my soul:The first time when I saw her being meek that she might attain height.The second time when I saw her limping before the crippled.The third time when she was given to choose between the hard and the easy, and she chose the easy......",
        thumb:"/images/demo.png",
        meta:{
          views:"121",
          comments:"1",
          likes:2
        },
        category:[{
          name:"code"
        },{
          name:"think"
        }],
        tag:[{
          name:"code"
        },{
          name:"think"
        }]
      }]
    }
  },
  components: {
    articleList,
    Carrousel
  },
  methods: {
    loadmoreArticle(){

    }
  }
}
</script>

<style scoped>

</style>
