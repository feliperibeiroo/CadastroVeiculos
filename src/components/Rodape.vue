<template>
    <div id="rodape">
        <div id="commands">
            <div id="back-button">
                <a href="">
                    <img src="../assets/arrow-left.svg" alt="">
                </a>
            </div>
            <div id="page-count">
                <b>1 / 2</b>
            </div>
            <div id="forward-button">
                <a href="">
                    <img src="../assets/arrow-right.svg" alt="">
                </a>
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
    width: 100%;
    background-color: #dcdcdc;
    position: absolute;
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