<template>
    <table class="table table-striped">
        <tbody>
            <tr v-for="dump in dumps" v-bind:key="dump.id">
                <td> {{ dump.application }} </td> 
                <td> {{ dump.host }} </td>
                <td> {{ dump.uploaded }} </td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ThreaddumpHeader } from '@/store/models'
import dumps from '@/store/modules/dumps'

@Component
export default class ThreaddumpList extends Vue {
    get dumps(): ThreaddumpHeader[] {
        return dumps.dumps;
    }
}
</script>