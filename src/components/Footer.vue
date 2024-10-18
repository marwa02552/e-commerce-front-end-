<template>
  <div class="mb-6">
    <div
      class="flex justify-between border-b border-solid border-[#ADADAD] pb-4 mt-[100px]"
    >
      <div>
        <img alt="logo" src="../assets/logo1.png" class="w-[140px] mb-[20px]" />
        <p class="w-[400px] text-[#595959] text-[15px]">
          {{ text }}
        </p>
      </div>
      <div>
        <h3 class="text-[#2A2A2A] font-[600] text-[16px] mb-[20px]">Company</h3>
        <div v-for="(item, index) in link" :key="index">
          <router-link to="/" class="text-[#595959] text-[15px]">{{
            item.name
          }}</router-link>
        </div>
      </div>
      <div>
        <h3 class="text-[#2A2A2A] font-[600] text-[18px] mb-[20px]">Get in touch</h3>
        <p class="text-[#595959] text-[17px]">+1-212-456-7890</p>
        <a class="text-[#595959] text-[17px]" href="mailto:greatstackdev@gmail.com"
          >greatstackdev@gmail.com</a
        >
      </div>
    </div>
    <p class="text-[#595959] text-[16px] text-center mt-[10px]">
      Copyright 2024 © Nassane marwa- All Right Reserved.
    </p>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      link: [
        { name: "Home", link: "/" },
        { name: "About us", link: "/" },
        { name: "Delivery", link: "/" },
        { name: "Privacy policy", link: "/" },
      ],
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    };
  },
};
</script>
