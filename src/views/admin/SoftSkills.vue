<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="row">
                <div class="col-12">
                    <ul>
                        <li v-for="(item, i) in skills" :key="i">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import Title from './Title'

export default {
    name: 'SoftSkills',
    data() {
        return {
            title: "Habilidades blandas",
            skills: [
                'CI/CD',
                'Desarrollador web',
                'Scrum y XP',
                'Empatía',
                'Trabajo en equipo',
                'Pasión por aprender',
            ],
        }
    },
    components: {
        Title,
    },
}
</script>