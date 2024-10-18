<template>
  <div>
    <Header />
    <SmallTitle :title="'Delivery Information'" />
    <div class="flex justify-between pr-[50px] pl-[30px]">
      <div>
        <div class="flex">
          <Input
            :type="'text'"
            :placeholder="'First name'"
            :width="'200px'"
            class="mr-[10px]"
          />
          <Input :type="'text'" :placeholder="'Last name'" :width="'200px'" />
        </div>
        <Input :type="'email'" :placeholder="'Email address'" :width="'410px'" />
        <Input :type="'text'" :placeholder="'Street'" :width="'410px'" />
        <div class="flex">
          <Input
            :type="'text'"
            :placeholder="'City'"
            :width="'200px'"
            class="mr-[10px]"
          />
          <Input :type="'text'" :placeholder="'State'" :width="'200px'" />
        </div>
        <div class="flex">
          <Input
            :type="'text'"
            :placeholder="'Zip code'"
            :width="'200px'"
            class="mr-[10px]"
          />
          <Input :type="'text'" :placeholder="'Country'" :width="'200px'" />
        </div>
        <Input :type="'text'" :placeholder="'Phone'" :width="'410px'" />
      </div>
      <div class="mt-[-70px]">
        <CheckOut :subtotal="10000" :free="10" />
        <SmallTitle :title="'Payment Method'" class="mt-[25px]" />
        <div class="flex">
          <div
            class="flex border border-solid border-[#B3B3B3] py-[5px] px-[10px] mr-[10px]"
          >
            <input type="radio" name="payment" value="strip" checked />
            <img alt="strip" src="@/assets/stripe_logo.png" />
          </div>
          <div
            class="flex border border-solid border-[#B3B3B3] py-[5px] px-[10px] mr-[10px]"
          >
            <input type="radio" name="payment" value="razorpay" checked />
            <img alt="strip" src="@/assets/razorpay_logo.png" />
          </div>
          <div
            class="flex border border-solid border-[#B3B3B3] items-center py-[5px] px-[10px]"
          >
            <input type="radio" name="payment" value="strip" checked />
            <p class="text-[15px] ml-[5px] text-[#A6A6A6]">CASH ON DELIVERY</p>
          </div>
        </div>
        <Button :name="'Place Order'" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SmallTitle from "@/components/SmallTitle.vue";
import Input from "@/components/Input.vue";
import CheckOut from "@/components/CheckOut.vue";
import Button from "@/components/Botton.vue";

export default {
  name: "PaymentPage",
  components: {
    Header,
    Footer,
    SmallTitle,
    Input,
    CheckOut,
    Button,
  },
};
</script>
