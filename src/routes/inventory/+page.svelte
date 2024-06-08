



<h1>Welcome to the inventory</h1>



<section id="results">


    <div class="list">
        <div class="">
            <span>Title</span>
            <span>Neal Shusterman</span>
            <span>9781442472426</span>
            <span>24</span>
        <div/>

        <a href="/inventory/flowers">
            <span>Arc of a Scythe</span>
            <span>Neal Shusterman</span>
            <span>9781442472426</span>
            <span>24</span>
        </a>
    </div>

</section>


<style lang="scss">

    @use "$lib/styles/variables" as app;


    div.list {
        background-color: app.$color-background;
        filter: app.$drop-shadow;
        max-width: 920px;

        margin: 0px auto;
    }

    div.list > * {
        display: grid;
        gap: 0px 1rem;
        grid-template-rows: 1fr;
        grid-template-columns:  3fr 2fr max-content 3rem;
    }

    div.list > * > span:nth-child(3) { text-align: center; }
    div.list > * > span:nth-child(4) { text-align: center; }
</style>


