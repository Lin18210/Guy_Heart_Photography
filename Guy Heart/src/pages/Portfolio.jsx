import React, { useState, useEffect } from 'react'
import Masonry from '../Components/Masonry'

<<<<<<< HEAD
// --- Importing ALL 105 Images from Compressed GH/GH ---
import img1 from '../assets/Images/Compressed GH/GH/1.webp';
import img2 from '../assets/Images/Compressed GH/GH/12.webp';
import img3 from '../assets/Images/Compressed GH/GH/120922_0225.webp';
import img4 from '../assets/Images/Compressed GH/GH/13.webp';
import img5 from '../assets/Images/Compressed GH/GH/14.webp';
import img6 from '../assets/Images/Compressed GH/GH/15.webp';
import img7 from '../assets/Images/Compressed GH/GH/16.webp';
import img8 from '../assets/Images/Compressed GH/GH/17-min.webp';
import img9 from '../assets/Images/Compressed GH/GH/18.webp';
import img10 from '../assets/Images/Compressed GH/GH/19-min.webp';
import img11 from '../assets/Images/Compressed GH/GH/20.webp';
import img12 from '../assets/Images/Compressed GH/GH/26.webp';
import img13 from '../assets/Images/Compressed GH/GH/33.webp';
import img14 from '../assets/Images/Compressed GH/GH/52.webp';
import img15 from '../assets/Images/Compressed GH/GH/Guy Heart Studio-0039.webp';
import img16 from '../assets/Images/Compressed GH/GH/Guy Lev Or-105.webp';
import img17 from '../assets/Images/Compressed GH/GH/Guy Lev Or-117.webp';
import img18 from '../assets/Images/Compressed GH/GH/Guy Lev Or-13.webp';
import img19 from '../assets/Images/Compressed GH/GH/Guy Lev Or-136.webp';
import img20 from '../assets/Images/Compressed GH/GH/Guy Lev Or-137.webp';
import img21 from '../assets/Images/Compressed GH/GH/Guy Lev Or-138.webp';
import img22 from '../assets/Images/Compressed GH/GH/Guy Lev Or-15.webp';
import img23 from '../assets/Images/Compressed GH/GH/Guy Lev Or-157.webp';
import img24 from '../assets/Images/Compressed GH/GH/Guy Lev Or-178.webp';
import img25 from '../assets/Images/Compressed GH/GH/Guy Lev Or-22.webp';
import img26 from '../assets/Images/Compressed GH/GH/Guy Lev Or-48.webp';
import img27 from '../assets/Images/Compressed GH/GH/Guy Lev Or-63.webp';
import img28 from '../assets/Images/Compressed GH/GH/Guy Lev Or-64.webp';
import img29 from '../assets/Images/Compressed GH/GH/Guy Lev Or-65.webp';
import img30 from '../assets/Images/Compressed GH/GH/Guy Lev Or-66.webp';
import img31 from '../assets/Images/Compressed GH/GH/Guy Lev Or-70.webp';
import img32 from '../assets/Images/Compressed GH/GH/Guy Lev Or-71.webp';
import img33 from '../assets/Images/Compressed GH/GH/Guy Lev Or-80.webp';
import img34 from '../assets/Images/Compressed GH/GH/Guy Lev Or-81.webp';
import img35 from '../assets/Images/Compressed GH/GH/Guy Lev Or-94.webp';
import img36 from '../assets/Images/Compressed GH/GH/Guy Lev Or-96.webp';
import img37 from '../assets/Images/Compressed GH/GH/Guy Lev Or-98.webp';
import img38 from '../assets/Images/Compressed GH/GH/IMG_0733.webp';
import img39 from '../assets/Images/Compressed GH/GH/IMG_2096.webp';
import img40 from '../assets/Images/Compressed GH/GH/IMG_2159.webp';
import img41 from '../assets/Images/Compressed GH/GH/IMG_2299-2.webp';
import img42 from '../assets/Images/Compressed GH/GH/IMG_2413.webp';
import img43 from '../assets/Images/Compressed GH/GH/IMG_6185.webp';
import img44 from '../assets/Images/Compressed GH/GH/_MG_9736-2.webp';
import img45 from '../assets/Images/Compressed GH/GH/_MG_9822.webp';
import img46 from '../assets/Images/Compressed GH/GH/_MG_9869.webp';
import img47 from '../assets/Images/Compressed GH/GH/bride-in-white-bathrope-touching-elegant-wedding-2024-12-22-23-18-16-utc.webp';
import img48 from '../assets/Images/Compressed GH/GH/cheerful-newlyweds-at-beach-wedding-ceremony-2025-02-10-00-14-59-utc.webp';
import img49 from '../assets/Images/Compressed GH/GH/happy-bride-on-a-yacht-white-yacht-with-sail-set-2025-01-10-20-37-41-utc.webp';
import img50 from '../assets/Images/Compressed GH/GH/pexels-d-ng-thanh-tu-2922122-15984480.webp';
import img51 from '../assets/Images/Compressed GH/GH/pexels-danikprihodko-15983833.webp';
import img52 from '../assets/Images/Compressed GH/GH/pexels-ekaterina-121008470-10152719.webp';
import img53 from '../assets/Images/Compressed GH/GH/pexels-ekaterina-121008470-10168642.webp';
import img54 from '../assets/Images/Compressed GH/GH/pexels-el-gringo-photo-116752370-34971595.webp';
import img55 from '../assets/Images/Compressed GH/GH/pexels-emma-bauso-1183828-2253867.webp';
import img56 from '../assets/Images/Compressed GH/GH/pexels-fenn-34630082.webp';
import img57 from '../assets/Images/Compressed GH/GH/pexels-habib-hosseini-3650423.webp';
import img58 from '../assets/Images/Compressed GH/GH/pexels-habib-hosseini-3673470.webp';
import img59 from '../assets/Images/Compressed GH/GH/pexels-hanuman-photo-studio-564865561-17820036.webp';
import img60 from '../assets/Images/Compressed GH/GH/pexels-hanuman-photo-studio-564865561-19126428.webp';
import img61 from '../assets/Images/Compressed GH/GH/pexels-hatice-796619215-27350431.webp';
import img62 from '../assets/Images/Compressed GH/GH/pexels-jibarofoto-30238965.webp';
import img63 from '../assets/Images/Compressed GH/GH/pexels-jin-wedding-3859587-5729127.webp';
import img64 from '../assets/Images/Compressed GH/GH/pexels-jin-wedding-3859587-5729187.webp';
import img65 from '../assets/Images/Compressed GH/GH/pexels-jin-wedding-3859587-5729206.webp';
import img66 from '../assets/Images/Compressed GH/GH/pexels-jonathanborba-11994907.webp';
import img67 from '../assets/Images/Compressed GH/GH/pexels-jonathanborba-12031176.webp';
import img68 from '../assets/Images/Compressed GH/GH/pexels-jonathanborba-13110257.webp';
import img69 from '../assets/Images/Compressed GH/GH/pexels-jonathanborba-19841028.webp';
import img70 from '../assets/Images/Compressed GH/GH/pexels-katarzyna-dzierzynska-604269-1646730 1.webp';
import img71 from '../assets/Images/Compressed GH/GH/pexels-leah-newhouse-50725-193040.webp';
import img72 from '../assets/Images/Compressed GH/GH/pexels-leeloothefirst-4661249.webp';
import img73 from '../assets/Images/Compressed GH/GH/pexels-letuantbvn-19956230.webp';
import img74 from '../assets/Images/Compressed GH/GH/pexels-li-yuan-26041890-13713393.webp';
import img75 from '../assets/Images/Compressed GH/GH/pexels-masoodaslami-29624006.webp';
import img76 from '../assets/Images/Compressed GH/GH/pexels-mlkbnl-10074448.webp';
import img77 from '../assets/Images/Compressed GH/GH/pexels-mlkbnl-9041815.webp';
import img78 from '../assets/Images/Compressed GH/GH/pexels-murat-akpinar-2063247431-30061503.webp';
import img79 from '../assets/Images/Compressed GH/GH/pexels-n-voitkevich-4943483.webp';
import img80 from '../assets/Images/Compressed GH/GH/pexels-nguy-n-van-minh-v-ng-73329638-8549395.webp';
import img81 from '../assets/Images/Compressed GH/GH/pexels-pham-hoang-kha-1582786-3347413.webp';
import img82 from '../assets/Images/Compressed GH/GH/pexels-photography-maghradze-ph-1659410-29205719.webp';
import img83 from '../assets/Images/Compressed GH/GH/pexels-reymond-casas-irog-irog-111715742-9692306.webp';
import img84 from '../assets/Images/Compressed GH/GH/pexels-san-wedding-1649543-5544650.webp';
import img85 from '../assets/Images/Compressed GH/GH/pexels-san-wedding-1649543-5544666.webp';
import img86 from '../assets/Images/Compressed GH/GH/pexels-seljansalim-26898064.webp';
import img87 from '../assets/Images/Compressed GH/GH/pexels-simeart-27671268.webp';
import img88 from '../assets/Images/Compressed GH/GH/pexels-simeart-30311767.webp';
import img89 from '../assets/Images/Compressed GH/GH/pexels-storiesofdesign-15290088.webp';
import img90 from '../assets/Images/Compressed GH/GH/pexels-tr-n-long-3093985-13112044.webp';
import img91 from '../assets/Images/Compressed GH/GH/pexels-tr-n-long-3093985-13112066.webp';
import img92 from '../assets/Images/Compressed GH/GH/pexels-tr-n-long-3093985-14562191.webp';
import img93 from '../assets/Images/Compressed GH/GH/pexels-tr-n-long-3093985-5984173.webp';
import img94 from '../assets/Images/Compressed GH/GH/pexels-tr-n-long-3093985-5984181.webp';
import img95 from '../assets/Images/Compressed GH/GH/pexels-tr-n-long-3093985-5984220.webp';
import img96 from '../assets/Images/Compressed GH/GH/pexels-truc-giang-530101831-34689148.webp';
import img97 from '../assets/Images/Compressed GH/GH/pexels-trungnguyenphotog-5096260.webp';
import img98 from '../assets/Images/Compressed GH/GH/pexels-vdre-2157049615-34521934.webp';
import img99 from '../assets/Images/Compressed GH/GH/pexels-vikkirillova-15549004.webp';
import img100 from '../assets/Images/Compressed GH/GH/pexels-wellington-tavares-1593705508-27552391.webp';
import img101 from '../assets/Images/Compressed GH/GH/pexels-wolrider-32632253.webp';
import img102 from '../assets/Images/Compressed GH/GH/pexels-wolrider-32632283.webp';
import img103 from '../assets/Images/Compressed GH/GH/pexels-zeynep-sahin-2148331322-31937781.webp';
import img104 from '../assets/Images/Compressed GH/GH/wedding-couple-is-hugging-on-a-yacht-2024-09-16-10-31-22-utc.webp';
import img105 from '../assets/Images/Compressed GH/GH/wedding-couple-is-hugging-on-a-yacht-beauty-bride-2025-01-10-20-40-43-utc.webp';
=======
// --- Importing ALL 87 Picflow Images ---
import img1 from '../assets/All/Picflow Images Dec 11/Copy of welcome-to-wedding-sign-and-reception-table-2024-12-22-23-18-38-utc.webp';
import img2 from '../assets/All/Picflow Images Dec 11/a-special-day-brings-out-the-best-smiles-2025-04-06-09-01-03-utc.webp';
import img3 from '../assets/All/Picflow Images Dec 11/all-that-glitters-is-usually-gold-2025-04-05-19-48-08-utc.webp';
import img4 from '../assets/All/Picflow Images Dec 11/all-you-need-now-is-your-beautiful-bride-2025-04-06-10-59-28-utc.webp';
import img5 from '../assets/All/Picflow Images Dec 11/an-indian-wedding-is-nothing-short-of-an-extravaga-2025-04-05-21-38-07-utc.webp';
import img6 from '../assets/All/Picflow Images Dec 11/beautiful-wedding-couple-bride-and-groom-on-yacht-2025-01-10-20-31-10-utc.webp';
import img7 from '../assets/All/Picflow Images Dec 11/beautiful-wedding-couple-bride-and-groom-on-yacht-2025-01-10-20-32-10-utc.webp';
import img8 from '../assets/All/Picflow Images Dec 11/beautiful-wedding-couple-bride-and-groom-on-yacht-2025-01-10-20-37-40-utc.webp';
import img9 from '../assets/All/Picflow Images Dec 11/beautiful-wedding-couple-bride-and-groom-on-yacht-2025-01-10-20-38-00-utc.webp';
import img10 from '../assets/All/Picflow Images Dec 11/blonde-bride-in-a-tight-wedding-dress-in-a-studio-2025-11-11-20-33-08-utc.webp';
import img11 from '../assets/All/Picflow Images Dec 11/bridal-white-high-heel-shoes-of-the-bride-2024-12-22-23-18-24-utc.webp';
import img12 from '../assets/All/Picflow Images Dec 11/bride-and-groom-holding-wedding-candle-2024-12-22-23-18-34-utc.webp';
import img13 from '../assets/All/Picflow Images Dec 11/bride-doing-makeup-and-hairstyle-on-ceremony-weddi-2024-12-22-23-18-16-utc.webp';
import img14 from '../assets/All/Picflow Images Dec 11/bride-in-elegant-wedding-dress-2024-12-22-23-18-24-utc.webp';
import img15 from '../assets/All/Picflow Images Dec 11/bride-in-white-bathrope-touching-elegant-wedding-2024-12-22-23-18-16-utc.webp';
import img16 from '../assets/All/Picflow Images Dec 11/bride-in-white-bathrope-with-elegant-diamond-ring-2024-12-22-23-18-38-utc.webp';
import img17 from '../assets/All/Picflow Images Dec 11/bride-throwing-the-bouquet-at-wedding-2025-02-11-09-54-57-utc.webp';
import img18 from '../assets/All/Picflow Images Dec 11/cheerful-newlyweds-at-beach-wedding-ceremnoy-2025-02-10-00-04-40-utc.webp';
import img19 from '../assets/All/Picflow Images Dec 11/cheerful-newlyweds-at-beach-wedding-ceremnoy-2025-02-10-05-29-05-utc.webp';
import img20 from '../assets/All/Picflow Images Dec 11/cheerful-newlyweds-at-beach-wedding-ceremnoy-2025-02-10-08-38-38-utc.webp';
import img21 from '../assets/All/Picflow Images Dec 11/cheerful-newlyweds-at-beach-wedding-ceremnoy-2025-02-10-09-58-30-utc.webp';
import img22 from '../assets/All/Picflow Images Dec 11/cheerful-newlyweds-at-beach-wedding-ceremony-2025-02-10-00-14-59-utc.webp';
import img23 from '../assets/All/Picflow Images Dec 11/close-up-of-tying-bow-on-elegant-white-bridal-wedd-2024-12-22-23-18-31-utc.webp';
import img24 from '../assets/All/Picflow Images Dec 11/couple-of-bride-and-groom-enjoying-romantic-moment-2024-12-22-23-18-08-utc.webp';
import img25 from '../assets/All/Picflow Images Dec 11/couple-of-bride-and-groom-enjoying-romantic-moment-2024-12-22-23-18-09-utc.webp';
import img26 from '../assets/All/Picflow Images Dec 11/couple-of-bride-and-groom-enjoying-romantic-moment-2024-12-22-23-18-12-utc.webp';
import img27 from '../assets/All/Picflow Images Dec 11/couple-of-bride-and-groom-enjoying-romantic-moment-2024-12-22-23-18-19-utc.webp';
import img28 from '../assets/All/Picflow Images Dec 11/couple-of-bride-and-groom-enjoying-romantic-moment-2024-12-22-23-18-23-utc.webp';
import img29 from '../assets/All/Picflow Images Dec 11/couple-of-bride-and-groom-enjoying-romantic-moment-2024-12-22-23-18-24-utc.webp';
import img30 from '../assets/All/Picflow Images Dec 11/couple-of-bride-and-groom-enjoying-romantic-moment-2024-12-22-23-18-31-utc.webp';
import img31 from '../assets/All/Picflow Images Dec 11/couple-of-bride-and-groom-enjoying-romantic-moment-2024-12-22-23-18-34-utc.webp';
import img32 from '../assets/All/Picflow Images Dec 11/cutting-the-wedding-cake-against-the-backdrop-of-w-2025-11-11-20-46-12-utc1.webp';
import img33 from '../assets/All/Picflow Images Dec 11/cutting-the-wedding-cake-against-the-backdrop-of-w-2025-11-11-20-46-12-utc.webp';
import img34 from '../assets/All/Picflow Images Dec 11/cutting-the-wedding-cake-against-the-backdrop-of-w-2025-11-24-17-23-55-utc.webp';
import img35 from '../assets/All/Picflow Images Dec 11/elegant-wedding-ring-on-the-bride-s-finger-2024-12-22-23-18-08-utc.webp';
import img36 from '../assets/All/Picflow Images Dec 11/embrace-your-inner-queen-with-these-exquisite-bang-2025-04-06-09-44-32-utc.webp';
import img37 from '../assets/All/Picflow Images Dec 11/fancy-footwear-for-a-special-day-2025-04-06-12-51-49-utc.webp';
import img38 from '../assets/All/Picflow Images Dec 11/give-your-bride-the-gift-of-a-stylish-groom-2025-04-06-11-15-17-utc.webp';
import img39 from '../assets/All/Picflow Images Dec 11/groom-in-suit-preparing-for-wedding-ceremony-2024-12-22-23-18-16-utc.webp';
import img40 from '../assets/All/Picflow Images Dec 11/groom-kissing-beautiful-bride-s-hand-2024-12-22-23-18-28-utc.webp';
import img41 from '../assets/All/Picflow Images Dec 11/groom-putting-on-elegant-shoes-for-beautiful-bride-2024-12-22-23-18-19-utc.webp';
import img42 from '../assets/All/Picflow Images Dec 11/groom-taking-pictures-of-bride-for-wedding-day-2024-12-22-23-18-12-utc.webp';
import img43 from '../assets/All/Picflow Images Dec 11/happy-bride-on-a-yacht-white-yacht-with-sail-set-2025-01-10-20-37-41-utc.webp';
import img44 from '../assets/All/Picflow Images Dec 11/heres-to-love-and-happily-ever-after-cropped-shot-2025-04-06-08-43-11-utc.webp';
import img45 from '../assets/All/Picflow Images Dec 11/i-thought-this-day-would-never-come-2025-04-06-04-27-56-utc.webp';
import img46 from '../assets/All/Picflow Images Dec 11/just-married-couple-on-yacht-happy-bride-and-groo-2025-01-10-20-33-03-utc.webp';
import img47 from '../assets/All/Picflow Images Dec 11/lets-complete-the-saree-look-2025-04-06-10-20-30-utc.webp';
import img48 from '../assets/All/Picflow Images Dec 11/live-for-the-moments-you-cant-put-into-words-2025-04-06-08-44-17-utc.webp';
import img49 from '../assets/All/Picflow Images Dec 11/makeup-jewellery-outfit-everything-is-perfect-2025-04-05-17-58-52-utc.webp';
import img50 from '../assets/All/Picflow Images Dec 11/marry-the-one-who-makes-your-eyes-smile-2025-04-06-10-51-31-utc.webp';
import img51 from '../assets/All/Picflow Images Dec 11/nothing-elevates-your-look-like-a-bit-of-gold-2025-04-06-09-51-34-utc.webp';
import img52 from '../assets/All/Picflow Images Dec 11/nothing-makes-a-more-striking-statement-than-red-a-2025-04-06-08-00-05-utc.webp';
import img53 from '../assets/All/Picflow Images Dec 11/nothing-makes-you-glow-like-getting-married-2025-04-06-07-36-42-utc.webp';
import img54 from '../assets/All/Picflow Images Dec 11/photographer-taking-pictures-of-bride-and-groom-2024-12-22-23-18-12-utc.webp';
import img55 from '../assets/All/Picflow Images Dec 11/portrait-of-the-newlyweds-at-the-presidium-2025-11-11-20-46-12-utc.webp';
import img56 from '../assets/All/Picflow Images Dec 11/she-wears-her-shyness-perfectly-as-her-veil-2025-04-06-10-34-16-utc.webp';
import img57 from '../assets/All/Picflow Images Dec 11/this-ceremony-is-the-meeting-of-two-souls-2025-04-05-18-41-43-utc.webp';
import img58 from '../assets/All/Picflow Images Dec 11/today-i-make-it-offical-2025-04-06-07-08-35-utc.webp';
import img59 from '../assets/All/Picflow Images Dec 11/today-you-become-a-king-2025-04-06-11-16-17-utc.webp';
import img60 from '../assets/All/Picflow Images Dec 11/wedding-ceremony-at-the-beach-2025-02-09-22-57-20-utc.webp';
import img61 from '../assets/All/Picflow Images Dec 11/wedding-ceremony-of-the-bride-and-groom-in-a-resta-2025-11-11-20-46-10-utc.webp';
import img62 from '../assets/All/Picflow Images Dec 11/wedding-ceremony-of-the-bride-and-groom-in-a-resta-2025-11-11-20-46-11-utc1.webp';
import img63 from '../assets/All/Picflow Images Dec 11/wedding-ceremony-of-the-bride-and-groom-in-a-resta-2025-11-11-20-46-11-utc2.webp';
import img64 from '../assets/All/Picflow Images Dec 11/wedding-ceremony-of-the-bride-and-groom-in-a-resta-2025-11-11-20-46-11-utc.webp';
import img65 from '../assets/All/Picflow Images Dec 11/wedding-ceremony-of-the-bride-and-groom-in-a-resta-2025-11-11-20-46-12-utc.webp';
import img66 from '../assets/All/Picflow Images Dec 11/wedding-ceremony-of-the-bride-and-groom-in-a-resta-2025-11-11-20-57-52-utc1.webp';
import img67 from '../assets/All/Picflow Images Dec 11/wedding-ceremony-of-the-bride-and-groom-in-a-resta-2025-11-11-20-57-52-utc.webp';
import img68 from '../assets/All/Picflow Images Dec 11/wedding-ceremony-of-the-bride-and-groom-in-a-resta-2025-11-24-17-21-49-utc1.webp';
import img69 from '../assets/All/Picflow Images Dec 11/wedding-ceremony-of-the-bride-and-groom-in-a-resta-2025-11-24-17-21-49-utc2.webp';
import img70 from '../assets/All/Picflow Images Dec 11/wedding-ceremony-of-the-bride-and-groom-in-a-resta-2025-11-24-17-21-49-utc.webp';
import img71 from '../assets/All/Picflow Images Dec 11/wedding-couple-is-hugging-on-a-yacht-beauty-bride-2025-01-10-20-30-58-utc.webp';
import img72 from '../assets/All/Picflow Images Dec 11/wedding-couple-is-hugging-on-a-yacht-beauty-bride-2025-01-10-20-40-43-utc.webp';
import img73 from '../assets/All/Picflow Images Dec 11/wedding-couple-is-hugging-on-a-yacht-beauty-bride-2025-01-10-20-40-47-utc.webp';
import img74 from '../assets/All/Picflow Images Dec 11/welcome-to-wedding-sign-and-reception-table-2024-12-22-23-18-38-utc.webp';
import img75 from '../assets/All/Picflow Images Dec 11/white-yacht-with-sail-set-goes-along-the-island-on-2025-01-10-20-40-33-utc.webp';
import img76 from '../assets/All/Picflow Images Dec 11/young-caucasian-couple-39-s-wedding-day-2025-02-10-00-08-00-utc.webp';
import img77 from '../assets/All/Picflow Images Dec 11/young-caucasian-couple-39-s-wedding-day-2025-02-10-00-09-36-utc.webp';
import img78 from '../assets/All/Picflow Images Dec 11/young-caucasian-couple-39-s-wedding-day-2025-02-10-00-40-43-utc.webp';
import img79 from '../assets/All/Picflow Images Dec 11/young-caucasian-couple-39-s-wedding-day-2025-02-10-13-05-08-utc.webp';
import img80 from '../assets/All/Picflow Images Dec 11/young-caucasian-couple-39-s-wedding-day-2025-02-10-13-48-19-utc.webp';
import img81 from '../assets/All/Picflow Images Dec 11/young-couple-getting-married-at-the-beach-2025-02-10-12-15-21-utc.webp';
import img82 from '../assets/All/Picflow Images Dec 11/young-couple-in-a-wedding-ceremony-at-the-beach-2025-02-10-02-23-47-utc.webp';
import img83 from '../assets/All/Picflow Images Dec 11/young-couple-in-a-wedding-ceremony-at-the-beach-2025-02-10-04-37-10-utc.webp';
import img84 from '../assets/All/Picflow Images Dec 11/young-couple-the-bride-and-groom-walking-along-a-2025-11-11-20-46-11-utc.webp';
import img85 from '../assets/All/Picflow Images Dec 11/young-couple-the-bride-and-groom-walking-along-a-2025-11-11-20-46-12-utc1.webp';
import img86 from '../assets/All/Picflow Images Dec 11/young-couple-the-bride-and-groom-walking-along-a-2025-11-11-20-46-12-utc.webp';
import img87 from '../assets/All/Picflow Images Dec 11/young-couple-the-bride-and-groom-walking-along-a-2025-11-24-17-21-49-utc.webp';
>>>>>>> 9bf898c6437aba7603526bb012fa8d89c59c6782


