const questions = document.querySelectorAll("h2.question");
const icons = document.querySelectorAll("img.icon");

function changeActiveState(event) {
    //work out which question or icon was pressed?
    var header2 = event.currentTarget;   

    //Access the parent of the current event target (question or icon)
    var parent = header2.parentElement; 

    //Access the img attribute associated with the question
    //Here, we get a list of <img> elements whose immediate parent element is a <div> with the class headline within the current event
    const iconImage = parent.querySelectorAll("div.headline > img");

    //Access the grandparent of the node clicked
    const grandParent = parent.parentElement;
    
    //figure out how to access the answer associated with the clicked element and toggle its display state

    const answer = grandParent.querySelectorAll("div.faq > p");
    if (answer[0].style.display === 'block') {
        answer[0].style.display = 'none'
        iconImage[0].src="./assets/images/icon-plus.svg"

    } else {
        answer[0].style.display = 'block'
        iconImage[0].src="./assets/images/icon-minus.svg"

    }




}

// add event listeners to question and icon for all faqs

questions.forEach((element) => {
    element.addEventListener('click', changeActiveState);
});

icons.forEach((element) => {
    element.addEventListener('click', changeActiveState);
});








