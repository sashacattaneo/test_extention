console.log("The extention is working");

var imgs = document.getElementsByTagName("img");

for(elt of imgs){
   elt.src = `${browser.runtime.getURL("pp.jpg")}`
   elt.alt = 'an alt text'
}
