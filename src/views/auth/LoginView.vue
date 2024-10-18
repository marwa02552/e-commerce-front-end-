<template>
  <div>
    <Header />
    <div class="flex flex-col justify-items-center items-center mt-[80px]">
      <SmallTitle :title="'Login'" />
      <Input :type="'email'" :placeholder="'Email'" :width="'350px'" />
      <Input :type="'password'" :placeholder="'Password'" :width="'350px'" />
      <Botton :name="'Sign in'" />
    </div>
    <SubscribeFormVue />
    <Footer />
  </div>
</template>
<script>
import Input from "@/components/Input.vue";
import Botton from "@/components/Botton.vue";
import SmallTitle from "@/components/SmallTitle.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SubscribeFormVue from "@/components/SubscribeForm.vue";

export default {
  name: "loginView",
  components: {
    Input,
    Botton,
    SmallTitle,
    Header,
    Footer,
    SubscribeFormVue,
  },
};
</script>
