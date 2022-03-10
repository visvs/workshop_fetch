/**
 * intl
 * 1. monedas
 * 2. fechas
 */

const urlBase = "https://platzi-avo.vercel.app/"
const appNode = document.querySelector("#app");
const formatPrice = (price)=>{
    return new window.Intl.NumberFormat('en-EN', 
        {style: 'currency', 
        currency: "USD"
    }).format(price)     
}

//web API fetch para traer los recursos desde sitios web
//1. Conectarnos al servidor
window.fetch(`${urlBase}api/avo`)
//2. Procesar la respuesta 
//3. Convertirla en JSON
.then(response => response.json())
//4. Renderizar info en el browser
.then(responseJSON => {
    console.log(responseJSON)
    let items = []
    responseJSON.data.forEach(item => {
        //crear imagen
        const image = document.createElement('img')
        image.src = `${urlBase}${item.image}`
        //crear titulo
        const title  = document.createElement("h2")
        title.textContent = item.name;
        title.className = "text-lg"
        //crear precio
        const price = document.createElement("div")
        price.textContent = formatPrice(item.price);
        price.className = "text-gray-600";
        const container = document.createElement("div")
        container.append(image, price, title);   
        items.push(container)    
    });
    appNode.append(...items);

})



