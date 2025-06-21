import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import bg from "@/assets/about-us/mission-vision.png";
import noiseBg from "@/assets/products-img/noise-bg.png";
import noiseBg2 from "@/assets/about-us/noisebg-2.png";

const missionData = [
    {
        title: "NOURISH",
        description:
            "We create essential products that enrich everyday life, from breakfast tables to busy days, offering comfort, quality, and care to every home we reach.",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.24678 1.97404C1.44265 0.809245 2.45015 1.99239e-07 3.60279 1.99239e-07H3.80851C3.85617 -5.07198e-05 3.90334 0.00965882 3.94717 0.0285412C3.991 0.0474235 4.03058 0.075086 4.06352 0.109854C4.09645 0.144623 4.12205 0.185774 4.13877 0.230818C4.15549 0.275862 4.16298 0.323861 4.16079 0.371911L3.84726 7.31947C3.84204 7.4361 3.85962 7.55264 3.89901 7.66242C3.93841 7.77219 3.99884 7.87307 4.07686 7.95927C4.15487 8.04548 4.24895 8.11533 4.35371 8.16484C4.45848 8.21435 4.57187 8.24255 4.68743 8.24782C4.803 8.2531 4.91845 8.23535 5.02722 8.19559C5.13598 8.15583 5.23592 8.09484 5.32133 8.01609C5.40674 7.93735 5.47595 7.84239 5.525 7.73666C5.57406 7.63092 5.60199 7.51646 5.60722 7.39982L5.92497 0.339911C5.92897 0.24835 5.96784 0.161882 6.03347 0.0985493C6.09911 0.0352166 6.18644 -8.85593e-05 6.27724 1.99239e-07H8.10906C8.19987 -8.85593e-05 8.2872 0.0352166 8.35284 0.0985493C8.41847 0.161882 8.45734 0.24835 8.46134 0.339911L8.77909 7.39982C8.78974 7.63538 8.89266 7.85702 9.06522 8.01599C9.23778 8.17495 9.46584 8.25822 9.69923 8.24747C9.93261 8.23672 10.1522 8.13283 10.3097 7.95866C10.4672 7.7845 10.5497 7.55432 10.539 7.31876L10.2262 0.371911C10.224 0.323861 10.2315 0.275862 10.2482 0.230818C10.265 0.185774 10.2906 0.144623 10.3235 0.109854C10.3564 0.075086 10.396 0.0474235 10.4398 0.0285412C10.4837 0.00965882 10.5308 -5.07198e-05 10.5785 1.99239e-07H10.7828C11.9355 1.99239e-07 12.943 0.808534 13.1388 1.97333C13.465 3.91751 13.9216 7.31662 13.8849 10.9518C13.8645 12.9714 12.5252 14.7868 10.4235 15.2619C10.1163 15.332 9.79504 15.3951 9.45968 15.451L10.7575 27.9268C10.9519 29.7956 9.79927 31.6736 7.88009 31.9431C7.6527 31.9782 7.42317 31.9972 7.19315 32C6.96338 31.9972 6.73408 31.9782 6.50693 31.9431C4.58774 31.6729 3.4351 29.7956 3.62956 27.9268L4.92733 15.4517C4.60455 15.3981 4.28338 15.335 3.96422 15.2626C1.86185 14.7876 0.522509 12.9721 0.502077 10.9525C0.465441 7.31733 0.921282 3.91822 1.24678 1.97404ZM30.4432 0.603734C22.0774 0.603734 15.2954 7.44889 15.2954 15.8926C15.2954 24.3364 22.0774 31.1815 30.4432 31.1815C30.7235 31.1815 30.9923 31.0691 31.1905 30.8691C31.3887 30.6691 31.5 30.3977 31.5 30.1148V25.4343C31.149 25.4728 30.7962 25.4923 30.4432 25.4926C25.1901 25.4926 20.9318 21.1947 20.9318 15.8926C20.9318 10.5906 25.1901 6.29262 30.4432 6.29262C30.8006 6.29262 31.1529 6.31206 31.5 6.35093V1.6704C31.5 1.3875 31.3887 1.11619 31.1905 0.916153C30.9923 0.716114 30.7235 0.603734 30.4432 0.603734ZM30.4432 23.3593C30.8025 23.3593 31.1548 23.3342 31.5 23.2839V8.50133C31.1498 8.45191 30.7967 8.42672 30.4432 8.42596C26.3575 8.42596 23.0454 11.7689 23.0454 15.8926C23.0454 20.0164 26.3575 23.3593 30.4432 23.3593Z"
                    fill="white"
                />
            </svg>
        ),
    },
    {
        title: "EMPOWER",
        description:
            "We uplift people through opportunity and support, including our employees, partners, and communities, all working toward meaningful growth.",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={36}
                height={32}
                viewBox="0 0 36 32"
                fill="none"
            >
                <path
                    d="M18.175 32C17.6792 32 17.2638 31.8293 16.929 31.488C16.5942 31.1467 16.4262 30.7247 16.425 30.2222C16.425 30.0148 16.4687 29.7997 16.5562 29.5769C16.6437 29.3541 16.775 29.1544 16.95 28.9778L25.0437 20.7556L23.775 19.4667L15.725 27.6889C15.55 27.8667 15.3604 28 15.1562 28.0889C14.9521 28.1778 14.7333 28.2222 14.5 28.2222C14.0042 28.2222 13.5888 28.0521 13.254 27.712C12.9192 27.3719 12.7512 26.9493 12.75 26.4444C12.75 26.1481 12.7937 25.9034 12.8812 25.7102C12.9687 25.517 13.0854 25.347 13.2312 25.2L21.325 16.9778L20.1 15.7333L12.0062 23.9111C11.8312 24.0889 11.6417 24.2222 11.4375 24.3111C11.2333 24.4 11 24.4444 10.7375 24.4444C10.2708 24.4444 9.8625 24.2667 9.5125 23.9111C9.1625 23.5556 8.9875 23.1407 8.9875 22.6667C8.9875 22.4296 9.03125 22.2074 9.11875 22C9.20625 21.7926 9.3375 21.6 9.5125 21.4222L17.6062 13.2L16.3375 11.9556L8.2875 20.1778C8.14166 20.3259 7.96667 20.4444 7.7625 20.5333C7.55833 20.6222 7.31042 20.6667 7.01875 20.6667C6.52292 20.6667 6.107 20.496 5.771 20.1547C5.435 19.8133 5.26758 19.3914 5.26875 18.8889C5.26875 18.6519 5.3125 18.4296 5.4 18.2222C5.4875 18.0148 5.61875 17.8222 5.79375 17.6444L15.55 7.73334L22.1125 14.4444C22.4333 14.7704 22.8125 15.0299 23.25 15.2231C23.6875 15.4163 24.125 15.5123 24.5625 15.5111C25.4958 15.5111 26.3125 15.1781 27.0125 14.512C27.7125 13.8459 28.0625 12.9938 28.0625 11.9556C28.0625 11.5407 27.9896 11.1111 27.8437 10.6667C27.6979 10.2222 27.4354 9.80741 27.0562 9.42223L19.225 1.46667C19.7208 0.9926 20.275 0.629933 20.8875 0.378674C21.5 0.127415 22.1125 0.00119262 22.725 7.4384e-06C23.4833 7.4384e-06 24.1833 0.12623 24.825 0.378674C25.4667 0.631119 26.05 1.02341 26.575 1.55556L33.9687 9.11112C34.4937 9.64445 34.8805 10.237 35.129 10.8889C35.3775 11.5407 35.5012 12.2963 35.5 13.1556C35.5 13.7482 35.3687 14.3484 35.1062 14.9564C34.8437 15.5644 34.4646 16.1197 33.9687 16.6222L19.4 31.4667C19.1667 31.7037 18.9625 31.8519 18.7875 31.9111C18.6125 31.9704 18.4083 32 18.175 32ZM3.16875 17.7778L2.03125 16.6222C1.53542 16.1482 1.15625 15.5852 0.89375 14.9333C0.63125 14.2815 0.5 13.6 0.5 12.8889C0.5 12.1185 0.645833 11.4074 0.9375 10.7556C1.22917 10.1037 1.59375 9.55556 2.03125 9.11112L9.425 1.55556C9.89166 1.08149 10.4458 0.703415 11.0875 0.421341C11.7292 0.139267 12.3562 -0.00117775 12.9687 7.4384e-06C13.7562 7.4384e-06 14.4562 0.111415 15.0687 0.33423C15.6812 0.557044 16.2792 0.964155 16.8625 1.55556L25.8312 10.6667C26.0062 10.8444 26.1375 11.037 26.225 11.2444C26.3125 11.4519 26.3562 11.6741 26.3562 11.9111C26.3562 12.3852 26.1812 12.8 25.8312 13.1556C25.4812 13.5111 25.0729 13.6889 24.6062 13.6889C24.3437 13.6889 24.125 13.6522 23.95 13.5787C23.775 13.5052 23.5854 13.3642 23.3812 13.1556L15.5062 5.24445L3.16875 17.7778Z"
                    fill="white"
                />
            </svg>
        ),
    },
    {
        title: "SUSTAIN",
        description:
            "We act with awareness of our impact. Through thoughtful choices and responsible practices, we work to preserve resources and protect the future we all share.",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={34}
                height={32}
                viewBox="0 0 34 32"
                fill="none"
            >
                <path
                    d="M0 32V28.4564C0 28.4564 8.5 24.9129 17 24.9129C25.5 24.9129 34 28.4564 34 28.4564V32H0ZM15.81 9.14408C13.77 2.23415 3.4 3.82875 3.4 3.82875C3.4 3.82875 3.74 17.6486 13.43 15.5225C12.75 10.3843 10.2 8.9669 10.2 8.9669C14.96 8.9669 15.3 14.9909 15.3 14.9909V23.1411H18.7V15.6997C18.7 15.6997 18.7 8.78972 23.8 7.01795C23.8 7.01795 20.4 12.3333 20.4 15.8768C32.3 17.1171 32.3 0.108019 32.3 0.108019C32.3 0.108019 17.17 -1.66376 15.81 9.14408Z"
                    fill="white"
                />
            </svg>
        ),
    },
];

