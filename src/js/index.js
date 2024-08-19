const btnNextAdvice = document.querySelector('#btn_next_advice');
const numberAdvice = document.querySelector('#id_advice');
const descriptionAdvice = document.querySelector('#description_advice');

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
      throw new Error('Ocorreu um erro ao tentar buscar as informações da API')
    }

    const adviceContent = await response.json()
    const adviceID = adviceContent.slip.id
    const adviceText = adviceContent.slip.advice

    numberAdvice.innerText = adviceID
    descriptionAdvice.innerText = adviceText
    
  } catch (err) {
    console.log(err);
  }
}

btnNextAdvice.addEventListener('click', () => {
  getAdvice()
});