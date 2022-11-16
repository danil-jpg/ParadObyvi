function header () {
    const headerProblemClose = document.querySelector('.header-problem__close');
    const headerProblem = document.querySelector('.header-problem');

    headerProblemClose.addEventListener('click', () => {
        headerProblem.classList.add('close')
    })
}

export default header