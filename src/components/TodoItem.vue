<template>
    <div>
        <input type="checkbox" id="checkbox" :disabled="!isEditable" v-model="isChecked">
        <label for="checkbox">{{ todo.task }}</label>
    </div>

</template>
<script>
export default {
    name: 'TodoItem',
    props: {
        todo: {
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
            isChecked: this.todo.checked
        }
    }
}
</script>
<style>

</style>
