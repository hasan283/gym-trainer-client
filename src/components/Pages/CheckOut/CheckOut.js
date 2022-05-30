import { Link, useParams } from 'react-router-dom';
import useCheckOutDetail from '../../../hooks/useCheckOutDetail';
const CheckOut = () => {
    const { checkoutId } = useParams()
    const [checkout] = useCheckOutDetail(checkoutId)


    return (
        <div className='container pt-5 pb-5'>
            <h1>My Services: {checkout.name}</h1>


            <Link to={`/servicecheckout/${checkoutId}`}>
                <button style={{ border: 'none', background: 'black', color: 'white', padding: '10px 40px' }}>Your Service Checkout</button>
            </Link>
        </div>
    );
};

export default CheckOut;