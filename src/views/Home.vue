<template>
  <div class="home">
    <ThreaddumpList></ThreaddumpList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ThreaddumpList from '@/components/ThreaddumpList.vue';
import ThreaddumpListStore from '@/store/modules/dumps.ts';
@Component({
  components: {
    ThreaddumpList,
  },
})
export default class Home extends Vue {
  public async created() {
    ThreaddumpListStore.loadDumps();
  }
}
</script>
