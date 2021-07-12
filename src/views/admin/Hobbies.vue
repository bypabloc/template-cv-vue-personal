<template>
    <div class="">
        <div :class="' theme-'+[theme]+'-800 p-2'">
            <div :class="''">
                <h5 class="">
                    <Title :text="title"/>
                </h5>
                <button type="button" :class="'chip m-1 btn theme-'+[theme]+'-100'" v-for="(value, index) in hobbies" :key="index">
                    <i :class="[value.icon]+''" style="font-size: 1rem;"></i>
                    {{ value.text }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import Title from './Title'

export default {
    name: 'hobbies',
    data() {
        return {
            title: "HOBBIES",
            hobbies: [
                {
                    icon: 'fas fa-route',
                    text: 'Salir de la zona de confort',
                },
                {
                    icon: 'fas fa-biohazard',
                    text: 'Retos',
                },
                {
                    icon: 'fas fa-leaf',
                    text: 'Naturaleza',
                },
                {
                    icon: 'fas fa-running',
                    text: 'Karate',
                },
                {
                    icon: 'fas fa-music',
                    text: 'Música',
                },
                {
                    icon: 'fas fa-bug',
                    text: '¡Hacer Bugs!',
                },
            ],
        }
    },
    props: {
    },
    components: {
        Title,
    },
    methods:{
        test: () => {
            return "#";
        }
    },
    created(){
    },
    mounted() {
        this.test();
    },
}
</script>

<style scope>
.chip {
    display: inline-block;
    padding: 0 25px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    border-radius: 25px;
    background-color: #f1f1f1;
}

.chip img {
    float: left;
    margin: 0 10px 0 -25px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
}
</style>