import Gnb from "./Gnb"

export default function Tops () {
    const styles = {
        width: "300px"
    }
    return(
        <div>
            <img src="/nextjs.png" alt="Nextjs" style={{width: "300px"}}/>
            상진이의 Next.js
            <Gnb/>
        </div>
    )
}