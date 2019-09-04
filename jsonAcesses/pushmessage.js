function doTask(params, state) {
    return new Promise((resolve, reject) => {
        let sortArray = [];
        let transcriptArray = [];
        let transcriptData = {}
        let moduleId='';
        console.log("moduleId:",moduleId);
        let clientId='';
        console.log('clientId:',clientId); 
        let employeeCode='';
        console.log('employeeCode:',employeeCode);
        let sessionKey='';
        console.log('sessionKey:',sessionKey);
        let surveyId=''
        console.log('surveyId:',surveyId);
        let configUser = {
            url: '',
            headers: {

            },
            data: {
                "userId": userid,
                "ModuleId": moduleId,
                "ClientId":clientId,
                "EmployeeCode":employeeCode,
                "SessionKey": sessionKey,
                "SurveyId": surveyId,
                "SurveyData":transcriptData
            },
            method: 'post'
        };
        console.log("ConfigPush:", configUser);
        for (var key in state) {
            if (state[key].hasOwnProperty("updateMessage")) {
                sortArray.push(state[key].updateMessage);
            }
        }
        sortArray.sort(GetSortOrder("time"));
        for (var iter = 0; iter < sortArray.length; iter++) {
            transcriptArray.push({
                "Question": sortArray[iter].question,
                "Answer": sortArray[iter].answer
            });
        }
        for (let index = 0; index < transcriptArray.length; index++) {
            var questionData = "q" + (parseInt(index) + 1);
            transcriptData[questionData] = transcriptArray[index]
        }
        console.log("configPushMessage:", JSON.stringify(configUser));
        axios(configUser).then(responseUser => {
            console.log("responsePushMessage", responseUser);
            resolve({
                "success": true
            });
        }).catch(error => {
            console.log("Error in pushMessages");
            resolve({
                "error": true
            });
        });
    });
}

function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    };
}