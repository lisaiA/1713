<template>
    <div class="hello">
        <tourheader/>
        <tourlist/>
        <ticket :tourlistInfo="tourlistInfo"/>
        <dock/>
    </div>
</template>

<script>

    import tourheader from './header.vue';
    import tourlist from './tourlist.vue';
    import ticket from './ticket.vue';
    import dock from './dock.vue';
    import axios from 'axios';
    export default {
        name:'HelloWorld',
        data () {
            return {
                tourlistInfo: []
            }
        },
        components: {
            tourheader: tourheader,
            tourlist: tourlist,
            ticket: ticket,
            dock: dock
        },
        mounted() {
            this.getIndexData();
        },
        methods: {
            getIndexData() {
                axios.get('/static/Tourism-details.json')
                    .then(this.handleGetIndexDataSucc.bind(this))
                    .catch(this.handleGetIndexDataErr.bind(this));
            },
            handleGetIndexDataSucc(res) {
                const data = res.data.data;
                console.log(data.detailList.src)
                this.tourlistInfo = data.detailList;
            },
            handleGetIndexDataErr(err) {
                console.log(err)
            }
        }
    }
</script>

<style scoped>

</style>
