<template>
  <div class="extrato">
    <PageTitle icon="" main="Extrato" sub="Seu Extrato" />
    <b-table hover stiped :items="extratos" :fields="fields"></b-table>

  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import axios from "axios";
import { baseApiUrl } from "@/global";
export default {
  name: "Extrato",
  components: { PageTitle },
  data: function () {
    return {
      extrato: {},
      extratos: [],
      fields: [
          { key: 'tipo_transacao_id', label:'Transação'},
          { key: 'valor', label: 'Valor'},
          { key: 'created_at', label: 'Data'}
      ]
    };
  },
  methods: {
    loadExtrato() {
      const url = `${baseApiUrl}/transacao/extrato`;
      axios.get(url).then((res) => {
        this.extratos = res.data.data;
      });
    },
  },
  mounted() {
      this.loadExtrato()
  }
};
</script>

<style>
</style>