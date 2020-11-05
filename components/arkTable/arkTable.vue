<template>
    <div class="table-container">
        <b-table striped hover :items="items" :fields="fields" :tbody-tr-class="rowClass">
            <template #cell(index)="data">
                {{ data.index + 1 }}
            </template>
        </b-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fields: ['index', 'first_name', 'last_name', 'age'],
                items: [
                    { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                    {   
                        age: 21, 
                        first_name: 'Larsen', 
                        last_name: 'Shaw',
                        // _rowVariant:'success', 
                        status:'gery' 
                    },
                    { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
                ]
            }
        },
        methods: {
            rowClass(item, type) {
                if (!item || type !== 'row') return
                if (item.status === 'grey') return 'table-success'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .table {
        margin-top: 30px;
    }
</style>