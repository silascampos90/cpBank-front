<template>
  <div class="saque">
    <PageTitle icon="" main="Saque" sub="Realizar Saque" />
    <b-form>
      <b-row>
        <b-col md="5" sm="12">
          <b-form-group label="Valor" label-for="valor">
            <b-form-input
              id="valor"
              type="text"
              v-model="saque.valor"
              required
              placeholder="Valor para Saque"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="5" sm="12">
          <b-form-group label="Senha" label-for="senha">
            <b-form-input
              id="senha"
              type="password"
              v-model="saque.password"
              required
              placeholder="Digite sua senha"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-button variant="primary" @click="depositar">Realizar Saque</b-button>
    </b-form>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import axios from "axios";
import { baseApiUrl , showError } from "@/global";
export default {
  name: "Depósito",
  components: { PageTitle },
  data: function () {
    return {
      saque: {},
    };
  },
  methods: {
      reset(){
          this.saque = {}
      },
      depositar(){
            axios['post'](`${baseApiUrl}/transacao/saque`, this.saque)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)

      }
    },
  
};
</script>

<style>
</style>