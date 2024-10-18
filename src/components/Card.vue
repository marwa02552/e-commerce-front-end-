<template>
  <div class="m-[10px]">
    <img
      alt="product"
      :src="require(`../assets/${img}`)"
      class="w-[240px] h-[280px] mb-[25px]"
    />
    <p class="text-[#494949] text-[15px] font-[500]">{{ name }}</p>
    <p class="text-[#494949] text-[15px] font-[400]">{{ price }} DZD</p>
  </div>
</template>
<script>
export default {
  name: "CardComp",
  props: {
    img: String,
    name: String,
    price: Number,
  },
};
</script>
