let Qoute = document.getElementById("Quote");
let Person = document.getElementById("Person");
let btn = document.getElementById("btn");


const qoutes = [{
    qoute: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
},
{
    qoute: `"if you want to live a happy life, tie it to a goal, not to people or things"`,
    person: `Albert Einstien`
},
{
    qoute: "No man is more cheated than the selfish man",
    person: " HENRY WARD BEECHER"
},
{
    qoute: "The four P's to success are pressure, persistence, perseverance, and prayer.",
    person: "STEVE HARVEY"
},
{
    qoute: "Act like the person you want to become",
    person: "WISE MAN"
},
{
    qoute: "Courage is like a muscle. We strengthen it by use.",
    person: "WISE MAN"
},
{
    qoute: "Wrong does not cease to be wrong because the majority share in it.",
    person: "LEO TOLSTOY"
},
{
    qoute: "Winning isn't everything, but wanting to win is.",
    person: "VINCE LOMBARDI"
},
{
    qoute: "A wise man will be master of his mind, a fool will be its slave.",
    person: "PUBLILIUS SYRUS"
},
{
    qoute: "We must cultivate our garden.",
    person: "VOLTAIRE"
},
{
    qoute: "The more you worry, the more you throw off the delicate balance of hormones required for health.",
    person: "ANDREW BERNSTEIN"
},
{
    qoute: "Respect was invented to cover the empty place where love should be.",
    person: "Leo Tolstoy"
},
{
    qoute: "A heart is not judged by how much you love, but by how much you are loved by others.",
    person: " Judy Garland"
},
{
    qoute: "Find your Light; They can't love you if they can't see you.",
    person: "Bette Midler"
},
{
    qoute: "If we look at the world with a love of life, the world will reveal its beauty to us.",
    person: " Daisaku Ikeda"
},
{
    qoute:"Love is a rocky ride for whom don’t know how to be in love",
    person: "omani shed"
},
{
    qoute:"We loved with a love that was more than love.",
    person: "Edgar Allan poe"
}
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * qoutes.length);

    Qoute.innerText =qoutes[random].qoute;
    Person.innerText =qoutes[random].person + "(:";
})