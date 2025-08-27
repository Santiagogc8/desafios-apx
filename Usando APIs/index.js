function main(){
    const catsContainer = document.querySelector('.cats-container');

    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(res => res.json())
    .then(data => {
        for(let i of data){
            const urlImage = i.url; 

            // Contenedor de cada imagen
            const catProfile = document.createElement('div'); // Creamos un div para guardar a cada foto 
            catProfile.classList.add('cat-profile'); // Le agregamos la clase "cat-profile"
            catsContainer.appendChild(catProfile);

            const catHeader = document.createElement('div');
            catHeader.classList.add('cat-header');
            catProfile.appendChild(catHeader)

            // Imagen de perfil de gato
            const catProfileImage = document.createElement('img');
            catProfileImage.classList.add('cat-profile-image');
            catProfileImage.src = urlImage;
            catHeader.appendChild(catProfileImage);

            // Url de la imagen
            const catUrl = document.createElement('a'); // Creamos un elemento a para guardar cada url
            catUrl.classList.add('cat-image-url'); // Agregamos la clase "cat-image-url"
            catUrl.href = urlImage; // Como href le damos la url
            catUrl.innerText = `@michi${i.id}`; // Y le agregamos de texto 
            catHeader.appendChild(catUrl); // Y al div le agregamos el elemento a

            // Imagenes
            const catImage = document.createElement('img'); // Creamos un elemento img para cada elemento
            catImage.classList.add('cat-image'); // Agregamos la clase cat-image a cada imagen
            catImage.src = urlImage; // El src de la imagen es el equivalente a la url del elemento
            catProfile.append(catImage); // Agregamos al div el catImage

            // Under-image text
            const underImageText = document.createElement('p');
            underImageText.classList.add('under-image-text');
            const likes = Math.random(1, 100) * 100;
            underImageText.innerText = `${likes.toFixed(1)}K`;
            catProfile.appendChild(underImageText);
        }
    });
}

main();