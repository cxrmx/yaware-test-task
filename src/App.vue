<template>
  <nav>
    <router-link to="/">Main</router-link> |
    <router-link to="/change-note">ChangeNote</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
    data() {
        return {
            notes: [
                {
                    id: 1,
                    title: 'List for day tasks',
                    todos: [
                        {
                            task: 'Brush teeth',
                            checked: true,
                        },
                        {
                            task: 'Go shopping',
                            checked: false,
                        },
                        {
                            task: 'Do laundry',
                            checked: false,
                        },
                        {
                            task: 'Throw out the trash',
                            checked: true,
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'Weekly tasks',
                    todos: [
                        {
                            task: 'Learn English',
                            checked: false,
                        },
                        {
                            task: 'Go workout',
                            checked: false,
                        },
                        {
                            task: 'Have a cold bath',
                            checked: false,
                        }
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss">

</style>
