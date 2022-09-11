import {countries}  from './data.js'
let print=console.log.bind(document)



// window.addEventListener('DOMContentLoaded', () => {

    let buttonDiv = document.querySelector('.tab')
    let textDiv = document.querySelector('.tabcontent');
    let tabcontent = document.querySelector('.tabcontent_container')

countryCapital(countries)
    TextDisplay(countries)
  


    // displays countries capital names in the header -----------------------------------------

    function countryCapital(capital){    
    let country = capital.map(country => {
        return `<div class="btn-container"><button id = ${country.Capital_name} class="tablinks ">${country.Capital_name}</button></div>`
    }).join(' ');

    buttonDiv.innerHTML = country;  
}
    


    function TextDisplay(text){
    let Text = text.map(text => {
        return `<div id = ${text.id} class = tabcontents ${text.Capital_name}> <h3>${text.Capital_name}</h3>
        <p>${text.text}</p> </div>`
    }).join('');
  
        tabcontent.innerHTML = Text

}


  

    let textContent=document.querySelectorAll('.tabcontents')
    let buttons = document.querySelectorAll('.tablinks');


    //      

    function show_hide_text(){


//         buttons.forEach(btns => {
// btns.addEventListener('click',e=>{
//     let current_Target=e.currentTarget;

//     textContent.forEach(item => {

//         let item_id = item.id;
    

// print(item_id,current_Target        )
//         if (current_Target.textContent ===item_id){
//         // print(current_Target.textContent,item_id)
//         item.classList.add('show')
       
//     }
//         item.classList.toggle('show')
    
    
//             })
//          })
//     })


for(let i=0;i<=buttons.length;i++){
 
    buttons[i].addEventListener('click',(e)=>{
        let current_Target = e.currentTarget;
    
        textContent.forEach(item=>{

       print(item)
        if (current_Target.id !== item.id){
          item.classList.remove('show')
            print(item.id)
          
        }
        })
     textContent[i].classList.toggle('show')
    })
      
    

}

       

 }

    show_hide_text()
//  })

// -----------------------------UI--------------------------------------------------------------

