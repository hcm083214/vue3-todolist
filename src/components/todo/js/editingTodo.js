import { computed, ref } from "vue"

/*
 * @Author: 黄灿民
 * @Date: 2021-01-10 13:35:14
 * @LastEditTime: 2021-01-10 15:54:38
 * @LastEditors: 黄灿民
 * @Description: 
 * @FilePath: \vue3-todolist\src\components\todo\js\editingTodo.js
 */
export default function editingTodosFun(todolist) {
    let isEditing = ref(null);
    const editingHandle = (todos) => {
        isEditing.value = todos.id;
    }
    const doneEdit = () => {
        isEditing.value = null;
    }
    const allSelected = computed({
        get() {
            return todolist.value.filter(item => !item.completed).length == 0
        },
        set(isCompleted){
            todolist.value.forEach(item=>item.completed = isCompleted);
        }
    })
    return {
        isEditing,
        editingHandle,
        doneEdit,
        allSelected,
    }
}