<template>
  <div class="extrato">
    <PageTitle icon="" main="Extrato" sub="Seu Extrato" />
    <b-table hover stiped :items="extratos.data"></b-table>

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
    };
  },
  methods: {
    loadExtrato() {
      const url = `${baseApiUrl}/transacao/extrato`;
      axios.get(url).then((res) => {
        this.extratos = res.data;
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