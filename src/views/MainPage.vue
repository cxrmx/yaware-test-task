<template>
    <div class="text-3xl font-bold">Main page</div>
    <note-list :isEditable="false" :notes="notes" />
</template>
<script>
import NoteList from "@/components/NoteList";
import {mapState} from "vuex";
export default {
    name: 'MainPage',
    components: {NoteList},
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            notes: state => state.notes,
        }),
    }
}
</script>
<style>

</style>
