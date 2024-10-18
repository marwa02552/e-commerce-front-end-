<template>
  <div>
    <Header />
    <div class="flex flex-col items-center mt-[80px]">
      <SmallTitle :title="'Sign up'" />
      <Input :type="'text'" :placeholder="'User Name'" :width="'350px'" />
      <Input :type="'email'" :placeholder="'Email'" :width="'350px'" />
      <Input :type="'password'" :placeholder="'Password'" :width="'350px'" />
      <Botton :name="'Create'" />
    </div>
    <SubscribeFormVue />
    <Footer />
  </div>
</template>

<script>
import Botton from "@/components/Botton.vue";
import SmallTitle from "@/components/SmallTitle.vue";
import Input from "@/components/Input.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SubscribeFormVue from "@/components/SubscribeForm.vue";
export default {
  name: "registerView",
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
