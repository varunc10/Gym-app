export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6cba9264d2msh7c74f3bdd418c70p1ff6a4jsn8b3db6546f3d',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6cba9264d2msh7c74f3bdd418c70p1ff6a4jsn8b3db6546f3d',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}


