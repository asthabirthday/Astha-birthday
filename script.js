function openBook(){

    document.querySelector(".hero").style.display = "none";

    document.querySelector(".story").classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}const letter = `So Astha, this is your 17th birthday.

I wish you get more happiness every single day and don't think about useless random things.

On this day, I actually want to tell you something...

You are a really really really great person.

Thank you for every chaotic memory, endless talks, hilarious laughs and everything.

You matter so much to me.

Thank you for always being there for me.

Always take care of yourself and never think you are alone.

I am always there for you.

Be happy. Be safe.

Happiest birthday Ms. 4'11" 💚`;

let index = 0;

function typeLetter(){

    if(index < letter.length){

        document.getElementById("letter-text").innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter,40);

    }

}


setTimeout(typeLetter,2000);
let music = document.getElementById("music");
let playing = false;

function toggleMusic(){

    if(playing){

        music.pause();

        document.querySelector(".music-button").innerHTML = "🎵 Play Music";

    } 
    else {

        music.play();

        document.querySelector(".music-button").innerHTML = "⏸ Pause Music";

    }

    playing = !playing;

}