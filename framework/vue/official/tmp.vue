<template>
    <p>{{ greeting }} World!</p>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                greeting: 'Hello'
            }
        }
    };
</script>

<style>
p {
    font-size: 14px;
    text-align: center;
}
</style>
