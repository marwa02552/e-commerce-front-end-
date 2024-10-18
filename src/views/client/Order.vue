<template>
  <div>
    <Header />
    <SmallTitle :title="'My Order'" />
    <div>
      <div
        v-if="data.length > 0"
        class="border-b border-solid border-[#D1D1D1] pb-[20px]"
      ></div>
      <OrderRow
        v-for="(item, index) in data"
        :key="index"
        :img="item.img"
        :name="item.name"
        :price="item.price"
        :qnt="item.qnt"
        :size="item.size"
        :date="item.date"
        :state="item.state"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SmallTitle from "@/components/SmallTitle.vue";
import OrderRow from "@/components/OrdeRow.vue";
export default {
  name: "OrderPage",
  components: {
    Header,
    Footer,
    SmallTitle,
    OrderRow,
  },
  data() {
    return {
      data: [
        {
          img: "Rectangle1.png",
          name: "Men Round Neck Pure Cotton T-shirt",
          price: 2500,
          qnt: 2,
          size: "L",
          date: "25, May, 2024",
          state: "Ready to ship",
        },
        {
          img: "Rectangle2.png",
          name: "Men Round Neck Pure Cotton T-shirt",
          price: 2500,
          qnt: 2,
          size: "L",
          date: "25, May, 2024",
          state: "Ready to ship",
        },
        {
          img: "Rectangle3.png",
          name: "Men Round Neck Pure Cotton T-shirt",
          price: 2500,
          qnt: 2,
          size: "L",
          date: "25, May, 2024",
          state: "Ready to ship",
        },
        {
          img: "Rectangle4.png",
          name: "Men Round Neck Pure Cotton T-shirt",
          price: 2500,
          qnt: 2,
          size: "L",
          date: "25, May, 2024",
          state: "Ready to ship",
        },
      ],
    };
  },
};
</script>
