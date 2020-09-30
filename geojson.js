// 1. erase everything below this line and paste in your geojson
// 2. add the following before your pasted content, so that the map
//    will understand how to find your geojson. See README.md for more info
//
//    var json =
//
//    See example below:

var json = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "Title": "Alexander Hall",
        "Image": "https://s3.amazonaws.com/omeka-net/54212/archive/fullsize/f8d5b01b053f8313568080671811db5a.jpg?AWSAccessKeyId=AKIAI3ATG3OSQLO5HGKA&Expires=1602115200&Signature=ErOHXdy6Po5EZmjPhDth3WR1X4Y%3D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.70063555240631,
          40.81616804456351
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -96.70058727264404,
            40.81615586501647
          ],
          [
            -96.701842546463,
            40.82027242456338
          ],
          [
            -96.70427799224852,
            40.82058095325215
          ],
          [
            -96.70395612716673,
            40.81701654750299
          ],
          [
            -96.70053362846375,
            40.81616398471474
          ]
        ]
      }
    }
  ]
}
