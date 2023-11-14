<script lang="ts">
    export let team = "";
    let drivetrain = "";
    let hybridtype = "";
    let hybridplace = "";
    let length = 1;
    import Submit from "$lib/components/Submit.svelte";
    import BunnyScout from "$lib/components/BunnyScout.svelte";
    import type { Scoutbunny } from "$lib/types";
    let bunnies: Scoutbunny[] = [];
    bunnies.push({
        teamname: "1540",
        number: 1,
        type: "Mech",
        notes: "",
    });
    const Hybridtype = [
        { label: "Full Auto" },
        { label: "Hybrid" },
        { label: "No Hybrid" },
    ];

    const Drivetrain = [
        { label: "Swerve" },
        { label: "Tank" },
        { label: "Other" },
    ];
    const Hybridplace = [
        { label: "Far" },
        { label: "Mid" },
        { label: "Close" },
    ];
    function handleclick() {
        bunnies.push({
            teamname: team,
            number: bunnies.length + 1,
            type: "Mech",
            notes: "",
        });
        bunnies = bunnies;
        length += 1;
    }
</script>

<header>
    <nav>
        <div
            style="background-color: #D9D9D9;"
            class="header-background p-5 flex justify-center items-center"
        >
            <button>
                <svg
                    class=" absolute fill-slate-50 h-9 m-1 left-10 top-5"
                    viewBox="0 0 45 39"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M28.1994 11.3787H6.22736L12.9524 3.30135C13.2668 2.92301 13.4181 2.43526 13.3729 1.94538C13.3278 1.4555 13.0898 1.00362 12.7115 0.689163C12.3332 0.374703 11.8454 0.223415 11.3555 0.268582C10.8657 0.313748 10.4138 0.551669 10.0993 0.930003L0.836257 12.0457C0.773937 12.1341 0.718208 12.227 0.669522 12.3236C0.669522 12.4162 0.669522 12.4718 0.53984 12.5644C0.455867 12.7768 0.4119 13.003 0.410156 13.2314C0.4119 13.4598 0.455867 13.6859 0.53984 13.8983C0.53984 13.9909 0.539839 14.0465 0.669522 14.1391C0.718208 14.2357 0.773937 14.3286 0.836257 14.417L10.0993 25.5327C10.2735 25.7418 10.4916 25.91 10.7382 26.0253C10.9847 26.1406 11.2537 26.2001 11.5258 26.1997C11.9587 26.2005 12.3782 26.0497 12.7115 25.7736C12.8991 25.618 13.0542 25.427 13.1678 25.2115C13.2815 24.9959 13.3515 24.7601 13.3739 24.5174C13.3963 24.2748 13.3705 24.0301 13.2982 23.7974C13.2259 23.5647 13.1083 23.3486 12.9524 23.1614L6.22736 15.084H28.1994C28.6907 15.084 29.1619 14.8888 29.5094 14.5414C29.8568 14.1939 30.052 13.7227 30.052 13.2314C30.052 12.74 29.8568 12.2688 29.5094 11.9214C29.1619 11.5739 28.6907 11.3787 28.1994 11.3787Z"
                        fill="#1C1C1C"
                    />
                </svg>
            </button>
            <h1 style="color: #1C1C1C;" class="text-4xl center">
                <strong>PIT SCOUTING</strong>
            </h1>
            <button />
            <div />
        </div>
    </nav>
</header>

