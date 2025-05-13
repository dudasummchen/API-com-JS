
async function loadGallery() {
    const gallery = document.getElementById('gallery')
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
 
    const response = await fetch(url)
    const cats = await response.json()
 
    // Limpa a galeria antes de adicionar novas imagens e videos
    gallery.innerHTML = '';
 
    // Adiciona as novas imagens dos gatinhos
    cats.forEach(cat => {
        const img = document.createElement('img')
        img.src = cat.url
        gallery.appendChild(img)
    })
    console.log(cats)
}
 
// Função para reiniciar a galeria
function restartGallery() {
    loadGallery(); // Chama a função para carregar as novas imagens dos gatinhos
}
 
// Adiciona o event listener no botão de restart
const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', () => {
    restartGallery(); // Reinicia a galeria quando aperta no botões
});
 
// Carrega a galeria 
loadGallery();
 