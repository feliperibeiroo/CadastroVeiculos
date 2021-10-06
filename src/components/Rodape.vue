<template>
    <div id="rodape">
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
export default {
    name: 'rodape'
}
</script>
<style scoped>
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
    right: 0;
}

#back-button, #forward-button {
    width: 20px;
    height: 100%;
}

#page-count {
    padding-top: 3px;
    width: 70px;
    height: 100%px;
    display: flex;
    justify-content: center;
}

</style>