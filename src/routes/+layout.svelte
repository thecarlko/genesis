




<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
    import Pfp from "$lib/elements/pfp.svelte";
    import "$lib/styles/app.scss";
</script>



<main>
    <nav>
        <a href="/">
            <Icon frame={[2,2]}><img src="/icons/logo.png" alt="Logo"></Icon>
        </a>
        

        <div class="pfp"><Pfp></Pfp></div> 
    </nav>
    
    <slot></slot>

</main>





<style lang="scss">
    @use "$lib/styles/variables" as app;

    main {
        // background-color: app.$color-shade;
    }

    nav {
        // border: 1px solid purple;
        position: sticky;
        top: 0px;
        left: 0px;
        right: 0px;

        z-index: 10;

        padding: 0.5rem 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    nav .pfp {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFFD5;
        border-radius: 100%;

        &::after {
            content: '';
            position: absolute;
            bottom: -15%;
            right: -15%; 
            background: url("/icons/logo.png") no-repeat center center;
            background-size: contain;
            width: 1rem; 
            height: 1rem;
            border: 2px solid #FFFFFF;
            border-radius: 100%;

            z-index: 12;
        }
    }
</style>


