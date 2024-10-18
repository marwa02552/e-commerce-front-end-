<template>
  <div>
    <input
      :style="{ width: width }"
      :type="type"
      :placeholder="placeholder"
      class="border border-solid border-[#C5C5C5] my-[10px] h-[35px] p-1 focus:outline-none text-[15px] text-[#4E4E4E] rounded-[4px]"
    />
  </div>
</template>

<script>
export default {
  name: "InputComp",
  props: {
    type: String,
    placeholder: String,
    width: String,
  },
};
</script>
