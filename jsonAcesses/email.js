var axios = require('axios')
let url = "http://dev-server.autonom8.com/email/sendEmail";
function doTask(params, state) {
    let email ="surendrakumar@autonom8.com"
    let name = 'surendra';
    let contactNumber = '8179882719';
    let conversationLog = "Hi ,hello how are you?";
    return new Promise((resolve, reject) => {
        let auricConfig = {
            "data": {
                "to": "surendrakumarganpisetti13@gmail.com",
                "subject": "Query on Auric City",
                "body": name + "," + contactNumber + "," + email + "," + conversationLog,
                "reply_to": "test@autonom8.com"
            },
            "method": "post"
        };
        let userConfig = {
            "data": {
                "to":email,
                "subject": "Your Query at AURIC city",
                "body": " Dear" +" "+ name +","+ "Thanks for your interest in Auric city. A representative from Auric shall contact you shortly.",
                "reply_to": "test@autonom8.com"
            },
            "method": "post"
        };
        console.log('Auric config', auricConfig);
        console.log('User config', userConfig);
        try {
            axios(url, auricConfig).then(auricResponse => {
                console.log("Auric response", auricResponse);
                if (auricResponse.status === 200) {
                    axios(url, userConfig).then(userEmailResponse => {
                        console.log("User response", userEmailResponse);
                        resolve({
                          "userEmailResponse":true
                        });
                    }).catch(error=>{
                      console.log("error in useremail response",error);
                    });
                }
            });
        } catch (error) {
            resolve({
                "error": true
            });
        }
    });
}
doTask()