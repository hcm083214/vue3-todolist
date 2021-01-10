import { onMounted, ref, watchEffect } from "vue";
import { getItem, saveItem } from "./serve";

/*
 * @Author: 黄灿民
 * @Date: 2021-01-08 00:54:11
 * @LastEditTime: 2021-01-09 16:57:36
 * @LastEditors: 黄灿民
 * @Description: 
 * @FilePath: \vue3-todolist\src\components\todo\js\addTodo.js
 */
export default function addTodoFun(todolist) {
    let newTodoRef = ref('');
    const addTodo = () => {
        if (!newTodoRef.value) return;
        todolist.value.push({
            id: Date.now() + Math.random().toString(16).substr(2, 4),
            value: newTodoRef.value,
            completed: false
        })
        newTodoRef.value = ''
        // todolistFilter.value = getItem();
    };
    return {
        newTodoRef,
        addTodo
    }
}
