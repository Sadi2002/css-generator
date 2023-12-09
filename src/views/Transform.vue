<template>
  <Navbar :transformTitle="title" />
  <div class="transform-container">
    <div class="transform-row">
      <div class="transform-settings">
        <h2 class="settings-title">CSS transform</h2>
        <div class="generator-inputs">
          <div class="inputItem">
            <div class="inputItem-row">
              <label>scale:</label>
              <span class="inputItem-num">{{ scale }}</span>
            </div>
            <input type="range" min="0" max="2" step="0.1" v-model="scale" />
          </div>
          <div class="inputItem">
            <div class="inputItem-row">
              <label>rotate:</label>
              <span class="inputItem-num">{{ rotate }}</span>
            </div>
            <input type="range" min="0" max="360" v-model="rotate" />
          </div>
          <div class="inputItem">
            <div class="inputItem-row">
              <label>translate X:</label>
              <span class="inputItem-num">{{ translateX }}</span>
            </div>
            <input type="range" min="-100" max="100" v-model="translateX" />
          </div>
          <div class="inputItem">
            <div class="inputItem-row">
              <label>translate Y:</label>
              <span class="inputItem-num">{{ translateY }}</span>
            </div>
            <input type="range" min="-100" max="100" v-model="translateY" />
          </div>
          <div class="inputItem">
            <div class="inputItem-row">
              <label>skew X:</label>
              <span class="inputItem-num">{{ skewX }}</span>
            </div>
            <input type="range" min="-100" max="100" v-model="skewX" />
          </div>
          <div class="inputItem">
            <div class="inputItem-row">
              <label>skew Y:</label>
              <span class="inputItem-num">{{ skewY }}</span>
            </div>
            <input type="range" min="-100" max="100" v-model="skewY" />
          </div>
        </div>
      </div>
      <div class="transform-result">
        <div
          :style="{
            transform: `scale(${scale}) rotate(${rotate}deg) translateX(${translateX}px) translateY(${translateY}px) skewX(${skewX}deg) skewY(${skewY}deg)`,
          }"
          class="square"
        ></div>
      </div>
    </div>
    <div class="transform-code">
      <div class="code-box">
        <div class="code-title">CSS code</div>
        <div class="copy-code">
          <div v-if="isChecking" @click="copyCode" class="copy">Copy</div>
          <div v-else class="copy-check"><i class="fas fa-check"></i></div>
        </div>
      </div>
      <div class="code">
        <div ref="codeContent" class="code-content" id="codeContent">
          <p>
            -webkit-transform: scale({{ scale }}) rotate({{ rotate }}deg)
            translate({{ translateX }}px, {{ translateY }}px) skew({{
              skewX
            }}deg, {{ skewY }}deg);
          </p>
          <p>
            -moz-transform: scale({{ scale }}) rotate({{ rotate }}deg)
            translate({{ translateX }}px, {{ translateY }}px) skew({{
              skewX
            }}deg, {{ skewY }}deg);
          </p>
          <p>
            -ms-transform: scale({{ scale }}) rotate({{ rotate }}deg)
            translate({{ translateX }}px, {{ translateY }}px) skew({{
              skewX
            }}deg, {{ skewY }}deg);
          </p>
          <p>
            -o-transform: scale({{ scale }}) rotate({{ rotate }}deg)
            translate({{ translateX }}px, {{ translateY }}px) skew({{
              skewX
            }}deg, {{ skewY }}deg);
          </p>
          <p>
            transform: scale({{ scale }}) rotate({{ rotate }}deg) translate({{
              translateX
            }}px, {{ translateY }}px) skew({{ skewX }}deg, {{ skewY }}deg);
          </p>
        </div>
      </div>
    </div>
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
    const scale = ref(1);
    const rotate = ref(0);
    const translateX = ref(0);
    const translateY = ref(0);
    const skewX = ref(0);
    const skewY = ref(0);
    const isChecking = ref(true);

    const copyCode = () => {
      const codeContent = document.getElementById("codeContent"); // ID diva z treścią
      const range = document.createRange();
      range.selectNode(codeContent);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
      isChecking.value = false;
    };

    return {
      title,
      scale,
      rotate,
      translateX,
      translateY,
      skewX,
      skewY,
      copyCode,
      isChecking,
    };
  },
};
</script>
