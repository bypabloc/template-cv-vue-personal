<template>

    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div>
                <div class="col-xs-12 col-sm-12 col-sm-offset-1">
                    <div class="timeline-container">
                        <div class="timeline-items">
                            <div v-for="(value, index) in list" :key="index">

                                <div class="timeline-item clearfix">

                                    <div class="timeline-info">
                                        <i :class="[value.icon]+' theme-color-'+[theme]+'-800 p-2'" style="font-size: 2rem;"></i>
                                        <br/>
                                        <span class="label label-info label-sm">{{ value.date }}</span>
                                    </div>

                                    <div class="widget-box pb-3 transparent">
                                        <div class="widget-header widget-header-small">
                                            <h5 class="widget-title smaller">
                                                <span v-html="value.title"></span>
                                            </h5>
                                        </div>

                                        <div class="widget-body">
                                            <div class="widget-main">
                                                <h6 class="widget-title smaller" v-if="value?.position">
                                                    Puesto: {{ value.position }}
                                                </h6>

                                                <div v-if="value?.status?.type">
                                                    Estado actual: 
                                                    <span
                                                        :class="[
                                                            value.status.type==1 ? 'text-warning ' : ' ',
                                                            value.status.type==2 ? 'text-danger ' : ' ',
                                                            value.status.type==3 ? 'text-success ' : ' ',
                                                            value.status.type==4 ? 'text-info ' : ' ',
                                                        ]
                                                        "
                                                    >
                                                        <span v-if="value.status.type == 1">
                                                            Detenido
                                                        </span>
                                                        <span v-else-if="value.status.type == 2">
                                                            Cancelado
                                                        </span>
                                                        <span v-else-if="value.status.type == 3">
                                                            Activo
                                                        </span>
                                                        <span v-else-if="value.status.type == 4">
                                                            Código abierto
                                                        </span>,
                                                    </span>
                                                    <span v-if="value?.status?.link">
                                                        <span v-html="value.status.link"></span>,
                                                    </span>
                                                    Equipo: 
                                                    <span>
                                                        {{ value.status.team }}
                                                        <span v-if="value.status.team > 1">
                                                            personas
                                                        </span>
                                                        <span v-else>
                                                            persona
                                                        </span>
                                                    </span>
                                                </div>

                                                <div v-html="value.description" class="pt-3"></div>

                                                <div v-if="value?.status?.type" class="pt-3">
                                                    <span
                                                        :class="[
                                                            value.status.type==1 ? 'text-warning ' : ' ',
                                                            value.status.type==2 ? 'text-danger ' : ' ',
                                                            value.status.type==3 ? 'text-success ' : ' ',
                                                            value.status.type==4 ? 'text-info ' : ' ',
                                                        ]"
                                                    >
                                                        <span v-if="value?.status?.reason?.title">
                                                            {{ value?.status?.reason?.title }}:
                                                        </span>
                                                    </span>
                                                    <span v-if="value?.status?.reason?.text">
                                                        {{ value?.status?.reason?.text }}
                                                    </span>
                                                </div>
                                                
                                                <div v-if="value?.skills?.length>0" class="pt-3">
                                                    Conocimientos obtenidos:
                                                    <ul>
                                                        <li v-for="(item, i) in value?.skills" :key="i">
                                                            {{ item }}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    name: 'Proud',
    data() {
        return {
            title: "Mi vida en pocas palabras",
            list: [
                {
                    date: 'Mayo 2021 - Noviembre 2021',
                    icon: 'fas fa-bolt',
                    status: {
                        type: 3,
                        team: 4,
                    },
                    position: 'Software engineer',
                    title: 'Sistema informático para: Rescatar comida y combatir el desperdicio de alimentos - <a href="https://www.goodmeal.app/" target="_blank">GoodMeal.app</a>.',
                    description: `Es una Startup que se encarga de combatir el desperdicio de alimentos a
                        través de la tecnología, donde empresas de alimentos crean una bolsa de
                        comida destinada para una venta económica de los productos que están
                        a punto de vencerse.
                        Mi trabajo allí fue desarrollar el onboarding de la web para los nuevos
                        sellers, aplicación de testing en el backend, mejora de parte del código
                        que existía, migración de interfaz antigua con "AdminLte" y "jQuery" a
                        plantillas echas en Figma, Vue 3 con composition API, vuex y enrutamiento
                        a SPA con vue router.
                        `,
                    skills: [
                        'Mejores practicas',
                        'Aplicación de mis mejores skills',
                    ],
                },
                {
                    date: '2021 - Actualidad',
                    icon: 'fas fa-bolt',
                    status: {
                        type: 3,
                        team: 2,
                    },
                    position: 'Software engineer',
                    title: 'Sistema informático para PYMEs - <a href="https://appinteli.com/" target="_blank">AppInteli.com</a>.',
                    description: `Paralelamente a mi trabajo formal actual, estoy desarrollando, con un colega, un sistema web para la gestión de ventas y todo lo que eso conlleva. Todavía está en una etapa muy joven, pero este proyecto es un nuevo desafío para mí.`,
                    skills: [
                        'Emprendimiento propio',
                    ],
                },
                {
                    date: '2021',
                    icon: 'fas fa-heart',
                    status: {
                        type: 4,
                        team: 1,
                        link: `
                            Disponible en mí GitHub el
                            <a href="https://github.com/bypabloc/map-events" target="_blank">Frontend</a> y el 
                            <a href="https://github.com/bypabloc/map-events-api" target="_blank">Backend</a>
                        `,
                    },
                    title: 'Código abierto de un mini mapa de eventos.',
                    description: `Map Events
                        <br/>
                        <a href="https://bypabloc-map-events.netlify.app/" target="_blank">Aplicación desplegada en Netlify</a>
                        <br/>
                        <a href="https://bypabloc-map-events-api.herokuapp.com/" target="_blank">Backend con documentación desplegado en Heroku</a>
                    `,
                    skills: [
                        'Realtime (websockets) con Socket.io',
                        'Practica en VueJS 3',
                        'Aprendizaje',
                    ],
                },
                {
                    date: '2021',
                    icon: 'fas fa-heart',
                    status: {
                        type: 4,
                        team: 1,
                        link: 'Disponible en mí <a href="https://github.com/bypabloc/template-cv-vue-personal" target="_blank">GitHub</a>',
                    },
                    title: 'Código abierto de este currículum.',
                    description: `Una plantilla de currículum basada en VueJS 3 y con Bootstrap 5 ¡La estas viendo ahora mismo!.`,
                    skills: [
                        'Compartir código',
                        'Conocimiento propio',
                    ],
                },
                {
                    date: '2021',
                    icon: 'fas fa-heart',
                    status: {
                        type: 4,
                        team: 1,
                        link: `
                            Disponible en mí GitHub el
                            <a href="https://github.com/bypabloc/twitter" target="_blank">Frontend</a> y el 
                            <a href="https://github.com/bypabloc/twitter-api" target="_blank">Backend</a>
                        `,
                    },
                    title: 'Código abierto de un mini twitter.',
                    description: `Mini Twitter
                        <br/>
                        <a href="https://bypabloc-twitter.netlify.app/" target="_blank">Aplicación desplegada en Netlify</a>
                        <br/>
                        <a href="https://bypabloc-twitter-api.herokuapp.com/" target="_blank">Backend con documentación desplegado en Heroku</a>
                    `,
                    skills: [
                        'Primeros pasos en un framework de JavaScript (VueJS 3)',
                        'Divirtiéndome aprendiendo',
                    ],
                },
                {
                    date: '2021',
                    icon: 'fas fa-heart',
                    status: {
                        type: 4,
                        team: 1,
                        link: `
                            Disponible en mí 
                            <a href="https://github.com/bypabloc/flutter_curso_peliculas" target="_blank">GitHub</a>
                        `,
                    },
                    title: 'Código abierto de una app de películas.',
                    description: `Una aplicación la cual muestra información de las películas del momento. 
                        <br/>
                        <a href="https://bypabloc-flutter-curso-peliculas.netlify.app/#/" target="_blank">Aplicación desplegada en Netlify</a>
                    `,
                    skills: [
                        'Primeros pasos en desarrollo móvil',
                        'Dart y Flutter',
                    ],
                },
                {
                    date: '2018 - 2021',
                    icon: 'fas fa-briefcase',
                    status: {
                        type: 3,
                        team: 4,
                    },
                    position: 'Lider',
                    title: 'Sistema informático para restaurantes - <a href="https://dibal.pe" target="_blank">Dibal.pe</a>.',
                    description: `Es una Startup, cuyo objetivo es desarrollar un sistema web para múltiples
                        restaurantes. Soy el primer desarrollador que
                        contrataron, comenzamos con herramientas que la empresa solicitó,
                        como jQuery y Laravel. Con el tiempo hemos aprendido, gracias a los
                        requerimientos de los clientes, a entenderlos y satisfacer sus necesidades.<br/>
                        Después de meses contratamos a otro desarrollador y poco a poco
                        hemos ido creciendo como empresa. Actualmente soy el Ingeniero de
                        Software a cargo de proyectos y toma de decisiones en materia de
                        desarrollo.<br/>
                        Actualmente estoy trabajando en el desarrollo de un e-commerce (en
                        Vue) que vinculará la gestión del restaurante con los clientes, para evitar
                        al máximo la interacción humana.
                        Puede ver una vista previa de la vinculacion en este enlace: <a href="https://puertonorte.jobal.pe/colonial" target="_blank">Jobal.pe</a>
                        <br/>
                        También soy el encargado del despliegue en AWS, teniendo experiencia
                        en servicios como EC2, RDS, S3, Route 53, SES, AutoScalling y
                        LoadBalancer.
                    `,
                    skills: [
                        'Deploys (AWS)',
                        'Trabajo bajo presión',
                        'Multiusers',
                        'Eficacia',
                        'Mejoras de rendimiento',
                        'Liderar',
                    ],
                },
                {
                    date: '2018',
                    icon: 'fas fa-plane-departure',
                    title: 'Migré de mi país',
                    description: `
                        Yo: ¿Dónde estoy?<br/>
                        ¿Esto es lo que el mundo llama independizarse?<br/>
                        ¿Tengo que cocinar yo solo?<br/>
                        ¡Quiero a mi mamá!
                    `,
                },
                {
                    date: '2017 - 2018',
                    icon: 'fas fa-briefcase',
                    status: {
                        type: 1,
                        team: 1,
                        reason: {
                            title: 'Razón de detención',
                            text: 'Tiempo',
                        },
                    },
                    title: 'Sistema informático para la mejora de producción - <a href="http://www.laboratoriocofasa.com/" target="_blank">Laboratorio Cofasa, S.A.</a>.',
                    description: `Es una empresa de desarrollo de fármacos. Desarrollé un sistema web
                        para monitorear el proceso de producción, desde el inicio del lote, toma en cuenta las paradas de los equipos, hasta la finalización. Con estos datos podrían determinar qué
                        decisiones tomar y mejorar la productividad.
                    `,
                    skills: [
                        'En este proyecto entendí la verdadera importancia del trabajo en equipo',
                        'Las exigencias de un verdadero cliente',
                    ],
                },
                {
                    date: '2016',
                    icon: 'fas fa-briefcase',
                    status: {
                        type: 3,
                        team: 1,
                        reason: {
                            title: 'Razón de éxito',
                            text: 'Un buen levantamiento de informacion y organización',
                        },
                    },
                    title: 'Sistema informático para la realización de examenes online - Freelance',
                    description: `Se me solicitó desarrollar un sistema para facilitar la realización de los examenes a través de un sistema web.`,
                    skills: [
                        'A escuchar al cliente',
                    ],
                },
                {
                    date: '2016',
                    icon: 'fas fa-graduation-cap',
                    title: 'Ingeniería de software - UNIVERSITY - Universidad Politécnica Territorial de Yaracuy Arístides Bastidas',
                    description: 'Aprendí todo lo necesario para emprender en el mundo de la informática',
                },
                {
                    date: '2015',
                    icon: 'fas fa-tasks',
                    status: {
                        type: 1,
                        team: 3,
                        reason: {
                            title: 'Razón de detención',
                            text: 'Tiempo',
                        },
                    },
                    title: 'Proyecto de control de obras - Instituto de Vialidad Y Obras Públicas Del Estado Yaracuy',
                    description: `Aprendí como trabajar en equipo. Este año conté con un equipo de trabajo increible y eso nos llevo a realizar un buen sistema informatico el cual requeria el instituto.
                        <br/>
                        El sistema que desarrollamos se encargaba de tomar el registro de las obras publicas desde la realizacion del presupuesto, pasando por los recalculos, registro de planos, hasta su finalización.`,
                    skills: [
                        'Trabajo en equipo',
                        'Java',
                    ],
                },
                {
                    date: '2014',
                    icon: 'fas fa-tasks',
                    status: {
                        type: 1,
                        team: 1,
                        reason: {
                            title: 'Razón de detención',
                            text: 'Tiempo',
                        },
                    },
                    title: 'Proyecto de historias medicas - Instituto IPASME',
                    description: 'Este instituto público tambien requeria de un sistema informatico el cual almacenara y les ayudara a agilizar todos los registros que llevaban en papeles.',
                    skills: [
                        'Java',
                    ],
                },
                {
                    date: '2013',
                    icon: 'fas fa-tasks',
                    status: {
                        type: 1,
                        team: 1,
                        reason: {
                            title: 'Razón de detención',
                            text: 'Tiempo',
                        },
                    },
                    title: 'Proyecto de control de registro de equipos - Instituto CADAFE',
                    description: 'Es un instituto público dónde analizamos su necesidad de un sistema informático para ayudarle con el registro y movimiento de cada uno de sus dispositivos. Este fue mi primer proyecto para un cliente. Su desarrollo fue muy básico.',
                    skills: [
                        'Levantamiento de información o requerimientos de software en un instituto',
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'jQuery',
                    ],
                },
                {
                    date: '2011',
                    icon: 'fas fa-fire',
                    title: 'Inicio de mi carrera en Ingeniería de software',
                    description: 'Emprendí este nuevo reto con mucho temor.',
                },
                {
                    date: '2006',
                    icon: 'fas fa-microchip',
                    title: 'Toqué un mouse',
                    description: `Yo: "¡Woooow!"... ¡Amor a primera vista!`,
                },
                {
                    date: '08-08-1991',
                    icon: 'fas fa-fire',
                    title: 'Nací el 8 de agosto de 1991',
                    description: `Con una probabilidad del %0.00000000000512.<br/>¡Soy completamente consciente del valor de la vida!`,
                },
            ],
        }
    },
    components: {
        Title,
    },
}
</script>
<style scoped>
body{margin-top:20px;}


