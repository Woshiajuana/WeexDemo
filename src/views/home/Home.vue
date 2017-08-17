<template>
    <div class="stories-view" append="tree">
        <text class="button" @click="jump">Jump</text>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                required: true,
                default: 'top'
            }
        },
        data () {
            return {
                loading: true
            }
        },

        computed: {
            stories () {
                return this.$store.getters.activeItems
            }
        },

        methods: {
            fetchListData () {
                this.loading = true
                this.$store.dispatch('FETCH_LIST_DATA', {
                    type: this.type
                }).then(() => {
                    this.loading = false
                })
            },
            loadMoreStories () {
                this.loading = true
                this.$store.dispatch('LOAD_MORE_ITEMS').then(() => {
                    this.loading = false
                })
            }
        },

        created () {
            this.fetchListData()
        }
    }
</script>

<style scoped>
    .stories-view {
        height: 100%;
    }
    .story-cell {
        margin-bottom: 3px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #DDDDDD;
        background-color: #FFFFFF;
    }
    .loading {
        width: 750px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .loading-text {
        margin: auto;
        text-align: center;
        font-size: 40px;
        color: #BBB;
    }
</style>
