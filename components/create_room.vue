<template>
    <div class="room">
        <h1 class="room-title">CreateRoom</h1>

        <div class="container">
            <NuxtLink to="/registerRoom" class="button">部屋を作成する</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.room {
    margin: 1%;
    padding: 10px;
    height: 180px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #09b4125e;
    box-shadow: 0 0 3px #09b412;
}

.room-title {
    border-bottom: 1px solid #ccc;
}

.container {
    padding: 20px 0px 0px;
}

.button {
    background-color: #04aa6d;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 8px;
}
</style>
