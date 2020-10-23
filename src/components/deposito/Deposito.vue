<template>
  <div class="deposito">
    <PageTitle icon="" main="Depósito" sub="Realizar Depósito" />
    <b-form>
      <b-row>
        <b-col md="5" sm="12">
          <b-form-group label="Agencia" label-for="agencia">
            <b-form-input
              id="agencia"
              type="text"
              v-model="deposito.agencia"
              required
              placeholder="Agência"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="5" sm="12">
          <b-form-group label="conta" label-for="conta">
            <b-form-input
              id="conta"
              type="text"
              v-model="deposito.conta"
              required
              placeholder="Conta"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="5" sm="12">
          <b-form-group label="Valor" label-for="valor">
            <b-form-input
              id="valor"
              type="text"
              v-model="deposito.valor"
              required
              placeholder="Valor para depósito"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-button variant="primary" @click="depositar">Realizar Depósito</b-button>
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
      deposito: {},
    };
  },
  methods: {
      reset(){
          this.deposito = {}
      },
      depositar(){
            axios['post'](`${baseApiUrl}/transacao/deposito`, this.deposito)
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