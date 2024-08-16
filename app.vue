<template>
    <div class="dark-mode">
        <NuxtLayout>
            <NuxtPage></NuxtPage>
        </NuxtLayout>
    </div>
</template>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

li {
    list-style-type: none;
}

html, .dark-mode {
    background-color: #121212;
    color: #ffffff;
}
</style>
