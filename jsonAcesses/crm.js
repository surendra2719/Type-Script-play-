function doTask(params, state) {
    return new Promise((resolve, reject) => {
        let config = {
            url: '',
            data: {
                "email_id": "",
                "name": "",
                "mobile_number": "",
                "conversation_log": [],
                "type": ""
            },
            method: 'post'
        };
        try {
            axios(config).then(response => {
                if (response) {
                    console.log("Response:", response);
                    let response = response;
                    resolve({
                        "Response": response
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