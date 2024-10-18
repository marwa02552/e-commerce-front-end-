<template>
  <div class="flex items-center mb-[25px]">
    <span class="text-[#414141] text-[20px] font-prata">{{ title }}</span>
    <div
      class="w-[40px] border-b border-solid border-[#484848] border-2 rounded-[4px] mt-[2px] ml-1"
    ></div>
  </div>
</template>
<script>
export default {
  name: "SmallTitel",
  props: {
    title: String,
  },
};
</script>
