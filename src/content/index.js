import deskImg  from '../assets/images/image-web-3-desktop.jpg'
import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'


export const navLinks = [
    {
        name : "Home",
        link : '/'
    },
     {
        name : "New",
        link : '/new'
    },
     {
        name : "Popular",
        link : '/popular'
    },
     {
        name : "Trending",
        link : '/trending'
    },
     {
        name : "Categories",
        link : '/categories'
    }
]


export const hero = [
    {
        title : 'The Bright Future of Web 3.0?',
        body : 'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
        link : 'Read More',
        thumbDesktop : deskImg
    }
]


export const newSection = [
    {
        title : 'Hydrogen VS Electric Cars',
        body : 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
     {
        title : 'he Downsides of AI Artistry',
        body : 'WWhat are the possible adverse effects of on-demand AI image generation?',
    },
     {
        title : 'Is VC Funding Drying Up?',
        body : 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
]

export const other = [
    {
        serialNo : '01',
        imgUrl : img1,
        title: 'Reviving Retro PCs',
        body : 'What happens when old PCs are given modern upgrades?'
    },
     {
        serialNo : '02',
        imgUrl : img2,
        title: 'Top 10 Laptops of 2022',
        body : 'Our best picks for various needs and budgets.',
    },
     {
        serialNo : '03',
        imgUrl : img3,
        title: 'The Growth of Gaming',
        body : 'How the pandemic has sparked fresh opportunities.'
    }
]