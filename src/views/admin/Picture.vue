<template>
    <div>
        <div class="img-fluid mx-auto d-block container m-5">
            <img class="img-thumbnail" src='../../assets/img_profile.png'/>
        </div>
        <!-- https://dibal-storage.s3.us-east-2.amazonaws.com/images/img_profile.png -->
    </div>
</template>

<script>

export default {
    name: 'Picture',
    data() {
        return {
            image: '../../assets/img_profile.png',
        }
    },  
}
</script>

<style scoped>
    span i:not(:first-child){
        margin-top:-15px;
        margin-left:-15px;
    }
    img {
        width: 250px;
        border-radius: 50%;
    }

    @media (min-width: 0px) and (max-width: 150px) {
        img {
            width: 90px;
        }
    }
    @media (min-width: 151px) and (max-width: 214px) {
        img {
            width: 90px;
        }
    }

    .container {
        position: relative;
        width: 50%;
    }

    .container img {
        width: 100%;
        height: auto;
    }

    .container .file {
        position: absolute;
        top: 90%;
        left: 90%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-size: 16px;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    .container .save {
        position: absolute;
        top: 90%;
        left: 90%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-size: 16px;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    .container .del {
        position: absolute;
        top: 10%;
        left: 90%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-size: 16px;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }

    input[type="file"] {
        display: none;
    }
    .custom-file-upload {
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
    }

</style>