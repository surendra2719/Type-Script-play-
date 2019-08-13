var axios = require('axios')
let emailUrl="http://dev-server.autonom8.com/email/sendEmail";
var name ='surendra',
 mobileNumber="8179882719"
function doTask(params, state) {
    return new Promise((resolve, reject) => {
    //   let email=state.context.emailid;
    //   let name=state.context.name;
    //   let contactNumber=state.context.mobileNumber;
    //   let type=state.context.type;
    //   let conversationLog=state.context.unhandledQuestion;
    //     let config = {
    //         "url": '',
    //         "data": {
    //             "email_id":email,
    //             "name": name,
    //             "mobile_number":contactNumber,
    //             "conversation_log":conversationLog,
    //             "type":type
    //         },
    //         "method": 'post'
    //     };
        // try {
        //     axios(config).then(response => {
        //         if (response.status==200) {
        //             console.log("Response:", response);
        //             let Response = response;
        //             resolve({
        //                 "Response": true
        //             });

        //         }
        //     });
        // } catch (error) {
        //     console.log(error);
        //     console.log("Error in response");
        //     resolve({
        //         "error": true
        //     });
        // }


        let emailConfig = {
            "data": {
                "to": "surendrakumarganpisetti13@gmail.com",
                "subject": "this is first email",
                "body": "hi",
                "reply_to": "test@autonom8.com"
            },
            "method": "post"
        };   let emailConfig1 = {
            "data": {
                "to": "surendrakumar@autonom8.com",
                "subject": "this is first email",
                "body": name.concat(mobileNumber),
                "reply_to": "test@autonom8.com"
            },
            "method": "post"
        };
        // console.log('Config', emailConfig);
        try {
            axios(emailUrl, emailConfig).then(response => {
                if(response.status===200){

                    axios(emailUrl, emailConfig1).then(response => {
                        console.log('inside email',response);
                        
                    })
                console.log("response", response);



                }
                let emailResponse=response;
                resolve({
                  "Response":emailResponse
                }); 

            });
        } catch (error) {
            resolve({
              "error":true
            });
        }
    
    });
}
doTask()