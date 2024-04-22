import React, {useState} from 'react';

export default function FavoriteGames(){
    const [games, setGames] = useState(["Doomsday Hunter", "Hades", 
    "Slay the Spire","ScourgeBringer"]);

    function handleAddGame(){
        //newGame references
        const newGame = document.getElementById("gameInput").value;
        setGames(g => [...g, newGame])

        //resetting the value of the textbox
        document.getElementById("gameInput").value= "";
    }
    function handleRemoveGame(index){
        const deletedGame= games.filter((game, i) => i !== index);
        setGames(deletedGame)
    }

    return(
        <div>
            <h2> My Favorite Games Year 2024</h2>
            
                {
                    games.map((game, index) => <li key = {index} onClick = {() => handleRemoveGame(index)} > {game}</li>)
                }
            
            <br />
            <input type="text" name="gameInput" id="gameInput" />
            <br />
            <button type="button" onClick = {handleAddGame}><strong>Add Games</strong></button>
            
        </div>
    )
}