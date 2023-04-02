import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewPost from './Blogg/NewPost'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
export default function App() {
    const my_api_key = 'd0804f01fa7a401683ea19412a2ed7bd'
    const [progress,setProgress]=useState(100);
    return (
        <>
                <Router>
                    <Navbar/>
                    <h1><LoadingBar color='black' height={3} progress={progress} /></h1>
                    <Routes >
                        <Route exact path="/Blog" element={<NewPost/>}></Route>
                        <Route exact path="/" setProgress={setProgress} element={<News apiKey={my_api_key} key="general" pageSize={9} category="general" country="in" />}></ Route>
                        <Route exact path="/business" setProgress={setProgress} element={<News apiKey={my_api_key} key="business" pageSize={9} category="business" country="in" />}></ Route >
                        <Route exact path="/technology" setProgress={setProgress} element={<News apiKey={my_api_key} key="technology" pageSize={9} category="technology" country="in" />}></ Route >
                        <Route exact path="/entertainment" setProgress={setProgress} element={<News apiKey={my_api_key} key="entertainment" pageSize={9} category="entertainment" country="in" />}></ Route >
                        <Route exact path="/science" setProgress={setProgress} element={<News apiKey={my_api_key} key="science" pageSize={9} category="science" country="in" />}></ Route>
                        <Route exact path="/sports" setProgress={setProgress} element={<News apiKey={my_api_key} key="sports" pageSize={9} category="sports" country="in" />}></ Route>
                        <Route exact path="/health" setProgress={setProgress} element={<News apiKey={my_api_key} key="health" pageSize={9} category="health" country="in" />}></ Route >
                    </Routes>
                </Router>
            </>
 );
}
