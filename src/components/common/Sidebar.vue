<template>
    <section>
        <div class="bg-white vh-100" style="width: 300px;">
            <div class="position-absolute d-flex align-items-center" style="height: 78px; width: 300px;">
                <div class="container d-flex">
                    <div class="flex-grow-1"><img src="/assets/images/logo.svg" width="166" alt=""></div>
                    <VueFeather type="menu" size="22" stroke-width="1" class="d-flex"></VueFeather>
                </div>
            </div>

            <div style="padding-top:78px">
                <div class="p-3">
                    <div class="card mb-3 cursor-pointer custom-hover" 
                    v-for="(item, index) in this.folder" 
                    @click="getFile(item.id)"
                    :key="index"
                    >
                        <div class="card-body py-2">
                            <div class="d-flex align-items-center">
                                <span class="material-symbols-outlined me-3 bg-primary bg-gradient p-1 rounded-3 fs-4 text-white">folder_open</span>
                                <p class="d-flex fw-bold mb-0">{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import VueFeather from 'vue-feather';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import moment from 'moment';
import axios from "axios";

export default {
    data(){
        return{
            folders : {}
        }
    },
    components: {VueFeather},
    computed:{
        ...mapGetters(['folder','accessToken']),
    },
    methods:{
        ...mapMutations(['setFiles']),
        async getFile(id){
            this.$router.replace('/');
            const url = `https://www.googleapis.com/drive/v3/files`
            const headers = {Authorization: `Bearer ${this.accessToken}`}
            const parentId = id
            try {
                const parentResponse = await axios.get(url , { 	headers: headers,
                    params: {
                        q: `'${parentId}' in parents and trashed=false`,
                        fields: "files(id, name, webViewLink ,createdTime, thumbnailLink)",
                    }
                })
                this.setFiles(parentResponse.data.files)
            } catch (error) {
            console.error("Error fetching files:", error);
            }
        },
    },
}
</script>
<style lang="scss">
    
</style>