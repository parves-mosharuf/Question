Array.from(document.querySelectorAll('.accordion')).forEach((accordion)=>{
    accordion.addEventListener('click', e =>{
        e.target.nextElementSibling.classList.toggle('d-none');
    });
});