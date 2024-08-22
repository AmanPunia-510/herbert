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
        buttonText: "Upgrade to Basic",
    },
    {
        heading: "$10/mo",
        validation: "Standard",
        paragraph: "Your go-to resource for thorough visa application preparation. Ensure you have all the necessary information and answers to confidently navigate the German visa process.",
        includeText: "What’s included?",
        rightTick: <PlansSvg />,
        buttonText: "Upgrade to Standard",
    },
    {
        heading: "$20/mo",
        validation: "Premium",
        paragraph: "Have Herbert accompany you throughout your entire visa application journey. With extensive message credits, you can ask questions whenever you need, ensuring a smooth and informed experience.",
        includeText: "What’s included?",
        rightTick: <PlansSvg />,
        buttonText: "Upgrade to Premium",
    },
]
