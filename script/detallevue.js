const { createApp } = Vue
const url = 'https://mh.up.railway.app/api/amazing-events'

const app = createApp({
    data() {
        return {
            evento: [],

        }
    },
    created() {
        this.captureData()

    },
    methods: {
        async captureData() {
            let query = location.search
            let params = new URLSearchParams(query)
            let id_query = params.get("id")
            try {
            let response = await fetch(url)
                response = await response.json()
                response = response.events
                response = response.find(each => each.id === id_query )
                this.evento = response
                console.log(this.evento)
                
            } catch (error) {
            }
       
        }

    },
    computed: {

    }
}
)

app.mount("#app")