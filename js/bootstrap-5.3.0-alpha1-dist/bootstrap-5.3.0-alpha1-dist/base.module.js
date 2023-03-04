export class mainjs{
    constructor(){
    

    }
    async cateUrl(category){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1a0c2a8e45mshca4acfd6c5bd328p1eaa35jsn8d9826ab0e60',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let respone= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        let res=await respone.json();
        return await res;
    }
    async detailUrl(id){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1a0c2a8e45mshca4acfd6c5bd328p1eaa35jsn8d9826ab0e60',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        let respone= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        let res=await respone.json();
        return await res;
    }
   
}
//export var c=5555;