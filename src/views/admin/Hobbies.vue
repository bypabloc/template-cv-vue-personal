<template>
    <div class="">
        <div :class="' theme-'+[theme]+'-800 p-2'">
            <div :class="''">
                <h5 class="">
                    <Title :text="title"/>
                </h5>
                <ul>
                    <li v-for="(item, i) in hobbies" :key="i" :class="'m-1 btn theme-'+[theme]+'-100'">
                        <i :class="[item.icon]+''" style="font-size: 1rem;"></i>
                        {{ item.text }}
                    </li>
                </ul>
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
    components: {
        Title,
    },
}
</script>
