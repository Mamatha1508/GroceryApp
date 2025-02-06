import { render ,screen} from "@testing-library/react"
//import Header from "../Header"
import '@testing-library/jest-dom'
import Login from "../Login"
import { MemoryRouter } from "react-router"
import Header from "../Header";


test('Should load the login page',()=>{
    render(<MemoryRouter>
        <Login/>
    </MemoryRouter>)

    const heading= screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
});



// test('should load the logo',()=>{
//      render(<MemoryRouter><Header/></MemoryRouter>);
//      // query
//      const image= screen.getByRole('image');
//      //checking for image presence in the component
//      expect(image).toBeInTheDocument();

// })