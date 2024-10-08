import { useState } from "react";

const excuseData = {
    leadIn: [
        `I'm sorry but`,
        `Beg you thousand pardons, but`,
        `I apologise, however`,
        `Holy shit! Get this: `,
        `So I was minding my own business and boom: `,
        `This is a terrible excuse, but`,
        `Holy Moses..`,
        `Wow, do i have an epic story for you: `,
        `This is going to sound crazy, but`
    ],
    perpetrator: [
        `Godzilla`,
        `your mom`,
        `the offensive line of '76 Dallas Cowboys`,
        `a triceratops named Penelope`,
        `the director of "101 Dalmatians"`,
        `the ghost of Hitler`,
        `the entire Roman Empire`,
        `a sad clown`,
        `the Pope`,
        `a proffesional criket team`,
        `my astrologist`,
        `a grumpy cat`,
        `a kinght in a black armor`,
        `Princess Peach`,
        `a very hungry vampire`,
        `a bunch of drunken elves`,
        `a man with six fingers on the right hand`,
        `Rayden from Mortal Kombat`,
        `a handicapped gentelman`
    ],
    delayingFactor: [
        `tried to seduce me`,
        `pulled me over in a stolen cop car and demaded fellatio`,
        `made me find Jesus`,
        `kept telling me knock-knock jokes`,
        `stole my bycicle`,
        `died in front of me`,
        `ran me over with a dieselbackhoe`,
        `posted my nudes on Instagram`,
        `stabbed me`,
        `gave me a treasure map of The Mushroom Kingdom`,
        `tried to kill me with an enormous axe`,
        `created a portal to hell`,
        `stole my identity`,
        `gave me a speech about how to be a better person`,
        `pissed in my shoes while I was sleeping`
    ]
}

function generateExcuse(){
    const leadIn = excuseData.leadIn[Math.floor(Math.random() * excuseData.leadIn.length)];
    const perpetrator = excuseData.perpetrator[Math.floor(Math.random() * excuseData.perpetrator.length)];
    const delayingFactor = excuseData.delayingFactor[Math.floor(Math.random() * excuseData.delayingFactor.length)];
    return `${leadIn} ${perpetrator} ${delayingFactor}!`;
}

function RandomExcuse(){
    const [excuse, setExcuse] = useState(generateExcuse());

    return (
        <>
            <h1>Random Excuse</h1>
            <div className="cards-container">
                <div className="card">{excuse}</div>
            </div>
            <button onClick={() => setExcuse(generateExcuse())}>New Excuse</button>
        </>
    );
}

export default RandomExcuse