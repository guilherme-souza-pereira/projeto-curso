function togglemode() {
   const html = document.documentElement
   html.classList.toggle('light')
 const img = document.querySelector("#profile img")
   if (html.classList.contains('light')){ 
        img.setAttribute("src", "./imagens/avatar-light.png")
    } else{ 
       img.setAttribute("scr", "./imagens/avatar.png")
    }
       /// if(html.classList.contains('light')) {
   //   html.classList.remove('light')
   //} else {
     // html.classList.add('light')
   //}
   
       
   
   
}