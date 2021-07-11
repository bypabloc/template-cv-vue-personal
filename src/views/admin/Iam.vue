<template>

    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="card-text">
                <div v-for="(value, index) in descriptions" :key="index">
                    <p v-html="value.text"></p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import Title from './Title'

export default {
    name: 'Proud',
    data() {
        return {
            title: "¿Quien soy?",
            descriptions: [
                {
                    text: `Soy un desarrollador nacido en Venezuela y CTO de <a href="https://dibal.pe">Dibal.pe</a>. Estoy interesado y capacitado en diferentes temas de tecnología de la información, incluida la programación, el desarrollo web y la seguridad informática y de redes.`,
                },
            ],
        }
    },
    components: {
        Title,
    },
    methods:{
    },
}
</script>