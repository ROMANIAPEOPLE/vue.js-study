  
import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    // 데이터
    state: {
        todos: [
              { id: 1, text: 'buy a car', checked: false},
              { id: 2, text: 'play game', checked: false},
            ]
    },
    // 데이터 바꿀때
    mutations: {

        ADD_TODO(state, value){
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            });
        },
        TOGGLE_TODO(state, {id,checked}){
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
              });
              state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId){
            const index = state.todos.findIndex(todo =>{
                return todo.id === todoId;
            });
            state.todos.splice(index,1);
        }
    },
    // 메서드
    actions: {
        getUsers({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                commit('SET_USERS', res.data);
            });
        },
        addTodo({ commit }, value) {
            setTimeout(function () {
                commit('ADD_TODO', value);
            }, 500);
        },
        toggleTodo({ commit }, payload) {
            setTimeout(function () {
                commit('TOGGLE_TODO', payload);
            }, 500);
        },
        deleteTodo({ commit }, todoId) {
            setTimeout(function () {
                commit('DELETE_TODO', todoId);
            }, 500);
        }
    },

    // 컴퓨티드
    getters: {

    }
})