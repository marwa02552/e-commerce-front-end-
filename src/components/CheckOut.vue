<template>
  <div class="w-[400px] mt-[50px]">
    <SmallTitle :title="'CART TOTALS'" />
    <div class="flex border-b border-solid border-[#E5E5E5] justify-between py-[10px]">
      <span class="text-[#555555] font-Outfit text-[16px]">Subtotal</span>
      <span class="text-[#454545] font-[500] text-[17px]">{{ subtotal }} DZD</span>
    </div>
    <div class="flex border-b border-solid border-[#E5E5E5] justify-between py-[10px]">
      <span class="text-[#555555] font-Outfit text-[16px]">Shipping Free</span>
      <span class="text-[#454545] font-[500] text-[17px]">{{ free }} DZD</span>
    </div>
    <div class="flex justify-between py-[10px]">
      <span class="text-[#454545] font-[600] text-[16px]">Total</span>
      <span class="text-[#454545] font-[500] text-[17px]">{{ subtotal + free }} DZD</span>
    </div>
    <div class="flex justify-end">
      <Button :name="'Proceed to checkout'" />
    </div>
  </div>
</template>

<script>
import SmallTitle from "@/components/SmallTitle.vue";
import Button from "@/components/Botton.vue";
export default {
  name: "CheckOut",
  components: {
    SmallTitle,
    Button,
  },
  props: {
    subtotal: Number,
    free: Number,
  },
};
</script>
