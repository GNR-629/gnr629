var map = new ol.Map({
    target: 'map1',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([19.07283, 72.88261]),
      zoom: 0
    })
  });