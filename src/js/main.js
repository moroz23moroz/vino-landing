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
    // breakpoints: {
    //   640: {
    //     height: "6rem",
    //   },
    // },
  });
  splide.mount();
});
