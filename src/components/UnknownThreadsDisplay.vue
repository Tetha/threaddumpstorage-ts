<template>
    <div v-if="analysis" class="unknownThreadDisplay">
        <div>
            <span class=".h1 header">
                There are {{ analysis.UnknownThreads.length }} unknown threads.
            </span>
            <button class="btn btn-outline-primary" v-on:click="displayingThreads = !displayingThreads">
                <span class="oi" v-bind:class="{ 'oi-expand-down': !displayingThreads, 'oi-collapse-up': displayingThreads}"></span>
            </button>
        </div>

        <ul class="list-group threadNameList" v-show="displayingThreads">
            <li v-for="thread in analysis.UnknownThreads" :key="thread.id" class="list-group-item">
                {{ thread.Name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ThreadPoolAnalysis } from '@/store/models';
@Component
export default class UnknownThreadView extends Vue {
    public displayingThreads = false;
    @Prop() public analysis?: ThreadPoolAnalysis;
}
</script>
<style scoped="true">
.unknownThreadDisplay {
    border: 3px solid black;
}
</style>