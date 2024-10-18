<template>
    <div >
     <Header/>
        <div class="flex flex-row my-[60px]">
            <Gallery :images="imageGallery" class="mr-[-10px]" />
            <div>
                <ProductInfoVue 
                :name="'Men Round Neck Pure Cotton T-shirt'"
                :price ="'3500'"
                :newPrice="'2500'"
                :discount="'40'"
                :description="'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.'"
                :colors="colors"
                :selectedColor="'white'"
                :size="size"
                />
                <Botton :name="'ADD TO CART'" class="ml-[-50px]" />
                <div class="border-solid border border-[#ADADAD] mt-[40px] ml-[-50px] w-[450px]"></div>
                <p class="ml-[-50px] text-[15px] text-[#555555] mt-[30px]">
                    100% Original product.
                    <br/>
                    Cash on delivery is available on this product.
                    <br/>
                    Easy return and exchange policy within 7 days.
                </p>
            </div>

        </div>
        <Footer/>
    </div>
  </template>
  
  <script>
  import Gallery from '@/components/Gallery.vue';
import ProductInfoVue from '@/components/ProductInfo.vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Botton from "@/components/Botton.vue";

  export default {
    name: 'App',
    components: {
      Gallery,
      ProductInfoVue ,
      Header,
    Footer,
    Botton
    },
    data() {
      return {
        colors:['#A5B68D', '#BC7C7C', '#F6EFBD', '#605678'],
        size:["M","S","L","XL","XXL"],
        imageGallery: [
          {
            src: require('@/assets/Rectangle3.png'),
            thumbnail: 'Rectangle3.png', // Thumbnail URL
            width: 600, // Full image width
            height: 600,  // Full image height
            alt: 'Image 1',
          },
          {
            src: require('@/assets/Rectangle2.png'),
            thumbnail: 'Rectangle2.png',
            width: 600,
            height: 600,
            alt: 'Image 2',
          },
          {
            src: require('@/assets/Rectangle4.png'),
            thumbnail: 'Rectangle4.png',
            width: 600,
            height: 600,
            alt: 'Image 2',
          },
          {
            src: require('@/assets/Rectangle5.png'),
            thumbnail: 'Rectangle5.png',
            width: 600,
            height: 600,
            alt: 'Image 2',
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  /* Add any global styles if needed */
  </style>
  