const app = new Vue({
    el: '#root',
    data: {
       mails: [
           
       ]
    },
    created(){
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=> {
            console.log(response.data.response);
            while(this.mails.length < 10){
                const newMail = {
                    mail: response.data.response
                }
                this.mails.push(newMail)
            }
            console.log(response.data.response);
        })
    }
})