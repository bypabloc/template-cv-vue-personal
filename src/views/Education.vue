<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>

            <div class="row" v-for="(value, index) in education" :key="index">
                <span class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <strong>Desde:</strong> {{ value.range.start }}
                </span>
                <span class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <strong>Hasta:</strong> {{ value.range.end }}
                </span>
                <div class="col-12">
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
                        start: 'Desde el inicio de mi aprendizaje',
                    },
                    title: 'Cursos en Udemy y YouTube',
                    description: `
                        Varios cursos en línea que me han ayudado a incrementar mis
                        habilidades en el área. Ejemplo: JavaScript moderno, Nodejs con
                        Socket.io, Vue, AWS (EC2, RDS, S3, Route 53, SES, AutoScalling y LoadBalancer), Flutter, Dart, Laravel, php... Entre otros.
                    `,
                },
                {
                    range: {
                        end: 'Actualidad',
                        start: 'Desde el inicio de mi aprendizaje',
                    },
                    title: 'Libros',
                    description: `
                        Clean JavaScript: Aprende a aplicar Código Limpio, SOLID y Testing.

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