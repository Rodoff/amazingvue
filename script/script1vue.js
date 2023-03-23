const { createApp } = Vue
const url = 'https://mh.up.railway.app/api/amazing-events'

const app = createApp({
    data() {
        return {
            eventos: [],
            categorias: [],
            checks: [],
            texto: "",
            dataFilter: []
        }
    },
    created() {
        this.fetchApi()
        this.getCategories()
    },
    methods: {
        async fetchApi() {
            try {
                let fetchResponse = await fetch(url)
                response = await fetchResponse.json()
                this.eventos = response.events
                this.dataFilter = response.events
            } catch (error) {
            }
        },
        async getCategories() {
            try {
                let response = await fetch(url)
                response = await response.json()
                response = response.events
                response = response.map(each => each.category)
                response = [...new Set(response)]
                this.categorias = response
            } catch (error) {
                console.log(error);
            }
        }
    },
    computed: {
        filterData() {
            this.dataFilter = this.eventos.filter(each => {
                return (each.name.toLowerCase().includes(this.texto)) && (this.checks.length === 0 || this.checks.includes(each.category))
            })
        }
    }
}
)

app.mount("#app")