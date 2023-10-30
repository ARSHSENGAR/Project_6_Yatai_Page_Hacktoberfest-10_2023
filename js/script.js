// Imported Libraries:
import AOS from "aos";
import "aos/dist/aos.css";

// Imported Images:
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi2 from '../assets/food_sushi-2.png'
import sushi3 from '../assets/food_sushi-2.png'
import men2 from '../assets/food_men-2.png'

// Animation:
AOS.init
(
    {
        duration: 1000,
        offset: 100,
    }
);

// Elements:
const trendingFoods = [
                        'Sushi',
                        'Udon',
                        'Tofu',
                        'Tempura',
                        'Yakitori',
                        'Sashimi'
                       ];

const trendingDrinks = [
                        "Matcha",
                        "Sencha",
                        "Mugicha",
                        "Ramune",
                        "Amazake",
                        "Nihonshu",
                       ];

const cards = [
                {
                    imgSrc: sushi2,
                    alt: "sushi-2",
                    title: "Ebiten Sushi",
                    rating: "4.4",
                    price: "$24.00"
                },
                {
                    imgSrc: sushi3,
                    alt: "sushi-3",
                    title: "Sahmon",
                    rating: "4.8",
                    price: "$28.00",
                    active: true
                },
                {
                    imgSrc: men2,
                    alt: "men-2",
                    title: "Ramen",
                    rating: "4.2",
                    price: "$44.00"
                }
              ];