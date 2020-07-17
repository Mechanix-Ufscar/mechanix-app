const lerFotos = async (callback) => {
    let url = "localhost";

    const fotosHTTP = await fetch(`http://${url}:3030/feed`);
    const fotosJson = await fotosHTTP.json();
    callback(fotosJson);
}

export default lerFotos
