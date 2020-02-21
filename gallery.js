let fs = require('fs');

let imageFileNames = fs.readdirSync('site/images');

//This code is just here to demonstrate how fs.readdirSync works

console.log('sites/images contains the following files:');
let imageGallery;
for (let i = 0; i < imageFileNames.length; i++) {
  let fileName = imageFileNames[i];
  if (i === 0) {
    imageGallery = `<img src="images/${fileName}" height="400" width="550">`;
  }
  else {
    imageGallery = imageGallery + `<img src="images/${fileName}" height="400"width="550" >`;
  }
  fs.writeFileSync('site/index.html', imageGallery, function (err) {
    if (err) return console.log(err);
  });
}
