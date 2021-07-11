<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>

            <div class="row" v-for="(value, index) in education" :key="index">
                <div class="row">
                    <span class="col-2">{{ moment(value.range.end, 'DD-MM-YYYY').format('DD/MM/YYYY') }}</span>
                    <span class="col-2">{{ moment(value.range.start, 'DD-MM-YYYY').format('DD/MM/YYYY') }}</span>
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
            title: "Education",
            education: [
                {
                    range: {
                        start: '06-07-2020',
                        end: '30-07-2020',
                    },
                    title: 'Informatics Engineer',
                    description: 'IUTAB University. Learn the basics of technology.',
                },
                {
                    range: {
                        start: '12-07-2020',
                        end: '17-07-2020',
                    },
                    title: 'Curso Udemy - Laravel',
                    description: 'Laravel para procitos xD.',
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