<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{title2}}</p>
        <input type="text" v-model="input1"/>
        <button type="button" @click="">Get</button>
    </div>
</template>
<script>
export default {
 data() {
    return {
        title: "WE BELIEVE IN MUSIC",
        title2: "하이브(HYBE)는 “We believe in music”이라는 미션 아래 음악 산업의 비즈니스 모델을 혁신하는 기업",
        input1: "음악에 기반한 세계 최고의 엔터테인먼트"
    };
 },
 methods: {
    
 }
};
</script>