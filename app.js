// Навигация по секциям
const navButtons = document.querySelectorAll('.nav-button');
const sections = document.querySelectorAll('.content-section');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const target = button.dataset.section;
    sections.forEach(sec => {
      sec.id === target ? sec.classList.add('active') : sec.classList.remove('active');
    });
  });
});

// Авторские карточки
const authorCards = document.querySelectorAll('.author-card');
const authorDetails = document.querySelectorAll('.author-details');

authorCards.forEach(card => {
  card.addEventListener('click', () => {
    authorCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    const target = card.dataset.author;
    authorDetails.forEach(d => {
      d.id === "author-" + target ? d.classList.add('active') : d.classList.remove('active');
    });
  });
});

