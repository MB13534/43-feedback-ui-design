const ratings = document.querySelectorAll('.rating')
const send = document.querySelectorAll('#send')
const panel = document.querySelector('#panel')
const thanks = document.querySelector('.thanks')
let selectedRating = 'Satisfied'

panel.addEventListener('click', e => {
    if(e.target.classList.contains('rating')){
                if(e.target.classList.contains('active')){
                    e.target.classList.remove('active')
                    selectedRating = ''
        } else {
            removeActive();
            e.target.classList.add('active')
            selectedRating = e.target.querySelector('small').innerHTML          
        }
    } else if (e.target.classList.contains('btn')){
        if (selectedRating){
            feedback.innerText = selectedRating
            thanks.classList.remove('hide')
            panel.classList.add('hide')
        } 
    }
})

function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
}

// const ratings = document.querySelectorAll('.rating');
// const submit = document.getElementById('send');
// const ratingsContainer = document.querySelector('.panel-container')
// const thanks = document.querySelector('.thanks')
// const feedback = document.getElementById('feedback')

// ratings.forEach(rating => rating.addEventListener('click', e => {
//     if (e.target.classList.contains('active')) {
//         rating.classList.remove('active')
//     } else {
//         ratings.forEach(rating => rating.classList.remove('active'))
//         setTimeout(rating.classList.add('active'), 10)
//     }   
// }))

// submit.addEventListener('click', e => {
//         const activeFeedback = document.querySelector('.rating.active small')
//         if (activeFeedback){
//             feedback.innerText = activeFeedback.innerText;
//             thanks.classList.remove('hide')
//             ratingsContainer.classList.add('hide')
//         } 
// })