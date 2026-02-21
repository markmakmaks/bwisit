import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './pages/Home';
import { WritePost } from './pages/WritePost';
import { PostDetail } from './pages/PostDetail';
import { NotFound } from './pages/NotFound';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'write', Component: WritePost },
      { path: 'post/:id', Component: PostDetail },
      { path: 'login', Component: Login },
      { path: 'signup', Component: Signup },
      { path: '*', Component: NotFound },
    ],
  },
]);