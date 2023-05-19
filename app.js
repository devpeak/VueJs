const app = Vue.createApp({
    data(){
        return {
            firstName: 'Malay',
            lastName: 'Thakur',
            email: 'malaythakur13@gmail.com',
            gender: 'male',
            picture: 'https://media.licdn.com/dms/image/D5603AQGjWA22JUK3yw/profile-displayphoto-shrink_800_800/0/1669655590418?e=1689811200&v=beta&t=lGJ0IhfaWRM7SpGGQBEqEvycVB4uYKMRzpZhe6MxESE'
        }
    },

    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')

            const {results} = await res.json()
           

            this.firstName= results[0].name.first
            this.lastName= results[0].name.last
            this.email= results[0].email
            this.gender= results[0].gender
            this.picture= results[0].picture.large
    
    },
},

})

app.mount('#app')