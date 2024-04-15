import { useState } from "react"
import "./Lottery.css"
import { genTicket, sum } from "./helper"
import Ticket from "./Ticket"



export default function Lottery({ n, winningSum }) {
    let [ticket, setTicket] = useState(genTicket(n))
    let isWinning = sum(ticket) === winningSum;

    let buyNewTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h2>The Lottery Game</h2>
            <Ticket ticket={ticket} />

            <button onClick={buyNewTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations!! You Won" || "Better Luck next time!! "}</h3>
        </div>
    )
}