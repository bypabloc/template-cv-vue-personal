<template>
    <div class="container-fluid vh-100 d-flex flex-column">
        <div class="row flex-grow-1">
            <main :class="'col p-4 flex-grow-1 content theme--200' ">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>

export default {
    components: {
    },
};
</script>
