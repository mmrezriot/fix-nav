// scroll Y page
window.addEventListener('scroll', function(){
//    
    const header = this.document.querySelector('header');
    // console.log(header)
    header.classList.toggle('scroll' , window.scrollY>0);
})