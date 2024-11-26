<template>
   <TelInput ref="phone" isApproveMode label="test" v-model="phone" @submit="submit" @cancel="cancel" classWrapper="max-w-[360px] z-50 relative"/>

</template>
<script>
import Button from "./components/Button.vue";

import TelInput from "./components/TelInput.vue";

export default{
    components:{
        TelInput
    },

    data(){
        return{
            phone : '+380638780097'
        }
    },
    methods:{
        submit(e){
            console.log('submit')
        },
        cancel(e){
            console.log('cancel')
              this.phone = '+380638780097'
        }
    },
    watch:{
        phone(val){
            console.log('app-phone', this.phone)
          
        },
    }
}
</script>
<style lang="scss">
#app{
    width: 100%;
    min-height: 100vh;
    @apply justify-center items-center bg-gray-800 flex;
}
</style>
