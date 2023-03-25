import packaging from "public/icons/packaging.svg"
import line from "public/icons/end-of-line.svg"
import software from "public/icons/food-industry.svg"
import support from "public/icons/technical-support.svg"
import solutions from "public/icons/solutions.svg"
import linearMachines from "public/images/linear-machine.png"
import rotaryMachines from "public/images/rotary-machine.png"
import bottleMachines from "public/images/bottle-filling-machine.png"
// steps 
import step1 from "public/images/step1.jpg"
import step2 from "public/images/step2.jpg"
import step3 from "public/images/step3.jpg"
// news
import news_1 from "public/images/news-1.png"
import news_2 from "public/images/news-2.png"
// services
import service1 from "public/icons/service1.svg"
import service2 from "public/icons/service2.svg"
import service3 from "public/icons/service3.svg"
import service4 from "public/icons/service4.svg"
// partners
import amazon from "public/icons/amazon.svg"
import airbnb from "public/icons/airbnb.svg"
import asana from "public/icons/asana.svg"
import framer from "public/icons/framer.svg"
import lattice from "public/icons/lattice.svg"
import monday from "public/icons/monday.svg"
import afterpay from "public/icons/afterpay.svg"
import invision from "public/icons/invision.svg"
import slack from "public/icons/slack.svg"
import gitlab from "public/icons/gitlab.svg"
import paypal from "public/icons/paypal.svg"
import trello from "public/icons/trello.svg"
// team
import member from "public/images/customer.jpg"
// products
import product from "public/images/product.jpg"
// news
import news1 from "public/images/news1.png"
import news2 from "public/images/news2.png"
import news3 from "public/images/news3.png"
import news4 from "public/images/news4.png"
import news5 from "public/images/news5.png"
import news6 from "public/images/news6.png"

const { resolve } = require("styled-jsx/css");


export const homeServices = [
    {
        id:1,
        title:"Filling and Packaging Machines",
        icon:packaging
    },
    {
        id:2,
        title:"End  of Line Solutions",
        icon:line
    },
    {
        id:3,
        title:"Food Industry Machines Software",
        icon:software
    },
    {
        id:4,
        title:"7/24 Technical Support",
        icon:support
    },
    {
        id:5,
        title:"Special Solutions Your Needs",
        icon:solutions
    }
]

export const machines = [
    {
        id:1,
        name:"Linear Machines",
        description:"kjkhsdlf skdfoief kskldjfljei",
        image: linearMachines
    },
    {
        id:2,
        name:"Rotary Machines",
        description:"kjkhsdlf skdfoief kskldjfljei",
        image: rotaryMachines
    },
    {
        id:3,
        name:"Bottle Filling Machines",
        description:"kjkhsdlf skdfoief kskldjfljei",
        image: bottleMachines
    }
]

export const steps = [
    {
        id:1,
        title:"Product Design",
        image:step1,
        description:"Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream."
    },
    {
        id:1,
        title:"Planing & Production",
        image:step2,
        description:"Center we have developed many patents in filling and packaging technology."
    },
    {
        id:1,
        title:"Installation & Commissioning",
        image:step3,
        description:"Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears."
    }
]

export const news = [
    {
        id:1,
        title:"Crosson Holding’s 58th ordinary general assembly convened",
        image:news_1,
        description:"Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream."
    },
    {
        id:2,
        title:"Crosson Holding’s new Board of Directors has been determined.",
        image:news_2,
        description:"Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream."
    }
]

export const services = [
    {
        id:1,
        image:service1,
        title:"Company Work Managment Software",
        description:"Center we have developed many patents in filling and packaging technology."
    },
    {
        id:2,
        image:service2,
        title:"Crosson Simple Storage Service (S3)",
        description:"Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears."
    },
    {
        id:3,
        image:service3,
        title:"Machine Access Salary Contol Sowftare",
        description:"Center we have developed many patents in filling and packaging technology."
    },
    {
        id:4,
        image:service4,
        title:"Scalable Storage in the Cloud Service,",
        description:"Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears."
    }
] 