.timeline-container {
    position: relative;
    padding-top: 4px;
    margin-bottom: 32px
}

.timeline-container:last-child {
    margin-bottom: 0
}

.timeline-container:before {
    content: "";
    display: block;
    position: absolute;
    left: 28px;
    top: 0;
    bottom: 0;
    border: 1px solid #E2E3E7;
    background-color: #E7EAEF;
    width: 4px;
    border-width: 0 1px
}

.timeline-container:first-child:before {
    border-top-width: 1px
}

.timeline-container:last-child:before {
    border-bottom-width: 1px
}

.timeline-item {
    position: relative;
    margin-bottom: 8px
}

.timeline-item .widget-box {
    color: #595C66
}

.timeline-item .transparent .widget-header {
    border-bottom-width: 0
}

.timeline-item .transparent .widget-header>.widget-title {
    margin-left: 8px
}

.timeline-item:nth-child(even) .widget-box {
    background-color: #F3F3F3;
    color: #616161
}

.timeline-item:nth-child(even) .widget-box.transparent {
    border-left-color: #DBDBDB!important
}

.timeline-item:nth-child(even) .widget-box.transparent .widget-header {
    background-color: #EEE!important
}

.timeline-item .widget-box {
    margin: 0 0 0 60px;
    position: relative;
    max-width: none
}

