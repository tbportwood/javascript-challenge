// from data.js
var tableData = data;

// YOUR CODE HERE!
var dttime = d3.select("#datetime")
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

data.forEach(function(ufo_data){ 
    var row = tbody.append("tr");
    Object.entries(ufo_data).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
    });
});

button.on("click", function(){

    var inputElementTime = d3.select("#datetime");
    var inputValueTime = inputElementTime.property("value");
    var inputElementState = d3.select("#state");
    var inputValueState = inputElementState.property("value");
    var inputElementCity = d3.select("#city");
    var inputValueCity = inputElementCity.property("value");
    var inputElementCountry = d3.select("#country");
    var inputValueCountry = inputElementCountry.property("value");
    var inputElementShape = d3.select("#shape");
    var inputValueShape = inputElementShape.property("value");

    var date_array = inputValueTime.split('/');
    var convert_date = new Date(parseInt(date_array[2]), parseInt(date_array[0]), parseInt(date_array[1]));
    var filteredData = tableData.filter(ufo_sight => 
                                        {

                                            if(inputValueTime){
                                                var new_date_time = ufo_sight.datetime.split('/');
                                                var convert_date_time =  new Date(parseInt(new_date_time[2]), parseInt(new_date_time[0]), parseInt(new_date_time[1]));
                                                console.log(convert_date_time);
                                                if(convert_date_time > convert_date){
                                                    return false;
                                                };
                                            }
                                            if(inputValueState){
                                                if(ufo_sight.state != inputValueState){
                                                    return false;
                                                }
                                            }
                                            if(inputValueCity){
                                                if(ufo_sight.city != inputValueCity){
                                                    return false;
                                                }
                                            }
                                            if(inputValueCountry){
                                                if(ufo_sight.country != inputValueCountry){
                                                    return false;
                                                }
                                            }
                                            if(inputValueShape){
                                                if(ufo_sight.shape != inputValueShape){
                                                    return false;
                                                }
                                            }
                                            return true;
                                        });
    tbody.html("");

    filteredData.forEach(function(ufo_data){ 
        var row = tbody.append("tr");
        Object.entries(ufo_data).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        });
    });

 })

 function convert_date_time(dtime){

    var new_date = dtime.split('/');
    var convert_date = new Date(parseInt(new_date[2]), parseInt(new_date[0]), parseInt(new_date[1]));

 }