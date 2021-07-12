<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>

            <div class="row" v-for="(value, index) in education" :key="index">
                <div class="row">
                    <span class="col-2">{{ value.range.end }}</span>
                    <span class="col-2">{{ value.range.start }}</span>
                    <div class="col-8">
                        <p>
                            <strong>
                                {{ value.title }}
                            </strong>
                            <br>
                            <small>
                                {{ value.description }}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Title from './Title'

import moment from 'moment';
moment.locale('es');

export default {
    name: 'Education',
    data() {
        return {
            title: "Educación",
            education: [
                {
                    range: {
                        end: 'Actualidad',
                        start: 'Desde el inicio',
                    },
                    title: 'Curso Udemy y YouTube',
                    description: `
                        Varios cursos en línea que me han ayudado a incrementar mis
                        habilidades en el área. Ejemplo: JavaScript moderno, Nodejs con
                        Socket.io, Vue, Flutter, Dart, Laravel, php.
                    `,
                },
                {
                    range: {
                        end: '06-2016',
                        start: '02-2011',
                    },
                    title: 'Ingeniería de software',
                    description: 'Universidad UPTYAB. Aprendí todo lo necesario para emprender en el mundo de la informática.',
                },
            ],
            modelConfig: {
                type: 'string',
                mask: 'DD-MM-YYYY',
            },
            masks: {
                input: 'DD-MM-YYYY',
            },
            locale: 'es-ES',
        }
    },
    components: {
        Title,
    },
    methods:{
    },
    created(){
        this.moment = moment;
    },
    mounted() {
    },
}
</script>