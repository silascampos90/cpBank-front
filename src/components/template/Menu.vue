<template>
  <aside class="menu">
      <a href @click.prevent="dashboard" class="menu-button">Dashboard</a>
      <a href @click.prevent="saque" class="menu-button">Saque</a>
      <a href @click.prevent="deposito" class="menu-button">Depósito</a>
      <a href @click.prevent="extrato" class="menu-button">Extrato</a>
  </aside>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    async mounted () {
    
    },
    methods:{
        dashboard () {
            this.$router.push({
                name: 'home'
            });
        },
        saque () {
            this.$router.push({
                name: 'Saque'
            });
        },
        deposito () {
            this.$router.push({
                name: 'Deposito'
            });
        },
        extrato () {
            this.$router.push({
                name: 'Extrato'
            });
        }
    }
}
</script>

<style>
    .menu{
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .menu-button {
        padding: 15px;
        color: #232526;
        background-color: rgb(236, 239, 243);
        border-radius: 2px;
        text-decoration: none;
        border: solid 1px #b9b9b9;
    }

    .menu-button:hover {
        text-decoration: none;
    }
</style>