<template>
  <nav class="navigation">
    <h3 class="navigation-logo"><span>css </span>generator</h3>
    <div @click="openNavigation" class="navigation-bar">
      <span ref="bar"></span>
    </div>
    <div :class="{ open: isOpen }" class="navigation-open">
      <ul class="navigation-open__container">
        <li><a href="#" class="navigation-open__btn active">Transform</a></li>
        <li><a href="#" class="navigation-open__btn">Box shadow</a></li>
        <li><a href="#" class="navigation-open__btn">Border radius</a></li>
        <li><a href="#" class="navigation-open__btn">Gradient</a></li>
      </ul>
    </div>
  </nav>
  <section class="section-content">
    <h1 class="section-title">
      {{ transformTitle.charAt(0).toUpperCase() + transformTitle.slice(1) }}
      Generator
    </h1>
    <p class="section-description">
      An easy to use tool that allows you to generate ready CSS rules. Adjust
      {{ transformTitle }}
      values and copy the ready code.
    </p>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["transformTitle"],
  setup() {
    const isOpen = ref(false);
    const bar = ref(null);

    const openNavigation = () => {
      isOpen.value = !isOpen.value;
      bar.value.classList.toggle("close");
    };
    return { openNavigation, isOpen, bar };
  },
};
</script>

<style>
.navigation-logo {
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  font-size: 16px;
}

.navigation-logo span {
  color: rgb(86, 171, 86);
}

.navigation {
  background-color: #1f2024;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.056);
}

.navigation-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  z-index: 9;
}

.navigation-bar span {
  display: flex;
  position: relative;
  width: 30px;
  height: 2px;
  background-color: #f5f5f5;
  transition: all 0.3s;
}
.navigation-bar span::before,
.navigation-bar span::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  background-color: #f5f5f5;
  top: -9px;
}
.navigation-bar span::after {
  top: 9px;
}

.section-content {
  background-color: #1f2024;
  padding: 20px;
}

.section-title,
.section-description {
  color: #f5f5f5;
  font-weight: 400;
}
.section-description {
  line-height: 1.7em;
  font-size: 16px;
  margin-bottom: 1.6rem;
}

.section-title {
  margin-bottom: 20px;
  font-size: 32px;
}

.navigation-open {
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #1f2024;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  overflow: hidden;
}
.navigation-open.open {
  opacity: 1;
  visibility: visible;
}

.close {
  width: 30px;
  height: 2px;
  background-color: #f5f5f5;
  transform: rotate(45deg);
  position: absolute;

  transition: all 0.3s;
}

.navigation-bar span.close::before {
  content: "";
  position: absolute;
  transform: rotate(90deg);
  width: 100%;
  height: 2px;
  background-color: #f5f5f5;
  top: 0;
}

.close::after {
  opacity: 0;
}

.navigation-open__container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 200px;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  gap: 20px;
}

.navigation-open__container li {
  width: 46%;
}

.navigation-open__btn {
  width: 100%;
  height: 50px;
  border: 2px solid rgb(86, 171, 86);
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
}

.navigation-open__btn.active {
  background-color: rgb(86, 171, 86);
  color: #fff;
}
</style>
