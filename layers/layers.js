var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMapmonochrome_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Арзамас КУМ'
            });
var format____3 = new ol.format.GeoJSON();
var features____3 = format____3.readFeatures(json____3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____3.addFeatures(features____3);
var lyr____3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource____3, 
                style: style____3,
                interactive: true,
    title: 'Новые_линейные_обьекты<br />\
    <img src="styles/legend/___3_0.png" /> Автодорога<br />\
    <img src="styles/legend/___3_1.png" /> Ливневая канализация<br />'
        });
var format____4 = new ol.format.GeoJSON();
var features____4 = format____4.readFeatures(json____4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____4.addFeatures(features____4);
var lyr____4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource____4, 
                style: style____4,
                interactive: true,
                title: '<img src="styles/legend/___4.png" /> Новые_полигональные_обьекты'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMapmonochrome_1.setVisible(true);lyr__2.setVisible(true);lyr____3.setVisible(true);lyr____4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMapmonochrome_1,lyr__2,lyr____3,lyr____4];
lyr__2.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'nomer_kum': 'nomer_kum', });
lyr____3.set('fieldAliases', {'Объект_для_карты': 'Объект_для_карты', 'Примечание': 'Примечание', 'Тип_обьекта': 'Тип_обьекта', });
lyr____4.set('fieldAliases', {'Обьект_для_карты': 'Обьект_для_карты', 'Примечание': 'Примечание', });
lyr__2.set('fieldImages', {'id_0': 'Range', 'id': 'Range', 'nomer_kum': 'TextEdit', });
lyr____3.set('fieldImages', {'Объект_для_карты': 'TextEdit', 'Примечание': 'TextEdit', 'Тип_обьекта': 'TextEdit', });
lyr____4.set('fieldImages', {'Обьект_для_карты': 'TextEdit', 'Примечание': 'TextEdit', });
lyr__2.set('fieldLabels', {'id_0': 'no label', 'id': 'no label', 'nomer_kum': 'no label', });
lyr____3.set('fieldLabels', {'Объект_для_карты': 'header label', 'Примечание': 'header label', 'Тип_обьекта': 'header label', });
lyr____4.set('fieldLabels', {'Обьект_для_карты': 'header label', 'Примечание': 'header label', });
lyr____4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});