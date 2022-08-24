// selecting queries 
const jokes = document.querySelector('.jokes');
const btn = document.querySelector('button');


// function that shows new joke
const addNewJoke = async () => {
    const jokeText = await getDadJoke();

    // append extracted jokes to html ul
    //  create new li element
    const newLi = document.createElement('li');
    // append extracted joke to new li 
    newLi.append(jokeText);
    // apend new li to the jokes ul
    jokes.append(newLi);
}

const getDadJoke = async () => {
    try {
        // save headers object with JSON response to config var
        const config = { headers: { Accept: 'application/json' } }
        // wait for a promise of axios get DadJokes site and config, and save to a var
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        // show data 
        // console.log(res);
        // extract joke
        //console.log(res.data.joke);
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :/"
    }
}

// on click event
btn.addEventListener('click', addNewJoke);