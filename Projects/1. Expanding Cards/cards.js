
const cards = document.querySelectorAll('.panel');

cards.forEach((card)=> {
  card.addEventListener('click',function() {
    removeActiveClasses();
    this.classList.add('active');
  })
})

function removeActiveClasses() {
  cards.forEach(card => {
    card.classList.remove('active');
  })
}