.timeline-item .widget-main {
    margin: 0;
    position: relative;
    max-width: none;
    border-bottom-width: 0
}

.timeline-item .widget-body {
    background-color: transparent
}

.timeline-item .widget-toolbox {
    padding: 4px 8px 0!important;
    background-color: transparent!important;
    border-width: 0!important;
    margin: 0!important
}

.timeline-info {
    float: left;
    width: 60px;
    text-align: center;
    position: relative
}

.timeline-info img {
    border-radius: 100%;
    max-width: 42px
}

.timeline-info .badge,
.timeline-info .label {
    font-size: 12px
}

.timeline-container:not(.timeline-style2) .timeline-indicator {
    opacity: 1;
    border-radius: 100%;
    display: inline-block;
    font-size: 16px;
    height: 36px;
    line-height: 30px;
    width: 36px;
    text-align: center;
    text-shadow: none!important;
    padding: 0;
    cursor: default;
    border: 3px solid #FFF!important
}

.timeline-label {
    display: block;
    clear: both;
    margin: 0 0 18px 34px
}

.timeline-item img {
    border: 1px solid #AAA;
    padding: 2px;
    background-color: #FFF
}

.timeline-style2:before {
    display: none
}

.timeline-style2 .timeline-item {
    padding-bottom: 22px;
    margin-bottom: 0
}

