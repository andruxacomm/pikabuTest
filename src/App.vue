<script>
    export default {
        name: 'App',

        components: {
            //
        },

        methods: {
            setComments() {
                this.$store.commit('comments/setComments', [1, 2, 3]);
            },
        },

        computed: {
            comments() {
                return this.$store.getters['comments/getComments'];
            },
        },

        render() {
            return (
                <div>
                    <button onClick={() => this.setComments()}>set lazyComments</button>
                </div>
            );
        },
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
