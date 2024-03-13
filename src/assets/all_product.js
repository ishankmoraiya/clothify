import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";


const productPriceDifference = 100;

const all_product = [
  {
    id: 1,
    name: "Elegant Floral Print Maxi Dress",
    category: "women",
    image: p1_img,
    new_price: 250 ,
    old_price: 250 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 2,
    name: "Overlap Collar Peplum Hem Blouse",
    category: "men",
    image: p20_img,
    new_price: 150,
    old_price: 150 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 3,
    name: "Ribbed Knit High Neck Sweater",
    category: "kid",
    image: p30_img,
    new_price: 300,
    old_price: 300 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 4,
    name: "Ripped Denim Mini Skirt",
    category: "women",
    image: p4_img,
    new_price: 200,
    old_price: 200 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 5,
    name: "Button Up Pocket Patch Trench Coat",
    category: "women",
    image: p5_img,
    new_price: 350,
    old_price: 350 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 6,
    name: "Cuffed Plaid Sleeve Button Up Shirt",
    category: "women",
    image: p6_img,
    new_price: 280,
    old_price: 280 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 7,
    name: "Floral Print Surplice Wrap Dress",
    category: "women",
    image: p7_img,
    new_price: 400,
    old_price: 400 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 8,
    name: "Slim Fit Pinstripe Shirt",
    category: "women",
    image: p8_img,
    new_price: 180,
    old_price: 180 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 9,
    name: "Striped Ribbed Knit Bodycon Dress",
    category: "women",
    image: p9_img,
    new_price: 320,
    old_price: 320 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 10,
    name: "Contrast Panel Utility Jacket",
    category: "wpmen",
    image: p10_img,
    new_price: 270,
    old_price: 270 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 11,
    name: "Tropical Print Ruffle Trim Dress",
    category: "women",
    image: p11_img,
    new_price: 270,
    old_price: 270 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 12,
    name: "Cuffed Denim Shorts",
    category: "women",
    image: p12_img,
    new_price: 210,
    old_price: 210 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 13,
    name: "Cropped Cable Knit Sweater",
    category: "men",
    image: p13_img,
    new_price: 180,
    old_price: 180 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 14,
    name: "Tie Waist Striped Shirt Dress",
    category: "men",
    image: p14_img,
    new_price: 290,
    old_price: 290 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 15,
    name: "Distressed Denim Jacket",
    category: "men",
    image: p15_img,
    new_price: 330,
    old_price: 330 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 16,
    name: "Wide Leg High Waist Jeans",
    category: "men",
    image: p16_img,
    new_price: 240 - productPriceDifference,
    old_price: 240 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 17,
    name: "Ribbed Knit Turtleneck Sweater",
    category: "men",
    image: p17_img,
    new_price: 380,
    old_price: 380 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 18,
    name: "Buttoned Denim Overall Dress",
    category: "men",
    image: p18_img,
    new_price: 200,
    old_price: 200 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 19,
    name: "Crew Neck Sweatshirt",
    category: "men",
    image: p19_img,
    new_price: 280,
    old_price: 280 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 20,
    name: "Women shorts",
    category: "women",
    image: p2_img,
    new_price: 310 - productPriceDifference,
    old_price: 310 - productPriceDifference,
    bestseller: false,
  },
  
  {
    id: 21,
    name: "Tie Waist Striped Midi Dress",
    category: "men",
    image: p21_img,
    new_price: 190,
    old_price: 190 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 22,
    name: "High Rise Distressed Mom Jeans",
    category: "men",
    image: p22_img,
    new_price: 350,
    old_price: 350 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 23,
    name: "Corduroy Button Down Skirt",
    category: "men",
    image: p23_img,
    new_price: 220,
    old_price: 220 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 24,
    name: "Long Sleeve Pocket Tee",
    category: "men",
    image: p24_img,
    new_price: 260,
    old_price: 260 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 25,
    name: "Kid Print Wrap Dress",
    category: "kid",
    image: p25_img,
    new_price: 300,
    old_price: 300 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 26,
    name: "Fleece Zip Up Hoodie",
    category: "kid",
    image: p26_img,
    new_price: 330,
    old_price: 330 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 27,
    name: "Pleated Belted Midi Skirt",
    category: "kid",
    image: p27_img,
    new_price: 210,
    old_price: 210 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 28,
    name: "Crew Neck Sweatshirt",
    category: "kid",
    image: p28_img,
    new_price: 280,
    old_price: 280 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 29,
    name: "Lace Trim Satin Cami Top",
    category: "kid",
    image: p29_img,
    new_price: 240,
    old_price: 240 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 30,
    name: "Slim Fit Chino Pants",
    category: "women",
    image: p3_img,
    new_price: 370,
    old_price: 370 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 31,
    name: "Collared Button Down Blouse",
    category: "kid",
    image: p31_img,
    new_price: 310,
    old_price: 310 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 32,
    name: "Twill Utility Jacket",
    category: "kid",
    image: p32_img,
    new_price: 290 ,
    old_price: 290 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 33,
    name: "Plaid Button Up Shirt",
    category: "kid",
    image: p33_img,
    new_price: 230,
    old_price: 230 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 34,
    name: "Crew Neck Ribbed Sweater",
    category: "kid",
    image: p34_img,
    new_price: 260,
    old_price: 260 - productPriceDifference,
    bestseller: true,
  },
  {
    id: 35,
    name: "Belted Utility Cargo Pants",
    category: "kid",
    image: p35_img,
    new_price: 200,
    old_price: 200 - productPriceDifference,
    bestseller: false,
  },
  {
    id: 36,
    name: "Belted Utility Cargo Pants",
    category: "kid",
    image: p36_img,
    new_price: 500,
    old_price: 200 - productPriceDifference,
    bestseller: false,
  },
];

export default all_product;
