import { createContext, useState } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
    const  [watchlist,setWatchlist]=useState([])
    const toogleWatchlist=(movie)=>{
        const index=watchlist.findIndex((m)=>m.id===movie.id);
        if(index===-1){
            setWatchlist([...watchlist,movie]);
        } else{
            setWatchlist([...watchlist.slice(0,index),...watchlist.slice(index+1)]);
        }
    }
    return (
        <WatchlistContext.Provider value={{watchlist,toogleWatchlist}}>
            {children}
        </WatchlistContext.Provider>
    )
}