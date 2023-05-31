const previewElem = document.getElementById('preview');
const button = document.querySelector('button');

button.addEventListener('click', async () => {
    previewElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: 'always' },
        audio: false
    })
})

// acho q funcionou
