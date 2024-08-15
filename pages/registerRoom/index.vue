<script setup lang="ts">
    import { ref } from 'vue'
    import { type Prize } from '@/types/prize'

    const prizes = ref<Prize[]>([])

    const addPrizeField = () => {
        const newId = prizes.value.length ? prizes.value[prizes.value.length - 1].id + 1 : 1;
        prizes.value.push({ id: newId, name: '' })
    }
    
    const updatePrizeName = (index: number, name: string) => {
        prizes.value[index].name = name;
    }
</script>

<template>
    <section id="register">
      <h1>RoomCreate...</h1>

      <form>
        <!-- 抽選名 -->
        <div class="form-group">
          <label for="lotteryName">抽選名</label>
          <input type="text" id="lotteryName" placeholder="抽選名を入力" />
        </div>
  
        <!-- 抽選の規模 -->
        <div class="scale-section">
          <div class="scale-group">
            <label>最大</label>
            <div class="number-input">
              <input type="number" />
              <span>人</span>
            </div>
          </div>
          <div class="scale-group">
            <label>当選</label>
            <div class="number-input">
              <input type="number" />
              <span>人</span>
            </div>
          </div>
          <div class="scale-group">
            <label>景品数</label>
            <div class="number-input">
              <p>{{ prizes.length }}</p>
              <span>個</span>
            </div>
          </div>
        </div>
  
        <!-- 景品登録 -->
        <div class="prizes-section">
          <label>景品登録</label>
          <div class="prizes-inputs">
            <div v-for="(prize, index) in prizes" :key="index" class="prize-input-group">
              <input v-model="prizes[index].name" type="text" placeholder="景品名を入力" />
            </div>
          </div>
          <button type="button" @click="addPrizeField" class="add-prize-button">+</button>
        </div>
        
        <button type="submit" class="create-room-button">ルームを作成</button>
      </form>
    </section>
</template>
  
  
<style scoped>
  #register {
    font-family: 'Arial', sans-serif;
    width: 70%;
    margin: 80px auto;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e0e0e0;
    padding: 10px;
    margin-bottom: 40px;
  }
  
  .header .home-link {
    text-decoration: none;
    color: black;
    font-size: 1rem;
  }
  
  .main-content {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 5px;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-size: 1rem;
    display: block;
    margin-bottom: 5px;
  }

  input {
    padding: 8px;
    margin-bottom: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  input[type="text"] {
    width: 80%;
  }

  input[type="number"] {
    width: 0%;
  }
  
  .scale-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .scale-group label {
    font-size: 1rem;
  }
  
  .number-input {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
  
  .number-input input {
    width: 80px;
    padding: 5px;
    text-align: center;
    font-size: 1.5rem; /* フォントサイズを大きくしました */
  }
  
  .number-input span {
    margin-left: 5px;
    font-size: 1.5rem; /* フォントサイズを大きくしました */
  }
  
  .prizes-section {
    margin-bottom: 20px;
  }
  
  .prizes-section label {
    font-size: 1rem;
    display: block;
    margin-bottom: 5px;
  }
  
  .prizes-inputs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  
  .prize-input-group {
    display: flex;
    align-items: center;
  }
  
  .add-prize-button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #cccccc;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .create-room-button {
    background-color: #cccccc;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
</style>
