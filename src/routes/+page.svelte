


<script lang="ts">

    import Icon from "$lib/components/Icon.svelte";
    import { goto } from '$app/navigation';
    import Textfield from "$lib/components/Textfield.svelte";

    // Variables
    const actions = [
        { lead: "Manage", title: "Inventory", anchor: "/inventory" },
        { lead: "Manage", title: "Inventory", anchor: "/inventory" }
    ];

    let studentID = "";
    let assetID = "";

    // Elements
    let textarea: HTMLTextAreaElement;

    function onTextareaInput(event: Event) {
       textarea.style.height = (textarea.scrollHeight) + 'px';
    }

    function onTextareaKeyDown(event: KeyboardEvent) {
        if (event.key != "Enter") { return; }

        event.preventDefault();
        goto("/search/tricks")
        

    }



</script>


<section id="header">
    <div class="greeting">
        <h1>Good Morning, 👋<br><span>Anizan</span></h1>
    </div>


    <div class="tasks">
        <h3>Recommended Tasks</h3>

        { #each Array(4) as _ }
        <p>The Algebra of Wealth</p>
        {/each }

    </div>

    <!-- <textarea bind:this={ textarea } on:keydown={ onTextareaKeyDown } on:input={ onTextareaInput } on:blur={ onTextareaInput } name="" id="" placeholder="Search for title, student, category ..."></textarea> -->
</section>

<section id="circulation">
    <label for="">Quick Scan</label>

    <div class="inputs">
        <Textfield placeholder="Student ID" value={ studentID }></Textfield>
        <Textfield placeholder="Asset ID" value={ assetID }></Textfield>
    </div>
    <div class="actions">
        <button disabled={ studentID == "" } class="tertiary">Check In</button>
        <button disabled={ studentID == "" } class="tertiary">Check Out</button>
    </div>
</section>

<section id="manage">

    <h2>What would you like to do today?</h2>

    <div class="buttons">
        <button class="tertiary">Check In/Out</button>
        <button>Manage Catalogue</button>
    </div>

    <div class="actions">
        { #each actions as { lead, title, anchor }}
            <a href={ anchor }>
                <Icon></Icon>
                <p>{ lead }<br>{ title }</p>
            </a>
        {/each }
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


    section#circulation {

        width: 100%;
        margin: 0px auto;

        > label {
            display: block;
            margin-bottom: 1rem;
        }


        div.inputs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem 1rem;
            margin-bottom: 1rem;;
        }

        div.actions {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            button {
                width: 7rem;
            }
        }
    }

    section#manage {
        padding: 3rem 8vw 2rem 8vw;
        background-color: app.$color-background;
        border-radius: 2rem 2rem 0px 0px;

        display: flex;
        flex-direction: column;
        gap: 3rem;


        div.buttons {
            display: none;
            justify-content: flex-end;
            margin-top: 4rem;
            gap: 1rem;

        }

        div.actions {
            display: grid;
            gap: 1rem 1rem;
            grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
        }

        div.actions > a {
            padding: 1rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid rgba(0,0,0,.1);
            background-color: app.$color-background;
            box-shadow: 0 0 2px 0 rgba(0,0,0,.05),0 4px 6px 0 rgba(0,0,0,.02);

            &:hover {
                filter: app.$drop-shadow-400;
            }
        }
    }

    

    section#header {

        display: grid;
        grid-template-columns: 1.5fr 1fr;
        grid-template-rows: 1fr;
        gap: 3rem 4vw;

        margin-top: 10rem;
        margin-bottom: 4rem;

        @media screen and (max-width: 720px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;

            textarea { grid-column: unset !important; }
        }

        textarea {
            background-color: transparent;
            width: 100%;
            grid-column: span 2;
            resize: none;
            margin-top: 2rem;

            cursor: pointer;

            font-weight: app.$weight-light;
            font-size: 1.5em;
            height: 1.8em;
            line-height: 1.8em;

            &:focus { outline: none; }
            &::placeholder {
                font-weight: 200;
            }
        }

        textarea:hover::placeholder {
            color: app.$color-brand;
        };

        div.greeting {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding-top: 1rem;

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

    
</style>




