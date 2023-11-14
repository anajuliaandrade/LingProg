async function api(){
    let email = document.getElementById("email").value 
    let respostas = await fetch(`https://jsonplaceholder.typicode.com/comments?email=${email}`)
    let dados = await respostas.json()
    document.getElementById("postId").value = dados[0].postId
    document.getElementById("id").value= dados[0].id
    document.getElementById("name").value= dados[0].name
    document.getElementById("body").value= dados[0].body
    
    
}