.timeline-style2 .timeline-item:last-child {
    padding-bottom: 0
}

.timeline-style2 .timeline-item:before {
    content: "";
    display: block;
    position: absolute;
    left: 90px;
    top: 5px;
    bottom: -5px;
    border-width: 0;
    background-color: #DDD;
    width: 2px;
    max-width: 2px
}

.timeline-style2 .timeline-item:last-child:before {
    display: none
}

.timeline-style2 .timeline-item:first-child:before {
    display: block
}

.timeline-style2 .timeline-item .transparent .widget-header {
    background-color: transparent!important
}

.timeline-style2 .timeline-item .transparent.widget-box {
    background-color: transparent!important;
    border-left: none!important
}

.timeline-style2 .timeline-info {
    width: 100px
}

.timeline-style2 .timeline-indicator {
    font-size: 0;
    height: 12px;
    line-height: 12px;
    width: 12px;
    border-width: 1px!important;
    background-color: #FFF!important;
    position: absolute;
    left: 85px;
    top: 3px;
    opacity: 1;
    border-radius: 100%;
    display: inline-block;
    padding: 0
}

.timeline-style2 .timeline-date {
    display: inline-block;
    width: 72px;
    text-align: right;
    margin-right: 25px;
    color: #777
}

.timeline-style2 .timeline-item .widget-box {
    margin-left: 112px
}

