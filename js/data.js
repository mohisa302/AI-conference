const speakersContainer = document.querySelector(".speakersContainer");
const moreBtn = document.querySelector(".more");
const lessBtn = document.querySelector(".less");
const pageHome = document.querySelector(".home-page");

const speakers = [
  {
    id: 0,
    name: "Yochai Benkler",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe",
    speakerImage: "./img/speaker_01.png",
    publish:
      "Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun",
  },
  {
    id: 1,
    name: "Kilman Chon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe",
    speakerImage: "./img/speaker_02.png",
    publish:
      "Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun",
  },
  {
    id: 3,
    name: "SohYeong Noh",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe",
    speakerImage: "./img/speaker_03.png",
    publish:
      "Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun",
  },
  {
    id: 4,
    name: "Julia Leda",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe",
    speakerImage: "./img/speaker_04.png",
    publish:
      "Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun",
  },
  {
    id: 5,
    name: "Lila Tretikov",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe",
    speakerImage: "./img/speaker_05.png",
    publish:
      "Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun",
  },
  {
    id: 6,
    name: "Ryan Markely",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximenatus esse saepe",
    speakerImage: "./img/speaker_06.png",
    publish:
      "Lorem s ex corporis ratione voluptatem enim vel voluptas maximefacere incidun",
  },
];

function speakerCreator() {
  let speakerClass = "";

  speakers.forEach((speaker, index) => {
    const { name, description, speakerImage, publish } = speaker;

    //Adding to other speakers another class
    if (index > 1) speakerClass = "device-state";
    else speakerClass = "";

    // if (moreBtn.classList.contains("close")) {
    speakersContainer.innerHTML += `
      <div class="speaker-container ${speakerClass} ">
      <img
      class="speaker-img"
      src=${speakerImage}
      alt="speaker's image"
      />
      <div class="speaker-des">
      <h3>${name}</h3>
      <p class="speaker-text1">${description}</p>
      <hr class="line2" />
      <p class="speaker-text2">${publish}</p>
      </div>
      </div>
      `;
    // }
  });
}

speakerCreator();
const speakerApear = document.querySelectorAll(".device-state");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.add("close");
  lessBtn.classList.add("open-btn");
  speakerApear.forEach((speaker) => {
    speaker.classList.add("open");
  });
});

lessBtn.addEventListener("click", () => {
  moreBtn.classList.remove("close");
  lessBtn.classList.remove("open-btn");
  speakerApear.forEach((speaker) => {
    speaker.classList.remove("open");
  });
});
