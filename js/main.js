const app = new Vue({
    el: '#root',
    data: {
       mails: []
    },
    created(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                const newMail = {
                    mail: response.data.response
                }
                this.mails.push(newMail)
                console.log(this.mails)
            })
        }
    }
})