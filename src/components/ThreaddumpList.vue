<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Dump</th>
                <th scope="col">Application</th>
                <th scope="col">Host</th>
                <th scope="col">Uploaded at</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dump in dumps" v-bind:key="dump.id">
                <th scope="row"> #{{dump.id}} </th>
                <td> {{ dump.application }} </td> 
                <td> {{ dump.host }} </td>
                <td> {{ dump.uploaded }} </td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ThreaddumpHeader } from '@/store/models';
import dumps from '@/store/modules/dumps';

@Component
export default class ThreaddumpList extends Vue {
    get dumps(): ThreaddumpHeader[] {
        return dumps.dumps;
    }
}
</script>