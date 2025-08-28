function createElements(params){ // Creamos una funcion que es para crear elementos. Esta funcion recibe unos parametros (la respuesta de la API)

    const cardsContainer = document.querySelector('.cards-container'); // Obtenemos el div cards-container
    
    const card = document.getElementById('card'); // Obtenemos la template del card

    card.content.querySelector('.card-title').innerText = params.title; // Obtenemos el card-title y como texto le pasamos el titulo de params

    // Hacemos lo mismo con las diferentes propiedaddes de params
    card.content.querySelector('.card-image').src = params.image;
    card.content.querySelector('.card-text').innerText = params.description;
    card.content.querySelector('a').href = params.url;

    const clone = document.importNode(card.content, true); // Hacemos el clone de la template card
    cardsContainer.appendChild(clone); // Y lo agregamos al cardsContainer
}

function callApi(){ // Creamos una funcion llamada callApi que llamara a la API 
    return fetch('https://cdn.contentful.com/spaces/8l01vzrwfkni/environments/master/entries?access_token=czXoFyjisb7wysKAWFnzFBFVg38pWqv2QgyK0RczVvc&content_type=work&include=2') // En esta direccion
    .then(res => res.json()) // Luego convertira la promesa en un json
    .then(data => { 
        const collection = data.items.map(item => {

            /*
                //* Para validar la imagen es un poco tricky, basicamente debemos de hacer los siguientes pasos:

                //* data (el JSON de la api), trae una propiedad llamada includes, donde se encuentran las cosas como imagenes 

                //* En esta propiedad includes existe otra propiedad llamada Asset, donde se encuentran los links de las imagenes

                //* Luego busca que el asset que coincida ".find(asset => asset.sys.id === item.fields.imagen.sys.id)"

                //* Y si coinciden, sumamos https: y lo que nos devuelva imageAsset.fields.file.url
            */

            const imageAsset = data.includes?.Asset?.find(asset => asset.sys.id === item.fields.imagen.sys.id);

            return {
                title: item.fields.titulo,
                description: item.fields.descripcion,
                image: imageAsset ? `https:${imageAsset.fields.file.url}` : '', // Hacemos un ternario. Si imageAsset es true, devolvemos el link armado. Si no, devolvemos un string vacio
                url: item.fields.url
            }
        })

        return collection;
    }) // Y luego, retornara los datos
}

function main(){
    callApi().then(works => { // Llamamos la funcion callApi y le hacemos un then que recibe un parametro works
        for (work of works){ // Por cada work de works 
            createElements(work); // Llamamos a la funcion createElements con work como parametro
        } 
    });
}

main()