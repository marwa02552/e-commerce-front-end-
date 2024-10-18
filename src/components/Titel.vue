<template>
    <div class="text-center my-[30px]">
        <div class="text-[28px] flex items-center justify-center" >
            <span class="text-[#707070] mr-2">{{ title1 }}</span>
            <span class="text-[#343434] font-[500]">{{ title2 }}</span>
            <div class="w-[40px] border-b border-solid  border-[#252525] border-2 rounded-[4px] mt-2 ml-2"></div>
        </div>
        <p class="text-[14px] text-[#868686]">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name:"TitelComp",
    props:{
        title1:String,
        title2:String,
        description:String
    }
}
</script>