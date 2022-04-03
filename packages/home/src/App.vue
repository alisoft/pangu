<template>
  <video-background :sources="['/video/timelapse.mp4']" img="/img/bg.jpeg">
    <!-- Our Nav Bar Component and Side Menu -->
    <nav-bar />
    <!-- Main Content and Buttons -->
    <intro-section />
    <!-- Footer -->
    <footer-section />
  </video-background>
</template>

<script lang="ts">
// Import our components from component directory
import VideoBackground from "./components/VideoBackground.vue";
import NavBar from "./components/Nav/NavBar.vue";
import IntroSection from "./components/Intro/IntroSection.vue";
import Footer from "./components/Footer.vue";

// Use our components in our App.vue template
export default {
  components: {
    IntroSection,
    NavBar,
    FooterSection: Footer,
    VideoBackground,
  },
};
</script>
