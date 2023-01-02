const speakersContainer = document.querySelector(".speakersContainer");
const moreBtn = document.querySelector(".more");
const joinBtn = document.querySelector(".join-btn");
const lessBtn = document.querySelector(".less");

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

speakerCreator();

moreBtn.addEventListener("click", () => {
  moreBtn.classList.add("close");
  lessBtn.classList.add("open-page2");
  speakersContainer.innerHTML = "";
  speakerCreator();
});

lessBtn.addEventListener("click", () => {
  moreBtn.classList.remove("close");
  lessBtn.classList.remove("open-page2");
  speakersContainer.innerHTML = "";
  speakerCreator();
});

joinBtn.addEventListener("click", () => {
  console.log("click");
});

function speakerCreator() {
  speakers.forEach((speaker, index) => {
    const { name, description, speakerImage, publish } = speaker;

    if (moreBtn.classList.contains("close") || index < 2) {
      speakersContainer.innerHTML += `
      
      <div class="speaker-container">
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
</div>`;
    }
  });
}
