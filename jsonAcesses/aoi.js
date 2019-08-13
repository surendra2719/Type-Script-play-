var axios = require('axios')
function doTask(params, state) {
    return new Promise((resolve, reject) => {
        let email = "surendra@gmail.com";
        let name = "surendrakumar";
        let contactNumber = "817982719";
        let type = "Query";
        let conversationLog = "hi hello how are you?";
        let config = {
            "url": 'http://aitlapi.daphtest.com/chatbotAPI/Controller/chatAPIclass.php',
            "data": {
                "email_id": email,
                "name": name,
                "mobile_number": contactNumber,
                "conversation_log": conversationLog,
                "type": type
            },
            "method": 'post'
        };
        try {
            axios(config).then(response => {
                if (response.status == 200) {
                    console.log("Response in push message:", response);
                    let Response = response;
                    resolve({
                        "Response": true
                    });
                }
            });
        } catch (error) {
            console.log(error);
            console.log("Error in response");
            resolve({
                "error": true
            });
        }
    });
}
doTask()