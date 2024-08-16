<template>
    <header>
        <div class="container">
            <h1>LotteryApp</h1>
            <ul>
                <li>urassh</li>
                <li>Login</li>
                <li>SignUp</li>
            </ul>
        </div>
    </header>
    <main>
        <slot></slot>
    </main>
</template>

<style scoped>
header, body {
    font-family: 'Arial', sans-serif;
    background-color: #1e1e1e;
}

header {
    color: white;
    padding: 12px;
    margin: 1%;
    border-radius: 5px;
    box-shadow: 0 0 5px #333;
    border: 1px solid #333;
}

.container {
    display: flex;
    justify-content: space-between;
}

h1 {
    font-size: 1.4em;
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
