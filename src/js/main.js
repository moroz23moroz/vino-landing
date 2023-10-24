window.addEventListener("DOMContentLoaded", () => {
  const splide = new Splide(".splide", {
    type: "loop",
    pagination: false,
    arrows: false,
    autoplay: true,
    perPage: 3,
    gap: 30,
    focus: "center",
    height: "660px",
    fixedWidth: "990px",
    padding: "40%",
    interval: 2000,
    breakpoints: {
      1100: {
        height: "360px",
        fixedWidth: "540px",
      },
      650: {
        gap: 20,
        padding: "20%",
        fixedWidth: "280px",
        height: "180px",
      },
      450: {
        perPage: 2,
        focus: "none",
      },
      325: {
        padding: "10%",
        gap: 15,
        perPage: 1,
      },
    },
  });
  splide.mount();
});
