<template>
  <div>
    <Header />
    <SmallTitle :title="'About us'" class="flex justify-center my-7 items-center" />
    <div class="my-8 flex justify-between">
      <div>
        <img src="../assets/about_img.png" alt="about" class="" />
      </div>
      <div class="mt-8 ml-6">
        <p class="text-[15px] text-[#6D6D6D] font-Outfit my-4">
          Forever was born out of a passion for innovation and a desire to revolutionize
          the way people shop online. Our journey began with a simple idea: to provide a
          platform where customers can easily discover, explore, and purchase a wide range
          of products from the comfort of their homes.
        </p>
        <p class="text-[15px] text-[#6D6D6D] font-Outfit my-4">
          ince our inception, we've worked tirelessly to curate a diverse selection of
          high-quality products that cater to every taste and preference. From fashion and
          beauty to electronics and home essentials, we offer an extensive collection
          sourced from trusted brands and suppliers
        </p>
        <h1 class="text-[18px] font-[600] font-Outfit text-[#2A2A2A]">Our Mission</h1>
        <p class="text-[15px] text-[#6D6D6D] font-Outfit my-4">
          Our mission at Forever is to empower customers with choice, convenience, and
          confidence. We're dedicated to providing a seamless shopping experience that
          exceeds expectations, from browsing and ordering to delivery and beyond.
        </p>
      </div>
    </div>

    <SmallTitle :title="'Why Choose Us'" />
    <div class="flex justify-between">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="p-[40px] border border-solid border-[#ABABAB]"
      >
        <h1 class="text-[18px] font-[600] font-Outfit text-[#2A2A2A]">
          {{ item.titel }}
        </h1>
        <p class="text-[15px] text-[#6D6D6D] font-Outfit my-4">{{ item.description }}</p>
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
  name: "AboutPage",
  components: {
    Header,
    Footer,
    SmallTitle,
    SubscribeForm,
  },
  data() {
    return {
      data: [
        {
          titel: "Quality Assurance:",
          description:
            "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
        },
        {
          titel: "Convenience: ",
          description:
            "With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
        },
        {
          titel: "Exceptional Customer Service:",
          description:
            "Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.",
        },
      ],
    };
  },
};
</script>
