<template>
    <div>
        <iframe :src="pdf" style="height:800px; width: 100%; background-color: none!important;"></iframe>
    </div>
</template>
<script>

import { useRouter } from 'vue-router';
export default {
    data(){
        return {
            pdf : '',
        }
    },
    mounted(){
        this.pdf = "https://drive.google.com/file/d/" + this.$route.params.id + "/preview";
    }
}
</script>
<style lang="scss">
    .ndfHFb-c4YZDc-uoC0bf.ndfHFb-c4YZDc-i5oIFb .ndfHFb-c4YZDc-bnBfGc{
        background: none!important;
    }
</style>