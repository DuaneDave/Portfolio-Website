/** @format */
const harmburger = document.querySelector('.harmburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const modal = document.querySelector('.modal');
const modalTrigger = document.querySelectorAll('.modal-trigger');
const wrapper = document.getElementById('wrapper');
const noScroll = document.querySelector('body');

const projects = [
  {
    id: 'project1',
    title: [
      'Multi-Post Stories',
      'Keeping track of hundreds of components website',
    ],
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    ],
    link: [
      'https://duanedave.github.io/Portfolio-Website/',
      'https://github.com/DuaneDave/Portfolio-Website',
    ],
    technologies: ['html', 'bootstrap', 'ruby on rails'],
    imgSrc: ['asset/popup.png', 'my project'],
  },
];

harmburger.addEventListener('click', () => {
  navMenu.classList.toggle('slide');
  harmburger.classList.toggle('slide');
});

navLink.forEach((n) => {
  n.addEventListener('click', () => {
    harmburger.classList.remove('slide');
    navMenu.classList.remove('slide');
  });
});

function createModal() {
  const width = window.innerWidth;
  modal.innerHTML = `
  <div class="modal-head">
    <h2>${width < 1080 ? projects[0].title[0] : projects[0].title[1]}</h2>
    <div class="btn-group flex">
      <button class="btn">${projects[0].technologies[0]}</button>
      <button class="btn">${projects[0].technologies[1]}</button>
      <button class="btn">${projects[0].technologies[2]}</button>
    </div>
  </div>

  <div class="modal-content flex">
  <img src="${projects[0].imgSrc[0]}" alt="${projects[0].imgSrc[1]}" />
  <div class="modal-details flex">
  <p class="modal-content">${
  width < 1080 ? projects[0].description[0] : projects[0].description[1]
}</p>
  <div class="modal-actions flex">
  <button class="special">
  <a href="${
  projects[0].link[0]
}" class="flex">See live <img src="asset/see.png" /></a>
  </button>
  <button class="special flex"><a href="${
  projects[0].link[1]
}" class="flex">See source <img src="asset/linkgit.png" /></a>
  </button>
  </div>
  </div>
  </div>
  <div class="btn-close">X</div>
  `;
}

modalTrigger.forEach((n) => n.addEventListener('click', () => {
  createModal();
  modal.classList.add('active');
  wrapper.classList.add('blur');
  noScroll.classList.add('no-scroll');
  const btnClose = document.querySelector('.btn-close');

  btnClose.addEventListener('click', () => {
    modal.classList.remove('active');
    wrapper.classList.remove('blur');
    noScroll.classList.remove('no-scroll');
  });
}));
