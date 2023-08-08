<template>
    <div>
        <iframe :src="pdf" style="height:800px; width: 100%; background-color: none!important;"></iframe>
    </div>
</template>
<script>

import { useRouter } from 'vue-router';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import axios from "axios"

export default {
    data(){
        return {
            pdf : '',
        }
    },
    computed:{
        ...mapGetters(['folder','file']),
    },
    async mounted(){
        await this.getAccessToken();
        await this.getDataFolder();
        // await this.getDataPDF(this.listFolder[0].id);
        this.pdf = "https://drive.google.com/file/d/" + this.$route.params.id + "/preview";
    },
    methods:{
        ...mapMutations(['setFolder','setAccessToken','setFiles']),
        async getAccessToken() {
            const url_tk = "https://oauth2.googleapis.com/token";
            const data = {
                client_id: '394979961671-0jaoq3am5vubn1cl46vm51e9qvloh009.apps.googleusercontent.com',
                client_secret: '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',
                grant_type: "refresh_token",
                refresh_token: "1//0elqWRci65w3eCgYIARAAGA4SNwF-L9Ir-BJ4eYJW8pA-SHhQW6rWV1Et4mQbc4BUcQlq6qOWYFiiT9-o-3rZsakdLpLM5tPLHG4"
            };

            try {
                const response = await axios.post(url_tk , data)
                const get_accessToken = response.data.access_token
                this.access_token = get_accessToken
                this.setAccessToken(this.access_token)
                return get_accessToken;
            } catch (error) {
                console.error("Error getting access token:", error);
            }
        },
        async getDataFolder() {
            const accessToken = this.access_token;
            const url = `https://www.googleapis.com/drive/v3/files`
            const headers = {Authorization: `Bearer ${accessToken}`}
            const parentId = "1spUWO5ycVrjvim42OTnsGbkqy-FJhSKz"
            try {
                const parentResponse = await axios.get(url , { 	headers: headers,
                    params: {
                        q: `'${parentId}' in parents and trashed=false`,
                        fields: "files",
                    }
                })
                this.files = await parentResponse.data.files.filter((file) => file.mimeType === "application/vnd.google-apps.folder");
                this.setFolder(this.files);
                this.listFolder = this.files;
            } catch (error) {
            console.error("Error fetching files:", error);
            }
        },
    }
}
</script>
<style lang="scss">

</style>