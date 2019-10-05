<template>
    <div class="analysishome">
        <div v-if="poolAnalysis">
            There are {{ poolAnalysis.UnknownThreads.length }} unknown threads.
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ThreadPoolAnalysisStore from '@/store/modules/poolanalysis.ts';

@Component
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