import { createContext, useEffect, useState } from "react";

const PeriodContext = createContext()

export function PeriodProvider({children}){
    const [period, setPeriod] = useState('a')
    const [choosedPlans, setChoosedPlans] = useState([])
    const [add, setAdd] = useState([])
    const [com, setCom] = useState(0)
    const [infoVal, setInfoVal] = useState(false)
    
    useEffect(()=>{
        setAdd([])
    },[period])

    return (
        <PeriodContext.Provider value={{period, setPeriod, choosedPlans, setChoosedPlans, add, setAdd, com, setCom, infoVal, setInfoVal}}>
            {children}
        </PeriodContext.Provider>
    )
}
export default PeriodContext;