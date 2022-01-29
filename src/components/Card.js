import React from 'react'



export default function Card() {
    return (
        <div className = "Card">
            <div className ="NFT_Container">
                <img src="./images/image-equilibrium.jpg" alt="" id ="NFT"></img>
            </div>

            <div className = "content">
                <h3>Equilibrium #3429</h3>
                <p>Our Equilibrium collection promotes balance and calm</p>
                <div className="info">
                    <div className = "stat">
                        <img src= "./images/icon-ethereum.svg"alt=""></img>
                        <p id="ethereum">0.041ETH</p>
                    </div>

                    <div className = "stat">
                        <img src = "./images/icon-clock.svg" alt=""></img>
                        <p>3 days left</p>
                    </div>

                </div>
            </div>

            <div className = "footer">
                <img src="./images/image-avatar.png"alt=""></img>
                <p>Creation of <span>Jules Wyvern</span></p>
            </div>
        </div>
    )
}
