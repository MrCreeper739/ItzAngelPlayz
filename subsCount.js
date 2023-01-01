const ytKey = 'AIzaSyDSPbfsuW_vkyAD5BrqglKAE9BG8x96sEc';
const ytUser = 'UCd4KhembwGbF6iwFJAYIl_Q';
const subCount = document.getElementById("subCount");

let getSubs = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ytUser}&key=${ytKey}`)
    .then(response => {

        return response.json();
    })
    .then(data => {

        subCount.innerHTML = data["items"][0].statistics.subscriberCount;
    })
}

getSubs();