<div style="background-color: #C2C2C2; margin-top: 0rem">
    <br />
    <h3 style="margin-top: 0rem">Team Number</h3>
    <label class="textareaContainer">
        <textarea
            placeholder="e.g. 1540"
            bind:value={team}
            class="background grid justify-center"
        />
    </label>
    <br />
    <h3>Drivetrain</h3>
    <div class="background grid grid-cols-2 gap-4 grid-rows-2">
        {#each Drivetrain as value}
            <label>
                <input
                    class="accent-purple-500"
                    type="radio"
                    bind:group={drivetrain}
                    name="amount"
                    {value}
                />
                {value.label}
            </label>
        {/each}
    </div>
    <br />
    <h3>Hybrid Type</h3>
    <div class="background grid grid-cols-2 gap-4 grid-rows-2">
        {#each Hybridtype as value}
            <label>
                <input
                    class="accent-purple-500"
                    type="radio"
                    bind:group={hybridtype}
                    name="amount"
                    {value}
                />
                {value.label}
            </label>
        {/each}
    </div>
    <br />
    <h3>Hybrid Location</h3>
    <div class="background grid grid-cols-2 gap-4 grid-rows-2">
        {#each Hybridplace as value}
            <label>
                <input
                    type="checkbox"
                    bind:group={hybridplace}
                    name="amount"
                    {value}
                />
                {value.label}
            </label>
        {/each}
    </div>
    <br />
    <h3>Bunnies</h3>
    {#each bunnies as bunny, i}
        <BunnyScout
            bind:notes={bunny.notes}
            bind:mechstring={bunny.type}
            number={i + 1}
        /><br />
    {/each}
    <div class="grid grid-rows-2 grid-cols-1 justify-items-center">
        <button on:click={() => handleclick()}>
            <div style="width: 100%; height: 100%">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 417 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_151_2766)">
                        <rect
                            x="4"
                            y="4"
                            width="401"
                            height="62"
                            rx="20"
                            fill="#D9D9D9"
                        />
                        <g filter="url(#filter1_d_151_2766)">
                            <path
                                d="M143.707 40.9H137.157L136.107 44H131.632L137.982 26.45H142.932L149.282 44H144.757L143.707 40.9ZM142.607 37.6L140.432 31.175L138.282 37.6H142.607ZM157.79 26.45C159.64 26.45 161.257 26.8167 162.64 27.55C164.023 28.2833 165.09 29.3167 165.84 30.65C166.607 31.9667 166.99 33.4917 166.99 35.225C166.99 36.9417 166.607 38.4667 165.84 39.8C165.09 41.1333 164.015 42.1667 162.615 42.9C161.232 43.6333 159.623 44 157.79 44H151.215V26.45H157.79ZM157.515 40.3C159.132 40.3 160.39 39.8583 161.29 38.975C162.19 38.0917 162.64 36.8417 162.64 35.225C162.64 33.6083 162.19 32.35 161.29 31.45C160.39 30.55 159.132 30.1 157.515 30.1H155.49V40.3H157.515ZM175.954 26.45C177.804 26.45 179.421 26.8167 180.804 27.55C182.187 28.2833 183.254 29.3167 184.004 30.65C184.771 31.9667 185.154 33.4917 185.154 35.225C185.154 36.9417 184.771 38.4667 184.004 39.8C183.254 41.1333 182.179 42.1667 180.779 42.9C179.396 43.6333 177.787 44 175.954 44H169.379V26.45H175.954ZM175.679 40.3C177.296 40.3 178.554 39.8583 179.454 38.975C180.354 38.0917 180.804 36.8417 180.804 35.225C180.804 33.6083 180.354 32.35 179.454 31.45C178.554 30.55 177.296 30.1 175.679 30.1H173.654V40.3H175.679ZM203.466 35C204.483 35.2167 205.299 35.725 205.916 36.525C206.533 37.3083 206.841 38.2083 206.841 39.225C206.841 40.6917 206.324 41.8583 205.291 42.725C204.274 43.575 202.849 44 201.016 44H192.841V26.45H200.741C202.524 26.45 203.916 26.8583 204.916 27.675C205.933 28.4917 206.441 29.6 206.441 31C206.441 32.0333 206.166 32.8917 205.616 33.575C205.083 34.2583 204.366 34.7333 203.466 35ZM197.116 33.55H199.916C200.616 33.55 201.149 33.4 201.516 33.1C201.899 32.7833 202.091 32.325 202.091 31.725C202.091 31.125 201.899 30.6667 201.516 30.35C201.149 30.0333 200.616 29.875 199.916 29.875H197.116V33.55ZM200.266 40.55C200.983 40.55 201.533 40.3917 201.916 40.075C202.316 39.7417 202.516 39.2667 202.516 38.65C202.516 38.0333 202.308 37.55 201.891 37.2C201.491 36.85 200.933 36.675 200.216 36.675H197.116V40.55H200.266ZM213.521 26.45V36.95C213.521 38 213.779 38.8083 214.296 39.375C214.812 39.9417 215.571 40.225 216.571 40.225C217.571 40.225 218.337 39.9417 218.871 39.375C219.404 38.8083 219.671 38 219.671 36.95V26.45H223.946V36.925C223.946 38.4917 223.612 39.8167 222.946 40.9C222.279 41.9833 221.379 42.8 220.246 43.35C219.129 43.9 217.879 44.175 216.496 44.175C215.112 44.175 213.871 43.9083 212.771 43.375C211.687 42.825 210.829 42.0083 210.196 40.925C209.562 39.825 209.246 38.4917 209.246 36.925V26.45H213.521ZM242.647 44H238.372L231.222 33.175V44H226.947V26.45H231.222L238.372 37.325V26.45H242.647V44ZM261.446 44H257.171L250.021 33.175V44H245.746V26.45H250.021L257.171 37.325V26.45H261.446V44ZM279.595 26.45L273.52 38.2V44H269.245V38.2L263.17 26.45H268.02L271.42 33.8L274.795 26.45H279.595Z"
                                fill="black"
                            />
                        </g>
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_151_2766"
                            x="0"
                            y="0"
                            width="417"
                            height="78"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="4" dy="4" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_151_2766"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_151_2766"
                                result="shape"
                            />
                        </filter>
                        <filter
                            id="filter1_d_151_2766"
                            x="127.633"
                            y="26.4502"
                            width="155.963"
                            height="25.7246"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_151_2766"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_151_2766"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
        </button>
        <button>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 416 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_151_2767)">
                    <rect
                        x="4"
                        y="4"
                        width="400.003"
                        height="62"
                        rx="20"
                        fill="url(#paint0_linear_151_2767)"
                    />
                    <g filter="url(#filter1_d_151_2767)">
                        <path
                            d="M166.11 44.175C164.827 44.175 163.677 43.9667 162.66 43.55C161.643 43.1333 160.827 42.5167 160.21 41.7C159.61 40.8833 159.293 39.9 159.26 38.75H163.81C163.877 39.4 164.102 39.9 164.485 40.25C164.868 40.5833 165.368 40.75 165.985 40.75C166.618 40.75 167.118 40.6083 167.485 40.325C167.852 40.025 168.035 39.6167 168.035 39.1C168.035 38.6667 167.885 38.3083 167.585 38.025C167.302 37.7417 166.943 37.5083 166.51 37.325C166.093 37.1417 165.493 36.9333 164.71 36.7C163.577 36.35 162.652 36 161.935 35.65C161.218 35.3 160.602 34.7833 160.085 34.1C159.568 33.4167 159.31 32.525 159.31 31.425C159.31 29.7917 159.902 28.5167 161.085 27.6C162.268 26.6667 163.81 26.2 165.71 26.2C167.643 26.2 169.202 26.6667 170.385 27.6C171.568 28.5167 172.202 29.8 172.285 31.45H167.66C167.627 30.8833 167.418 30.4417 167.035 30.125C166.652 29.7917 166.16 29.625 165.56 29.625C165.043 29.625 164.627 29.7667 164.31 30.05C163.993 30.3167 163.835 30.7083 163.835 31.225C163.835 31.7917 164.102 32.2333 164.635 32.55C165.168 32.8667 166.002 33.2083 167.135 33.575C168.268 33.9583 169.185 34.325 169.885 34.675C170.602 35.025 171.218 35.5333 171.735 36.2C172.252 36.8667 172.51 37.725 172.51 38.775C172.51 39.775 172.252 40.6833 171.735 41.5C171.235 42.3167 170.502 42.9667 169.535 43.45C168.568 43.9333 167.427 44.175 166.11 44.175ZM179.341 26.45V36.95C179.341 38 179.599 38.8083 180.116 39.375C180.632 39.9417 181.391 40.225 182.391 40.225C183.391 40.225 184.157 39.9417 184.691 39.375C185.224 38.8083 185.491 38 185.491 36.95V26.45H189.766V36.925C189.766 38.4917 189.432 39.8167 188.766 40.9C188.099 41.9833 187.199 42.8 186.066 43.35C184.949 43.9 183.699 44.175 182.316 44.175C180.932 44.175 179.691 43.9083 178.591 43.375C177.507 42.825 176.649 42.0083 176.016 40.925C175.382 39.825 175.066 38.4917 175.066 36.925V26.45H179.341ZM203.393 35C204.409 35.2167 205.226 35.725 205.843 36.525C206.459 37.3083 206.768 38.2083 206.768 39.225C206.768 40.6917 206.251 41.8583 205.218 42.725C204.201 43.575 202.776 44 200.943 44H192.768V26.45H200.668C202.451 26.45 203.843 26.8583 204.843 27.675C205.859 28.4917 206.368 29.6 206.368 31C206.368 32.0333 206.093 32.8917 205.543 33.575C205.009 34.2583 204.293 34.7333 203.393 35ZM197.043 33.55H199.843C200.543 33.55 201.076 33.4 201.443 33.1C201.826 32.7833 202.018 32.325 202.018 31.725C202.018 31.125 201.826 30.6667 201.443 30.35C201.076 30.0333 200.543 29.875 199.843 29.875H197.043V33.55ZM200.193 40.55C200.909 40.55 201.459 40.3917 201.843 40.075C202.243 39.7417 202.443 39.2667 202.443 38.65C202.443 38.0333 202.234 37.55 201.818 37.2C201.418 36.85 200.859 36.675 200.143 36.675H197.043V40.55H200.193ZM229.122 26.45V44H224.847V33.475L220.922 44H217.472L213.522 33.45V44H209.247V26.45H214.297L219.222 38.6L224.097 26.45H229.122ZM236.471 26.45V44H232.196V26.45H236.471ZM252.195 26.45V29.875H247.545V44H243.27V29.875H238.62V26.45H252.195Z"
                            fill="white"
                        />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_d_151_2767"
                        x="0"
                        y="0"
                        width="417"
                        height="78"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="4" dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_151_2767"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_151_2767"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter1_d_151_2767"
                        x="155.26"
                        y="26.2002"
                        width="100.936"
                        height="25.9746"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_151_2767"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_151_2767"
                            result="shape"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_151_2767"
                        x1="4.35375"
                        y1="4"
                        x2="124.6"
                        y2="220.784"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#FFC145" />
                        <stop offset="1" stop-color="#ED2C2C" />
                    </linearGradient>
                </defs>
            </svg>
        </button>
    </div>
</div>

<style>
    h3 {
        font-family: "Poppins";
        font-style: bold;
        font-weight: 700;
        font-size: 40px;
        line-height: 91.5%;
        /* or 32px */
        display: flex;
        color: #1c1c1c;
        margin: 1rem;
    }
    .background {
        /* Rectangle 7 */
        background: #d9d9d9;
        mix-blend-mode: normal;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem;
    }
    div {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 91.5%;
        color: #2c2c2c;
    }
    textarea {
        width: 100%;
        margin: 0;
        padding: 0;
        border-width: 0;
    }
    .textareaContainer {
        display: block;
        padding: 2rem;
        padding-left: 0%;
        padding-top: 0%;
        padding-bottom: 0%;
    }
</style>
