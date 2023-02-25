<template>
    <div>
        <note-item v-for="note in $store.state.notes" :note="note" :key="note.id" :isEditable="isEditable" />
    </div>
</template>

<script>
import NoteItem from "@/components/NoteItem";
export default {
    name: 'NoteList',
    components: {NoteItem},
    props: {
        notes: {
            type: Array,
            required: true,
        },
        isEditable: {
            type: Boolean,
            required: true,
        }
    }
}
</script>

<style scoped>

</style>