const visionData = [
    {
        title: "EXPAND",
        description:
            "We aim to reach more homes, more lives, and more communities by growing our presence both locally and globally with trusted, quality products.",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={34}
                height={33}
                viewBox="0 0 34 33"
                fill="none"
            >
                <path
                    d="M17 32C25.5604 32 32.5 25.0604 32.5 16.5C32.5 7.93959 25.5604 1 17 1C8.43959 1 1.5 7.93959 1.5 16.5C1.5 25.0604 8.43959 32 17 32Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M1.5 16.5H32.5M17 1C13.02 5.17904 10.8 10.7289 10.8 16.5C10.8 22.2711 13.02 27.821 17 32C20.98 27.821 23.2 22.2711 23.2 16.5C23.2 10.7289 20.98 5.17904 17 1Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        title: "LEAD",
        description:
            "We aspire to set new standards in our industry by embracing innovation, investing in people, and delivering excellence in everything we do.",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={31}
                viewBox="0 0 32 31"
                fill="none"
            >
                <path
                    d="M11.4025 6.14263L7.46082 10.075C6.73696 10.7974 6.072 11.4592 5.54654 12.0591C5.19097 12.4545 4.86997 12.8798 4.58708 13.3301L4.54988 13.2913L4.40263 13.1456C3.71594 12.4823 2.91032 11.9543 2.02799 11.5894L1.83734 11.5119L1.24988 11.2794C1.06693 11.2073 0.904824 11.0907 0.778192 10.9403C0.651561 10.7898 0.564392 10.6102 0.524554 10.4176C0.484716 10.225 0.493463 10.0256 0.550006 9.83723C0.606549 9.64888 0.709107 9.47758 0.848423 9.33878C2.58445 7.60586 4.66923 5.52728 5.67675 5.11032C6.5518 4.7448 7.50926 4.62217 8.44819 4.75536C9.2945 4.88092 10.0943 5.31647 11.4025 6.14263ZM18.1343 26.8355C18.452 27.1579 18.6613 27.3857 18.8535 27.6291C19.1046 27.9504 19.3288 28.2904 19.5262 28.649C19.7463 29.052 19.9184 29.4813 20.2609 30.3416C20.3281 30.5043 20.4345 30.6479 20.5705 30.7596C20.7065 30.8713 20.868 30.9478 21.0407 30.9821C21.2133 31.0165 21.3918 31.0077 21.5602 30.9565C21.7287 30.9053 21.8819 30.8134 22.0062 30.6888L22.1364 30.5602C23.8725 28.8288 25.9573 26.7502 26.3758 25.7473C26.7434 24.8761 26.8661 23.9211 26.7307 22.9852C26.6052 22.1404 26.1696 21.3422 25.3403 20.037L21.3847 23.9803C20.6438 24.7197 19.9649 25.397 19.3495 25.9271C18.9821 26.2464 18.5791 26.5626 18.1343 26.8355Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.7928 22.2847L28.8558 13.2481C30.1609 11.9476 30.8135 11.2966 31.1561 10.4704C31.4986 9.64425 31.5002 8.72198 31.5002 6.88211V6.00324C31.5002 3.1729 31.5002 1.75773 30.6182 0.878863C29.7362 -1.19209e-07 28.318 0 25.4799 0H24.5964C22.7518 0 21.8296 -5.96046e-08 21.0003 0.342555C20.1695 0.68511 19.5169 1.33612 18.2103 2.63659L9.14882 11.6732C7.62359 13.1923 6.67808 14.1362 6.31227 15.0461C6.19896 15.3226 6.14002 15.6184 6.13867 15.9172C6.13867 17.1603 7.14154 18.1616 9.14882 20.1627L9.41852 20.4309L12.5775 17.2239C12.6846 17.1151 12.8122 17.0284 12.9528 16.9689C13.0935 16.9094 13.2445 16.8782 13.3972 16.8771C13.5499 16.8759 13.7013 16.9048 13.8429 16.9622C13.9844 17.0196 14.1132 17.1043 14.222 17.2115C14.3308 17.3186 14.4175 17.4462 14.477 17.5868C14.5365 17.7275 14.5677 17.8785 14.5688 18.0312C14.57 18.1839 14.5411 18.3353 14.4837 18.4769C14.4263 18.6184 14.3416 18.7472 14.2344 18.856L11.0646 22.0723L11.277 22.2847C13.2843 24.2842 14.2887 25.2855 15.5349 25.2855C15.8108 25.2855 16.0743 25.2375 16.3394 25.1398C17.274 24.7957 18.2289 23.844 19.7928 22.2847ZM24.0507 11.6732C23.4854 12.2365 22.7199 12.5528 21.9218 12.5528C21.1237 12.5528 20.3582 12.2365 19.7928 11.6732C19.513 11.3952 19.291 11.0646 19.1395 10.7004C18.988 10.3362 18.91 9.94568 18.91 9.55125C18.91 9.15681 18.988 8.76626 19.1395 8.40209C19.291 8.03791 19.513 7.7073 19.7928 7.42926C20.3582 6.86598 21.1237 6.54971 21.9218 6.54971C22.7199 6.54971 23.4854 6.86598 24.0507 7.42926C24.3305 7.7073 24.5526 8.03791 24.7041 8.40209C24.8556 8.76626 24.9336 9.15681 24.9336 9.55125C24.9336 9.94568 24.8556 10.3362 24.7041 10.7004C24.5526 11.0646 24.3305 11.3952 24.0507 11.6732Z"
                    fill="white"
                />
            </svg>
        ),
    },
    {
        title: "INSPIRE",
        description:
            "We work to create a future that motivates others — through responsible business, meaningful progress, and a brand people are proud to believe in.",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={34}
                viewBox="0 0 32 34"
                fill="none"
            >
                <path
                    d="M15.7484 22.3464C16.2851 22.8789 16.6889 23.5272 16.9282 24.2402L17.6997 26.5811C17.7642 26.7615 17.8838 26.9177 18.042 27.0283C18.2003 27.1388 18.3894 27.1981 18.5832 27.1981C18.777 27.1981 18.9661 27.1388 19.1243 27.0283C19.2826 26.9177 19.4022 26.7615 19.4667 26.5811L20.2382 24.2402C20.4787 23.5288 20.8837 22.8826 21.4212 22.3526C21.9587 21.8227 22.6139 21.4236 23.3348 21.187L25.708 20.4254C25.8894 20.3606 26.0462 20.2422 26.157 20.0863C26.2678 19.9304 26.3273 19.7446 26.3273 19.5541C26.3273 19.3637 26.2678 19.1779 26.157 19.022C26.0462 18.8661 25.8894 18.7477 25.708 18.6829L25.6597 18.671L23.2865 17.9094C22.5656 17.6728 21.9105 17.2737 21.373 16.7438C20.8355 16.2138 20.4305 15.5676 20.19 14.8562L19.4202 12.5153C19.356 12.3343 19.2365 12.1774 19.078 12.0665C18.9196 11.9555 18.7301 11.8958 18.5358 11.8958C18.3415 11.8958 18.1521 11.9555 17.9936 12.0665C17.8352 12.1774 17.7156 12.3343 17.6515 12.5153L16.8799 14.8562C16.6443 15.5625 16.2466 16.2055 15.7179 16.7351C15.1891 17.2647 14.5436 17.6666 13.8316 17.9094L11.4584 18.671C11.277 18.7358 11.1202 18.8542 11.0094 19.0101C10.8985 19.166 10.8391 19.3518 10.8391 19.5422C10.8391 19.7327 10.8985 19.9185 11.0094 20.0744C11.1202 20.2303 11.277 20.3487 11.4584 20.4135L13.8316 21.1751C14.5549 21.4131 15.2094 21.8143 15.7484 22.3464ZM19.4443 6.79826V10.3563C19.1141 10.2377 18.7634 10.1849 18.4124 10.2009C18.0614 10.2169 17.7171 10.3013 17.3994 10.4495C17.0816 10.5976 16.7968 10.8064 16.5613 11.0638C16.3258 11.3212 16.1444 11.6222 16.0274 11.9492L16.0205 11.9696L15.2438 14.3275C15.0917 14.7826 14.8357 15.1971 14.4956 15.539C14.1555 15.8809 13.7404 16.1411 13.2822 16.2995L10.9056 17.0594L10.8866 17.0679C10.3678 17.2486 9.9186 17.5837 9.60084 18.027C9.28308 18.4704 9.11244 19 9.11244 19.5431C9.11244 20.0862 9.28308 20.6158 9.60084 21.0592C9.9186 21.5025 10.3678 21.8376 10.8866 22.0183L10.9056 22.0251L13.2926 22.7901C13.7472 22.9397 14.1623 23.1913 14.505 23.5211C13.4774 23.8204 12.3933 23.8789 11.3388 23.6922C10.2843 23.5054 9.28847 23.0784 8.43042 22.4452C7.57238 21.8119 6.87579 20.9899 6.39601 20.0443C5.91623 19.0987 5.66649 18.0557 5.66663 16.9982V6.79996C5.66663 4.9965 6.39241 3.2669 7.68432 1.99166C8.97623 0.716423 10.7284 0 12.5555 0C14.3825 0 16.1347 0.716423 17.4266 1.99166C18.7185 3.2669 19.4443 4.9948 19.4443 6.79826ZM12.986 26.3499C13.8992 26.3493 14.8072 26.2135 15.6795 25.947L16.0688 27.1285L16.0757 27.1489C16.2289 27.5773 16.4924 27.9581 16.8369 28.2539C15.8729 28.5887 14.8681 28.7956 13.8488 28.8692L13.8471 32.7248C13.847 33.0479 13.7227 33.3588 13.4993 33.5949C13.2759 33.8309 12.97 33.9744 12.6435 33.9965C12.317 34.0185 11.9942 33.9173 11.7403 33.7135C11.4865 33.5096 11.3205 33.2183 11.2759 32.8982L11.2638 32.7248V28.8692C8.40755 28.6599 5.73013 27.417 3.745 25.3791C1.75988 23.3412 0.6068 20.6516 0.506889 17.8261L0.5 17.4232V16.5732C0.5001 16.2502 0.62442 15.9392 0.847839 15.7032C1.07126 15.4671 1.37712 15.3236 1.70362 15.3016C2.03012 15.2796 2.35291 15.3807 2.60678 15.5846C2.86064 15.7884 3.02665 16.0798 3.07126 16.3998L3.08331 16.5732V17.4232C3.08312 19.7268 3.98527 21.9413 5.60107 23.6034C7.21688 25.2655 9.42118 26.2466 11.7529 26.3414L12.1249 26.3482L12.986 26.3499ZM29.8068 28.8403L31.126 29.2619L31.1519 29.2687C31.2278 29.2952 31.2966 29.3387 31.3527 29.3958C31.4088 29.4528 31.4507 29.5219 31.4752 29.5977C31.4998 29.6734 31.5062 29.7537 31.494 29.8323C31.4818 29.9109 31.4514 29.9857 31.405 30.0507C31.3425 30.1377 31.254 30.2031 31.1519 30.2377L29.8344 30.6593C29.4334 30.791 29.0691 31.013 28.7702 31.3078C28.4712 31.6026 28.246 31.962 28.1122 32.3576L27.6851 33.6564C27.6494 33.7568 27.583 33.8438 27.4951 33.9054C27.4072 33.9669 27.302 34 27.1942 34C27.0864 34 26.9813 33.9669 26.8934 33.9054C26.8054 33.8438 26.7391 33.7568 26.7034 33.6564L26.2746 32.3576C26.1417 31.9612 25.917 31.6009 25.6183 31.3052C25.3196 31.0095 24.9553 30.7866 24.5541 30.6542L23.2366 30.2309C23.1606 30.2045 23.0919 30.161 23.0358 30.1039C22.9797 30.0469 22.9378 29.9778 22.9132 29.902C22.8887 29.8263 22.8823 29.746 22.8945 29.6673C22.9067 29.5887 22.9371 29.514 22.9834 29.4489C23.046 29.362 23.1345 29.2966 23.2366 29.2619L24.5541 28.8403C24.9497 28.7053 25.3085 28.4819 25.6024 28.1877C25.8963 27.8934 26.1175 27.5362 26.2487 27.1438L26.6776 25.8433C26.7132 25.7428 26.7796 25.6559 26.8675 25.5943C26.9555 25.5327 27.0606 25.4997 27.1684 25.4997C27.2762 25.4997 27.3813 25.5327 27.4693 25.5943C27.5572 25.6559 27.6236 25.7428 27.6592 25.8433L28.0881 27.1421C28.2217 27.5375 28.4467 27.8968 28.7453 28.1916C29.0439 28.4864 29.4062 28.7085 29.8068 28.8403Z"
                    fill="white"
                />
            </svg>
        ),
    },
];

