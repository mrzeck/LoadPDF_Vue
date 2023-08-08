
<template>
	<div class="wrapper d-flex">
		<div class="sidebar vh-100 sticky-top" style="width:300px; background: #f4f4f4;">
			<div>
				<div class="brand w-100 bg-white d-flex align-items-center ps-3 sticky-top" style="height: 78px; justify-content: space-between; ">
					<img src="https://mythaco.vn/static/media/logo_thaco.498c4500.svg" width="166" alt="" srcset="">
                    <button @click="slideMenu" class="bg-transparent border-0 d-flex fs-3"> 
						<i class="ti ti-list"></i>
					</button>
				</div>
                <div :class="{ show: sidebar_menu }" class="menu-hide col-lg-2 bg-white w-100 d-flex" style="flex-direction: column;">
					<div class="accordion" id="accordionPanelsStayOpenExample">
						<div style="height: 1px; background-color: #f4f4f4;" >
						</div>
						<div class="accordion-item border-0 list-list-title">
							<h2 class="accordion-header border-0">
							<button class="accordion-button px-0 py-3 title collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
								<i class="ti ti-file-description fs-4"></i><p class="title_child">File PDF</p>
							</button>
							</h2>
							<div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
							<div class="">
								<ul class="list-group padding-left20" v-for="(item, index) in listFolder" :key="index">
									<li class="list-group-item cursor-pointer">
										<a class="li-title" style="text-decoration: none;">
											{{item.name}}
										</a>
									</li>
								</ul>
							</div>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
		<div class="content flex-grow-1" style="background: #f4f4f4;">
			<div class="wrapper-content w-100 bg-white d-flex align-items-center justify-content-between sticky-top header-content">
				<div>&nbsp;</div>
				<div>
					<ul class="list-group list-group-horizontal">
						<li class="px-2 fs-3">
							<a href="#" style="text-decoration: none; "><i class="ti ti-home-2"></i></a>
						</li>
						<li class="px-2 dropdown">
							<a @mouseover="slideMenu1" class="btn title" type="button" data-bs-toggle="dropdown" aria-expanded="false">TRANG CHỦ</a>
							<ul :class="{ show: sidebar_menu1 }" class="menu-hide1">
								<li style=" ">Trang chủ<p></p></li>
								<li>
									<a class="dropdown-item title li-title" href="#">Về THACO</a>
								</li>
								<li>
									<a class="dropdown-item title li-title" href="#">Thông điệp chủ tịch HĐQT</a>
								</li>
								<li>
									<a class="dropdown-item title li-title" href="#">Văn hóa THACO</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div>
					<ul class="list-group list-group-horizontal" style="align-items: center;">
						<li class="px-2">
							<button class="fs-4 border-0 bg-transparent">
								<i class="ti ti-search"></i>
							</button>
						</li>
						<li class="px-2">
							<button class="fs-4 border-0 bg-transparent">
								<i class="ti ti-message-circle-2"></i>
							</button>
						</li>
						<li class="px-2">
							<button class="fs-4 border-0 bg-transparent">
								<i class="ti ti-bell"></i>
							</button>
						</li>
						<li class="px-2">
							<button class="fs-4 border-0 bg-transparent">
								<i class="ti ti-user"></i>
							</button>
						</li>
					</ul>
				</div>
			</div>

			<section>
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-3" v-for="(item, index) in listFolder" :key="index">
							<div class="card cursor-pointer">
								<div class="card-body">
									<h6 class="fw-bold" :id="item.id" @click="getDataPDF(item.id)">{{item.name}}</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section>
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-3" v-for="(item, index) in listFile" :key="index">
							<div class="card cursor-pointer" @click="loadPDF(item.id)">
								<div class="card-body">
									<h6 class="fw-bold">{{item.name}}</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<div class="container-fluid p-4">
				<div class="row">
					<div class="col-lg-12">
						<div class="card align-items-center border-0">
							<iframe :src="pdf" style="height:800px; width: 100%;"></iframe>
						</div>
					</div>
				</div>
			</div>
			
			<!-- <div class="footer">
					<p>Bản quyền Công ty Cổ phần Tập đoàn Trường Hải © 2023</p>
			</div> -->
		</div>
	</div>
</template>

<style lang="scss">


	.cursor-pointer{
		cursor: pointer;
	}

	#pagetop {
		position: fixed;
		bottom: 20px;
		height: 50px;
		width: 50px;
		right: 30px;
		z-index: 99;
		font-size: 18px;
		border-radius: 99px;
	}
	.footer {
		height: 30px;
		font-size: 14px; 
		position:  unset !important;
		background-color: unset !important;	
		text-align: inherit !important; 
		padding-left: 25px;
	}
    li {
        list-style: none;
    }

	.li-title {
		color: #707070;
	}

	.list-list-title {
		padding-left: 25px; 
		padding-right: 25px;
	}

	.col-md-auto:hover {
		background-color: #fffcd5 !important;
		cursor: pointer;
	}

	.list-group-item {
		border: 0;
	}

	.padding-left20 {
		padding-left: 20px;
	}

	.dropdown-toggle::after {
		border-top: 0;
	}

	.px-2.dropdown > ul {
		padding-left: 1rem;
		padding-right: 1rem;
		li {
			padding: 10px;
		}
	}

	.accordion-button {
		border: 0;
	}

	.accordion-button:not(.collapsed) {
		box-shadow: unset;
	}

	.accordion-button:focus {
		border-color: unset;
		box-shadow: unset;
		outline: unset;
	}

	.title:hover {
		color:#00529c;
		font-weight: 600;
		cursor: pointer;
	}
	
	.header-content {
		height: 78px;
		 z-index: 99; 
		 box-shadow: 0 4px 10px rgba(0,0,0,0.1);
	}

	.title_child {
		margin: unset; 
		margin-left: 10px;
	}

	.link_li {
		text-decoration: none;
	}

	.link_li:hover {
		color:#707070;
		font-weight: 600;
		cursor: pointer;
	}

	.btn:first-child:active {
		border-color: white;
	}

    .menu-hide {
		height: calc(100vh - 78px);
        opacity: 0;
        z-index: -1;
        transition: 0.3s ease-in-out;
        transform: translateX(-300px);
        &.show {
            opacity: 1;
            z-index: 1;
            transition: 0.3s ease-in-out;
            transform: translateX(0);
        }
    }

	.menu-hide1 {
		width: 200px;
		font-size: 12px;
		position: absolute;
        opacity: 0;
        z-index: -9;
		top: 58px;
		left: 0;
        transition: 0.2s ease-in-out;
        transform: translateY(20px);
        &.show {
			width: 200px;
			height: 200px;
			box-shadow: 0 4px 10px rgba(0,0,0,0.1);
			position: absolute;
			background-color: white;
			top: 58px;
			left: 0;
            opacity: 1;
            z-index: 1;
            transition: 0.2s ease-in-out;
            transform: translateY(0);
        }
		li:first-child {
			font-size: 14px;
			p {
				padding-top: 10px;
				margin-bottom: 0;
				border-bottom: 1px solid #adadad;
			}
		}
    }


</style>


<script>
    import $ from "jquery";
	import { ref,	reactive } from "vue"
	import axios from "axios"
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
	
        async mounted() {
			await this.getAccessToken();
			await this.getDataFolder();
		},

        methods: {
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
					this.listFile = this.files

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
		},
    };
</script>
