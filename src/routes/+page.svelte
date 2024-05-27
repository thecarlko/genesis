


<section id="header">
    <div class="greeting">
        <h1>Good Morning, 👋<br><span>Anizan</span></h1>
    </div>


    <div class="tasks">
        <h3>Tasks</h3>

        { #each Array(4) as _ }
        <p>The Algebra of Wealth</p>
        {/each }

    </div>
</section>

<section id="manage">

    <div class="actions">
        <button class="tertiary">Check In/Out</button>
        <button>Manage Catalogue</button>
    </div>

</section>



<style lang="scss">
    @use "$lib/styles/variables" as app;

    section {
        padding: 0px 8vw;
    }

    section:nth-child(1) {
        margin-top: 12rem;
    }

    section#header {

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 3rem 4vw;

        margin-top: 10rem;
        margin-bottom: 2rem;

        @media screen and (max-width: 900px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }

        div.greeting {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            &::before {
                content: "";
                position: absolute;
                top: 0px; 
                left: 0px;
                width: 3rem;
                border-bottom: 1px solid app.$color-midground;
            }
        }

        div.tasks {
            padding: 0.2rem 0px 0.0rem 0px;

            h3 { margin-bottom: 0.5rem; }

            p {
                position: relative;
                padding-left: 1.3rem;

                cursor: pointer;
            }

            > p::before {
                position: absolute;
                top: 50%;
                left: 0px;
                transform: translate(0%, -50%);
                content: "";
                width: 0.8rem;
                height: 0.8rem;
                border: 1px solid app.$color-midground;
                border-radius: 0.2rem;
            }
        }
    }

    section#manage {
        margin: 2rem 0px;
        background-color: app.$color-background;
        min-height: 64vh;

        div.actions {
            display: flex;
            justify-content: flex-end;
            margin-top: 4rem;
            gap: 1rem;
        }
    }
</style>




