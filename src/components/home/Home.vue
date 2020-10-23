<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Bem vindo" /> 
        <div class="stats">
            <Stat title="Saldo" :value="'R$ '+stat.data.saldo"
                icon="fa fa-file" color="#3bc480" />
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import { baseApiUrl } from '@/global'
export default {
    name: 'Home',
    components: { PageTitle, Stat },
    data: function() {
        return {
            stat: {}
        }
    },
    methods: {
        getSaldo() {
            axios.get(`${baseApiUrl}/transacao/saldo`).then(res => this.stat = res.data)
        }
    },
    mounted() {
        this.getSaldo()
    }
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>