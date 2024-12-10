import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Nav,Navbar,Container} from 'react-bootstrap';
import mainImg from './img/testImg.png';
import { useState } from 'react';
import data from './data.js';
import {Routes,Route,Link, useNavigate,Outlet} from 'react-router-dom'
import Detail  from './Detail.js';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/')}}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>detail</Nav.Link>
            <Nav.Link href="/" target="_blank">Google</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={ 
          <>
           <div className='main-bg'></div>
          <div className="container">
            <div className="row">
              {
                shoes.map((data,i)=>{
                  return(
                    <div className="col-md-4" key={i} onClick={()=>{navigate(`/detail/${data.id}`,{
                      state:{shoe:data,},
                    })}}>
                      <img src={`https://codingapple1.github.io/shop/shoes${data.id+1}.jpg`} width="80%" />
                      <h4>{data.title}</h4>
                      <p>{data.content}</p>
                      <p>{data.price}</p>
                    </div>    
                  );
                  
                })
              }
            </div>
          </div>
          </>
        } />
        <Route path="/detail/:id" element={
          <Detail shoes={shoes}/>
        }/>
         <Route path="/about" element={
          <About/>
        }/>
      </Routes>
     
    </div>
  );
}
function About(){
  return(
    <div>
      <h4>회사 정보</h4>
    </div>
  )
}

export default App;
