import NavComp from "components/NavComp"
export default function List(){
    const data = ["juice", "lime", "beep", "boop"]

    return (
        <>
        <NavComp />
        <div>
            
            <p>boop</p>
            {data.map((data, i) =>(<p>{i}, {data}</p>))}
        </div>
        </>

    )
}