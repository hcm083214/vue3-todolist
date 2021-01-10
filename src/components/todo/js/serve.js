/*
 * @Author: 黄灿民
 * @Date: 2021-01-08 21:56:26
 * @LastEditTime: 2021-01-09 14:41:37
 * @LastEditors: 黄灿民
 * @Description: 
 * @FilePath: \vue3-todolist\src\components\todo\js\serve.js
 */
export const STORAGE_KEY = 'todos-vuejs';
export function saveItem(todos){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(todos));
} 

export function getItem(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}
