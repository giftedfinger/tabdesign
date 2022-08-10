import {countries}  from './data.js'
let print=console.log.bind(document)



window.addEventListener('DOMContentLoaded', () => {
    let buttonDiv = document.querySelector('.tab')
    let textDiv = document.querySelector('.tabcontent');
    let tabcontent = document.querySelector('.tabcontent_container')

countryCapital(countries)

    constentDisplay()

    // displays countries capital names in the header
    // -----------------------------------------
function countryCapital(capital){    
    let country = capital.map(country => {
        return `<div class="btn-container"><button class="tablinks ">${country.Capital_name}</button></div>`
    }).join(' ');

    buttonDiv.innerHTML = country;  
}
    


    function TextDisplay(text){
    let Text = text.map(text => {
        return `<div id = ${text.Capital_name} class = tabcontents ${text.Capital_name}> <h3>${text.Capital_name}</h3>
        <p>${text.text}</p> </div>`
    }).join('');
  
return Text
}
    const TextContainer = TextDisplay(countries)
    tabcontent.innerHTML =TextContainer
  
    let textContent=document.querySelectorAll('.tabcontents')

    
    for(let i=0; i<=textContent.length;i++){
        textContent[i].style.display='none'
    }
  
//----------------- function for  the countries-----------------------------------------

function constentDisplay(){


// buttons action


    let buttons = document.querySelectorAll('.tablinks');
    buttons.forEach((e) => {
        e.addEventListener('click', (e) => {
            let currentButton = e.currentTarget;
            console.log(currentButton)
            let tab = document.querySelector('.tab');
        //    console.log(tab)
            let button = currentButton.textContent;

            // tab.getElementById(`#${button}`);
           
// console.log(button)
            let divId = document.querySelectorAll(`#${button}`);
         
// getting the id of the button from a Nodlist which is similar to Array

            let iD = divId[0].id
            
         let textDiv = divId[0]
            print(textDiv)

 let countriesid =document.querySelectorAll(`${countries.id}`) 





            if(currentButton.textContent===iD){
                textDiv.classList.add('show')
             
            }else{
                print('no')
            }
           



       

            // UI design// -------------------------------------------------button functionality-------------
          
        //     if(currentButton.!==)


        })
    })
}

 })
