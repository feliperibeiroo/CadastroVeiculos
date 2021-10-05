<template>
  <div class="container">
    <ul id="nav">
      <router-link to="/">
        <li :class="'item-nav'+homeActive+selectHome" @mouseover="changeHomeOn()" @mouseout="changeHomeOff()">
          <span class="item-img">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path :class="homeActive" d="M23.6111 7.52092L15.2778 0.953774C14.5139 0.339565 13.5249 0 12.5 0C11.4751 0 10.4862 0.339565 9.72229 0.953774L1.38901 7.52092C0.947859 7.87558 0.595822 8.31067 0.35634 8.79719C0.116858 9.28372 -0.00457297 9.81053 0.000131658 10.3425V21.2545C0.000131658 22.2479 0.439115 23.2005 1.22051 23.903C2.00191 24.6054 3.06171 25 4.16677 25H20.8333C21.9384 25 22.9982 24.6054 23.7796 23.903C24.561 23.2005 25 22.2479 25 21.2545V10.3301C25.0027 9.80014 24.8803 9.27574 24.6409 8.7915C24.4015 8.30725 24.0505 7.87419 23.6111 7.52092ZM15.2778 22.503H9.72229V16.2605C9.72229 15.9293 9.86861 15.6118 10.1291 15.3776C10.3895 15.1435 10.7428 15.012 11.1112 15.012H13.8889C14.2573 15.012 14.6105 15.1435 14.871 15.3776C15.1315 15.6118 15.2778 15.9293 15.2778 16.2605V22.503ZM22.2222 21.2545C22.2222 21.5856 22.0759 21.9032 21.8154 22.1373C21.5549 22.3715 21.2017 22.503 20.8333 22.503H18.0556V16.2605C18.0556 15.2671 17.6166 14.3144 16.8352 13.612C16.0538 12.9096 14.994 12.5149 13.8889 12.5149H11.1112C10.0061 12.5149 8.9463 12.9096 8.16491 13.612C7.38351 14.3144 6.94453 15.2671 6.94453 16.2605V22.503H4.16677C3.79842 22.503 3.44515 22.3715 3.18468 22.1373C2.92422 21.9032 2.77789 21.5856 2.77789 21.2545V10.3301C2.77814 10.1528 2.82038 9.9776 2.9018 9.81614C2.98322 9.65469 3.10196 9.51067 3.25011 9.39367L11.5834 2.83902C11.8368 2.63886 12.1627 2.52847 12.5 2.52847C12.8374 2.52847 13.1632 2.63886 13.4167 2.83902L21.75 9.39367C21.8981 9.51067 22.0169 9.65469 22.0983 9.81614C22.1797 9.9776 22.2219 10.1528 22.2222 10.3301V21.2545Z" fill="white"/>
            </svg>
          </span>
          <span :class="'item-text'+homeActive">
            Home
          </span>
        </li>
      </router-link>
      <router-link to="/clientes">
        <li :class="'item-nav'+clientesActive+selectClientes" @mouseover="changeClientesOn" @mouseleave="changeClientesOff">
          <span class="item-img">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path :class="clientesActive" d="M12.5127 12.5C16.2723 12.5 19.2263 9.75 19.2263 6.25C19.2263 2.75 16.2723 0 12.5127 0C8.75311 0 5.79913 2.75 5.79913 6.25C5.79913 9.75 8.75311 12.5 12.5127 12.5ZM25 23.5C23.2545 17.125 16.2723 13.125 9.42447 14.75C4.85923 15.875 1.23389 19.125 0.0254446 23.5C-0.108827 24.125 0.293988 24.875 1.09962 25C1.23389 25 1.36816 25 1.36816 25H23.6573C24.4629 25 25 24.5 25 23.75C25 23.625 25 23.5 25 23.5Z" fill="#F1F1F1"/>
            </svg>
          </span>
          <span :class="'item-text'+clientesActive+selectClientes">
            Clientes
          </span>
        </li>
      </router-link>
      <router-link to="/veiculos">
        <li :class="'item-nav'+veiculosActive" @mouseover="changeVeiculosOn" @mouseleave="changeVeiculosOff"> 
          <span class="item-img">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path :class="veiculosActive" d="M22.25 8.47222L20.5 2.77778C20 1.11111 18.5 0 17 0L8 0C6.5 0 5 1.11111 4.5 2.91667L2.75 8.47222C1.125 9.02778 0 10.5556 0 12.5L0 18.0556C0 19.8611 1 21.3889 2.5 21.9444V23.6111C2.5 24.4444 3 25 3.75 25C4.5 25 5 24.4444 5 23.6111V22.2222H20V23.6111C20 24.4444 20.5 25 21.25 25C22 25 22.5 24.4444 22.5 23.6111V21.9444C24 21.3889 25 19.8611 25 18.0556V12.5C25 10.5556 23.875 9.02778 22.25 8.47222ZM6.875 3.75C7 3.19444 7.5 2.77778 8 2.77778H16.875C17.375 2.77778 17.875 3.19444 18 3.75L19.5 8.33333H5.5L6.875 3.75ZM6.25 16.6667C5.5 16.6667 5 16.1111 5 15.2778C5 14.4444 5.5 13.8889 6.25 13.8889C7 13.8889 7.5 14.4444 7.5 15.2778C7.5 16.1111 7 16.6667 6.25 16.6667ZM13.75 16.6667H11.25C10.5 16.6667 10 16.1111 10 15.2778C10 14.4444 10.5 13.8889 11.25 13.8889H13.75C14.5 13.8889 15 14.4444 15 15.2778C15 16.1111 14.5 16.6667 13.75 16.6667ZM18.75 16.6667C18 16.6667 17.5 16.1111 17.5 15.2778C17.5 14.4444 18 13.8889 18.75 13.8889C19.5 13.8889 20 14.4444 20 15.2778C20 16.1111 19.5 16.6667 18.75 16.6667Z" fill="#F1F1F1"/>
            </svg>
          </span>
          <span :class="'item-text'+veiculosActive+selectVeiculos">
            Veículos
          </span>
        </li>
      </router-link>
      <router-link to="/alugueis">
        <li :class="'item-nav'+alugueisActive" @mouseover="changeAlugueisOn" @mouseleave="changeAlugueisOff"> 
          <span class="item-img">
            <svg width="25" height="25" viewBox="0 0 25 25">
              <path :class="alugueisActive" d="M17.1875 10C14.5312 10 12.5 8.375 12.5 6.25V0L4.6875 0C2.03125 0 0 1.625 0 3.75L0 21.25C0 23.375 2.03125 25 4.6875 25H20.3125C22.9688 25 25 23.375 25 21.25V10H17.1875ZM7.8125 7.5H9.375C10.3125 7.5 10.9375 8 10.9375 8.75C10.9375 9.5 10.3125 10 9.375 10H7.8125C6.875 10 6.25 9.5 6.25 8.75C6.25 8 6.875 7.5 7.8125 7.5ZM17.1875 20H7.8125C6.875 20 6.25 19.5 6.25 18.75C6.25 18 6.875 17.5 7.8125 17.5H17.1875C18.125 17.5 18.75 18 18.75 18.75C18.75 19.5 18.125 20 17.1875 20ZM17.1875 15H7.8125C6.875 15 6.25 14.5 6.25 13.75C6.25 13 6.875 12.5 7.8125 12.5H17.1875C18.125 12.5 18.75 13 18.75 13.75C18.75 14.5 18.125 15 17.1875 15ZM17.1875 7.5H24.0625L15.625 0.75V6.25C15.625 7 16.25 7.5 17.1875 7.5Z" fill="#F1F1F1"/>
            </svg>
          </span>
          <span :class="'item-text'+alugueisActive+selectAlugueis">
            Aluguéis
          </span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BarraLateral',
  data: function () {
    return {
      homeActive: "",
      clientesActive: "",
      veiculosActive: "",
      alugueisActive: "",
      selectHome: "",
      selectClientes: "",
      selectVeiculos: "",
      selectAlugueis: ""
    }
  },
  methods: {
    changeHomeOn: function () {
      this.homeActive = " active"
    },
    changeHomeOff: function () {
      this.homeActive = ""
    },
    changeClientesOn: function () {
      this.clientesActive = " active"
    },
    changeClientesOff: function () {
      this.clientesActive = ""
    },
    changeVeiculosOn: function () {
      this.veiculosActive = " active"
    },
    changeVeiculosOff: function () {
      this.veiculosActive = ""
    },
    changeAlugueisOn: function () {
      this.alugueisActive = " active"
    },
    changeAlugueisOff: function () {
      this.alugueisActive = ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  --roxo-basico: #040341;
  --fundo-branco-menus: #EBEBEB;
  --texto-hover: #000530;
  font-family: 'Red Hat Text', 'Arial';
}

.container {
  width: 100%;
  height: 100vh;
  background-color: var(--roxo-basico);
}

#nav {
  margin-top: 180px;
}

.item-text {
  color: var(--fundo-branco-menus);
  font-size: 18px;
}

.selected {
  background-color: lightblue;
}

.active {
  color: var(--roxo-basico);
  fill: var(--roxo-basico);
  background-color: var(--hover-item);
}

.item-nav {
  padding-left: 10px;
  list-style: none;
  height: 52px;
  display: flex;
  align-items: center;
}

.item-nav-active {
  list-style: none;
  height: 52px;
  display: flex;
  align-items: center;
  background-color: var(--hover-item);
}

.item-img {
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
}

</style>
