import { Carousel } from "flowbite";

const itemsSrek = [
  {
    position: 0,
    el: document.getElementById("carousel-item-1"),
  },
  {
    position: 1,
    el: document.getElementById("carousel-item-2"),
  },
  {
    position: 2,
    el: document.getElementById("carousel-item-3"),
  },
  {
    position: 3,
    el: document.getElementById("carousel-item-4"),
  },
  {
    position: 4,
    el: document.getElementById("carousel-item-5"),
  },
];

const options = {
  defaultPosition: 3,
  interval: 13000,

  indicators: {
    activeClasses: "bg-white dark:bg-gray-800",
    inactiveClasses:
      "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
    items: [
      {
        position: 0,
        el: document.getElementById("carousel-indicator-1"),
      },
      {
        position: 1,
        el: document.getElementById("carousel-indicator-2"),
      },
      {
        position: 2,
        el: document.getElementById("carousel-indicator-3"),
      },
      {
        position: 3,
        el: document.getElementById("carousel-indicator-4"),
      },
      {
        position: 4,
        el: document.getElementById("carousel-indicator-5"),
      },
    ],
  },
};

const carousel = new Carousel(itemsSrek, options);

carousel.cycle();
