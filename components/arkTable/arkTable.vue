<template>
    <div class="table-container">
        <b-table 
            striped hover 
            :items="list" 
            :fields="fields" 
            :tbody-tr-class="rowClass"
            :per-page="perPage"
            :current-page="currentPage"
            tdClass="noBorder"
            :busy="isBusy"
            responsive
        >
            <template #cell(reportSlot)="data">
                <div>{{ data.item.reportSlot }}</div>
            </template>
            <template #cell(accountId)="data">
                <div 
                    v-b-tooltip.hover 
                    :title= data.item.accountId 
                    class="shorterId"
                    placement="topright"
                >{{ data.item.accountId }}</div>
            </template>
            <template #cell(totalCapacity)="data">
                <div>{{ data.item.totalCapacity }}</div>
            </template>
            <template #cell(dropRate)="data">
                <div>{{ data.item.dropRate }}</div>
            </template>
            <template #cell(reportRate)="data">
                <div>{{ data.item.reportRate }}</div>
            </template>
            <template #cell(totalPoints)="data">
                <b>1{{ data.item.totalPoints }}</b>
                <b>2{{ data.item.totalPoints }}</b>
                <b>3{{ data.item.totalPoints }}</b>
                <b>4{{ data.item.totalPoints }}</b>
                <b>5{{ data.item.totalPoints }}</b>
            </template>
            <template #table-busy>
                <div class="text-center text-orange my-2" v-if="isBusy">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </template>
        </b-table>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            style="justify-content: center;margin: 50px 0 100px;"
        ></b-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                perPage: 3,
                currentPage: 1,
                fields: [
                    {
                        key: 'reportSlot',
                        label: 'Competition ranking'

                    },{ 
                        key: 'accountId',
                        label:  'Miner ID'
                    },{
                        key: 'totalCapacity',
                        label:  'Storage Capacity'
                    },{
                        key: 'dropRate',
                        label:  'Drop Rate'
                    },{
                        key: 'reportRate',
                        label:  'Work Report Rate'
                    },{
                        key: 'totalPoints',
                        label:  'Points'
                    }
                ],
                list: [],
                isBusy: false
            }
        },
        mounted () {
            this.getNodeList()
        },
        methods: {
            async getNodeList() {
                this.isBusy = true
                this.$axios.get('/api/tee/queryNodeEraStatusOverview').then(res => {
                    if(res.status === 200 && res.data.code === 1) {
                        this.list = res.data.data
                        this.isBusy = false
                    }
                }).catch(err => {
                    this.isBusy = false
                })
            },
            rowClass( item, type) {
                if (!item || type !== 'row') return
                if (item.status === 'grey') return 'table-secondary'
            }
        },
        computed: {
            rows() {
                return this.list.length
            }
        }
    }
</script>
<style lang="scss" scoped>
    .shorterId {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100px;
    }
    .table th, .table td {
        border-top: none !important;
    }
    .page-link {
        color: #555 !important;
    }
    .page-item.disabled .page-link {
        border: none !important;
        color: #999 !important;
    }
    .page-item:first-child .page-link {
        border: none !important;
    }
    button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
        border: none !important;
    }
    .page-item.active .page-link {
        color: #ffffff !important;
        background-color: #FA8C16;
        border-radius: 3px;
    }
    .page-link:focus {
        box-shadow: 0 0 0 0.2rem rgba(235, 118, 28, 0.2);
    }
    .page-link:hover {
        background-color: rgba(235, 118, 28, 0.3);
        box-shadow: none;
        border-radius: 3px;
        .page-link {
            color: #fff !important;
        }
    }
    .text-orange {
        color: #FA8C16;
    }
    @media (max-width: 420px) {
        .table thead th {
            font-size: 14px;
        }
    }
</style>

