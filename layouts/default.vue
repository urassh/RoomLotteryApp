<template>
    <header>
        <div class="container">
            <h1>LotteryApp</h1>
            <ul>
                <li>urassh</li>
                <li>SignIn</li>
                <li>SignUp</li>
            </ul>
        </div>
    </header>
    <main>
        <slot></slot>
    </main>
</template>

<style scoped>
header {
    background-color: #575757;
    color: white;
    padding: 10px;
    margin: 1%;
}

.container {
    display: flex;
    justify-content: space-between;
}

h1 {
    font-size: 1.2em;
}

ul {
    display: flex;
    width: 20%;
    justify-content: space-around;
}

li {
    cursor: pointer;
}
</style>
