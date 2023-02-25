<template>
    <div class="modal" v-if="show" @click="hideDialog">
        <div @click.stop class="modal__content">
            <slot></slot>
            <button @click="confirmChanges">Confirm changes</button>
            <button @click="hideDialog">Close</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyModal',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        onConfirm: {
            type: Function,
            default: () => {},
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        },
        confirmChanges() {
            this.onConfirm();
            this.hideDialog();
        }
    },
    computed: {

    }
}
</script>

<style scoped>
.modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    position: fixed;
    display: flex;
}
.modal__content {
    padding: 25px;
     margin: auto;
     background: white;

 }
</style>
