<template>
  <aside class="menu">
      <a class="menu-button" href="/">Dashboard</a>
      <a class="menu-button" href="/saque">Realizar Saque</a>
      <a class="menu-button" href="/deposito">Realizar Depósito</a>
      <a class="menu-button" href="/extrato">Extrato</a>
  </aside>
</template>

<script>
export default {
    name: 'Menu'
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