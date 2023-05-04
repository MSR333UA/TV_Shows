import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

const ListScreen = lazy(() => import('../pages/ListScreen/ListScreen'));
const DetailsScreen = lazy(() =>
  import('../pages/DetailsScreen/DetailsScreen')
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListScreen />} />
          <Route path="/" element={<ListScreen />} />
          <Route path="*" element={<ListScreen />} />
          <Route path="/:movieId" element={<DetailsScreen />} />
        </Route>
      </Routes>
    </>
  );
};
