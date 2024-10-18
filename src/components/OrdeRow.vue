<template>
  <div
    class="flex items-center justify-between border-b border-solid border-[#D1D1D1] pb-[20px] pt-[20px]"
  >
    <div class="flex">
      <img :src="require(`../assets/${img}`)" class="w-[110px] h-[130px]" />
      <div class="mt-[10px] ml-[15px]">
        <p class="font-[600] font-Outfit text-[#494949]">{{ name }}</p>
        <div>
          <span class="text-[16px] font-Outfit text-[#494949] mr-[10px]"
            >{{ price }} DZD</span
          >
          <span class="text-[16px] font-Outfit text-[#494949] mr-[10px]"
            >Quantity :{{ qnt }}</span
          >
          <span class="text-[16px] font-Outfit text-[#494949]">Size: {{ size }}</span>
        </div>
        <p>
          <span class="text-[15px] font-Outfit text-[#494949] font-[600]">Date :</span
          ><span class="text-[15px] font-Outfit text-[#494949]">{{ date }}</span>
        </p>
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="h-[15px] w-[15px] border border-solid rounded-[50px] bg-[#ff0000] mr-[4px]"
      ></div>

      <span class="text-[#454545] font-Outfit text-[18px]"> {{ state }}</span>
    </div>
    <div>
      <botton
        class="border border-solid border-[#BABABA] rounded-[5px] bg-white text-[#454545] py-[7px] px-[20px]"
        >Track Order</botton
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderRow",
  props: {
    img: String,
    name: String,
    price: Number,
    qnt: Number,
    size: String,
    date: String,
    state: String,
  },
};
</script>
