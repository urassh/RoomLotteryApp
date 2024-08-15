<template>
    <section id="rooms">
        <h1>LotteryRooms</h1>

        <ul>
            <li>
                <CreateRoom></CreateRoom>
            </li>
            <li>
                <LotteryRoom></LotteryRoom>
            </li>
            <li>
                <LotteryRoom></LotteryRoom>
            </li>
            <li>
                <LotteryRoom></LotteryRoom>
            </li>
            <li>
                <LotteryRoom></LotteryRoom>
            </li>
        </ul>
    </section>
</template>

<style scoped>
#rooms {
    margin: 80px 1%;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
}

h1 {
    font-size: 2.2em;
    margin-bottom: 10px;
    color: #333;
    border-bottom: 1px solid #ccc;
}

ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

li {
    width: 50%;
    padding: 1%;
}

@media (max-width: 900px) {
    li {
        width: 100%;
    }
}
</style>
