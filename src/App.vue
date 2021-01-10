<!--
 * @Author: 黄灿民
 * @Date: 2021-01-06 18:55:14
 * @LastEditTime: 2021-01-10 15:23:31
 * @LastEditors: 黄灿民
 * @Description: 
 * @FilePath: \vue3-todolist\src\App.vue
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />-->
  <!-- <test />  -->
  <todo-list />
</template>

<script>
import Test from './components/test/Test.vue';
import TodoList from './components/todo/TodoList.vue';
import "./assets/css/mixin.scss";
export default {
  name: 'App',
  components: {
    Test,TodoList
  }
}
</script>
