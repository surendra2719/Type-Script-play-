var axios = require('axios')
function axiosCall() {
    return new Promise((resolve, reject) => {
        try {
            axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
                // console.log("response", response.data)

                var splice=[]
                for (i = 0; i < response.data.message.spaniel.length; i++) {
                    // console.log(response.data.message.spaniel[i]);
                    splice = response.data.message.spaniel
                }

  console.log(splice);
  
            })


        } catch (error) {
            console.log("Error", error);

        }
    }).catch(error => {
        console.log('Error');

    })

}
axiosCall()
