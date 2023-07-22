<template>
	<div class="wrapper d-flex">
		<div class="sidebar vh-100 sticky-top" style="width:300px; background: #f4f4f4;">
			<div>
				<div class="brand w-100 bg-white d-flex align-items-center ps-3 sticky-top" style="height: 78px; justify-content: space-between; ">
					<img src="https://mythaco.vn/static/media/logo_thaco.498c4500.svg" width="166" alt="" srcset="">
                    <button @click="slideMenu" style="background: none; border: 0; padding-right: 1rem; display: flex; scale: 1.5;"> 
						<i class="ti ti-list"></i>
					</button>
				</div>
                <div :class="{ show: sidebar_menu }" class="menu-hide col-lg-2" style="background-color: white;width:100%; justify-content: space-between; height: calc(100vh - 78px); display: flex; flex-direction: column;">
					<div class="accordion" id="accordionPanelsStayOpenExample">
						<div style="height: 1px; background-color: #f4f4f4;">
						</div>
						<div class="accordion-item border-0 list-list-title">
							<h2 class="accordion-header border-0" >
							<button class="accordion-button px-0 py-3 title collapsed" style="background:none!important;" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
								<i style="scale: 1.5;" class="ti ti-file-description"></i><p style="margin: unset; margin-left: 10px;">File PDF</p>
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
						<div class="accordion-item border-0 list-list-title">
							<h2 class="accordion-header border-0" >
							<button class="accordion-button px-0 py-3 title collapsed" style="background:none!important" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne1" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
								<i style="scale: 1.5;" class="ti ti-file-description"></i><p style="margin: unset; margin-left: 10px;">File PDF</p>
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
                </div>
			</div>
		</div>
		<div class="content flex-grow-1" style="background: #f4f4f4;">
			<div class="wrapper-content w-100 bg-white d-flex align-items-center justify-content-between sticky-top" style="height: 78px; z-index: 99;">
				<div>&nbsp;</div>
				<div>
					<ul class="list-group list-group-horizontal">
						<li class="px-2" style="margin: auto; scale: 1.5;">
							<a href="#" style="text-decoration: none;"><i class="ti ti-home-2"></i></a>
						</li>
						<li class="px-2 dropdown">
							<a @mouseover="slideMenu1" class="btn title" type="button" data-bs-toggle="dropdown" aria-expanded="false">TRANG CHỦ</a>
							<ul :class="{ show: sidebar_menu1 }" class="menu-hide1">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li><a class="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</li>
					</ul>
				</div>
				<div>
					<ul class="list-group list-group-horizontal" style="align-items: center;">
						<li class="px-2"><button style="border:0; background: none; scale: 1.5"><i class="ti ti-search"></i></button></li>
						<li class="px-2"><button style="border:0; background: none; scale: 1.5"><i class="ti ti-message-circle-2"></i></button></li>
						<li class="px-2"><button style="border:0; background: none; scale: 1.5"><i class="ti ti-bell"></i></button></li>
						<li class="px-2"><button style="border:0; background: none; scale: 1.5"><i class="ti ti-user"></i></button></li>
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
								page 5
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="card">
							<div class="card-body" style="height: 300px;">
								page 6
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="card">
							<div class="card-body" style="height: 300px;">
								page 7
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="card">
							<div class="card-body" style="height: 300px;">
								page 8
							</div>
						</div>
					</div>
					
				</div>
			</div>
			<div class="container-fluid" style="font-size: 14px;">
				<p>Bản quyền Công ty Cổ phần Tập đoàn Trường Hải © 2023</p>
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

	.dropdown-toggle::after {
		border-top: 0;
	}

	.px-2.dropdown > ul {
		padding-left: 1rem;
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

	.menu-hide1 {
		width: 200px;
		position: absolute;
        opacity: 0;
        z-index: -9;
		top: 58px;
        transition: 0.3s ease-in-out;
        transform: translateY(50px);
        &.show {
			width: 200px;
			height: 150px;
			position: absolute;
			background-color: white;
			top: 58px;
            opacity: 1;
            z-index: 1;
            transition: 0.3s ease-in-out;
            transform: translateY(0);
        }
    }


</style>

<script>
    import $ from "jquery";

    export default {
        data() {
            return {
                sidebar_menu: true,
				sidebar_menu1: false,
            };
        },
        mounted() {},

        methods: {
            slideMenu(e) {
                this.sidebar_menu = !this.sidebar_menu;
            },
			slideMenu1(e) {
                this.sidebar_menu1 = !this.sidebar_menu1;
            },
        },
    };
</script>
