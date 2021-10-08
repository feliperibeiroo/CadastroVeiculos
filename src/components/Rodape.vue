<template>
    <div id="rodape">
        <div id="btn-add">
            <button-add>{{btnName}}</button-add>
        </div>
        <div id="commands">
            <div id="back-button">
                <img src="../assets/arrow-left.svg" alt="">
            </div>
            <div id="page-count">
                <b>1 / 2</b>
            </div>
            <div id="forward-button">
                <img src="../assets/arrow-right.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import ButtonAdd from './ButtonAdd.vue'
export default {
    name: 'rodape',
    props: ['btnName'],
    components: {
        ButtonAdd
    }
}
</script>
<style scoped>
#btn-add {
    padding-left: 15px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
}

#rodape {
    height: 100%;
    width: 86%;
    background-color: #dcdcdc;
    position: fixed;
    display: flex;
    align-items: flex-end;
}
#commands {
    display: flex;
    flex-direction: row;
    margin-right: 50px;
    position: absolute;
    justify-content: center;
    align-items: center;
    height: 100%;
    right: 0;
}

#back-button, #forward-button {
    width: 20px;
    height: 100%;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

#page-count {
    padding-top: 3px;
    width: 70px;
    height: 100%px;
    display: flex;
    justify-content: center;
}

</style>