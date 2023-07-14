//Check to see the connection between logic.js and index.html
console.log("Test for connection")

//Build function called buildMetadata to create a metadata panel with graduation information
function buildMetadata(index) {
    d3.json("IPEDS_data_dashboard.geojson").then(function (data) {
        let metadata = data.features;

        let metadataArray = metadata.filter(metadataObject => metadataObject.properties.Name == index);
        console.log(metadataArray);

        //unpack the object using indexing
        let metadataResult = metadataArray[0].properties;

        //view in console
        console.log("This is metadataResult.")
        console.log(metadataResult);

        //use d3.select() to get <div id="sample-metadata" class="panel-body"></div> from index.html
        //when using id to select "#sample-metadata"
        //assign to a variable
        let metadataPanel = d3.select("#sample-metadata")

        //need to wipe clean the metadataPanel
        //using html("")
        metadataPanel.html("");

        // iterate over each key value pair in metadataResult and append to the metadataPanel
        metadataPanel.append("h5").text(`Graduation rate (4 years):        ${metadataResult.Graduationrate4years}%`);
        metadataPanel.append("h5").text(`Graduation rate (5 years):        ${metadataResult.Graduationrate5years}%`);
        metadataPanel.append("h5").text(`Graduation rate (6 years):        ${metadataResult.Graduationrate6years}%`);

    })};


// Build function called buildCharts to create a line graph with tuition information
function buildBar (index){
    d3.json("IPEDS_data_dashboard.geojson").then(function (data) {
        let sampledata = data.features;
     
        let sampledataArray = sampledata.filter(metadataObject => metadataObject.properties.Name == index);
        console.log(sampledataArray);

        let Reading25th = sampledataArray[0].properties.SATCriticalReading25thpercentilescore;
        let Reading75th = sampledataArray[0].properties.SATCriticalReading75thpercentilescore;
        let Math75th = sampledataArray[0].properties.SATMath25thpercentilescore;
        let Math25th = sampledataArray[0].properties.SATMath75thpercentilescore;
        let Writing75th = sampledataArray[0].properties.SATWriting25thpercentilescore;
        let Writing25th = sampledataArray[0].properties.SATWriting75thpercentilescore;
        
        // Bar Chart:
        var dataBar1 = [{
            x: ['Reading (25th percentile)', 'Reading (75th percentile)', 'Math (25th percentile)', 'Math (75th percentile)', 'Writing (25th percentile)','Writing (75th percentile)'],
            y: [Reading25th, Reading75th, Math25th, Math75th,Writing25th, Writing75th],
            type: 'bar',
            marker: {
                color: 'rgb(0,124,0)',
                opacity: 0.6,
                line: {
                color: 'rgb(0,48,0)',
                width: 1.5
                }
              }
            }];

        var layoutBar2 = {
            title: "SAT Scores"
            }

        // create plot in the <div id="bar"></div>
        Plotly.newPlot('bar2', dataBar1, layoutBar2);
})};




// Build function called buildCharts to create a line graph with tuition information
function buildLine(index){
    d3.json("IPEDS_data_dashboard.geojson").then(function (data) {
        let sampledata = data.features;

        let sampledataArray = sampledata.filter(metadataObject => metadataObject.properties.Name == index);
        console.log("sampledataarray 2")
        console.log(sampledataArray);

        sampleResult = sampledataArray[0].properties
        let tuition1011 = sampleResult.Tuition201011;
        let tuition1112 = sampleResult.Tuition201112;
        let tuition1213 = sampleResult.Tuition201213;
        let tuition1314 = sampleResult.Tuition201314;

        // Line Chart:
        var trace2 = {
        x: ['2010-2011', '2011-2012', '2012-2013', '2013-2014'],
        y: [tuition1011, tuition1112,tuition1213,tuition1314],
        mode: 'lines',
            line: {
            color: 'rgb(0, 124, 0)',
            opacity: 0.6,
            width: 5
            }
        };
        
        var data = [trace2];
        
        var layout = {
        title:'Tuition and Fees'
        };
        
        Plotly.newPlot('line', data, layout);
          
        })};