export const partners = [
    {
        id:1,
        name:"amazon",
        img: amazon
    },
    {
        id:2,
        name:"airbnb",
        img: airbnb
    },
    {
        id:3,
        name:"asana",
        img: asana
    },
    {
        id:4,
        name:"framer",
        img: framer
    },

    {
        id:5,
        name:"lattice",
        img: lattice
    },
    {
        id:6,
        name:"trello",
        img: trello
    },
    {
        id:7,
        name:"monday",
        img: monday
    },
    {
        id:8,
        name:"afterpay",
        img: afterpay
    },
    {
        id:9,
        name:"invision",
        img: invision
    },
    {
        id:10,
        name:"slack",
        img: slack
    },
    {
        id:11,
        name:"gitlab",
        img: gitlab
    },
    {
        id:12,
        name:"paypal",
        img: paypal
    },
]

export const team = [
    {
        id:1,
        role:"CO-FOUNDER & CO-CEO",
        name:"Walter White",
        picture: member
    },
    {
        id:2,
        role:"CO-FOUNDER & CO-CEO",
        name:"Jesse Pinkman",
        picture: member
    },
    {
        id:3,
        role:"CHIEF OPERATING OFFICER",
        name:"Skyler White",
        picture: member
    },
    {
        id:4,
        role:"CHIEF LEGAL OFFICER",
        name:"Saul Goodman",
        picture: member
    },
    {
        id:5,
        role:"JUNIOR DEVELOPER",
        name:"Walter Jr",
        picture: member
    },
    {
        id:6,
        role:"SECURITY",
        name:"Mike Ehrmantraut ",
        picture: member
    },
    {
        id:7,
        role:"CHIEF OF STAFF",
        name:"Tuco Salamanca",
        picture: member
    },
    {
        id:7,
        role:"CHIEF FINANCIAL OFFICER",
        name:"Gustavo Fring",
        picture: member
    }
]

export const packages = [
    {
        id: 1,
        type: "basic",
        price: 29,
        description: "Biscuit biscuit halvah soufflé gummi bears jelly beans",
        features: ["Upgraded profile","Multi-shot & video","Instant creative portfolio","Team profile and members","Sell goods"],
        isFeatured: false
    },
    {
        id: 2,
        type: "standard",
        price: 49,
        description: "Biscuit biscuit halvah soufflé gummi bears jelly beans",
        features: ["Upgraded profile","Multi-shot & video","Instant creative portfolio","Team profile and members","Sell goods"],
        isFeatured: false
    },
    {
        id: 3,
        type: "professional",
        price: 59,
        description: "Biscuit biscuit halvah soufflé gummi bears jelly beans",
        features: ["Upgraded profile","Multi-shot & video","Instant creative portfolio","Team profile and members","Sell goods"],
        isFeatured: true
    },
    {
        id: 4,
        type: "exclusive",
        price: 99,
        description: "Biscuit biscuit halvah soufflé gummi bears jelly beans",
        features: ["Upgraded profile","Multi-shot & video","Instant creative portfolio","Team profile and members","Sell goods"],
        isFeatured: false
    }
]

export const products = [
    {
        id:1,
        image:product,
        title:"Filling & Packaging Machines"
    },
    {
        id:2,
        image:product,
        title:"Linear Brode Machines"
    },
    {
        id:3,
        image:product,
        title:"Rotary Machines"
    },
    {
        id:4,
        image:product,
        title:"Bottle Warmup Machines"
    }
]

export const newsList = [
    {
        id:1,
        title : "Crosson Holding’s 58th ordinary general assembly convened",
        description: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
        image : news1
    },
    {
        id:2,
        title : "Crosson Holding’s new Board of Directors has been determined.",
        description: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
        image : news2
    },
    {
        id:3,
        title : "Crosson Holding’s 58th ordinary general assembly convened",
        description: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
        image : news3
    },
    {
        id:4,
        title : "Crosson Holding’s new Board of Directors has been determined.",
        description: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
        image : news4
    },
    {
        id:5,
        title : "Crosson Holding’s 58th ordinary general assembly convened",
        description: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
        image : news5
    },
    {
        id:6,
        title : "Crosson Holding’s new Board of Directors has been determined.",
        description: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
        image : news6
    }
]