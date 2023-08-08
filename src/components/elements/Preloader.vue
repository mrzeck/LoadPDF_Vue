<template>
    <div v-if="loading" class="preloader d-flex align-items-center justify-content-center bg-dark bg-opacity-75">
        <div>
            <div class="spinner-border spinner-border-xl fs-5 text-white" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            loading: true
        }
    }
}
</script>
<style lang="">
    
</style>