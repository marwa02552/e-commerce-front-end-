<template>
  <div
    class="flex items-center justify-between pr-[150px] border-b border-solid border-[#D1D1D1] pb-[20px] pt-[20px]"
  >
    <div class="flex">
      <img alt="bla bla" :src="require(`../assets/${img}`)" class="w-[110px] h-[130px]" />
      <div class="mt-[10px] ml-[15px]">
        <p class="font-[600] font-Outfit text-[#494949]">{{ name }}</p>
        <div class="flex items-center mt-[15px]">
          <p class="text-[15px] font-Outfit text-[#494949]">{{ price }} DZD</p>
          <p
            class="bg-[#EBEBEB] p-2 h-[40px] w-[50px] border border-solid border-[#ADADAD] mr-[7px] text-center text-[15px] ml-[8px]"
          >
            {{ size }}
          </p>
        </div>
      </div>
    </div>
    <div>
      <input
        value="1"
        type="number"
        class="border border-solid border-[#DFDFDF] w-[60px] h-[35px] text-center"
        min="1"
      />
    </div>
    <button>
      <Icon icon="fluent:delete-32-light" width="35" height="35" style="color: black" />
    </button>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import { Icon } from "@iconify/vue";

export default {
  name: "CartRow",
  props: {
    img: String,
    name: String,
    price: Number,
    size: String,
    Input,
  },
  components: {
    Icon,
  },
  mounted() {},
};
</script>
