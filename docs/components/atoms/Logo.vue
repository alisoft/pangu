<template>
  <div class="inline-flex items-center space-x-3">
    <svg viewBox="0 0 238 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8" @click="home">
      <g id="pangu-dev-logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="wrapper-outer" fill="#FFFFFF" x="0" y="0.5" width="238" height="65"></rect>
        <text id="pangu" font-family="HannotateSC-W7, Hannotate SC" font-size="60" font-weight="bold" fill="#0091FF">
          <tspan x="67.5" y="44">pangu</tspan>
        </text>
        <g id="编组" transform="translate(4.846154, 4.612179)">
          <g id="wrapper-inner" transform="translate(0.153846, 0.387821)">
            <ellipse id="outer" fill="#0091FF" cx="27.4618056" cy="28.4666667" rx="27.3090278" ry="27.8055556"></ellipse>
            <ellipse id="inner" fill="#FFFFFF" cx="27.4618056" cy="28.4666667" rx="18.3715278" ry="18.7055556"></ellipse>
          </g>
          <rect id="left" fill="#0091FF" x="0.153846154" y="28.3878205" width="9" height="28"></rect>
          <rect id="right" fill="#0091FF" x="46.1538462" y="1.38782051" width="9" height="27"></rect>
        </g>
      </g>
    </svg>
    <span class="inline-flex items-center mt-1.2 px-2 py-0.5 rounded text-xs font-medium font-mono bg-cloud-surface dark:bg-sky-dark dark:text-white">DEV</span>
  </div>
</template>

<script>
export default {
  methods: {
    home () {
      if (this.$route.path === '/') {
        // scroll to top
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>
