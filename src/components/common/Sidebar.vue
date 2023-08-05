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
                    <div class="card mb-3" v-for="(item, index) in this.folder" :key="index">
                        <div class="card-body py-2">


                            {{formattedDate}}
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

export default {

    data(){
        return{
            folders : {}
        }
    },

    components: {VueFeather},
    computed:{
        ...mapGetters(['folder']),

        formattedDate() {

            const abc = this.folder.map(item => {
                return{
                    ...item,
                    createdTime: moment(item.createdTime).format('DD-MM-YYYY hh:mm:ss'),
                }
            })
            return abc
            // return moment(this.folder.createdTime).format('DD/MM/YYYY hh:mm:ss');
        }
    },
}
</script>
<style lang="scss">
    
</style>