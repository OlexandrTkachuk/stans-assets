import { Circles } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        gap: 20,
      }}
    >
      <Circles
        height="40"
        width="40"
        color="#0d6eb7"
        ariaLabel="circles-loading"
        wrapperStyle={{
          display: 'block',
          margin: '0 auto 20px',
        }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
