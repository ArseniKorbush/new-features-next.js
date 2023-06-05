$('.col60').slick({
    dots:true
});

const bar = document.querySelector('.bar')
const nav = document.querySelector('nav')


bar.addEventListener('click', ()=>{
    nav.classList.toggle('show-nav')
})
