import api from "./api.js"

export default {
    getPessoas: function () {
        api
        .get("/pessoas")
        .then((res) => {
            return (res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    },

    getVeiculos: function () {
        api
        .get("/veiculos")
        .then((res) => {
            return (res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    },

    getAlugueis: function () {
        api
        .get("/alugueis")
        .then((res) => {
            return (res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

