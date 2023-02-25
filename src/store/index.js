import { createStore } from 'vuex'

export default createStore({
  state: {
    notes: [
      {
        id: 1,
        title: 'List for day tasks',
        todos: [
          {
            id: 1,
            task: 'Brush teeth',
            checked: true,
          },
          {
            id: 2,
            task: 'Go shopping',
            checked: false,
          },
          {
            id: 3,
            task: 'Do laundry',
            checked: false,
          },
          {
            id: 4,
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
            id: 1,
            task: 'Learn English',
            checked: false,
          },
          {
            id: 2,
            task: 'Go workout',
            checked: false,
          },
          {
            id: 3,
            task: 'Have a cold bath',
            checked: false,
          }
        ]
      },
    ]
  },
  getters: {
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes
    },
  },
  actions: {
  },
  modules: {
  }
})
