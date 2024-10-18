<template>
  <div class="home">
    <Header />
    <div class="flex justify-between items-center border border-solid border-[#ADADAD] ">
      <div class="ml-[80px]">
        <div class="flex items-center justify-center">
          <div
            class="w-[40px] border-b border-solid border-[#252525] border-2 rounded-[4px] mt-2 ml-2"
          ></div>
          <span class="text-[#414141] text-[20px]">our bestsellers</span>
        </div>
        <p class="text-[40px]  text-[#414141]">Latest Arrivals</p>
        <div class="flex items-center justify-center">
          <span class="text-[#414141] text-[20px]">Shop Now</span>

          <div
            class="w-[40px] border-b border-solid border-[#252525] border-2 rounded-[4px] mt-2 ml-2"
          ></div>
        </div>
      </div>
      <div>
        <img src="../assets/header_img.png" alt="header" class="w-[650px]  h-[560px]"/>
      </div>
    </div>
    <TitelVue
      :title1="'Latest'"
      :title2="'Collections'"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
    />
    <div class="flex flex-wrap justify-center">
      <Card
        v-for="(item, index) in data"
        :key="index"
        :name="item.name"
        :price="item.price"
        :img="item.img"
      />
    </div>

    <TitelVue
      :title1="'Best'"
      :title2="'Seller'"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
    />
    <div class="flex flex-wrap justify-center">
      <Card
        v-for="(item, index) in data2"
        :key="index"
        :name="item.name"
        :price="item.price"
        :img="item.img"
      />
    </div>
    <div class="flex  justify-between  my-[100px]">
      <div
      class="flex flex-col items-center space-y-2"
      v-for="(item,index) in services" :key="index"
      >
      <img 
      class="h-[45px] w-[45px]"
      alt="services" :src="require(`../assets/${item.img}`)"/>
      <p class="text-[#373737] font-Outfit font-[600] text-[18px]">{{ item.titel }}</p>
      <p class="text-[#898989] font-Outfit">{{ item.pargh }}</p>

      </div>
    </div>
     <SubscribeFormVue/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Card from "@/components/Card.vue";
import TitelVue from "@/components/Titel.vue";
import SubscribeFormVue from "@/components/SubscribeForm.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    Card,
    TitelVue,
    SubscribeFormVue
  },
  data() {
    return {
      data: [
        {
          name: "Men Round Neck Pure Cotton T-shirt",
          price: "250",
          img: "Rectangle1.png",
        },
        {
          name: "Women Round Neck Cotton Top",
          price: "250",
          img: "Rectangle2.png",
        },
        {
          name: "Men Round Neck Pure Cotton T-shirt",
          price: "250",
          img: "Rectangle3.png",
        },
        {
          name: "Men Round Neck Pure Cotton T-shirt",
          price: "250",
          img: "Rectangle4.png",
        },
        {
          name: "Women Round Neck Cotton Top",
          price: "250",
          img: "Rectangle5.png",
        },
        {
          name: "Women Round Neck Cotton Top",
          price: "250",
          img: "Rectangle6.png",
        },
        {
          name: "Men Round Neck Pure Cotton T-shirt",
          price: "250",
          img: "Rectangle1.png",
        },
        {
          name: "Women Round Neck Cotton Top",
          price: "250",
          img: "Rectangle2.png",
        },
        {
          name: "Men Round Neck Pure Cotton T-shirt",
          price: "250",
          img: "Rectangle3.png",
        },
      ],
      data2: [
        {
          name: "Women Round Neck Cotton Top",
          price: "250",
          img: "Rectangle6.png",
        },
        {
          name: "Men Round Neck Pure Cotton T-shirt",
          price: "250",
          img: "Rectangle1.png",
        },
        {
          name: "Women Round Neck Cotton Top",
          price: "250",
          img: "Rectangle2.png",
        },
        {
          name: "Men Round Neck Pure Cotton T-shirt",
          price: "250",
          img: "Rectangle3.png",
        },
      ],
      services:[
        {
          img:'icon1.png',
          titel:'Easy Exchange Policy',
          pargh:"We offer hassle free  exchange policy"
        },
        {
          img:'icon2.png',
          titel:'7 Days Return Policy',
          pargh:"We provide 7 days free return policy "
        },
        {
          img:'icon3.png',
          titel:'Best Customer Support',
          pargh:"We provide 24/7 customer support"
        }
      ]
    };
  },
};
</script>
