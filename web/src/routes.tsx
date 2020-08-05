import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import TeachersList from './pages/TeachersList';
import TeachersForm from './pages/TeachersForm';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/estudar" component={TeachersList} />
            <Route path="/dar-aulas" component={TeachersForm} />
        </BrowserRouter>
    )
}

export default Routes