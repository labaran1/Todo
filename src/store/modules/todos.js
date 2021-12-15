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
};

const mutations = {
  AddTodo: (state, todo) => {
    let tod = {
      id: Math.random(),
      title: todo,
    };
    state.todos = [tod, ...state.todos];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
