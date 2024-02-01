const { ThreeDots } = require('react-loader-spinner');

const Loader = () => {
  return (
    <ThreeDots
      color="#1c2425"
      wrapperStyle={{
        justifyContent: 'center',
      }}
    />
  );
};

export default Loader;
