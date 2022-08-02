Vue.createApp({
  data() {
    return {
      filterMode: "1",
      currentSearch: "",
      currentFilter: "",
      activateAddButton: true,
      newTodoText: "",
      todos: [
        {
          description: "Milch kaufen",
          done: false,
        },
        {
          description: "aufräumen",
          done: false,
        },
        {
          description: "lernen",
          done: false,
        },
      ],
    };
  },
  computed: {
    searchFilter() {
      return this.todos
        .filter((todo) => {
          return this.filterMode === 1
            ? todo.description.startsWith(this.currentSearch)
            : todo.description
                .toLocaleLowerCase()
                .includes(this.currentSearch.toLocaleLowerCase());
        })
        .filter((todo) => {
          return todo.description.includes(this.currentSearch);
        })
        .filter((todo) => {
          return todo.description.startsWith(this.currentFilter);
        });
    },
  },
  /** Hilfe :( ich kann kein Code ohne Hilfe oder Vorlage schreiben :(
  filterDoneTodos(){
    return this.todos
    .filter((todo)=> {
        return this.filterMode === 2
        ? todo.done.true(this.currentFilter)
        :
})}*/

  methods: {
    addNewTodo() {
      this.todos.push({
        description: this.newTodoText,
        done: false,
      });
      this.newTodoText = "";
    },
    removeDoneTodos() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
  watch: {
    newTodoText(current) {
      if (current.length > 3) {
        if (this.activateAddButton !== false) {
          this.activateAddButton = false;
        }
      } else {
        if (this.activateAddButton === false) {
          this.activateAddButton = true;
        }
      }
    },
  },
}).mount("#app");
