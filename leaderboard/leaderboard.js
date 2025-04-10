const URL = 'https://kool.krister.ee/chat/SpeedMath';

const leaderboard = document.querySelector('.leaderboard');

function score() {
    fetch(URL,{
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        },
    }

})