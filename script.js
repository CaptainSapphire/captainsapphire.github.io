console.log('Hello!');



// User gets to the bottom
window.onscroll = () => {
  if((window.innerheight + window.pageYOffset) >= document.body.offsetHeight)
    console.log("You are at the end of the page.")


}