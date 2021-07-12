<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-12" v-for="(value, index) in skills" :key="index">
                    <div class="row ">
                        <i :class="[value.icon]+' col-2 theme-color-'+[theme]+'-800 p-2'" style="font-size: 2rem;"></i>
                        <div class="col-10">{{ value.text }}</div>
                    </div>
                    <div class="progress" style="height: 3px;">
                        <div :class="'progress-bar theme-bg-'+[theme]+'-800'" role="progressbar" 
                            :style="{
                                width: `${value.percentage}%`
                            }"
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import Title from './Title'

export default {
    name: 'Skills',
    data() {
        return {
            title: "Habilidades y experiencia",
            skills: [
                {
                    icon: 'fab fa-js',
                    text: 'JavaScript',
                    percentage: 75,
                    editing: false,
                },
                {
                    icon: 'fab fa-vuejs',
                    text: 'VueJS Framework',
                    percentage: 60,
                    editing: false,
                },
                {
                    icon: 'fab fa-php',
                    text: 'PHP',
                    percentage: 75,
                    editing: false,
                },
                {
                    icon: 'fab fa-laravel',
                    text: 'Laravel Framework',
                    percentage: 70,
                    editing: false,
                },
                {
                    icon: 'fab fa-git',
                    text: 'Git',
                    percentage: 75,
                    editing: false,
                },
                {
                    icon: 'fab fa-github',
                    text: 'GitHub',
                    percentage: 75,
                    editing: false,
                },
                {
                    icon: 'fab fa-ubuntu',
                    text: 'Ubuntu Server',
                    percentage: 60,
                    editing: false,
                },
                {
                    icon: 'fab fa-aws',
                    text: 'Amazon Web Services',
                    percentage: 40,
                    editing: false,
                },
                {
                    icon: 'fab fa-centos',
                    text: 'CentOS',
                    percentage: 30,
                    editing: false,
                },
                {
                    icon: 'fab fa-html5',
                    text: 'HTML 5',
                    percentage: 60,
                    editing: false,
                },
                {
                    icon: 'fab fa-css3',
                    text: 'CSS 3',
                    percentage: 20,
                    editing: false,
                },
                {
                    icon: 'fab fa-sass',
                    text: 'SASS',
                    percentage: 20,
                    editing: false,
                },
                {
                    icon: 'fas fa-fire',
                    text: 'Firebase',
                    percentage: 10,
                    editing: false,
                },
            ],
        }
    },
    components: {
        Title,
    },
}
</script>