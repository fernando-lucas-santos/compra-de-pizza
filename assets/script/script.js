const c = (e)=> document.querySelector(e)
const cALL = (e)=> document.querySelector(e)


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
  console.log(pizzaItem)
  
  // console.log(pizzaItem)
  document.querySelector('.pizzaArea').append(pizzaItem)

  //   let i = document.querySelector('.img-fluid').innerHTML = element.img
     //('.valor').append(pizzaItem)
    // console.log(element)
    //  console.log(index)
    // console.log(i)

  
   

})

