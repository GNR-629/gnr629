
function xmlParser(){
    
    xml_string = '<?xml version="1.0" encoding="UTF-8"?><WMT_MS_Capabilities version="1.1.0"><Service><Name><![CDATA[WMS]]></Name><Title>OGC:WMS</Title><Abstract>OGC:WMS</Abstract><KeywordList><Keyword><![CDATA[]]></Keyword></KeywordList><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?"/><ContactInformation><ContactPersonPrimary><ContactPerson><![CDATA[]]></ContactPerson><ContactOrganization><![CDATA[]]></ContactOrganization></ContactPersonPrimary><ContactPosition><![CDATA[]]></ContactPosition><ContactAddress><AddressType><![CDATA[]]></AddressType><Address><![CDATA[]]></Address><City><![CDATA[]]></City><StateOrProvince><![CDATA[]]></StateOrProvince><PostCode><![CDATA[]]></PostCode><Country><![CDATA[]]></Country></ContactAddress><ContactVoiceTelephone><![CDATA[]]></ContactVoiceTelephone><ContactFacsimileTelephone><![CDATA[]]></ContactFacsimileTelephone><ContactElectronicMailAddress><![CDATA[]]></ContactElectronicMailAddress></ContactInformation><Fees><![CDATA[]]></Fees><AccessConstraints><![CDATA[]]></AccessConstraints></Service><Capability><Request><GetCapabilities><Format>application/vnd.ogc.wms_xml</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?"/></Get></HTTP></DCPType></GetCapabilities><GetMap><Format>image/bmp</Format><Format>image/jpeg</Format><Format>image/tiff</Format><Format>image/png</Format><Format>image/png8</Format><Format>image/png24</Format><Format>image/png32</Format><Format>image/gif</Format><Format>image/svg+xml</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?"/></Get></HTTP></DCPType></GetMap><GetFeatureInfo><Format>application/vnd.esri.wms_raw_xml</Format><Format>application/vnd.esri.wms_featureinfo_xml</Format><Format>application/vnd.ogc.wms_xml</Format><Format>application/geojson</Format><Format>text/xml</Format><Format>text/html</Format><Format>text/plain</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?"/></Get></HTTP></DCPType></GetFeatureInfo><GetStyles><Format>application/vnd.ogc.sld+xml</Format><DCPType><HTTP><Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?"/></Get></HTTP></DCPType></GetStyles></Request><Exception><Format>application/vnd.ogc.se_xml</Format><Format>application/vnd.ogc.se_inimage</Format><Format>application/vnd.ogc.se_blank</Format></Exception><Layer><Title><![CDATA[Layers]]></Title><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Layer queryable="1"><Name>0</Name><Title><![CDATA[Solid Waste White Goods Label]]></Title><Abstract><![CDATA[]]></Abstract><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Style><Name>default</Name><Title>0</Title><LegendURL width="18" height="18"><Format>image/png</Format><OnlineResource xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?request=GetLegendGraphic%26version=1.1.0%26format=image/png%26layer=0" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink" /></LegendURL></Style></Layer><Layer queryable="1"><Name>1</Name><Title><![CDATA[Solid Waste White Goods]]></Title><Abstract><![CDATA[]]></Abstract><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Style><Name>default</Name><Title>1</Title><LegendURL width="18" height="18"><Format>image/png</Format><OnlineResource xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?request=GetLegendGraphic%26version=1.1.0%26format=image/png%26layer=1" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink" /></LegendURL></Style><ScaleHint min="0.0" max="114.834141"></ScaleHint></Layer><Layer queryable="1"><Name>2</Name><Title><![CDATA[Solid Waste Transfer Station]]></Title><Abstract><![CDATA[]]></Abstract><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Style><Name>default</Name><Title>2</Title><LegendURL width="26" height="26"><Format>image/png</Format><OnlineResource xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?request=GetLegendGraphic%26version=1.1.0%26format=image/png%26layer=2" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink" /></LegendURL></Style><ScaleHint min="0.0" max="114.834141"></ScaleHint></Layer><Layer queryable="1"><Name>3</Name><Title><![CDATA[Solid Waste Management District Label]]></Title><Abstract><![CDATA[]]></Abstract><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Style><Name>default</Name><Title>3</Title><LegendURL width="18" height="18"><Format>image/png</Format><OnlineResource xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?request=GetLegendGraphic%26version=1.1.0%26format=image/png%26layer=3" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink" /></LegendURL></Style></Layer><Layer queryable="1"><Name>4</Name><Title><![CDATA[Solid Waste Management District]]></Title><Abstract><![CDATA[]]></Abstract><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Style><Name>default</Name><Title>4</Title><LegendURL width="18" height="18"><Format>image/png</Format><OnlineResource xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?request=GetLegendGraphic%26version=1.1.0%26format=image/png%26layer=4" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink" /></LegendURL></Style><ScaleHint min="0.0" max="114.834141"></ScaleHint></Layer><Layer queryable="1"><Name>5</Name><Title><![CDATA[Solid Waste Litter Area Label]]></Title><Abstract><![CDATA[]]></Abstract><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Style><Name>default</Name><Title>5</Title><LegendURL width="18" height="18"><Format>image/png</Format><OnlineResource xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?request=GetLegendGraphic%26version=1.1.0%26format=image/png%26layer=5" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink" /></LegendURL></Style></Layer><Layer queryable="1"><Name>6</Name><Title><![CDATA[Solid Waste Litter Area]]></Title><Abstract><![CDATA[]]></Abstract><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Style><Name>default</Name><Title>6</Title><LegendURL width="18" height="18"><Format>image/png</Format><OnlineResource xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?request=GetLegendGraphic%26version=1.1.0%26format=image/png%26layer=6" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink" /></LegendURL></Style><ScaleHint min="0.0" max="114.834141"></ScaleHint></Layer><Layer queryable="1"><Name>7</Name><Title><![CDATA[Residential Waste Collection Schedule Label]]></Title><Abstract><![CDATA[]]></Abstract><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Style><Name>default</Name><Title>7</Title><LegendURL width="18" height="18"><Format>image/png</Format><OnlineResource xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?request=GetLegendGraphic%26version=1.1.0%26format=image/png%26layer=7" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink" /></LegendURL></Style></Layer><Layer queryable="1"><Name>8</Name><Title><![CDATA[Residential Waste Collection Schedule]]></Title><Abstract><![CDATA[]]></Abstract><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Style><Name>default</Name><Title>8</Title><LegendURL width="18" height="18"><Format>image/png</Format><OnlineResource xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?request=GetLegendGraphic%26version=1.1.0%26format=image/png%26layer=8" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink" /></LegendURL></Style><ScaleHint min="0.0" max="114.834141"></ScaleHint></Layer><Layer queryable="1"><Name>9</Name><Title><![CDATA[Household Hazardous Waste Area Label]]></Title><Abstract><![CDATA[]]></Abstract><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Style><Name>default</Name><Title>9</Title><LegendURL width="18" height="18"><Format>image/png</Format><OnlineResource xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?request=GetLegendGraphic%26version=1.1.0%26format=image/png%26layer=9" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink" /></LegendURL></Style></Layer><Layer queryable="1"><Name>10</Name><Title><![CDATA[Household Hazardous Waste Area]]></Title><Abstract><![CDATA[]]></Abstract><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Style><Name>default</Name><Title>10</Title><LegendURL width="18" height="18"><Format>image/png</Format><OnlineResource xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?request=GetLegendGraphic%26version=1.1.0%26format=image/png%26layer=10" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink" /></LegendURL></Style><ScaleHint min="0.0" max="114.834141"></ScaleHint></Layer><Layer queryable="1"><Name>11</Name><Title><![CDATA[City Ward]]></Title><Abstract><![CDATA[]]></Abstract><SRS>EPSG:4326 EPSG:2019</SRS><LatLonBoundingBox minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:4326" minx="-79.671728" miny="43.557131" maxx="-79.086861" maxy="43.881918"/><BoundingBox SRS="EPSG:2019" minx="291000.000000" miny="4824000.000000" maxx="338000.000000" maxy="4860000.000000"/><Style><Name>default</Name><Title>11</Title><LegendURL width="18" height="18"><Format>image/png</Format><OnlineResource xlink:href="https://gis.toronto.ca:443/arcgis/services/primary/cot_geospatial21_mtm/MapServer/WmsServer?request=GetLegendGraphic%26version=1.1.0%26format=image/png%26layer=11" xlink:type="simple" xmlns:xlink="http://www.w3.org/1999/xlink" /></LegendURL></Style></Layer></Layer></Capability></WMT_MS_Capabilities>';
    
    var domparser = new DOMParser();
    var xmldoc = domparser.parseFromString(xml_string,"text/xml");
    // console.log(xmldoc);
    
    available_requests = []
    spatial_info = [];
    layers = [];
    var request_nodes = xmldoc.getElementsByTagName('Request')[0].childNodes;

    for(j=0;j<request_nodes.length; j++){
        available_requests.push(request_nodes[j].nodeName);
    }

    var layer_nodes = xmldoc.getElementsByTagName('Layer')[0].childNodes
    
    for(i=0; i<layer_nodes.length; i++)
    {
        if (layer_nodes[i].nodeName == 'BoundingBox'){
            spatial_info.push({
                'SRS':layer_nodes[i].getAttribute('SRS'),
                'minx':layer_nodes[i].getAttribute('minx'),
                'miny':layer_nodes[i].getAttribute('miny'),
                'maxx':layer_nodes[i].getAttribute('maxx'),
                'maxy':layer_nodes[i].getAttribute('maxy'),
            });
        } else if(layer_nodes[i].nodeName == 'Layer'){
            layers.push(layer_nodes[i].getElementsByTagName('Title')[0].childNodes[0].data);
        }
    }
}

