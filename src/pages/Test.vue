<script setup>

import {watch,ref} from 'vue';
const fname = ref('');
watch(fname,(newvalue , oldvalue)=> {
 console.log(`my new value is: ${newvalue} and my old value is ${oldvalue}`)
},{immediate:true})

</script>

<template>
<div class="container">
    <label for="fname">Fname:</label>
    <input type="text" v-model="fname">
    <p>{{ fname }}</p>
</div>
</template>