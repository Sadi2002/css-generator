<template>
  <Navbar :transformTitle="title" />
  <div class="transform-container">
    <div class="transform-settings"></div>
    <div class="transform-result"></div>
    <div class="transform-code"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Transform",
  components: { Navbar },
  setup() {
    const title = ref("transform");

    return {
      title,
    };
  },
};
</script>
