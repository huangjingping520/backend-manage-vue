<template>
  <div class="tabs">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      :closeable="tag.name !== 'home'"
      :effect="$router.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      size="small" 
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonTag',
  data (){

  },
  metheds: {
    changeMenu() {
      
    },
    handleClose() {

    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  }
}
</script>

<style>

</style>