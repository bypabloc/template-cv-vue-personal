<template>

    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="row" v-for="(value, index) in prouds" :key="index">

                <div class="row col-12">
                    <div class="col-1">
                        <i :class="[value.icon]+' theme-color-'+[theme]+'-800 p-2'" style="font-size: 2rem;"></i>
                    </div>
                    <p class="col-11">
                        <strong>
                            {{ value.title }}
                        </strong>
                        <br/>
                        <small v-html="value.description">
                        </small>
                    </p>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

import { mapActions } from "vuex";
import Title from './Title'

export default {
    name: 'Proud',
    data() {
        return {
            title: "¿De que estoy orgulloso?",
            prouds: [
                {
                    icon: 'fas fa-fire',
                    title: 'De fundar una StartUp (AppInteli.com).',
                    description: 'Es un nuevo reto el cual quiero saber cuanto es mi potencial.',
                },
                {
                    icon: 'fas fa-chart-line',
                    title: 'De haber empezado con una StartUp desde cero hasta que sea autosostenible (Dibal.pe).',
                    description: 'Por haber sido el primer programador. <br/> Por haber luchado para hacerlo crecer. <br/> Por haber luchado contra la pandemia y no haberme dado por vencido con todos los contras que se nos presentaban. <br/> Por mi liderazgo en cada nuevo miembro del equipo.',
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'Haberme graduado como Ingeniero en Informática.',
                    description: 'El orgullo de haber superado una meta, de tantas, de mi vida.',
                }
            ],
        }
    },
    components: {
        Title,
    },
    methods:{
        ...mapActions([
            'fetchProuds',
            'saveProud',
            'updateProud',
            'editingProud',
            'remProud',
        ]),
        add() {
            const idx = this.proudsTemp.findIndex(e => {
                return e.editing==true
            });

            /*
            this.toast({
                icon: 'success',
                title: 'Signed in successfully'
            })
            */

            if(idx>-1){
                this.swalFire({
                    title: '',
                    text: 'Tiene un item que no ha completado',
                    type: 2,
                })
                return false;
            }

            const proud = {
                icon: '',
                title: '',
                description: '',
                idx: this.proudsTemp.length,
                editing: true,
            };

            this.proudsTemp = [ ...this.proudsTemp , proud];
        },
        save(i) {
            this.saveProud( { ...this.proudsTemp[i], idx: i } );
        },
        editing(id,status) {
            this.editingProud({id,status});
        },
        remove(id) {
            this.remProud(id);
        },
        drop: function(){
            const proudsOld = [...Object.values(this.prouds)];
            const proudsNews = this.proudsTemp;

            const prouds = proudsOld.reduce((old,curr) => {
                const itemIndex = proudsNews.findIndex(e => {
                    return e.id==curr.id
                });
                const item = proudsNews[itemIndex];
                if(itemIndex!=curr.idx){
                    return [...old, {
                        id: item.id,
                        idx: itemIndex,
                    }];
                }else{
                    return old;
                }
            },[]);

            console.clear()
            console.log('prouds',prouds);
            this.updateProud(prouds);
        },
    },
}
</script>