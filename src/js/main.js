window.addEventListener("DOMContentLoaded", () => {
  const splide = new Splide(".splide", {
    type: "loop",
    pagination: false,
    arrows: false,
    autoplay: true,
    perPage: 3,
    focus: "center",
    height: "660px",
    fixedWidth: "990px",
    gap: 30,
    padding: "40%",
    interval: 2000,
    breakpoints: {
      1100: {
        height: "360px",
        fixedWidth: "540px",
      },
      675: {
        perPage: 1,
        gap: 20,
      },
      // 375: {
      //   height: "180px",
      // },
    },
  });
  splide.mount();
});
