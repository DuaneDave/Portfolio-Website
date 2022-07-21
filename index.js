/** @format */
const harmburger = document.querySelector('.harmburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const panel = document.querySelector('.showcase');
const form = document.querySelector('form');
const email = document.getElementById('email');
const error = document.getElementById('error');

const project = [
  {
    id: 1,

    title: 'Data Dashboard Healthcare',

    description: {
      summary:
        'A daily selection of privately personalise reads; no accounts or sign-ups required. has been the industry standard',

      fullText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        small:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    link: {
      seeLive: 'https://duanedave.github.io/Portfolio-Website/',
      sources: 'https://github.com/DuaneDave/Portfolio-Website',
    },
    technologies: {
      html: 'html',
      bootstrap: 'bootstrap',
      ror: 'ruby on rails',
    },
    imgSrc: 'asset/popup.png',
  },

  {
    id: 2,

    title: 'Website Portfolio',

    description: {
      summary:
        'A daily selection of privately personalise reads; no accounts or sign-ups required. has been the industry standard',

      fullText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        small:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    link: {
      seeLive: 'https://duanedave.github.io/Portfolio-Website/',
      sources: 'https://github.com/DuaneDave/Portfolio-Website',
    },
    technologies: {
      html: 'html',
      bootstrap: 'bootstrap',
      ror: 'ruby on rails',
    },
    imgSrc: 'asset/popup.png',
  },

  {
    id: 3,

    title: 'Proffesional Art Printing Data More',

    description: {
      summary:
        'A daily selection of privately personalise reads; no accounts or sign-ups required. has been the industry standard',

      fullText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        small:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    link: {
      seeLive: 'https://duanedave.github.io/Portfolio-Website/',
      sources: 'https://github.com/DuaneDave/Portfolio-Website',
    },
    technologies: {
      html: 'html',
      bootstrap: 'bootstrap',
      ror: 'ruby on rails',
    },
    imgSrc: 'asset/popup.png',
  },

  {
    id: 4,

    title: 'Data Dashboard Healthcare',

    description: {
      summary:
        'A daily selection of privately personalise reads; no accounts or sign-ups required. has been the industry standard',

      fullText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        small:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    link: {
      seeLive: 'https://duanedave.github.io/Portfolio-Website/',
      sources: 'https://github.com/DuaneDave/Portfolio-Website',
    },
    technologies: {
      html: 'html',
      bootstrap: 'bootstrap',
      ror: 'ruby on rails',
    },
    imgSrc: 'asset/popup.png',
  },

  {
    id: 5,

    title: 'Website Portfolio',

    description: {
      summary:
        'A daily selection of privately personalise reads; no accounts or sign-ups required. has been the industry standard',

      fullText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        small:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    link: {
      seeLive: 'https://duanedave.github.io/Portfolio-Website/',
      sources: 'https://github.com/DuaneDave/Portfolio-Website',
    },
    technologies: {
      html: 'html',
      bootstrap: 'bootstrap',
      ror: 'ruby on rails',
    },
    imgSrc: 'asset/popup.png',
  },

  {
    id: 6,

    title: 'Website Portfolio',

    description: {
      summary:
        'A daily selection of privately personalise reads; no accounts or sign-ups required. has been the industry standard',

      fullText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

      small:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    link: {
      seeLive: 'https://duanedave.github.io/Portfolio-Website/',
      sources: 'https://github.com/DuaneDave/Portfolio-Website',
    },
    technologies: {
      html: 'html',
      bootstrap: 'bootstrap',
      ror: 'ruby on rails',
    },
    imgSrc: 'asset/popup.png',
  },
];

function createCards() {
  project.forEach((item) => {
    panel.innerHTML += `
    <div class="show">
   <img src="asset/others.png" alt="image" />
   <div class="card-content">
     <h3>${item.title}</h3>
     <p>${item.description.summary}</p>
     <div class="btn-group flex">
       <button class="btn">${item.technologies.html}</button>
       <button class="btn">${item.technologies.bootstrap}</button>
       <button class="btn">${item.technologies.ror}</button>
     </div>
   </div>
   <button class="special modal-trigger">See Project</button>
 </div>
    `;
  });
}
createCards();

const modal = document.querySelector('.modal');
const wrapper = document.getElementById('wrapper');
const noScroll = document.querySelector('body');
const modalTrigger = document.querySelectorAll('.modal-trigger');

function createModal(idx) {
    modal.innerHTML = `
  <div class="modal-head">
    <h2>${project[idx].title}</h2>
    <div class="btn-group flex">
      <button class="btn">${project[idx].technologies.html}</button>
      <button class="btn">${project[idx].technologies.bootstrap}</button>
      <button class="btn">${project[idx].technologies.ror}</button>
    </div>
  </div>

  <div class="modal-content flex">
  <img src="${project[idx].imgSrc}" alt="my project" />
  <div class="modal-details flex">
  <p class="modal-content">${project[idx].description.small
}</p>
  <div class="modal-actions flex">
  <button class="special">
  <a href="${
  project[idx].link.seeLive
}" class="flex">See live <img src="asset/see.png" /></a>
  </button>
  <button class="special flex"><a href="${
  project[idx].link.sources
}" class="flex">See source <img src="asset/linkgit.png" /></a>
  </button>
  </div>
  </div>
  </div>
  <div class="btn-close">X</div>
  `;
}

modalTrigger.forEach((n, idx) => n.addEventListener('click', () => {
  createModal(idx);
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

const fName = document.querySelector('#name');
const txt = document.querySelector('textarea');

form.addEventListener('submit', (e) => {
  const val = email.value;

  const store = {};

  if (val !== val.toLowerCase()) {
    error.classList.add('incorrect');
    e.preventDefault();
  } else {
    store.name = fName.value;
    store.email = email.value;
    store.txt = txt.value;
    error.classList.remove('incorrect');
    form.submit();
  }
  localStorage.setItem('user', JSON.stringify(store));
});

function getLs() {
  const see = JSON.parse(localStorage.getItem('user'));
  fName.value = see.name;
  email.value = see.email;
  txt.value = see.txt;
}

getLs();