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
        for (var key in result.result[0]) {
            if (key !== "Object" && key !== "Counter") {
                throughputTable.msg.header.push({
                    "name": key
                })

            }
        }

        // for (i = 0; i < result.result.length; i++) {
        //     throughputTable.msg.rows.push(
        //         result.result[i].Counter)
        // }
        // console.log(  result.result.Counter[i]);
        for (i = 0; i < result.result.length; i++) {
            let values = Object.values(result.result[i])
            let finalValues = values.splice(1, 5)
            // console.log("final values",finalValues);

            throughputTable.msg.rows.push({

                "data": finalValues
            })

        }
        // console.log("rows:", JSON.stringify(throughputTable));

    });
}
doTask()