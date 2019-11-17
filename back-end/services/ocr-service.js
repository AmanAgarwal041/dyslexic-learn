const request = require('request');
const vision = require('@google-cloud/vision');

module.exports.getCharacter = getCharacter

async function getCharacter(imageString) {
    const client = new vision.ImageAnnotatorClient();
    
    var base64Data = imageString.replace(/^data:image\/png;base64,/, "");
    var time = Date.now();
    
    require("fs").writeFile("/home/ubuntu/images/"+time+".png", base64Data, 'base64', function(err) {
        console.log(err);
    });
    const imageUrl = 'http://168.61.181.153/'+time+'.png';
    
    const [result] = await client.textDetection("/home/ubuntu/images/"+time+".png");
    const detections = result.textAnnotations;
    if(detections.length == 0) return "";
    return detections[0].description.replace(/(\r|\t|\r\t|\n|\s)/g, '');  
}
