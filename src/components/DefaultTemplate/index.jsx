import { Header } from "../Header";

export const DefaultTemplate = ({children, setIsOpen,cartList }) =>{
    return(
        <>
            <Header setIsOpen={setIsOpen} cartList={cartList}/>
            <main>
                {children}
            </main>
        </>

    )
}