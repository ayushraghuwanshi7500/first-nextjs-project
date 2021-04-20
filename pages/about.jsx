import Meta from '../components/Meta';

const about = () => {
  return (
    <div>
      <Meta title='About' />
      This was my first nextjs project whoch i built by following{' '}
      <a
        target='_blank'
        style={{ color: 'blue' }}
        href='https://www.youtube.com/watch?v=mTz0GXj8NN0'
      >
        this
      </a>{' '}
      tutorial !
    </div>
  );
};

export default about;
