<template>

    <div class="">
        <div :class="' theme-'+[theme]+'-800 p-2'">
            <h5 class="">
                <Title :text="title"/>
            </h5>
            <div class="row" v-for="(value, index) in list" :key="index">
                <div class="col-2">
                    <i :class="[value.icon]+' p-2'" style="font-size: 1rem;"></i>
                </div>
                
                <div class="col-10">
                    <p>
                        <small >
                            <a :class="'theme-'+[theme]+'-800'" :href="value.href" target="_blank"> {{ value.text }} </a>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import Title from './Title'

export default {
    name: 'downloadable',
    data() {
        return {
            title: "DESCARGABLES",
            list: [
                {
                    icon: 'fas fa-file-pdf',
                    text: 'CV PDF Español',
                    href: 'https://1drv.ms/b/s!AoZaJmtucTrag-gZYpBWTBOWXBBavQ?e=bzCPsl',
                },
                // {
                //     icon: 'fas fa-file-pdf',
                //     text: 'CV PDF English',
                //     href: 'https://1drv.ms/b/s!AoZaJmtucTrag4V3v0GaW1whkk0ilA?e=ZVA2JB',
                // },
                {
                    icon: 'fas fa-file-word',
                    text: 'CV Word Español',
                    href: 'https://1drv.ms/w/s!AoZaJmtucTrag4V6cDqu2Zp5wL6FUg?e=LtdXMh',
                },
                // {
                //     icon: 'fas fa-file-word',
                //     text: 'CV Word English',
                //     href: 'https://1drv.ms/w/s!AoZaJmtucTrag4V49HB4yMCef09nwA?e=o6LxZC',
                // },
            ],
            
        }
    },
    components: {
        Title,
    },
}
</script>