// --- Array of All Imported Images ---
const rawItems = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
    img51, img52, img53, img54, img55, img56, img57, img58, img59, img60,
    img61, img62, img63, img64, img65, img66, img67, img68, img69, img70,
    img71, img72, img73, img74, img75, img76, img77, img78, img79, img80,
<<<<<<< HEAD
    img81, img82, img83, img84, img85, img86, img87, img88, img89, img90,
    img91, img92, img93, img94, img95, img96, img97, img98, img99, img100,
    img101, img102, img103, img104, img105
=======
    img81, img82, img83, img84, img85, img86, img87
>>>>>>> 9bf898c6437aba7603526bb012fa8d89c59c6782
];

// --- Helper to assign random heights ---
// Returns one of standard heights: 250, 400, 600
const getRandomHeight = () => {
    const heights = [250, 400, 600];
    return heights[Math.floor(Math.random() * heights.length)];
};

const Portfolio = () => {
    
  // --- Define Shuffled Items State ---
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 1. Map images to item objects
    const initialItems = rawItems.map((img, index) => ({
      id: String(index + 1),
      img: img,
      height: getRandomHeight()
    }));

    // 2. Shuffle using Fisher-Yates algorithm
    const shuffled = [...initialItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setItems(shuffled);
  }, []);

  return (
    <div className="w-full bg-white">
      
      {/* --- START BANNER SECTION --- */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image with Blur & Dark Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src={img6} // Using one of your images as the hero background
                alt="Background" 
                className="w-full h-full object-cover object-center brightness-50 blur-[2px] scale-105"
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-[#D4AF37] mb-6 drop-shadow-xl font-serif">
                Masterpiece Wedding Gallery
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                “Welcome to our gallery, a visual journey celebrating couples who chose Thailand for their unforgettable weddings. From traditional elegance to modern romance, these images capture the essence of their love amidst Thailand's iconic landscapes and hidden gems.”
            </p>
        </div>
      </div>
      {/* --- END BANNER SECTION --- */}

      {/* --- MASONRY GRID SECTION --- */}
      <div className="container mx-auto px-4 py-16">
          {items.length > 0 ? (
              <Masonry
                items={items}
                ease="power3.out"
                duration={0.6}
                stagger={0.20}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={false}
              />
          ) : (
            <div className="h-96 flex items-center justify-center">
                <p className="text-gray-400">Loading Gallery...</p>
            </div>
          )}
      </div>

    </div>
  )
}

export default Portfolio