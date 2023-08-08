<template>
    <section>
        <div class="bg-white container-fluid">
            <div class="d-flex justify-content-between align-items-center" style="height: 78px;">
                <div>&nbsp;</div>
                <div>
                    <ul class="list-inline mb-0 d-flex align-items-center">
                        <li class="list-inline-item px-3 d-flex">
                            <router-link to="/"><VueFeather type="home" stroke-width="1"></VueFeather></router-link>
                        </li>
                        <li class="list-inline-item px-3">GIỚI THIỆU</li>
                        <li class="list-inline-item px-3">TRUYỀN THÔNG</li>
                    </ul>
                </div>
                <div class="d-flex align-items-center">
                    <ul class="list-inline mb-0 d-flex align-items-center">
                        <li class="list-inline-item px-1 d-flex">
                            <VueFeather type="bell" size="22" stroke-width="1"></VueFeather>
                        </li>
                        <li class="list-inline-item px-1 d-flex">
                            <VueFeather type="message-square" size="22" stroke-width="1"></VueFeather>
                        </li>
                        <li class="list-inline-item px-1 d-flex">
                            <VueFeather type="search" size="22" stroke-width="1"></VueFeather>
                        </li>
                        <li class="list-inline-item px-1">
                            <div class="bg-danger rounded-circle overflow-hidden" style="width: 36px; height:36px">
                                <img src="/assets/images/profile.jpg" class="w-100" alt="" srcset="">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import VueFeather from 'vue-feather';
export default {
    components: {VueFeather}
}
</script>
<style lang="scss">
    
</style>