<template>
  <main>
    <tiny-slider
      :options="{
        autoplay: true,
        controls: false,
        nav: false,
        autoplayButtonOutput: false,
      }"
    >
      <div id="main1">1</div>
      <div id="main2">2</div>
      <div id="main3">3</div>
    </tiny-slider>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </main>
</template>

<style lang="scss">
html,
body {
  overflow: hidden;
  height: 100vh;
  margin: 0;
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

  main {
    padding: 0;
    margin: 0;
    overflow: auto;
    height: 100vh;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory;

    div {
      scroll-snap-align: center;
      height: 100vh;
    }
  }
}
.tns-item {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  &#main1 {
    background-image: url("~/assets/main1.png");
  }
  &#main2 {
    background-image: url("~/assets/main2.png");
  }
  &#main3 {
    background-image: url("~/assets/main3.png");
  }
}
</style>