$(document).ready(function(){
    xmlParser();
    var new_options;
    var new_srs;
    var new_layers;

    $.each(available_requests, function(i){
        new_options += '<option value="' + available_requests[i] + '">' + available_requests[i] + '</option>'
    });
    
    $('#requests').append(new_options);

    $.each(layers, function(i){
        new_layers += '<option value="' + layers[i] + '">' + layers[i] + '</option>'
    })
    $('#layers').append(new_layers);

    
    $.each(spatial_info, function(i){
        new_srs += '<option value="' + spatial_info[i]['SRS'] + '">' + spatial_info[i]["SRS"] + '</option>' 
    })
    $('#srs').append(new_srs);
});

$('#srs').on('change', function(){
    current_value = this.value;
    var i = spatial_info.length;
    while(i-- >0){
        if(spatial_info[i]['SRS'] == current_value){
            $('#minx').val(spatial_info[i]['minx']);
            $('#miny').val(spatial_info[i]['miny']);
            $('#maxx').val(spatial_info[i]['maxx']);
            $('#maxy').val(spatial_info[i]['maxy']);
        }
    }
});
$('#wmsform').on('submit', function(e){
    e.preventDefault();
    url = $('#urls').val();
    request = $('#requests').val();
    srs = $('#srs').val();
    layer = $('#layers').val();
    minx = $('#minx').val();
    minx = $('#minx').val();
    minx = $('#minx').val();
    minx = $('#minx').val();

    request_url = url + "?service=wms&request=" + request + "&srs=" + srs + "&layer='" + layer  + "'";
    alert(request_url);
});