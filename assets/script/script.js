const c = (el)=> document.querySelector(el)
const cALL = (el)=> document.querySelector(el)



  
pizzaJson.map((element, index)=>{
  let pizzaItem = c('.container-modelos ').cloneNode(true)

  pizzaItem.setAttribute('data-key', index) // coloca o atributo data-key com a chave index associado
  pizzaItem.querySelector('.imagem img').src = element.img
  pizzaItem.querySelector('.descricao .name').innerHTML = element.name
  pizzaItem.querySelector('.price').innerHTML = `R$ ${element.price.toFixed(2)}`
  pizzaItem.querySelector('.descricao p').innerHTML = element.description
  
  // pizzaItem.querySelector('a').addEventListener('click', (e)=>{
  //   console.log(innerHTML = e)
  // })
  pizzaItem.querySelector('a').addEventListener('click',(e)=>{

   let key = e.target.closest('.container-modelos').getAttribute('data-key') // volta uma class a cima para celecionar o atributo

    console.log('pizza clicada ' + key)
  })
  document.querySelector('.pizzaArea').append(pizzaItem)
   
})
