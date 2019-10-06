import Vue from 'vue';
import { VuexModule, Module, getModule,  Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { ThreadPoolAnalysis } from '../models';
import { fetchThreadPools } from '../api';

@Module({
    dynamic: true,
    namespaced: true,
    name: 'threadpools',
    store,
})
class ThreadPoolAnalysisStore extends VuexModule {
    public pools: { [key: string]: ThreadPoolAnalysis } = {};

    @Mutation
    public storeAnalysis(data: { id: string, analysis: ThreadPoolAnalysis}) {
        Vue.set(this.pools, data.id, data.analysis);
    }

    @Action({ commit: 'storeAnalysis' })
    public async loadThreadPoolAnalysis(id: string) {
        const analysis = await fetchThreadPools(id);
        return {id, analysis};
    }
}

export default getModule(ThreadPoolAnalysisStore);
