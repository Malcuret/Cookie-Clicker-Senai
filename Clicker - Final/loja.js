
document.querySelectorAll('#imagens button').forEach(function (button) {
    button.addEventListener('click', function () {
        
        const img = button.querySelector('img');
        if (img) {
            
            localStorage.setItem('selectedSkin', img.src);
            alert('Skin selecionada! Vá para a página do cookie para ver a alteração.');
        }
    });
});