import { VuexModule, Module, getModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
import { ThreaddumpHeader } from '../models';
import { fetchThreadudmpHeaders } from '../api';
@Module({
    dynamic: true,
    namespaced: true,
    name: 'dumps',
    store,
})
class ThreaddumpHeaderListStore extends VuexModule {
    public dumps: ThreaddumpHeader[] = [];

    @MutationAction
    public async loadDumps() {
        const dumps = await fetchThreadudmpHeaders();
        return { dumps };
    }
}

export default getModule(ThreaddumpHeaderListStore);
