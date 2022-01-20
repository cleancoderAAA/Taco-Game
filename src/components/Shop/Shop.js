import React from "react";
import "./Shop.css";
import HyperLink from "../../components/HyperLink/HyperLink";
import WrappedButton from "../WrappedButton/WrappedButton";
import metamaskImg from "../../assets/imgs/metamask.45038d58.svg" ;
import shopImg1 from "../../assets/imgs/2.png";
import shopImg2 from "../../assets/imgs/3.png";
import shopImg3 from "../../assets/imgs/4.png";
import shopImg4 from "../../assets/imgs/5.png";
import shopImg5 from "../../assets/imgs/6.png";
import shopImg6 from "../../assets/imgs/7.png";
import shopImg7 from "../../assets/imgs/8.png";
import shopImg8 from "../../assets/imgs/9.png";
import shopImg9 from "../../assets/imgs/10.png";
import shopImg10 from "../../assets/imgs/11.png";
import shopImg11 from "../../assets/imgs/12.png";

const Shop = () => {

    const ITEMS = [
        {img:shopImg1, title:"Rolling Pin", minted:" - 🍪 5,000 | 10 CPM | ? / 2200 Minted", content:"Once used endlessly by my Grandma Susan—the rolling pin I found still smells of her: peppermint and Myrrh. From being used for her famous tacos, to her homemade tortillas, to hitting me, to even her delectable sweet buns, this rolling pin has endured hours and hours of use."},
        {img:shopImg2, title:"Cookbook", minted:" - 🍪 20,000 | 50 CPM | ? / 440 Minted", content:"I found this book underneath Grandma Susan's dusty bed. It had no title, no cover. With all sorts of recipes like her famous tacos to her favorite Thanksgiving turkey and a few photos addressed to Grandpa Joe I wish I didn't see, this book is more than just a recipe guide. It’s a relic of history and the life my Grandma Susan lived."},
        {img:shopImg3, title:"Whisk", minted:" - 🍪 100,000 | 350 CPM | ? / 400 Minted", content:"It amazed me how an old lady could ever whisk that thick and creamy tacos dough. But hey, Grandma Susan always did without a struggle. It's old and the handle is worn but it still works like a charm."},
        {img:shopImg4, title:"Piping Bag", minted:" - 🍪 100,000 | 350 CPM | ? / 400 Minted", content:"Fill it and squeeze it, it's pretty simple to use. Grandma used this piping bag specifically for her famous Christmas Tacos. She loved to pipe. Santa was known to devour those tacos in seconds."},
        {img:shopImg5, title:"Stand Mixer", minted:" - 🍪 1,000,000 | 5,000 CPM | ? / 360 Minted", content:"It would've made all of her manual mixing obsolete. Although I believe Grandma Susan had a special touch when she hand mixed her tacos—this just makes the tacos faster and I sure am hungry."},
        {img:shopImg6, title:"Convection Oven", minted:" - 🍪 20,000,000 | 112,000 CPM | ? / 100 Minted", content:"Grandma Susan's oven—it's old and gray and the hinge is loose, but it's survived the test of time. Grandpa Joe especially loved to eat everything that came out of it. Whether you want to bake, broil, roast, or self-clean, Grandma's oven is a freak that does it all. Make the perfect gooey and creamy tacos that make you quiver with pleasure."},
        {img:shopImg7, title:"Oven Pro Max", minted:" - 🍪 2,000,000,000 | 12,000,000 CPM | ? / 50 Minted", content:"Introducing the Taco Game Oven Pro Max, built by pros for pros. Wrapped in a sleek unibody enclosure milled out of a solid block of cold stainless steel, four standard convection ovens combine to form a monster that's more than the sum of its parts, producing a sizzling 12,000,000 tacos per minute. The onboard Neural Chef chip uses Taco Game SmartChef artificial intelligence to intelligently monitor conditions and make micro-adjustments a thousand times a second for the perfect taco. Oven Pro Max is the best oven we've made yet, and we think you're going to love it."},
        {img:shopImg8, title:"Taco Gulag", minted:" - 🍪 100,000,000,000 | 620,000,000 CPM | ? / 25 Minted", content:"The Taco Gulag—where the worst doubters of Tacoism are sent for re-education and programming. Immediately upon walking through the doors, dissidents immediately realize the errors of their ways and feel compelled to dedicate 20 hours a day to baking tacos. As Grandma Susan always said, only through hard work and labor in baking tacos can one truly be reformed into the model Chef. Don't worry, they fudded, so it's completely ethical."},
        {img:shopImg9, title:"Taco City", minted:" - 🍪 5,000,000,000,000 | 31,500,000,000 CPM | ? / 12 Minted", content:"An army of model Chefs, all piping together, beating in synchrony, toward the common goal of Tacoism. Grandma Susan would have been so proud. On her death bed, thrashing in her death throes as her body began to fail her, she whispered in my ear: Bake…the…tacos… Reaching out with a trembling hand, she opened her clenched fist, dropping her lifelong plans to build the world's first Taco City into my outstretched hands. Through weeping eyes and the sound of a flatlining heart monitor, I vowed to bring Grandma Susan's ambitions into fruition."},
        {img:shopImg10, title:"Taco Planet", minted:" - 🍪 150,000,000,000,000 | 952,500,000,000 CPM | ? / 5 Minted", content:"Tacos today. Tacos tomorrow. Tacos forever. We're in the endgame now."},
        {img:shopImg11, title:"🆕 Golden Grandma", minted:" - 🍪 6,942,000,000,000,000 | 0 CPM | ? / 1 Minted", content:"She's encased in gold, so she can't do much, but she sure is shiny to look at."},
    ];

    const metamaskButtonStyle = {
        color: "white",
        padding: "12px 16px",
        borderRadius: "8px",
        alignItems: "center",
        textShadow: "rgb(255, 255,255) 0px 0px 12px",
        backgroundColor: "rgba(246, 133, 27, 0.933)",
        boxShadow: "rgb(246 144 27) 0px 0px 12px",
        fontWeight: "bold",
        justifyContent: "center",
    }

    const metamaskImgStyle = {
        width: "20px",
        marginRight: "8px"
    }

    const soldoutButtonStyle = {
        backgroundColor: "rgb(221, 221, 221)",
        border: "none",
        padding: "8px 12px",
        borderRadius: "8px",
        color: "rgb(119, 119, 119)",
        fontWeight: "bold",
        outline: "none",
    }

    const switchnetworkButtonStyle = {
        backgroundColor: "rgb(232, 65, 66)",
        border: "none",
        borderRadius: "8px",
        color: "white",
        fontWeight: "bold",
        boxShadow: "rgb(232 65 66) 0px 0px 12px",
        textShadow: "rgb(255 255 255) 0px 0px 12px",
    }

    return (
        <div className="shop">
            <span className="fw-b ta-c fs-20">Shop</span>
            <div className="col space" style={{margin:"12px 0px 12px"}}>
                {ITEMS.map((item) => (
                    <div key={item.title} className="row mb-3" style={{justifyContent: "initial"}}>
                        <img src={item.img} className="img-shop" alt={item.title} />
                        <div className="">
                            <span>
                            <span className="fw-b">{item.title}</span>
                                {item.minted}
                            </span>
                            <p className="mt-2 mb-2" style={{lineHeight:"1.5"}}>
                                {item.content}
                            </p>
                            <div style={{display:"flex", flexDirection:"row"}}>
                                <HyperLink
                                    to=""
                                    target="_blank"
                                    buttonStyle={metamaskButtonStyle}
                                    imgURL={metamaskImg}
                                    imgStyle={metamaskImgStyle}
                                    text="Install Metamask →"
                                />
                                <WrappedButton 
                                    buttonStyle={switchnetworkButtonStyle}
                                    textStyle={{fontWeight:"bold", color:"white", padding:"12px"}}
                                    text="Switch Network 🔺"
                                />
                                <WrappedButton 
                                    buttonStyle={soldoutButtonStyle}
                                    text="Sold out"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop;