<template>
  <div>
    <Header />
    <SmallTitle :title="'Contact us'" class="flex justify-center my-7 items-center" />
    <div class="flex justify-center my-[50px]">
      <img src="../assets/contact_img.png" alt="" class="w-[400px]" />
      <div class="mt-[50px] ml-[20px]">
        <h1 class="font-[600] font-Outfit text-[#4E4E4E] text-[18px]">Our Store</h1>
        <div class="my-3 flex flex-col">
          <span class="text-[15px] text-[#6D6D6D]">54709 Willms Station </span>
          <span class="text-[15px] text-[#6D6D6D]">Suite 350, Washington, USA</span>
        </div>
        <div class="my-3 flex flex-col">
          <span class="text-[15px] text-[#6D6D6D]">Tel: (415) 555‑0132</span>
          <span class="text-[15px] text-[#6D6D6D]">Email: greatstackdev@gmail.com</span>
        </div>
        <h1 class="font-[600] font-Outfit text-[#4E4E4E] text-[18px]">
          Careers at Forever
        </h1>
        <p class="text-[15px] text-[#6D6D6D] mb-7">
          Learn more about our teams and job openings.
        </p>
        <div
          class="border border-solid border-[#000000] py-3 px-7 inline hover:bg-black hover:text-white transition duration-300"
        >
          Explore Jobs
        </div>
      </div>
    </div>
    <SubscribeForm />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SmallTitle from "@/components/SmallTitle.vue";
import SubscribeForm from "@/components/SubscribeForm.vue";
export default {
  name: "ContactPage",
  components: {
    Header,
    Footer,
    SmallTitle,
    SubscribeForm,
  },
};
</script>
