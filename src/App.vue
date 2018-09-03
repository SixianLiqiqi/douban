<template>
  <div id="app">
    <div class="link-wrapper">
      <router-link to="/front" tag="div" class="front-page">前台页面</router-link>
      <router-link to="/end" tag="div" class="end-page">后台页面</router-link>
    </div>
    <router-view class="view-wrapper"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    user-select: none;
  }
  .link-wrapper {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #cae;
  }
  .front-page, .end-page{
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: green;
    color: #fff;
    margin-right: 20px;
    border-radius: 4px;
    cursor: pointer;
  }
</style> 
