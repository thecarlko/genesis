<script>
    import { derived } from "svelte/store";
    import Textfield from "$lib/components/Textfield.svelte";

    let searchValue = ""

</script>


<section id="dashboard">
    <span>
        <div></div>
        <div></div>
        <div></div>
    </span>
</section>



<section id="search">   
    <div>
        <Textfield
            placeholder="Search for books, assets, authors, ISBN, etc ..."
            value={ searchValue }></Textfield>
    </div>

    <div class="chips">
        { #each Array(6) as filter }
            <p>Author</p>
        {/each }
    </div>
</section>

<section id="results">
    <div class="list">

        <a href="/inventory" class="infomercial">
            <span>Title</span>
            <span>Author</span>
            <span>ISBN</span>
            <span>Count</span>
        </a>

        { #each Array(60) as book }
            <a href="/inventory/flowers">
                <span>Arc of a Scythe</span>
                <span>Neal Shusterman</span>
                <span>9781442472426</span>
                <span>24</span>
            </a>
        {/each }

    </div>

</section>


<style lang="scss">

    @use "$lib/styles/variables" as app;


    section#dashboard {
        display: flex; 
        align-items: center;
        justify-content: center;

        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    section#dashboard > span {
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 1.5rem 1.5rem;
        height: 14rem;

        max-width: 1440px;

    }

    section#dashboard div {
        filter: app.$drop-shadow-400;
        border: 1px solid app.$color-elevate;
        background-color: app.$color-background;
        border-radius: 1rem;

    }


    section#search {

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem 0px;

        margin-bottom: 1rem;

        

        > div {
            max-width: 60rem;
            width: 100%;
        }


        div.chips {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;

            > p {
                padding: 0.2rem 1rem;
                border: 1px solid app.$color-shade;
                border-radius: 1rem;
            }
        }
    }


    section#results {

        margin-bottom: 4rem;

        position: sticky;
        top: 4rem;

        div.list {
            background-color: app.$color-background;
            border: 1px solid app.$color-shade;

            border-radius: 1rem;
            filter: app.$drop-shadow-300;
            max-width: 920px;
            overflow: hidden;

            margin: 0px auto;
            // font-size: 0.9em;
            padding: 0px 0px 0rem 0px;
        }

        div.list > * {
            display: grid;
            gap: 0px 1rem;
            grid-template-rows: 1fr;
            grid-template-columns:  3fr 2fr 1fr 1fr;
            padding: 0.6rem 1rem;

            // font-size: 0.9em;
            border-bottom: 1px solid app.$color-shade;
        }

        div.list > *:first-child {
            padding: 0.8rem 1rem;

            z-index: 5;
            background-color: app.$color-elevate;
            font-size: 0.85em;
            * {
                font-weight: app.$weight-semibold;
                text-transform: uppercase;
                color: app.$color-tint;
            }
        }

        div.list > *:last-child {
            border: none;
        }



        div.list > a:hover {
            color: app.$color-brand;
        }

    }
</style>


