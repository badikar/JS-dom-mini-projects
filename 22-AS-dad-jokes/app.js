const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => fetchDadJoke());

const fetchDadJoke = async () => {
  result.textContent = 'loading...';
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning',
      },
    });
    if (!response.ok) {
      // no need for return - js stop and goes to catch
      throw new Error('oooppppppppssss...');
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = 'oooops... there was an error';
  }
};
// on initial load
fetchDadJoke();
