import { Button } from "./button"

const Header = () =>{
    return(
        <div className="m-0.5 p-1 justify-between flex items-centre space-x-4">
            <h1>Logo</h1>
            <Button className="bg-black text-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                Preview
            </Button>            
        </div>
    )
}

export default Header;