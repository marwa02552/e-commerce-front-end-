<template>
  <div>
    <Header />
    <SmallTitle :title="'Your Cart'" />
    <div>
      <div
        v-if="data.length > 0"
        class="border-b border-solid border-[#D1D1D1] pb-[20px]"
      ></div>
      <CartRow
        v-for="(item, index) in data"
        :key="index"
        :img="item.img"
        :name="item.name"
        :price="item.price"
        :size="item.size"
      />
    </div>
    <div class="flex justify-end">
      <CheckOut :subtotal="totalPrice" :free="10" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SmallTitle from "@/components/SmallTitle.vue";
import CartRow from "../../components/CartRow.vue";
import CheckOut from "../../components/CheckOut.vue";
export default {
  name: "CartPage",
  components: {
    Header,
    Footer,
    SmallTitle,
    CartRow,
    CheckOut,
  },
  data() {
    return {
      totalPrice: 0,
      data: [
        {
          img: "Rectangle2.png",
          name: "Men Round Neck Pure Cotton T-shirt",
          price: 2500,
          size: "L",
        },
        {
          img: "Rectangle3.png",
          name: "Men Round Neck Pure Cotton T-shirt",
          price: 2500,
          size: "L",
        },
        {
          img: "Rectangle4.png",
          name: "Men Round Neck Pure Cotton T-shirt",
          price: 2500,
          size: "L",
        },
        {
          img: "Rectangle5.png",
          name: "Men Round Neck Pure Cotton T-shirt",
          price: 2500,
          size: "L",
        },
      ],
    };
  },
  mounted() {
    this.totalPrice = this.data.reduce((sum, item) => sum + item.price, 0);
  },
};
</script>
