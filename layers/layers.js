var wms_layers = [];

var format_Landcover_0 = new ol.format.GeoJSON();
var features_Landcover_0 = format_Landcover_0.readFeatures(json_Landcover_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landcover_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landcover_0.addFeatures(features_Landcover_0);
var lyr_Landcover_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landcover_0, 
                style: style_Landcover_0,
                popuplayertitle: 'Land cover',
                interactive: true,
                title: '<img src="styles/legend/Landcover_0.png" /> Land cover'
            });
var format_Fields_1 = new ol.format.GeoJSON();
var features_Fields_1 = format_Fields_1.readFeatures(json_Fields_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fields_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fields_1.addFeatures(features_Fields_1);
var lyr_Fields_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fields_1, 
                style: style_Fields_1,
                popuplayertitle: 'Fields',
                interactive: true,
                title: '<img src="styles/legend/Fields_1.png" /> Fields'
            });
var format_Buildings_2 = new ol.format.GeoJSON();
var features_Buildings_2 = format_Buildings_2.readFeatures(json_Buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_2.addFeatures(features_Buildings_2);
var lyr_Buildings_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_2, 
                style: style_Buildings_2,
                popuplayertitle: 'Buildings',
                interactive: true,
                title: '<img src="styles/legend/Buildings_2.png" /> Buildings'
            });
var format_FootballGround_3 = new ol.format.GeoJSON();
var features_FootballGround_3 = format_FootballGround_3.readFeatures(json_FootballGround_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FootballGround_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FootballGround_3.addFeatures(features_FootballGround_3);
var lyr_FootballGround_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FootballGround_3, 
                style: style_FootballGround_3,
                popuplayertitle: 'Football Ground',
                interactive: true,
                title: '<img src="styles/legend/FootballGround_3.png" /> Football Ground'
            });
var format_PrimaryRoad_4 = new ol.format.GeoJSON();
var features_PrimaryRoad_4 = format_PrimaryRoad_4.readFeatures(json_PrimaryRoad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimaryRoad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimaryRoad_4.addFeatures(features_PrimaryRoad_4);
var lyr_PrimaryRoad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimaryRoad_4, 
                style: style_PrimaryRoad_4,
                popuplayertitle: 'Primary Road',
                interactive: true,
                title: '<img src="styles/legend/PrimaryRoad_4.png" /> Primary Road'
            });
var format_ParkingLots_5 = new ol.format.GeoJSON();
var features_ParkingLots_5 = format_ParkingLots_5.readFeatures(json_ParkingLots_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkingLots_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkingLots_5.addFeatures(features_ParkingLots_5);
var lyr_ParkingLots_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkingLots_5, 
                style: style_ParkingLots_5,
                popuplayertitle: 'Parking Lots',
                interactive: true,
                title: '<img src="styles/legend/ParkingLots_5.png" /> Parking Lots'
            });
var format_EarthRoads_6 = new ol.format.GeoJSON();
var features_EarthRoads_6 = format_EarthRoads_6.readFeatures(json_EarthRoads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EarthRoads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EarthRoads_6.addFeatures(features_EarthRoads_6);
var lyr_EarthRoads_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EarthRoads_6, 
                style: style_EarthRoads_6,
                popuplayertitle: 'Earth Roads',
                interactive: true,
                title: '<img src="styles/legend/EarthRoads_6.png" /> Earth Roads'
            });
var format_Trees_7 = new ol.format.GeoJSON();
var features_Trees_7 = format_Trees_7.readFeatures(json_Trees_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_7.addFeatures(features_Trees_7);
var lyr_Trees_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trees_7, 
                style: style_Trees_7,
                popuplayertitle: 'Trees',
                interactive: true,
                title: '<img src="styles/legend/Trees_7.png" /> Trees'
            });
var format_Boundary_8 = new ol.format.GeoJSON();
var features_Boundary_8 = format_Boundary_8.readFeatures(json_Boundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_8.addFeatures(features_Boundary_8);
var lyr_Boundary_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_8, 
                style: style_Boundary_8,
                popuplayertitle: 'Boundary',
                interactive: true,
                title: '<img src="styles/legend/Boundary_8.png" /> Boundary'
            });

lyr_Landcover_0.setVisible(true);lyr_Fields_1.setVisible(true);lyr_Buildings_2.setVisible(true);lyr_FootballGround_3.setVisible(true);lyr_PrimaryRoad_4.setVisible(true);lyr_ParkingLots_5.setVisible(true);lyr_EarthRoads_6.setVisible(true);lyr_Trees_7.setVisible(true);lyr_Boundary_8.setVisible(true);
var layersList = [lyr_Landcover_0,lyr_Fields_1,lyr_Buildings_2,lyr_FootballGround_3,lyr_PrimaryRoad_4,lyr_ParkingLots_5,lyr_EarthRoads_6,lyr_Trees_7,lyr_Boundary_8];
lyr_Landcover_0.set('fieldAliases', {'id': 'id', 'p': 'p', });
lyr_Fields_1.set('fieldAliases', {'id': 'id', 'mk': 'mk', });
lyr_Buildings_2.set('fieldAliases', {'id': 'id', 'ghjkl': 'ghjkl', });
lyr_FootballGround_3.set('fieldAliases', {'id': 'id', 'o': 'o', });
lyr_PrimaryRoad_4.set('fieldAliases', {'id': 'id', });
lyr_ParkingLots_5.set('fieldAliases', {'id': 'id', });
lyr_EarthRoads_6.set('fieldAliases', {'id': 'id', 'l': 'l', });
lyr_Trees_7.set('fieldAliases', {'id': 'id', 'n': 'n', });
lyr_Boundary_8.set('fieldAliases', {'id': 'id', 'o': 'o', });
lyr_Landcover_0.set('fieldImages', {'id': '', 'p': '', });
lyr_Fields_1.set('fieldImages', {'id': 'TextEdit', 'mk': 'TextEdit', });
lyr_Buildings_2.set('fieldImages', {'id': '', 'ghjkl': '', });
lyr_FootballGround_3.set('fieldImages', {'id': '', 'o': '', });
lyr_PrimaryRoad_4.set('fieldImages', {'id': 'TextEdit', });
lyr_ParkingLots_5.set('fieldImages', {'id': '', });
lyr_EarthRoads_6.set('fieldImages', {'id': 'TextEdit', 'l': 'TextEdit', });
lyr_Trees_7.set('fieldImages', {'id': 'TextEdit', 'n': 'TextEdit', });
lyr_Boundary_8.set('fieldImages', {'id': '', 'o': '', });
lyr_Landcover_0.set('fieldLabels', {'id': 'no label', 'p': 'no label', });
lyr_Fields_1.set('fieldLabels', {'id': 'no label', 'mk': 'no label', });
lyr_Buildings_2.set('fieldLabels', {'id': 'no label', 'ghjkl': 'no label', });
lyr_FootballGround_3.set('fieldLabels', {'id': 'no label', 'o': 'no label', });
lyr_PrimaryRoad_4.set('fieldLabels', {'id': 'no label', });
lyr_ParkingLots_5.set('fieldLabels', {'id': 'no label', });
lyr_EarthRoads_6.set('fieldLabels', {'id': 'no label', 'l': 'no label', });
lyr_Trees_7.set('fieldLabels', {'id': 'no label', 'n': 'no label', });
lyr_Boundary_8.set('fieldLabels', {'id': 'no label', 'o': 'no label', });
lyr_Boundary_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});