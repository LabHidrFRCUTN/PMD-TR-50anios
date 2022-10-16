﻿ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-63.745982, -33.396152, -62.831408, -32.934062]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopomap_2 = new ol.layer.Tile({
            'title': 'OpenTopomap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_PMD50aos_3 = new ol.format.GeoJSON();
var features_PMD50aos_3 = format_PMD50aos_3.readFeatures(json_PMD50aos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PMD50aos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMD50aos_3.addFeatures(features_PMD50aos_3);
var lyr_PMD50aos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PMD50aos_3, 
                style: style_PMD50aos_3,
                interactive: true,
    title: 'PMD 50 años<br />\
    <img src="styles/legend/PMD50aos_3_0.png" /> 0 mm - 57 mm<br />\
    <img src="styles/legend/PMD50aos_3_1.png" /> 57 mm - 80 mm<br />\
    <img src="styles/legend/PMD50aos_3_2.png" /> 80 mm - 106 mm<br />\
    <img src="styles/legend/PMD50aos_3_3.png" /> 106 mm - 124 mm<br />\
    <img src="styles/legend/PMD50aos_3_4.png" /> 124 mm - 143 mm<br />\
    <img src="styles/legend/PMD50aos_3_5.png" /> 143 mm - 167 mm<br />\
    <img src="styles/legend/PMD50aos_3_6.png" /> 167 mm - 1007 mm<br />'
        });
var format_IsohietasPMD50aos_4 = new ol.format.GeoJSON();
var features_IsohietasPMD50aos_4 = format_IsohietasPMD50aos_4.readFeatures(json_IsohietasPMD50aos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IsohietasPMD50aos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IsohietasPMD50aos_4.addFeatures(features_IsohietasPMD50aos_4);
var lyr_IsohietasPMD50aos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IsohietasPMD50aos_4, 
                style: style_IsohietasPMD50aos_4,
                interactive: false,
                title: '<img src="styles/legend/IsohietasPMD50aos_4.png" /> Isohietas PMD 50 años'
            });
var format_LimiteProvincial_5 = new ol.format.GeoJSON();
var features_LimiteProvincial_5 = format_LimiteProvincial_5.readFeatures(json_LimiteProvincial_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LimiteProvincial_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProvincial_5.addFeatures(features_LimiteProvincial_5);
var lyr_LimiteProvincial_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteProvincial_5, 
                style: style_LimiteProvincial_5,
                interactive: false,
                title: '<img src="styles/legend/LimiteProvincial_5.png" /> LimiteProvincial'
            });

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(true);lyr_OpenTopomap_2.setVisible(false);lyr_PMD50aos_3.setVisible(true);lyr_IsohietasPMD50aos_4.setVisible(true);lyr_LimiteProvincial_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_OpenTopomap_2,lyr_PMD50aos_3,lyr_IsohietasPMD50aos_4,lyr_LimiteProvincial_5];
lyr_PMD50aos_3.set('fieldAliases', {'Latitud': 'Latitud', 'Longitud': 'Longitud', 'PMD 50 año': 'PMD 50 años [mm]', });
lyr_IsohietasPMD50aos_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_LimiteProvincial_5.set('fieldAliases', {'gid': 'gid', });
lyr_PMD50aos_3.set('fieldImages', {'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'PMD 50 año': 'TextEdit', });
lyr_IsohietasPMD50aos_4.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'ELEV': 'Hidden', });
lyr_LimiteProvincial_5.set('fieldImages', {'gid': 'Hidden', });
lyr_PMD50aos_3.set('fieldLabels', {'Latitud': 'inline label', 'Longitud': 'inline label', 'PMD 50 año': 'inline label', });
lyr_IsohietasPMD50aos_4.set('fieldLabels', {});
lyr_LimiteProvincial_5.set('fieldLabels', {});
lyr_LimiteProvincial_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});