<script lang="ts">
    import { ScoreCounter } from "flock-ui";
    export let counterValue: number;
</script>

<style>
    .background{
    /* Rectangle 7 */
    background: #D9D9D9;
    mix-blend-mode: normal;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem;
    }
    div {
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 2.5rem;
/* or 21px */
color: #000000;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }
    </style>

<ScoreCounter value={counterValue} let:change let:value>
    <div class="background">
        <button
            on:click={() => {
                change(-1);
            }}
            ><svg
                width="154"
                height="55"
                viewBox="0 0 154 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_335_947)">
                    <path
                        d="M4 20C4 8.95431 12.9543 0 24 0H130C141.046 0 150 8.95431 150 20V27C150 38.0457 141.046 47 130 47H24C12.9543 47 4 38.0457 4 27V20Z"
                        fill="#ED1C24"
                    />
                </g>
                <g filter="url(#filter1_d_335_947)">
                    <path
                        d="M77.3485 21.45V25H66.3485V21.45H77.3485ZM80.2255 17.725V13.75H87.1505V32H82.7005V17.725H80.2255Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_335_947"
                        x="0"
                        y="0"
                        width="154"
                        height="55"
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
                            result="effect1_dropShadow_335_947"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_335_947"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter1_d_335_947"
                        x="62.3477"
                        y="13.75"
                        width="28.8027"
                        height="26.25"
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
                            result="effect1_dropShadow_335_947"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_335_947"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </button>
        {value}
        <button
            on:click={() => {
                change(1);
            }}
            ><svg
                width="154"
                height="55"
                viewBox="0 0 154 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_335_950)">
                    <path
                        d="M4 20C4 8.95431 12.9543 0 24 0H130C141.046 0 150 8.95431 150 20V27C150 38.0457 141.046 47 130 47H24C12.9543 47 4 38.0457 4 27V20Z"
                        fill="#49A078"
                    />
                </g>
                <g filter="url(#filter1_d_335_950)">
                    <path
                        d="M78.6754 25.175H74.3254V29.625H70.2754V25.175H65.9254V21.35H70.2754V16.875H74.3254V21.35H78.6754V25.175ZM80.8236 17.725V13.75H87.7486V32H83.2986V17.725H80.8236Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_335_950"
                        x="0"
                        y="0"
                        width="154"
                        height="55"
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
                            result="effect1_dropShadow_335_950"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_335_950"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter1_d_335_950"
                        x="61.9258"
                        y="13.75"
                        width="29.8223"
                        height="26.25"
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
                            result="effect1_dropShadow_335_950"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_335_950"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </button>
    </div>
</ScoreCounter>
