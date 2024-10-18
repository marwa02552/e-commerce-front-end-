<template>
  <div
    class="flex flex-row justify-between items-center my-[15px] border-b border-solid border-[#ADADAD] pb-2"
  >
    <div>
      <img src="../assets/logo1.png" alt="logo" class="w-[150px]" />
    </div>
    <div>
      <router-link class="mx-3 text-[16x]" to="/">Home</router-link>
      <router-link class="mx-3 text-[16px]" to="/">Collection</router-link>
      <router-link class="mx-3 text-[16px]" to="/">About</router-link>
      <router-link class="mx-3 text-[16px]" to="/">Contact</router-link>
    </div>
    <div class="flex">
      <Icon class="mx-3" icon="material-symbols-light:search" width="30" height="30" />
      <Icon
        class="mx-3"
        icon="material-symbols-light:shopping-bag-outline"
        width="30"
        height="30"
      />
      <Icon class="mx-3" icon="circum:user" width="30" height="30" />
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "HeaderComp",
  components: {
    Icon,
  },

  mounted() {},
};
</script>
<style></style>
