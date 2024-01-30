const c = (el)=> document.querySelector(el)
const cALL = (el)=> document.querySelector(el)



  
pizzaJson.map((element, index)=>{
  let pizzaItem = c('.container-modelos ').cloneNode(true)


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

  // const myModalEl = document.getElementById('btn--modal')
  //   myModalEl.addEventListener('show.bs.hidden', (event) => {
  //     myModalEl.show(myModalEl)
  //   })

    const myModal = new bootstrap.Modal('btn--modal', {
      keyboard: false
    })