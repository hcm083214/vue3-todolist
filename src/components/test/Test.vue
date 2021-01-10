<!--
 * @Author: 黄灿民
 * @Date: 2021-01-07 23:43:56
 * @LastEditTime: 2021-01-10 15:22:53
 * @LastEditors: 黄灿民
 * @Description: 这是vue3的练习代码
 * @FilePath: \vue3-todolist\src\components\test\Test.vue
-->
<template>
  <div>
    <!-- <p>简单变量使用ref</p>
    <p>{{ count }}</p>
    <button @click="increase">{{ count }}</button>

    <p>对象使用reactive</p>
    <p>{{ obj.data }}</p>
    <button @click="minus">{{ obj.data }}</button> -->

    <p>元素ref</p>
    <p ref="des">这是一个带有ref属性的元素</p>

    <!-- <p>watchEffectTest</p>
    <input type="text" v-model="name" />
    <button @click="adds">价格{{ valueRef }}</button>

    <p>{{ name }}-{{ valueRef }}</p> -->
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from "vue";
function increaseFun() {
  let count = ref(0);
  // console.log(count);
  const increase = () => {
    count.value++;
  };
  return {
    count,
    increase,
  };
}
function minusFun() {
  const obj = reactive({
    data: 100,
  });
  // console.log("🚀 ~ file: Test.vue ~ line 27 ~ setup ~ obj", obj);
  const minus = () => {
    obj.data--;
  };
  return {
    obj,
    minus,
  };
}
function watchEffectTest() {
  let name = ref("df");
  let valueRef = ref(0);
  watchEffect(() => {
    console.log("触发watchEffect");
    console.log("🚀 ~ file: Test.vue ~ line 55 ~ watchEffectTest ~ name", name.value);
    console.log(valueRef.value)
  });
  const adds = () => {
    valueRef.value++;
  };
  return {
    name,
    adds,
    valueRef,
  };
}
export default {
  name: "Test",
  setup() {
    //   return中的数组会被返回到组件实例中
    const des = ref(null);
    console.log("🚀 ~ file: Test.vue ~ line 55 ~ setup ~ des", des)

    return {
      // ...increaseFun(),
      // ...minusFun(),
      des,
      ...watchEffectTest(),
    };
  },
};
</script>

<style>
</style>