.timeline-style2 .timeline-label {
    width: 75px;
    margin-left: 0;
    margin-bottom: 10px;
    text-align: right;
    color: #666;
    font-size: 14px
}

.timeline-time {
    text-align: center;
    position: static
}


.widget-box {
    padding: 0;
    box-shadow: none;
    margin: 3px 0;
    border: 1px solid #CCC;
}

@media only screen and (max-width:767px) {
    .widget-box {
        margin-top: 7px;
        margin-bottom: 7px
    }
}

.widget-header {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    position: relative;
    min-height: 38px;
    background: repeat-x #f7f7f7;
    background-image: -webkit-linear-gradient(top, #FFF 0, #EEE 100%);
    background-image: -o-linear-gradient(top, #FFF 0, #EEE 100%);
    background-image: linear-gradient(to bottom, #FFF 0, #EEE 100%);
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffeeeeee', GradientType=0);
    border-bottom: 1px solid #DDD;
    padding-left: 12px
}

.widget-box.transparent>.widget-header,
.widget-header-flat {
    filter: progid: DXImageTransform.Microsoft.gradient(enabled=false)
}

.widget-header:after,
.widget-header:before {
    content: "";
    display: table;
    line-height: 0
}

.widget-header:after {
    clear: right
}

.widget-box.collapsed>.widget-header {
    border-bottom-width: 0
}

.collapsed.fullscreen>.widget-header {
    border-bottom-width: 1px
}

.collapsed>.widget-body {
    display: none
}

.widget-header-flat {
    background: #F7F7F7
}

.widget-header-large {
    min-height: 49px;
    padding-left: 18px
}

.widget-header-small {
    min-height: 31px;
    padding-left: 10px
}

.widget-header>.widget-title {
    line-height: 36px;
    padding: 0;
    margin: 0;
    display: inline
}

.widget-header>.widget-title>.ace-icon {
    margin-right: 5px;
    font-weight: 400;
    display: inline-block
}

.infobox .infobox-content:first-child,
.infobox>.badge,
.infobox>.stat,
.percentage {
    font-weight: 700
}

.widget-header-large>.widget-title {
    line-height: 48px
}

.widget-header-small>.widget-title {
    line-height: 30px
}

.widget-toolbar {
    display: inline-block;
    padding: 0 10px;
    line-height: 37px;
    position: relative
}

.widget-header-large>.widget-toolbar {
    line-height: 48px
}

.widget-header-small>.widget-toolbar {
    line-height: 29px
}

.widget-toolbar.no-padding {
    padding: 0
}

.widget-toolbar.padding-5 {
    padding: 0 5px
}

.widget-toolbar:before {
    display: inline-block;
    content: "";
    position: absolute;
    top: 3px;
    bottom: 3px;
    left: -1px;
    border: 1px solid #D9D9D9;
    border-width: 0 1px 0 0
}

.popover-notitle+.popover .popover-title,
.popover.popover-notitle .popover-title,
.widget-toolbar.no-border:before {
    display: none
}

.widget-header-large>.widget-toolbar:before {
    top: 6px;
    bottom: 6px
}

[class*=widget-color-]>.widget-header>.widget-toolbar:before {
    border-color: #EEE
}

.widget-color-orange>.widget-header>.widget-toolbar:before {
    border-color: #FEA
}

.widget-color-dark>.widget-header>.widget-toolbar:before {
    border-color: #222;
    box-shadow: -1px 0 0 rgba(255, 255, 255, .2), inset 1px 0 0 rgba(255, 255, 255, .1)
}

.widget-toolbar label {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 0
}

.widget-toolbar>.widget-menu>a,
.widget-toolbar>a {
    font-size: 14px;
    margin: 0 1px;
    display: inline-block;
    padding: 0;
    line-height: 24px
}

.widget-toolbar>.widget-menu>a:hover,
.widget-toolbar>a:hover {
    text-decoration: none
}

.widget-header-large>.widget-toolbar>.widget-menu>a,
.widget-header-large>.widget-toolbar>a {
    font-size: 15px;
    margin: 0 1px
}

.widget-toolbar>.btn {
    line-height: 27px;
    margin-top: -2px
}

.widget-toolbar>.btn.smaller {
    line-height: 26px
}

.widget-toolbar>.btn.bigger {
    line-height: 28px
}

.widget-toolbar>.btn-sm {
    line-height: 24px
}

.widget-toolbar>.btn-sm.smaller {
    line-height: 23px
}

.widget-toolbar>.btn-sm.bigger {
    line-height: 25px
}

.widget-toolbar>.btn-xs {
    line-height: 22px
}

.widget-toolbar>.btn-xs.smaller {
    line-height: 21px
}

.widget-toolbar>.btn-xs.bigger {
    line-height: 23px
}

.widget-toolbar>.btn-minier {
    line-height: 18px
}

.widget-toolbar>.btn-minier.smaller {
    line-height: 17px
}

.widget-toolbar>.btn-minier.bigger {
    line-height: 19px
}

.widget-toolbar>.btn-lg {
    line-height: 36px
}

.widget-toolbar>.btn-lg.smaller {
    line-height: 34px
}

.widget-toolbar>.btn-lg.bigger {
    line-height: 38px
}

.widget-toolbar-dark {
    background: #444
}

.widget-toolbar-light {
    background: rgba(255, 255, 255, .85)
}

.widget-toolbar>.widget-menu {
    display: inline-block;
    position: relative
}

.widget-toolbar>.widget-menu>a[data-action],
.widget-toolbar>a[data-action] {
    -webkit-transition: transform .1s;
    -o-transition: transform .1s;
    transition: transform .1s
}

.widget-toolbar>.widget-menu>a[data-action]>.ace-icon,
.widget-toolbar>a[data-action]>.ace-icon {
    margin-right: 0
}

.widget-toolbar>.widget-menu>a[data-action]:focus,
.widget-toolbar>a[data-action]:focus {
    text-decoration: none;
    outline: 0
}

.widget-toolbar>.widget-menu>a[data-action]:hover,
.widget-toolbar>a[data-action]:hover {
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2)
}

.widget-body {
    background-color: #FFF
}

.widget-main {
    padding: 12px
}

.widget-main.padding-32 {
    padding: 32px
}

.widget-main.padding-30 {
    padding: 30px
}

.widget-main.padding-28 {
    padding: 28px
}

.widget-main.padding-26 {
    padding: 26px
}

.widget-main.padding-24 {
    padding: 24px
}

.widget-main.padding-22 {
    padding: 22px
}

.widget-main.padding-20 {
    padding: 20px
}

.widget-main.padding-18 {
    padding: 18px
}

.widget-main.padding-16 {
    padding: 16px
}

.widget-main.padding-14 {
    padding: 14px
}

.widget-main.padding-12 {
    padding: 12px
}

.widget-main.padding-10 {
    padding: 10px
}

.widget-main.padding-8 {
    padding: 8px
}

.widget-main.padding-6 {
    padding: 6px
}

.widget-main.padding-4 {
    padding: 4px
}

.widget-main.padding-2 {
    padding: 2px
}

.widget-main.no-padding,
.widget-main.padding-0 {
    padding: 0
}

.widget-toolbar .progress {
    vertical-align: middle;
    display: inline-block;
    margin: 0
}

.widget-toolbar>.dropdown,
.widget-toolbar>.dropup {
    display: inline-block
}

.widget-toolbox.toolbox-vertical,
.widget-toolbox.toolbox-vertical+.widget-main {
    display: table-cell;
    vertical-align: top
}

.widget-box>.widget-header>.widget-toolbar>.widget-menu>[data-action=settings],
.widget-box>.widget-header>.widget-toolbar>[data-action=settings],
.widget-color-dark>.widget-header>.widget-toolbar>.widget-menu>[data-action=settings],
.widget-color-dark>.widget-header>.widget-toolbar>[data-action=settings] {
    color: #99CADB
}

.widget-box>.widget-header>.widget-toolbar>.widget-menu>[data-action=reload],
.widget-box>.widget-header>.widget-toolbar>[data-action=reload],
.widget-color-dark>.widget-header>.widget-toolbar>.widget-menu>[data-action=reload],
.widget-color-dark>.widget-header>.widget-toolbar>[data-action=reload] {
    color: #ACD392
}

.widget-box>.widget-header>.widget-toolbar>.widget-menu>[data-action=collapse],
.widget-box>.widget-header>.widget-toolbar>[data-action=collapse],
.widget-color-dark>.widget-header>.widget-toolbar>.widget-menu>[data-action=collapse],
.widget-color-dark>.widget-header>.widget-toolbar>[data-action=collapse] {
    color: #AAA
}

.widget-box>.widget-header>.widget-toolbar>.widget-menu>[data-action=close],
.widget-box>.widget-header>.widget-toolbar>[data-action=close],
.widget-color-dark>.widget-header>.widget-toolbar>.widget-menu>[data-action=close],
.widget-color-dark>.widget-header>.widget-toolbar>[data-action=close] {
    color: #E09E96
}

.widget-box[class*=widget-color-]>.widget-header {
    color: #FFF;
    filter: progid: DXImageTransform.Microsoft.gradient(enabled=false)
}

.widget-color-blue {
    border-color: #ffffff
}

.widget-color-blue>.widget-header {
    background: #307ECC;
    border-color: #307ECC
}

.widget-color-blue2 {
    border-color: #5090C1
}

.widget-color-blue2>.widget-header {
    background: #5090C1;
    border-color: #5090C1
}

.widget-color-blue3 {
    border-color: #6379AA
}

.widget-color-blue3>.widget-header {
    background: #6379AA;
    border-color: #6379AA
}

.widget-color-green {
    border-color: #82AF6F
}

.widget-color-green>.widget-header {
    background: #82AF6F;
    border-color: #82AF6F
}

.widget-color-green2 {
    border-color: #2E8965
}

.widget-color-green2>.widget-header {
    background: #2E8965;
    border-color: #2E8965
}

.widget-color-green3 {
    border-color: #4EBC30
}

.widget-color-green3>.widget-header {
    background: #4EBC30;
    border-color: #4EBC30
}

.widget-color-red {
    border-color: #E2755F
}

.widget-color-red>.widget-header {
    background: #E2755F;
    border-color: #E2755F
}

.widget-color-red2 {
    border-color: #E04141
}

.widget-color-red2>.widget-header {
    background: #E04141;
    border-color: #E04141
}

.widget-color-red3 {
    border-color: #D15B47
}

.widget-color-red3>.widget-header {
    background: #D15B47;
    border-color: #D15B47
}

.widget-color-purple {
    border-color: #7E6EB0
}

.widget-color-purple>.widget-header {
    background: #7E6EB0;
    border-color: #7E6EB0
}

.widget-color-pink {
    border-color: #CE6F9E
}

.widget-color-pink>.widget-header {
    background: #CE6F9E;
    border-color: #CE6F9E
}

.widget-color-orange {
    border-color: #E8B10D
}

.widget-color-orange>.widget-header {
    color: #855D10!important;
    border-color: #E8B10D;
    background: #FFC657
}

.widget-color-dark {
    border-color: #5a5a5a
}

.widget-color-dark>.widget-header {
    border-color: #666;
    background: #404040
}

.widget-color-grey {
    border-color: #9e9e9e
}

.widget-color-grey>.widget-header {
    border-color: #aaa;
    background: #848484
}

.widget-box.transparent {
    border-width: 0
}

.widget-box.transparent>.widget-header {
    background: 0 0;
    border-width: 0;
    padding-left: 3px
}

.widget-box.transparent>.widget-header-large {
    padding-left: 5px
}

.widget-box.transparent>.widget-header-small {
    padding-left: 1px
}

.widget-box.transparent>.widget-body {
    border-width: 0;
    background-color: transparent
}

[class*=widget-color-]>.widget-header>.widget-toolbar>.widget-menu>[data-action],
[class*=widget-color-]>.widget-header>.widget-toolbar>[data-action] {
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2)
}

[class*=widget-color-]>.widget-header>.widget-toolbar>.widget-menu>[data-action=settings],
[class*=widget-color-]>.widget-header>.widget-toolbar>[data-action=settings] {
    color: #D3E4ED
}

[class*=widget-color-]>.widget-header>.widget-toolbar>.widget-menu>[data-action=reload],
[class*=widget-color-]>.widget-header>.widget-toolbar>[data-action=reload] {
    color: #DEEAD3
}

[class*=widget-color-]>.widget-header>.widget-toolbar>.widget-menu>[data-action=collapse],
[class*=widget-color-]>.widget-header>.widget-toolbar>[data-action=collapse] {
    color: #E2E2E2
}

[class*=widget-color-]>.widget-header>.widget-toolbar>.widget-menu>[data-action=close],
[class*=widget-color-]>.widget-header>.widget-toolbar>[data-action=close] {
    color: #FFD9D5
}

.widget-color-orange>.widget-header>.widget-toolbar>.widget-menu>[data-action],
.widget-color-orange>.widget-header>.widget-toolbar>[data-action] {
    text-shadow: none
}

.widget-color-orange>.widget-header>.widget-toolbar>.widget-menu>[data-action=settings],
.widget-color-orange>.widget-header>.widget-toolbar>[data-action=settings] {
    color: #559AAB
}

.widget-color-orange>.widget-header>.widget-toolbar>.widget-menu>[data-action=reload],
.widget-color-orange>.widget-header>.widget-toolbar>[data-action=reload] {
    color: #7CA362
}

.widget-color-orange>.widget-header>.widget-toolbar>.widget-menu>[data-action=collapse],
.widget-color-orange>.widget-header>.widget-toolbar>[data-action=collapse] {
    color: #777
}

.widget-color-orange>.widget-header>.widget-toolbar>.widget-menu>[data-action=close],
.widget-color-orange>.widget-header>.widget-toolbar>[data-action=close] {
    color: #A05656
}

.widget-box.light-border[class*=widget-color-]:not(.fullscreen) {
    border-width: 0
}

.widget-box.light-border[class*=widget-color-]:not(.fullscreen)>.widget-header {
    border: 1px solid;
    border-color: inherit
}

.widget-box.light-border[class*=widget-color-]:not(.fullscreen)>.widget-body {
    border: 1px solid #D6D6D6;
    border-width: 0 1px 1px
}

.widget-box.no-border {
    border-width: 0
}

.widget-box.fullscreen {
    position: fixed;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFF;
    border-width: 3px;
    z-index: 1040!important
}

.widget-box.fullscreen:not([class*=widget-color-]) {
    border-color: #AAA
}

.widget-body .table {
    border-top: 1px solid #E5E5E5
}

.widget-body .table thead:first-child tr {
    background: #FFF
}
</style>