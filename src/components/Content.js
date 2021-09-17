import ImageOne from '../images/egg1.jpg';
import ImageTwo from '../images/egg2.jpg';
import ImageThree from '../images/egg3.jpg';
const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Easy Sunny Side Up Egg</h2>
          <p className='mb-2'>Delicious, and nutritious</p>
          <span>$18</span>
        </div>
      </div>

      <div className='menu-card'>
        <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Side up Egg</h2>
          <p className='mb-2'>Crispy, delicious, and nutritious</p>
          <span>$30</span>
        </div>
      </div>

      <div className='menu-card'>
        <img
          src={ImageThree}
          alt='egg'
          className='h-full rounded mb-20 shadow'
        />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Egg Salad</h2>
          <p className='mb-2'>Delicious, and nutritious</p>
          <span>$47</span>
        </div>
      </div>
    </>
  );
};

export default Content;
