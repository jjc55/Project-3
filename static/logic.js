// Create the base layers.
var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' +
    '<br> Data Analysts: Hima, Lora, Juhi, Kesha <a href="https://github.com/LoraLou/Project3">Github Repo</a>'
       
});

var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

// getting geojson data

var baseMaps = {
    "Street Map View": OpenStreetMap,
};

var University = new L.layerGroup();

var overlayMaps = {
    Univsities: University
};


var myMap = L.map("map", {
    center: [40.09, -90.5],
    zoom: 5,
    layers: [OpenStreetMap, University]
});


L.control.layers(baseMaps, overlayMaps, {
}).addTo(myMap);


d3.json("resource/schools.geojson").then(function (Name) {
    console.log(Name.features[0])
    // marker function (LORA)
    function markerColor(rate) {
        return rate > 70 ? '#1a9850' : 
            rate > 50 ? '#66bd63' :
                rate > 40 ? '#a6d96a' : 
                    rate > 30 ? '#d9ef8b' : 
                        rate > 20 ? '#fee08b' : 
                            rate > 10 ? '#fdae61' : 
                                rate > 2 ? '#f46d43' : 
                                    '#d73027'; 
    }
    // marker style (LORA)
    function styleInfo(feature) {
        console.log(feature.properties.GraduationRateBachelorDegreeWithin4YearsTotal);
        return {
            radious: 8,
            color: markerColor(feature.properties.GraduationRateBachelorDegreeWithin4YearsTotal),
            weight: 1,
            opacity: 1,
            fillOpacity: 0.5
        };
    }
    // marker (LORA)
    L.geoJSON(Name, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        // create style (LORA)
        style: styleInfo,
        // create pop-ups (LORA)
        onEachFeature: function onEachFeature(feature, layer) {
            layer.bindPopup(`
        <h3>${feature.properties.Name}</h3>
        <hr>
        <h3>Graduation Rate Within 4 Years(%): ${feature.properties.GraduationRateBachelorDegreeWithin4YearsTotal.toLocaleString()}</h3>
        <h3>Total Enrollment: ${feature.properties.TotalEnrollment}</h3>
        `);
        }
    }).addTo(myMap);
    let legend = L.control({position: 'bottomright'});
    legend.onAdd = function(map) {
        let div = L.DomUtil.create('div', 'info legend'),
            grades = [70, 50, 40, 30, 20, 10, 5, 0],
            labels = [];
        // loop (LORA)
        div.innerHTML += 'Rate (%) <br>'
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + markerColor(grades[i] + 1) + ' ">>' +
                grades[i];
        }
        return div;
    };
    legend.addTo(myMap);
    // end marker
    var info = L.control();

    info.onAdd = function (myMap) {
        this._div = L.DomUtil.create('div', 'info'); 
        this.update();
        return this._div;
    };

    info.update = function (props) {
        this._div.innerHTML = '<h3>American Universities in 2013</h3>';
    };

    info.addTo(myMap);
});