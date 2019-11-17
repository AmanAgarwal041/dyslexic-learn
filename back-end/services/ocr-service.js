const request = require('request');
// const config = require('../config');
const vision = require('@google-cloud/vision');

module.exports.getCharacter = getCharacter

function getCharacter(imageString) {
    const client = new vision.ImageAnnotatorClient();

    // let subscriptionKey = config.COMPUTER_VISION_SUBSCRIPTION_KEY;
    // let endpoint = config.COMPUTER_VISION_ENDPOINT
    // let key = config.OCR_KEY

    // if (!subscriptionKey) { throw new Error('Set your environment variables for your subscription key and endpoint.'); }
    
    // var uriBase = endpoint + 'vision/v2.1/ocr';
   
    var base64Data = imageString.replace(/^data:image\/png;base64,/, "");
    var time = Date.now();

    require("fs").writeFile("/home/ubuntu/images/"+time+".png", base64Data, 'base64', function(err) {
        console.log(err);
    });
    const imageUrl = 'http://168.61.181.153/'+time+'.png';

    // // Request parameters.
    // const params = {
    //     'language': 'unk',
    //     'detectOrientation': 'true',
    // };
    
    // const options = {
    //     uri: "https://api.ocr.space/parse/imageurl?apikey="+key+"&url="+imageUrl,
    //     // qs: params,
    //     // body: '{"url": ' + '"' + imageUrl + '"}',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         // 'Ocp-Apim-Subscription-Key' : subscriptionKey
    //     }
    // };
    const [result] = await client.textDetection("/home/ubuntu/images/"+time+".png");
const detections = result.textAnnotations;
return detections[0].text;
// detections.forEach(text => console.log(text));
    // request.post(options, (error, response, body) => {
    //   if (error) {
    //     console.log('Error: ', error);
    //     return;
    //   }
    //   let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
    //   console.log('JSON Response\n');
    //   console.log(jsonResponse);
    // });
}
