import { DetailsScreen } from 'pages/DetailsScreen/DetailsScreen';
import { ListScreen } from 'pages/ListScreen/ListScreen';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ListScreen />
      <DetailsScreen />
    </div>
  );
};
