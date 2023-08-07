<template>
    <section>
        <div class="container-fluild">
            <div class="row">
                <div class="col-lg-2" 
				v-for="(item, index) in this.file" 
				:key="index"
				@click="viewFile(item.id)">
                    <div class="card h-100">
						<div class="card-body text-center">
							<span class="material-symbols-outlined display-1 text-success">description</span>
							<div class="fw-light">{{item.name}}</div>
						</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    import Header from '../components/layouts/Header.vue';
    import $ from "jquery";
	import { ref,	reactive } from "vue"
	import axios from "axios"
    import { mapActions, mapGetters, mapMutations } from 'vuex';
	import { useRouter } from 'vue-router';
    export default {

        data() {
            return {
				listFile : {},
				listFolder: {},
				pdf: '',
				id:'',
				access_token: '',
                sidebar_menu: true,
				sidebar_menu1: false,
				scTimer: 0,
        		scY: 0,
            };
        },

        computed:{
            ...mapGetters(['folder','file']),
        },
	
        async mounted() {
			await this.getAccessToken();
			await this.getDataFolder();
			await this.getDataPDF(this.listFolder[0].id);

			// console.log(this.listFolder[0].id)
		},

        methods: {
            ...mapMutations(['setFolder','setAccessToken','setFiles']),

            slideMenu(e) {
                this.sidebar_menu = !this.sidebar_menu;
            },

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

			async getDataPDF(id){
				const accessToken = this.access_token;
				const url = `https://www.googleapis.com/drive/v3/files`
				const headers = {Authorization: `Bearer ${accessToken}`}
				const parentId = id
				try {
					const parentResponse = await axios.get(url , { 	headers: headers,
						params: {
							q: `'${parentId}' in parents and trashed=false`,
							fields: "files(id, name, webViewLink ,createdTime)",
						}
					})
					
					this.files = parentResponse.data.files
					// this.listFile = this.files
					// console.log(this.listFile)

					this.setFiles(this.files)
				} catch (error) {
				console.error("Error fetching files:", error);
				}
			},
				
			loadPDF(e){
				this.pdf = "https://drive.google.com/file/d/" + e + "/preview"
			},

			slideMenu1(e) {
                this.sidebar_menu1 = !this.sidebar_menu1;
            },

			viewFile(e){
				this.$router.replace('/view/'+ e);
			}
		},
    };
</script>


<style lang="scss">
    
</style>