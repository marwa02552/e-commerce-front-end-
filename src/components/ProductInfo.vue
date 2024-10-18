<template>
  <div class="ml-[-50px] mt-[20px]">
    <p class="text-[20px] text-[#3D3D3D] font-Outfit font-[700] mb-[20px]">
      {{ name }}
    </p>
    <div class="mb-[15px]">
      <span
        class="mr-1"
        :class="
          newPrice
            ? 'text-[#3D3D3D] line-through text-[15px]'
            : 'text-[#2A2A2A]  text-[17px]'
        "
        >{{ price }} DZD</span
      >
      <span class="mr-1 text-[#2A2A2A] text-[16px]">{{ newPrice }}DZD</span>
      <span :class="newPrice ? 'text-red-500 text-[15px]' : 'hidden'"
        >{{ discount }} % off</span
      >
    </div>
    <p class="text-[#555555] text-[15px] mb-[10px]">{{ description }}</p>
    <p class="text-[#555555] font-Outfit">
      <span class="font-[700] text-[17px]">Colors:</span
      ><span> {{ selectedColor }}</span>
    </p>
    <div class="flex flex-row my-[10px]">
      <div
        v-for="(item, index) in colors"
        :key="index"
        class="relative w-[30px] h-[30px] border border-solid rounded-full mr-[4px] p-1 shadow-2xl"
        :style="{ backgroundColor: item }"
      ></div>
    </div>
    <p class="font-[700] text-[17px] text-[#555555] font-Outfit">Select Size</p>
    <div class="flex flex-row my-[10px]">
        <div
        class="bg-[#EBEBEB] p-2 h-[40px] w-[50px] border border-solid border-[#ADADAD] mr-[7px] text-center text-[15px]"
         v-for="(item,index) in size" :key="index">
            {{ item }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  props: {
    name: String,
    price: Number,
    newPrice: Number,
    discount: Number,
    description: String,
    colors: [String],
    selectedColor: String,
    size:[String]
  },
};
</script>
