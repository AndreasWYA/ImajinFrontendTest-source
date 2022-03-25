
import { Container } from 'react-bootstrap';
import {HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import Bookeditor from './components/Bookeditor';
import BooksList from './components/BooksList';



function App() {
  const Wrapper = (props) => {
    const params = useParams();
    return <BooksList {...{...props, match: {params}} } />
  }
  return (
    <div className="App">
      <Container className='align-items-center justify-content-center' style={{minHeight: 'auto', width: '525px'}}>
      <Router>
          <Routes>
            <Route Route path="/" element={<AuthorList />}></Route>
            <Route path="books/:id" element={<Wrapper />}></Route>  
            <Route exact path="/editor" element={<Bookeditor />}></Route>
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
