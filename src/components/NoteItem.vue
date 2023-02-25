<template>
    <h2>Title: {{note.title}}</h2>
    <div v-if="isEditable">
        Editable
    </div>
    <div v-else>
        <todo-item v-for="todo in todosArray" :key="todo.id" :todo="todo" :isEditable="isEditable" />
    </div>
    <button @click="() => dialogVisible = true">Delete</button>

    <my-modal v-model:show="dialogVisible" :on-confirm="deleteNote">Are you sure that you want to delete this note?</my-modal>
</template>
<script>
import TodoItem from "@/components/TodoItem";
import MyModal from "@/components/MyModal";
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'NoteItem',
    components: {MyModal, TodoItem},
    props: {
        note: {
            type: Object,
            required: true,
        },
        isEditable: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        ...mapMutations({
            setNotes: 'setNotes',
        }),
        deleteNote() {
            this.setNotes(this.notes.filter(n => n.id !== this.note.id))
        }
    },
    computed: {
        ...mapState({
            notes: state => state.notes,
        }),
        todosArray() {
            return this.isEditable ? this.note.todos : this.note.todos.filter((todo, idx) => idx < 2)
        }
    }
}
</script>
<style>

</style>
