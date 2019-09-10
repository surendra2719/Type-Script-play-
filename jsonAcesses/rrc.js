function doTask() {
  return new Promise((resolve, reject) => {
    let result = {
      "result": [{
        "Object": "",
        "Counter": "RrcSuc",
        "06:45": "90.51",
        "07:00": "89.43",
        "07:15": "89.91",
        "07:30": "90.09"
      }]
    }
    let throughputTable = {
      "msgType": "datatable",
      "msg": {
        "text": "Throughput Table",
        "subText": "",
        "header": [{
          "name": "Time"

        },
        {
          "name": "RRC"

        },
        ],
        "rows": []
      }
    };
    let headerArray = [];
    for (var key in result.result[0]) {
      if (key !== "Object" && key !== "Counter") {
        headerArray.push(key);

      }
    }
    for (let i = 0; i < result.result.length; i++) {
      for (let iter = 0; iter < headerArray.length; iter++) {
        console.log(iter);
        console.log(result.result[i][headerArray[iter]]);

        if (key !== "Object" && key !== "Counter") {
          throughputTable.msg.rows.push({
            "data": [
              headerArray[iter],
              result.result[i][headerArray[iter]]
            ]
          })
        }
      }
    }

    console.log("rows:", JSON.stringify(throughputTable));

  });
}
doTask()

