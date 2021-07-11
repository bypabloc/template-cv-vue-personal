<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="row">
                <div class="col-5 m-2" v-for="(value, index) in languages" :key="index">
                    <div class="">{{ value.text }}</div>
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
    name: 'languages',
    data() {
        return {
            title: "LANGUAGES",
            languages: [
                {
                    text: 'Spanish',
                    percentage: 100,
                },
                {
                    text: 'English',
                    percentage: 60,
                },
            ],
            
        }
    },
    props: {
    },
    components: {
        Title,
    },
}
</script>
