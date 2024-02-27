const c = (el)=> document.querySelector(el)
const cALL = (el)=> document.querySelectorAll(el)
let modalQt = 1
let carrinho = []
let modalkey = 0 


  
pizzaJson.map((element, index)=>{
  let pizzaItem = c('.container-modelos ').cloneNode(true)
  // preenchendo informaçoes no modal
  pizzaItem.setAttribute('data-key', index) // coloca o atributo data-key com a chave index associado
  pizzaItem.querySelector('.imagem img').src = element.img
  pizzaItem.querySelector('.descricao .name').innerHTML = element.name
  pizzaItem.querySelector('.price').innerHTML = `R$ ${element.price.toFixed(2)}`
  pizzaItem.querySelector('.descricao p').innerHTML = element.description
  
  // quando o modal é aberto pega as informaçoes da pizza clicada
  pizzaItem.querySelector('a').addEventListener('click',(e)=>{
    
    let key = e.target.closest('.container-modelos').getAttribute('data-key') // closest volta uma class a cima para celecionar a classe e depois coloca o atributo
    modalQt = 1
    modalkey = key

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

//açoes modal


c('.qt--Pizza .menos').addEventListener('click' ,()=>{
  
  if(modalQt > 1){
    modalQt--
    c('.qt--num').innerHTML = modalQt
  }  
 
})

document.querySelector('.qt--Pizza .mais').addEventListener('click' , ()=>{
  modalQt++
  c('.qt--num').innerHTML = modalQt
})

cALL('.tamanhos .tam').forEach((el , tamIndex)=> {
  el.addEventListener('click', ()=>{
    c('.tam.active').classList.remove('active')
    el.classList.add('active')
  })

})

//açao para add ao carrinho

c('.add_btn').addEventListener('click',()=>{
  let tam = parseInt(c('.tam.active').getAttribute('data-key'))

  let identificador = pizzaJson[modalkey].id+'@'+tam
  
  let key = carrinho.findIndex((item)=>{
    return item.identificador == identificador
  })
  
  if(key > -1){
    carrinho[key].quantidade+= modalQt  }else{

    carrinho.push([{
      identificador,
      id:pizzaJson[modalkey].id,
      tam,
      quantidade:modalQt
    }])
  }    
})