//Build function called buildMetadata to create a metadata panel with graduation information
function buildScatter(index) {
    d3.json("IPEDS_data_dashboard.geojson").then(function (data) {
        let sampledata1 = data.features;
        console.log("sampledata")
        console.log(sampledata1)

        var gradrate = [];
        var math = [];
        var reading = []

        for (let index=0; index<sampledata1.length; index++){
            gradrate.push(sampledata1[index].properties.Graduationrate4years);
            math.push(sampledata1[index].properties.SATMath75thpercentilescore);
            reading.push(sampledata1[index].properties.SATCriticalReading75thpercentilescore);
        };  

        //Math Scatter Plot:
        var math_plot = {
            x: math,
            y: gradrate,
            type: 'scatter',
            mode: 'markers',
            line: {
                color: 'rgb(0, 124, 0)',
                opacity: 0.6,
                width: 5
                }
        };

        var math_data2 = [math_plot];

        var math_layout2 = {
            title:'SAT Math Score vs. Graduation Rate',
            xaxis: {
                title: 'SAT Math Scores (75th percentile)',
                titlefont: {
                  family: 'Arial, sans-serif',
                  size: 14,
                  color: 'black'
                }},
            yaxis: {
                title: 'Graduation Rate (4 Years)',
                titlefont: {
                    family: 'Arial, sans-serif',
                    size: 14,
                    color: 'black'
                }
            }};
        
        Plotly.newPlot('scatterplot', math_data2, math_layout2);

         //Reading Scatter Plot:

        var reading_plot = {
            x: reading,
            y: gradrate,
            type: 'scatter',
            mode: 'markers',
            line: {
                color: 'rgb(0, 124, 0)',
                opacity: 0.6,
                width: 5
                }
            };
        
        var reading_data3 = [reading_plot];

        var reading_layout3 = {
            title:'SAT Reading Score vs. Graduation Rate',
            xaxis: {
                title: 'SAT Reading Scores (75th percentile)',
                titlefont: {
                  family: 'Arial, sans-serif',
                  size: 14,
                  color: 'black'
                }},
            yaxis: {
                title: 'Graduation Rate (4 Years)',
                titlefont: {
                    family: 'Arial, sans-serif',
                    size: 14,
                    color: 'black'
                }
            }};
        
        Plotly.newPlot('scatterplot1', reading_data3, reading_layout3);
    })};

/* Update all the plots when a new sample is selected. 
<select id="selDataset" onchange="optionChanged(this.value)"></select> */
function optionChanged(newSample){
    buildMetadata(newSample);
    buildBar(newSample);
    buildLine(newSample);
};


//Create an initialize function called initialize
function initialize(){
    d3.json("IPEDS_data_dashboard.geojson").then(function (data) {
        let sampleNames = data.features;
        console.log("This is sample data");
        console.log(sampleNames[0].properties);
    
        //populate pulldown menu
        //ref MDN for the select statement
        //add option, value, text for each sampleName
        //use d3.select to get <select id="selDataset" onchange="optionChanged(this.value)"></select>
        let pulldownSelect = d3.select("#selDataset");

        //iterate over each Name in sampleNames add option,value,text for each sampleName
        for (let index=0; index<sampleNames.length; index++){
            // start with the pulldownSelect and chain
            pulldownSelect.append("option").text(sampleNames[index].properties.Name).property("value", sampleNames[index].properties.Name)
        }; 

        let firstvalue = sampleNames[0].properties.Name;
        console.log(firstvalue);
        buildMetadata(firstvalue);
        buildBar(firstvalue);
        buildLine(firstvalue);
        buildScatter(firstvalue);

    })};

initialize();
