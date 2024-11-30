import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calc from './modules/calc'
import formValid from './modules/formValid'
import tabs from './modules/tabs'
import slider from './modules/slider'
import sliderCarousel from './modules/swiper'
import sendForm from './modules/sendForm'


timer('22 november 2024')
menu()
modal()
calc(100)
formValid()
tabs()
slider()
sliderCarousel()


sendForm({ 
  formId: 'form1', 
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ] 
})
sendForm({
  formId: 'form2', 
  someElem: [
  {
      type: 'block',
      id: 'total'
  }
]});
sendForm({
  formId: 'form3', 
  someElem: [
  {
      type: 'block',
      id: 'total'
  }
]});
