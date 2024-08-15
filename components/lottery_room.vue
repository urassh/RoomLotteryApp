<template>
    <div class="room">
        <h1 class="room-title">LotteryRoom</h1>

        <div class="container">
            <div class="infomation">
                <p>参加者 : 30名</p>
                <p>当選者 : 30名</p>
            </div>

            <button>ルームを開く</button>
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
    border: 1px solid #ccc;
    box-shadow: 0 0 3px #ccc;
}

.room-title {
    border-bottom: 1px solid #ccc;
}

.container {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

button {
    background-color: #04aa6d;
    border: none;
    width: 70%;
    color: white;
    padding: 12px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 25px;
}

.infomation {
    display: flex;
    padding: 16px 0;
    justify-content: space-between;
}

.infomation p {
    width: 48%;
}
</style>