const MissionVisionPage = () => {
    return (
        <div className="">
            {/* Hero Section */}
            <section className="mt-28 relative sm:h-[411px] h-auto flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src={bg}
                        alt="Hero background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
                    <h1 className="text-[38px] font-bold mb-6 leading-tight">
                        Our <span className="text-red-500">Mission</span>. Our{" "}
                        <span className="text-red-500">Vision</span>. Our{" "}
                        <span className="text-red-500">Promise</span>.
                    </h1>
                    <p className="max-w-[870px] w-full sm:text-[20px] text-base tracking-[-2%] mb-8 mx-auto leading-relaxed text-white">
                        For over seven decades, AT Haque Group has stood not
                        just as a name in every household, but as a company
                        grounded in values — leading with trust, driven by
                        community, and committed to a future built on
                        innovation, sustainability, and people-first growth.
                    </p>
                    <Button
                        variant="outline"
                        size="lg"
                        className="bg-transparent border-2 border-white text-white hover:bg-[#DE2332] hover:text-white transition-all duration-300 h-[55px] max-w-[270px] w-full text-base font-medium rounded-[15px]"
                    >
                        Discover what drives us →
                    </Button>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="xl:px-32 px-6 relative">
                <div className="section_container sm:space-y-40 space-y-10">
                    {/* Mission */}
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="basis-[40%]">
                            <h1 className="relative font-bold text-black/15 capitalize lg:text-[80px] sm:text-6xl text-[42px] w-fit">
                                Mission
                                <span className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-[25px] sm:text-[20px] sm:text-lg text-[13.11px] text-[#DE2332] font-bold uppercase block w-full text-center">
                                    Our Mission
                                </span>
                            </h1>

                            <p className="max-w-[541px] sm:text-[20px] text-base font-semibold text-[#686868] sm:mt-10">
                                At Haque Group, our mission is to improve
                                everyday life by delivering trusted products
                                that reflect care, consistency, and community.
                                We are driven by a deep sense of responsibility
                                — to nourish families, empower people, and
                                uphold the values that have guided us for
                                generations. This mission shapes everything we
                                do, from the smallest detail in production to
                                the biggest decisions we make as a company.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 grid-cols-1 basis-[60%] gap-[11px]">
                            {missionData.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative px-5 py-8 text-white"
                                >
                                    <Image
                                        src={noiseBg}
                                        alt="noise-bg"
                                        className="absolute inset-0 w-full h-full object-cover z-[-1]"
                                    />
                                    <div className="flex flex-col items-center justify-center text-center">
                                        {item.svg}

                                        <h4 className="text-[26px] font-black uppercase mt-[18px] mb-7">
                                            {item.title}
                                        </h4>
                                        <p className="text-base font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:order-1 order-2 grid sm:grid-cols-3 grid-cols-1 basis-[60%] gap-[11px]">
                            {visionData.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative px-5 py-8 text-white"
                                >
                                    <Image
                                        src={noiseBg}
                                        alt="noise-bg"
                                        className="absolute inset-0 w-full h-full object-cover z-[-1]"
                                    />
                                    <div className="flex flex-col items-center justify-center text-center">
                                        {item.svg}

                                        <h4 className="text-[26px] font-black uppercase mt-[18px] mb-7">
                                            {item.title}
                                        </h4>
                                        <p className="text-base font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:order-2 order-1 basis-[40%] flex flex-col items-end">
                            <h1 className="relative font-bold text-black/15 capitalize lg:text-[80px] sm:text-6xl text-[42px] w-fit text-right">
                                vision
                                <span className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-[25px] sm:text-[20px] sm:text-lg text-[13.11px] text-[#DE2332] font-bold uppercase block w-full text-center">
                                    our vision
                                </span>
                            </h1>

                            <p className="max-w-[541px] sm:text-[20px] text-base font-semibold text-[#686868] text-right sm:mt-10">
                                At Haque Group, our mission is to improve
                                everyday life by delivering trusted products
                                that reflect care, consistency, and community.
                                We are driven by a deep sense of responsibility
                                — to nourish families, empower people, and
                                uphold the values that have guided us for
                                generations. This mission shapes everything we
                                do, from the smallest detail in production to
                                the biggest decisions we make as a company.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className=" py-12 md:py-16 relative">
                <Image
                    src={noiseBg2}
                    alt="noise-bg"
                    className="absolute inset-0 w-full h-full object-cover z-[-1]"
                />
                <div className="container mx-auto px-6">
                    {/* <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"> */}
                    <div className="flex lg:flex-row flex-col gap-16 xl:gap-[200px] items-center">
                        {/* Image Placeholder */}
                        <div className="order-2 lg:order-1 max-w-[428px] w-full h-[492px] bg-[#D9D9D9] rounded-[15px]"></div>

                        {/* Quote Content */}
                        <div className="text-white order-1 lg:order-2 relative">
                            <div className="mb-6">
                                <div className="absolute sm:top-[-10%] -top-5 sm:left-[-15%] left-0 text-4xl md:text-6xl font-serif mb-4 opacity-80">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={105}
                                        height={90}
                                        viewBox="0 0 105 90"
                                        fill="none"
                                    >
                                        <path
                                            d="M5.29412 90C1.76471 74.4878 0 61.0244 0 49.6098C0 33.2195 3.82353 20.9268 11.4706 12.7317C19.1176 4.24389 30.2941 0 45 0V17.561C37.3529 17.561 31.7647 19.6098 28.2353 23.7073C25 27.8049 23.3824 33.9512 23.3824 42.1463V52.2439H45.4412V90H5.29412ZM64.853 90C61.3235 74.4878 59.5588 61.0244 59.5588 49.6098C59.5588 33.2195 63.3824 20.9268 71.0294 12.7317C78.6765 4.24389 89.8529 0 104.559 0V17.561C96.9118 17.561 91.3235 19.6098 87.7941 23.7073C84.5588 27.8049 82.9412 33.9512 82.9412 42.1463V52.2439H105V90H64.853Z"
                                            fill="white"
                                            fillOpacity="0.15"
                                        />
                                    </svg>
                                </div>
                                <p className="max-w-[606px] w-full text-sm md:text-base lg:text-lg leading-relaxed mb-6 opacity-95">
                                    <span className="text-[35px] font-bold">
                                        T
                                    </span>
                                    oday, Haque has grown far beyond its roots.
                                    What began as a small local brand is now a
                                    recognized name in both national and
                                    international markets. Our products are
                                    found in homes, shops, and supermarkets not
                                    only across Bangladesh but also in regions
                                    with growing demand for quality Bangladeshi
                                    food products. With a strong distribution
                                    network and a focus on export-ready
                                    standards, Haque continues to expand its
                                    presence across Asia, the Middle East, and
                                    beyond. This growth isn't just about
                                    scale—it's about maintaining the same level
                                    of trust, taste, and tradition that defined
                                    us from day one. Our expansion proves that
                                    locally crafted food, made with care and
                                    consistency, can compete on a global
                                    stage—bringing the flavors of Bangladesh to
                                    the world.
                                </p>
                            </div>

                            <div className="max-w-[252px] w-full border-t border-white pt-4 md:pt-6 text-white">
                                <p className="font-bold text-base md:text-lg tracking-wide">
                                    Adam Tamizi Haque
                                </p>
                                <p className="text-sm md:text-base">
                                    Managing director, Haque ltd
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MissionVisionPage;
