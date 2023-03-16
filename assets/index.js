let targetCard =document.querySelector("#target")
let firstLoadImageBtn= document.querySelector('#loadImage')
let secondLoadImageBtn= document.querySelector('#loadSecondaryImage')

let init= async function(parametro){
    try {
     if(parametro){
        let url="https://api.pexels.com/v1/search?query="+ parametro
        let fetchObjRequest={
            headers: {
                "Authorization": "y95wFVDw5It6IKHy9uGL4agbpUFl84QIH5buWJWo9NpqYjArEEJqIWwb"
              }
            }
        
        let objFetch= await fetch(url,fetchObjRequest)

        let oggettoParsato = await objFetch.json()
        let foto = oggettoParsato.photos

        

        foto.forEach(obj => {
            let {id,alt}=obj
            let img =obj.src.small
            

            let spinner = document.querySelector(".spinner")
            spinner.classList.add("d-none")

            creatElement(id,alt,img)
            
        });
        

    }else{
        throw new Error("richiesta non andata a buon fine")
    }
} catch (error) {
     console.log(error)
}
}



let creatElement= function(id,titolo,immagine){
    let col = document.createElement("div")
    col.classList.add("col-md-4","mycol")

    let card=document.createElement("div") 
    card.classList.add("card","border-0","card-personale" ,"mb-4" )

    let img=document.createElement("img")
    img.setAttribute("src",immagine)
    img.classList.add("card-img-top" ,"bg-light","img-fluid","img-personalizzata")

    let cardBody =document.createElement("div") 
    cardBody.classList.add("card-body","shadow-personale","d-flex","flex-column","justify-content-between")

    let h5=document.createElement("h5")
    h5.classList.add("card-title")
    h5.textContent=titolo

    let btnDiv=document.createElement("div")
    btnDiv.classList.add("d-flex" ,"justify-content-between","align-items-center")

    let btnContainer=document.createElement("div")
    btnContainer.classList.add("btn-group")

    let view =document.createElement("button")
    view.setAttribute("type","button")
    view.classList.add("btn", "btn-sm" ,"btn-outline-secondary")
    view.textContent="View"

    let hide =document.createElement("button")
    hide.setAttribute("type","button")
    hide.classList.add("btn", "btn-sm" ,"btn-outline-secondary")
    hide.textContent="Hide"

    let idImg= document.createElement("small")
    idImg.classList.add("text-muted")
    idImg.textContent=`ID: ${id}`

    console.log(col)

    targetCard.appendChild(col)
    col.appendChild(card)
    card.appendChild(img)
    card.appendChild(cardBody)
    cardBody.appendChild(h5)
    cardBody.appendChild(btnDiv)
    btnDiv.appendChild(btnContainer)
    btnContainer.appendChild(view)
    btnContainer.appendChild(hide)
    btnDiv.appendChild(idImg)

    
}



firstLoadImageBtn.addEventListener("click",()=>{
    targetCard.textContent=" "
    let spinner = document.querySelector(".spinner")
    spinner.classList.remove("d-none")
    init("javascipt")
})

secondLoadImageBtn.addEventListener("click",()=>{
    targetCard.textContent=" "
    let spinner = document.querySelector(".spinner")
    spinner.classList.remove("d-none")
    init("word")
})

let btncerca=document.querySelector("#button-addon2")

btncerca.addEventListener("click",()=>{
    targetCard.textContent=" "
    let inputValue=document.querySelector(".input-search").value
    let spinner = document.querySelector(".spinner")
    spinner.classList.remove("d-none")
    init(inputValue)
})
