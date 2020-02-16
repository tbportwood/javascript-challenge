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

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var date_array = inputValue.split('/');
    var convert_date = new Date(parseInt(date_array[2]), parseInt(date_array[0]), parseInt(date_array[1]));
    var datefilter = new Date(inputValue);
    var filteredData = tableData.filter(ufo_sight => 
                                        {
                                            if(inputValue){
                                            var new_date_time = ufo_sight.datetime.split('/');
                                            var convert_date_time =  new Date(parseInt(new_date_time[2]), parseInt(new_date_time[0]), parseInt(new_date_time[1]));
                                            console.log(convert_date_time);
                                            return convert_date_time < convert_date;
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