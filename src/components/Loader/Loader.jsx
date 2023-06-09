import { ColorRing } from 'react-loader-spinner';
import { WrapLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <WrapLoader>
      <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </WrapLoader>
  );
};
