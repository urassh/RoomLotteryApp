<template>
    <section id="room">
        <h1>LotteryRooms</h1>

        <ul>
            <li>sample1</li>
            <li>sample2</li>
            <li>sample3</li>
            <li>sample4</li>
        </ul>
    </section>
</template>

<style scoped>
#room {
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
