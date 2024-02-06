const c = (el)=> document.querySelector(el)
const cALL = (el)=> document.querySelectorAll(el)
let modalQt = 1


  
pizzaJson.map((element, index)=>{
  let pizzaItem = c('.container-modelos ').cloneNode(true)

  pizzaItem.setAttribute('data-key', index) // coloca o atributo data-key com a chave index associado
  pizzaItem.querySelector('.imagem img').src = element.img
  pizzaItem.querySelector('.descricao .name').innerHTML = element.name
  pizzaItem.querySelector('.price').innerHTML = `R$ ${element.price.toFixed(2)}`
  pizzaItem.querySelector('.descricao p').innerHTML = element.description
  
  pizzaItem.querySelector('a').addEventListener('click',(e)=>{
    modalQt = 1

    let key = e.target.closest('.container-modelos').getAttribute('data-key') // volta uma class a cima para celecionar o atributo
    c('.img-modal img').src = pizzaJson[key].img
    c('.container--modal h5').innerHTML = pizzaJson[key].name
    c('.container--modal p').innerHTML = pizzaJson[key].description
    c('.preco .valor--pizza').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`
    c('.tam.active').classList.remove('active')
 
    cALL('.tamanhos .tam').forEach((el , tamIndex)=> {
      if(tamIndex == 2){
        el.classList.add('active')
      }
      el.querySelector('span').innerHTML =  pizzaJson[key].sizes[tamIndex]
     })
     
     c('.qt--num').innerHTML = modalQt
    
    
  })
  document.querySelector('.pizzaArea').append(pizzaItem)
   
})
