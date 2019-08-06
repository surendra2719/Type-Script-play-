function doTask() {
  return new Promise((resolve, reject) => {

    let result = {
      "result": [
        {
          "Object": "NodeBFunction=1",
          "Counter": "AvgNbDlCECapacity",
          "07:15": "28.4",
          "07:30": "26.6",
          "07:45": "22.8",
          "08:00": "21.3"
        },
        {
          "Object": "NodeBFunction=1",
          "Counter": "AvgNbUlCECapacity",
          "07:15": "36.7",
          "07:30": "29.6",
          "07:45": "29.3",
          "08:00": "31.8"
        },
        {
          "Object": "NodeBFunction=1",
          "Counter": "AvgNbUlCEeXTCapacity",
          "07:15": "0",
          "07:30": "0",
          "07:45": "0",
          "08:00": "0"
        }
      ]
    };
    let throughputTable = {
      "msgType": "datatable",
      "msg": {
        "text": "Throughput Table",
        "subText": "",
        "header": [{
          "name": "Counter Name"
        },
        ],
        "rows": []
      }
    };
    let headerArray = [];
    for (var key in result.result[0]) {

 
      if (key !== "Object" && key !== "Counter") {

        throughputTable.msg.header.push({
          "name": key
        })
        headerArray.push(key);
     
      }
    }

    for (let iter = 0; iter < result.result.length; iter++) {
      throughputTable.msg.rows.push({
        "data": [
          result.result[iter].Counter,
        ]
      });
    }
    for (let iter = 0; iter < result.result.length; iter++) {
      for (let j = 0; j < headerArray.length; j++) {
        throughputTable.msg.rows[iter].data.push(
          result.result[iter][headerArray[j]]
        );
      }
    }
    console.log("rows:", JSON.stringify(throughputTable));

  });
}
doTask()