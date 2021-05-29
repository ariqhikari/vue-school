<template>
  <div>
    <a
      :href="`#${to}`"
      class="scroll-button d-none d-lg-block"
      @mouseover="makePolygon"
      @mouseleave="makeRectangle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 33 33"
      >
        <path
          class="rectangle"
          d="M0,0H28V28H0Z"
          transform="translate(2.5 2.5)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
      </svg>
    </a>
    <a :href="`#${to}`" class="scroll-button d-lg-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 33 33"
      >
        <path
          class="rectangle"
          d="M0,0H28L14.959,28h-.376Z"
          transform="translate(2.5 2.5)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
      </svg>
    </a>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "ScrollButton",
  data() {
    return {
      rectanglePath: "M0,0H28V28H0Z",
      polygonPath: "M0,0H28L14.959,28h-.376Z",
    };
  },
  props: ["to"],
  methods: {
    makePolygon() {
      const timeline = anime.timeline({
        duration: 500,
        easing: "easeOutExpo",
      });
      timeline
        .add({
          targets: ".rectangle",
          d: [
            {
              value: this.polygonPath,
            },
          ],
        })
        .add({
          targets: ".scroll-button",
          opacity: 1,
          scale: 1.25,
        });
    },
    makeRectangle() {
      const timeline = anime.timeline({
        duration: 500,
        easing: "easeOutExpo",
      });
      timeline
        .add({
          targets: ".rectangle",
          d: [
            {
              value: this.rectanglePath,
            },
          ],
        })
        .add({
          targets: ".scroll-button",
          opacity: 0.75,
          scale: 1,
        });
    },
  },
};
</script>

<style>
</style>