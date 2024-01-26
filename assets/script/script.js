const c = (el)=> document.querySelector(el)
const cALL = (el)=> document.querySelector(el)


window.addEventListener('resize', ()=>{
    let largura = window.innerWidth
    if (largura < 769){
    document.querySelector('.pizzaArea').classList.remove('row-cols-3')
    document.querySelector('.pizzaArea').classList.add('row-cols-1')
   
}else{
    document.querySelector('.pizzaArea').classList.add('row-cols-3')
}
})
  
pizzaJson.map((element, index)=>{
  let pizzaItem = c('.container-geral ').cloneNode(true)


  pizzaItem.querySelector('.imagem img').src = element.img
  pizzaItem.querySelector('.descricao .name').innerHTML = element.name
  pizzaItem.querySelector('.price').innerHTML = `R$ ${element.price.toFixed(2)}`
  pizzaItem.querySelector('.descricao p').innerHTML = element.description
  
  document.querySelector('.pizzaArea').append(pizzaItem)
    // console.log(pizzaItem)
  //   let i = document.querySelector('.img-fluid').innerHTML = element.img
     //('.valor').append(pizzaItem)
    // console.log(element)
    //  console.log(index)
    // console.log(i)

  
   

})

