<!--
 * @Author: 黄灿民
 * @Date: 2021-01-08 00:28:42
 * @LastEditTime: 2021-01-10 15:52:55
 * @LastEditors: 黄灿民
 * @Description: 
 * @FilePath: \vue3-todolist\src\components\todo\TodoList.vue
-->
<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus=""
        autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodoRef"
        @keyup.enter="addTodo"
      />
    </header>
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allSelected"/>
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          :class="[
            'todo',
            { completed: todos.completed },
            { editing: isEditing == todos.id },
          ]"
          v-for="todos in todolistFilter"
          :key="todos.key"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todos.completed" />
            <label @dblclick="editingHandle(todos)">{{ todos.value }}</label>
            <button class="destroy"></button>
          </div>
          <input
            class="edit"
            type="text"
            v-model="todos.value"
            @blur="doneEdit"
            @keyup.enter="doneEdit"
            @keyup.esc ="doneEdit"
          />
        </li>
      </ul>
    </section>
    <footer class="footer" ref="aaa">
      <span class="todo-count">
        <strong>{{ todolistFilter.length - todolistCompleted.length }}</strong>
        <span>items left</span>
      </span>
      <ul class="filters">
        <li>
          <a
            href="#/all"
            :class="{ selected: activeRef === 'all' }"
            @click="changeActiveStatus('all')"
            >All</a
          >
        </li>
        <li>
          <a
            href="#/active"
            :class="{ selected: activeRef === 'active' }"
            @click="changeActiveStatus('active')"
            >Active</a
          >
        </li>
        <li>
          <a
            href="#/completed"
            :class="{ selected: activeRef === 'completed' }"
            @click="changeActiveStatus('completed')"
            >Completed</a
          >
        </li>
      </ul>
      <button
        class="clear-completed"
        v-show="todolistCompleted.length"
        @click="deleteCompletedTodos"
      >
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import { ref, watchEffect } from "vue";
import "./index.css";
import addTodoFun from "./js/addTodo.js";
import filterTodoFun from "./js/filterTodo.js";
import editingTodosFun from "./js/editingTodo.js";
import { saveItem, getItem, STORAGE_KEY } from "./js/serve";
export default {
  name: "TodoList",
  setup() {
    const todolist = ref(getItem(STORAGE_KEY));
    
    watchEffect(() => {
      saveItem(todolist.value);
    });
    return {
      todolist,
      ...addTodoFun(todolist),
      ...filterTodoFun(todolist),
      ...editingTodosFun(todolist),
    };
  },
};
</script>

<style>
</style>