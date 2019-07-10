<template>
  <div>
    Game
    <div id="game-area"></div>
  </div>
</template>

<script>


export default {
    name: "app",
    async mounted() {
        const game = await import('@/components/game/scene');
        this.$nextTick(() => game.launch());
    }
};
</script>

<style lang="scss">
</style>
