<template>
  <div class="login-content">
    <div class="login-modal">
      <h5>Digite suas credenciais</h5>
      <hr />
      <input type="text" v-model="user.username" placeholder="Digite seu username" />
      <input type="password" v-model="user.senha" placeholder="Digite sua senha" />
      <button @click="entrar">Entrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data: function() {
    return {
      user: {}
    };
  },
  methods: {
    entrar() {
      /* user: matheus senha: 1234 */
      if (this.user.username === "matheus" && this.user.senha === "1234") {
        this.$router.push({ path: "/" });
      } else {
        this.$toasted.error("Dados incorretos", {
          theme: "outline",
          position: "top-right",
          duration: 2000
        });
      }
    }
  }
};
</script>

<style>
.login-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-modal {
  background-color: #f5f5f5;
  width: 300px;
  padding: 30px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-modal input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  width: 100%;
  margin-bottom: 20px;
  padding: 4px 8px;
}

.login-modal button {
  background-color: #163374;
  padding: 5px 15px;
  color: #f5f5f5;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  width: 100%;
}

.login-modal hr {
  border: 0;
  width: 50%;
  height: 1px;
  background: #CCC;
  margin-top: 0;
}
</style>