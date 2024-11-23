const calc = () => {
  const calcBlock = document.querySelectorAll('.calc-block > input')
  calcBlock.forEach((input) => {
    input.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/\D+/, '');
    });
  })
};


export default calc;
