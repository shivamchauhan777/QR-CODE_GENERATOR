const input=document.querySelector('input');
const sizes=document.getElementById('third');
const generate=document.getElementById('generate');
const download=document.getElementById('download');
let size=parseInt(sizes.value);
const QR=document.querySelector('.QR');

generate.addEventListener('click',function(e){
    e.preventDefault();
    input.value.length>0?generateQRCode():alert('Enter some text to Generate the QR');
})

download.addEventListener('click',()=>{
    let imgatr=document.querySelector('.QR img');
    if(imgatr!==null){
        download.setAttribute("href",imgatr)
    }else{
        download.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`)
    }
})
sizes.addEventListener('change',(e)=>{
    size=parseInt(e.target.value);
    input.value.length>0?generateQRCode():alert('Enter some text to Generate the QR');
})
function generateQRCode(){
    QR.innerHTML=" ";
    new QRCode(QR, {
        text:input.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}