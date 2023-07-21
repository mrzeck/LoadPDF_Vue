<template>
	<div class="wrapper d-flex">
		<div class="sidebar vh-100 sticky-top" style="width:300px; background: #f4f4f4;">
			<div>
				<div class="brand w-100 bg-white d-flex align-items-center ps-3 sticky-top" style="height: 78px; justify-content: space-between; ">
					<img src="https://mythaco.vn/static/media/logo_thaco.498c4500.svg" width="166" alt="" srcset="">
                    <button @click="slideMenu" style="background: none; border: 0; padding-right: 1rem; display: flex;"> 
						<span class="material-icons-round">format_list_bulleted</span>
					</button>
				</div>
                <div :class="{ show: sidebar_menu }" class="menu-hide col-lg-2" style="background-color: white;width:100%; justify-content: space-between; height: calc(100vh - 78px); display: flex; flex-direction: column;">
					<div class="accordion" id="accordionPanelsStayOpenExample">
						<div style="height: 1px; background-color: #f4f4f4;">
						</div>
						<div class="accordion-item border-0" style="padding-left: 25px; padding-right: 25px;">
							<h2 class="accordion-header border-0" >
							<button class="accordion-button px-0 py-3" style="background:none!important" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
								<span class="material-icons-outlined">description</span> <p style="margin: unset; margin-left: 10px;">File PDF</p>
							</button>
							</h2>
							<div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
							<div class="">
								<ul class="list-group" style="padding-left: 20px;">
									<li class="list-group-item"><a class="link_li li-title" href="#">An item</a></li>
									<li class="list-group-item"><a class="link_li li-title" href="#">A second item</a></li>
									<li class="list-group-item"><a class="link_li li-title" href="#">A third item</a></li>
								</ul>
							</div>
							</div>
						</div>
						<div class="accordion-item border-0" style="padding-left: 25px; padding-right: 25px;">
							<h2 class="accordion-header border-0" >
							<button class="accordion-button px-0 py-3" style="background:none!important" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne1" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
								<span class="material-icons-outlined">description</span> <p style="margin: unset; margin-left: 10px;">File PDF</p>
							</button>
							</h2>
							<div id="panelsStayOpen-collapseOne1" class="accordion-collapse collapse">
							<div class="">
								<ul class="list-group" style="padding-left: 20px;">
									<li class="list-group-item "><a class="link_li li-title" href="#">An item</a></li>
									<li class="list-group-item"><a class="link_li li-title" href="#">A second item</a></li>
									<li class="list-group-item"><a class="link_li li-title" href="#">A third item</a></li>
								</ul>
							</div>
							</div>
						</div>
					</div>
                    <ul>
                        <li class="nav-item" style="margin-bottom: 20px;">
                            <a class="title" style="text-decoration: none;"  href="https://apps.apple.com/us/app/my-thaco/id1660844894"><i class="bi bi-apple icon-app"></i> App Store</a>
                        </li>
                        <li class="nav-item">
                            <a class="title" style="text-decoration: none;" href="https://play.google.com/store/apps/details?id=vn.com.thaco.mythaco&hl=en&gl=US"><i class="bi bi-google-play icon-app"></i>Google Play</a>
                        </li>
                    </ul>
                </div>
			</div>
		</div>
		<div class="content flex-grow-1" style="background: #f4f4f4;">
			<div class="wrapper-content w-100 bg-white d-flex align-items-center justify-content-between sticky-top" style="height: 78px; z-index: 99;">
				<div>&nbsp;</div>
				<div>
					<ul class="list-group list-group-horizontal">
						<li class="px-2" style="margin: auto;">
							<a href="#"><span class="material-icons-outlined">home</span></a>
						</li>
						<li class="px-2" style="margin-left: 15px;">
							<div class="dropdown">
							<button class="btn dropdown-toggle title" type="button" data-bs-toggle="dropdown" aria-expanded="false">GIỚI THIỆU</button>
							<ul class="dropdown-menu" style="border-radius: 0; border: 0; min-width: 215px;">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li><a class="dropdown-item" href="#">Something else here</a></li>
							</ul>
							</div>
						</li>
						<li class="px-2">
							<div class="dropdown">
							<button class="btn dropdown-toggle title" type="button" data-bs-toggle="dropdown" aria-expanded="false">TRUYỀN THÔNG</button>
							<ul class="dropdown-menu" style="border-radius: 0; border: 0; min-width: 215px;">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li>
								<a class="dropdown-item" href="#">Something else here</a>
								</li>
							</ul>
							</div>
						</li>
					</ul>
				</div>
				<div>
					<ul class="list-group list-group-horizontal" style="align-items: center;">
						<li class="px-2"><button style="border:0; background: none;" ><span class="material-icons-outlined">search</span></button></li>
						<li class="px-2"><button style="border:0; background: none;" ><span class="material-icons-outlined">chat</span></button></li>
						<li class="px-2"><button style="border:0; background: none;" ><span class="material-icons-outlined">notifications</span></button></li>
						<li class="px-2"><button style="border:0; background: none;"><span class="material-icons-outlined">account_circle</span></button></li>
					</ul>
				</div>
			</div>
			<div class="container-fluid p-4">
				<div class="row">
					<div class="col-lg-3">
						<div class="card">
							<div class="card-body" style="height: 300px;">
								page 1
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="card">
							<div class="card-body" style="height: 300px;">
								page 2
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="card">
							<div class="card-body" style="height: 300px;">
								page 3
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="card">
							<div class="card-body" style="height: 300px;">
								page 4
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid p-4">
				<div class="row">
					<div class="col-lg-3">
						<div class="card">
							<div class="card-body" style="height: 300px;">
								page 1
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="card">
							<div class="card-body" style="height: 300px;">
								page 2
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="card">
							<div class="card-body" style="height: 300px;">
								page 3
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="card">
							<div class="card-body" style="height: 300px;">
								page 4
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
    li {
        list-style: none;
    }
	
	.li-title {
		color: #707070;
	}

	.dropdown:hover .dropdown-menu {
   		display: block;
   		margin-top: 0; 
	}

	.col-md-auto:hover {
		background-color: #fffcd5 !important;
		cursor: pointer;
	}

	.list-group-item {
		border: 0;
	}

	.dropdown-toggle::after {
		border-top: 0;
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

	.btn.show {
		border-color: white;
	}

    .icon-app {
        border-radius: 10px;
        padding: 8px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    }

    .menu-hide {
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

    .menu-icon {
        &.show {
            display: block;
        }
    }
</style>

<script>
    import $ from "jquery";

    export default {
        data() {
            return {
                sidebar_menu: true,
            };
        },
        mounted() {},

        methods: {
            slideMenu(e) {
                this.sidebar_menu = !this.sidebar_menu;
            },
        },
    };
</script>
