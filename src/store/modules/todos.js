const state = {
  todos: [],
};

const getters = {
  allTodos(state) {
    return state.todos;
  },
};

const actions = {
  addTodo({ commit }, title) {
    commit('AddTodo', title);
  },
  removeTodo({ commit }, id) {
    commit('RemoveTodo', id);
  },
};

const mutations = {
  AddTodo: (state, todo) => {
    let tod = {
      id: Math.random(),
      title: todo,
    };
    state.todos = [tod, ...state.todos];
  },
  RemoveTodo: (state, id) => {
    state.todos = state.todos.filter((tod) => tod.id !== id);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
