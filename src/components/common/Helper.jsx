import { FacebookLogo, InstagramLogo, LinkedinLogo, PlansSvg } from './Icon'

export const FOOTER_LINKS = [
    {
        title: 'Quick Links',
        links: ['Services', 'About Us', 'Features', 'Plans'],
    },
    {
        title: 'Support',
        links: ['Help Center', 'Term & Conditions', 'Privacy Policy'],
    },
    {
        title: 'Follow Us',
        links: [FacebookLogo, InstagramLogo, LinkedinLogo]
    }
];

export const PLANS_CARD = [
    {
        heading: "$5/mo",
        validation: "Basic",
        paragraph: "Ideal for newcomers! Get quick and reliable answers to your basic questions about German immigration policies. Perfect for a brief introduction without long-term commitment.",
        includeText: "What’s included?",
        rightTick: <PlansSvg />,
        msg: "10 messages",
        buttonText: "Upgrade to Basic",
    },
    {
        heading: "$10/mo",
        validation: "Standard",
        paragraph: "Your go-to resource for thorough visa application preparation. Ensure you have all the necessary information and answers to confidently navigate the German visa process.",
        includeText: "What’s included?",
        rightTick: <PlansSvg />,
        msg: "25 messages",
        buttonText: "Upgrade to Standard",
    },
    {
        heading: "$20/mo",
        validation: "Premium",
        paragraph: "Have Herbert accompany you throughout your entire visa application journey. With extensive message credits, you can ask questions whenever you need, ensuring a smooth and informed experience.",
        includeText: "What’s included?",
        rightTick: <PlansSvg />,
        msg: "50 messages",
        buttonText: "Upgrade to Premium",
    },
]

export const FAQ_DATA = [
    {
        id: 1,
        heading: 'first querstion of faq',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit quia adipisci voluptatibus cupiditate molestiae, libero nisi, obcaecati qui earum, esse nemo atque eaque odio quibusdam porro dolores ducimus deserunt?'
    }, {
        id: 2,
        heading: 'second querstion of faq',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit quia adipisci voluptatibus cupiditate molestiae, libero nisi, obcaecati qui earum, esse nemo atque eaque odio quibusdam porro dolores ducimus deserunt?'
    }, {
        id: 3,
        heading: 'third querstion of faq',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit quia adipisci voluptatibus cupiditate molestiae, libero nisi, obcaecati qui earum, esse nemo atque eaque odio quibusdam porro dolores ducimus deserunt?'
    }, {
        id: 4,
        heading: 'fourth querstion of faq',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit quia adipisci voluptatibus cupiditate molestiae, libero nisi, obcaecati qui earum, esse nemo atque eaque odio quibusdam porro dolores ducimus deserunt?'
    }, {
        id: 5,
        heading: 'fifth querstion of faq',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit quia adipisci voluptatibus cupiditate molestiae, libero nisi, obcaecati qui earum, esse nemo atque eaque odio quibusdam porro dolores ducimus deserunt?'
    }, {
        id: 6,
        heading: 'sixth querstion of faq',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit quia adipisci voluptatibus cupiditate molestiae, libero nisi, obcaecati qui earum, esse nemo atque eaque odio quibusdam porro dolores ducimus deserunt?'
    },
]

export const ACCORDION_DATA = [
    {
        items: [
            {
                title: 'What is Herbert?',
                content: 'Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.',
            },
            {
                title: 'How can I access Herbert?',
                content: 'You can access Herbert through the official website or mobile application. Simply sign up and provide the necessary details, and Herbert will guide you through the immigration or visa process step by step.',
            },
            {
                title: 'Is Herbert available in multiple languages?',
                content: 'Currently, Herbert supports English and German. We are working on adding more language options to ensure better accessibility for users worldwide.',
            },
        ]
    },
    {
        items: [
            {
                title: 'How accurate is the information provided by Herbert?',
                content: 'Herbert provides information based on the latest guidelines and regulations from German immigration authorities. However, for the most accurate and personalized advice, it is always recommended to consult with legal or immigration experts.',
            },
            {
                title: 'How can Herbert help me with my visa application?',
                content: 'Herbert guides you through each step of the visa application process, providing information on required documents, timelines, and application procedures. It also offers reminders for key deadlines and updates on visa regulations.',
            },
            {
                title: 'Can Herbert help me fill out my visa application forms?',
                content: 'Yes, Herbert can assist by guiding you through each section of the visa application forms, explaining what information is required, and providing tips to ensure accuracy. However, it does not fill out forms on your behalf.',
            },
        ]
    },
];

export const mainFeatures = [
    {
        icon: "One",
        text: "Find out which visa you might want",
    },
    {
        icon: "Two",
        text: "Receive a checklist with all necessary documents",
    },
    {
        icon: "Three",
        text: "Write your CV / Motivation Letter with Herbert",
    },
    {
        icon: "Five",
        text: "Practice your German interactively with Herbert",
    },
];
export const subFeatures = [
    {
        icon: "Two",
        text: "Receive a checklist with all necessary documents",
    },
    {
        icon: "Four",
        text: "Help prepare for your visa interview",
    },
    {
        icon: "Five",
        text: "Practice your German interactively with Herbert",
    },
    {
        icon: "Six",
        text: "Let Herbert guide you through your fresh start in Germany once you get there.",
    },
]