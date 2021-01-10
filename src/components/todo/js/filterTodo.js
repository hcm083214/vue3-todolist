import { ref, watchEffect } from "vue";
import { saveItem, getItem, STORAGE_KEY } from "./serve";
/*
 * @Author: 黄灿民
 * @Date: 2021-01-09 14:30:05
 * @LastEditTime: 2021-01-10 13:25:10
 * @LastEditors: 黄灿民
 * @Description: 
 * @FilePath: \vue3-todolist\src\components\todo\js\filterTodo.js
 */
export default function filterTodoFun(todolist) {
    let activeRef = ref('all');
    const todolistFilter = ref(null);
    const todolistCompleted = ref(null)
    watchEffect(() => {
        todolistFilter.value = todolist.value.filter((item) => {
            if (activeRef.value == 'all') {
                return item
            } else if (activeRef.value == 'active') {
                return item.completed === false
            } else if (activeRef.value == 'completed') {
                return item.completed === true
            }
        });
        todolistCompleted.value = todolist.value.filter(item => item.completed === true)
    });
    const changeActiveStatus = (name) => {
        activeRef.value = name;
    }
    const deleteCompletedTodos = () => {
        todolistFilter.value = todolist.value.filter(item => item.completed === false);
        todolist.value = todolistFilter.value;
    }
    return {
        todolistCompleted,
        activeRef,
        todolistFilter,
        changeActiveStatus,
        deleteCompletedTodos
    }
}
