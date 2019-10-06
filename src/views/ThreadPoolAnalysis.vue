<template>
    <div class="analysishome">
        <UnknownThreadsDisplay :analysis="poolAnalysis"></UnknownThreadsDisplay>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import UnknownThreadsDisplay from '@/components/UnknownThreadsDisplay.vue';
import ThreadPoolAnalysisStore from '@/store/modules/poolanalysis.ts';

@Component({
    components: {
        UnknownThreadsDisplay,
    },
})
export default class ThreadPoolAnalysisView extends Vue {
    public get poolAnalysis() {
        return ThreadPoolAnalysisStore.pools[this.currentDumpId];
    }

    private get currentDumpId(): string {
        return this.$route.params.dumpId;
    }

    public async created() {
        ThreadPoolAnalysisStore.loadThreadPoolAnalysis(this.currentDumpId);
    }
}
</script>