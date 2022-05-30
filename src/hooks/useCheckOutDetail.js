import { useEffect, useState } from "react";

const useCheckOutDetail = checkoutId => {
    const [checkout, setCheckout] = useState({})
    useEffect(() => {
        const url = `https://agile-lake-38546.herokuapp.com/service/${checkoutId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCheckout(data))
    }, [checkoutId]);
    return [checkout];
}

export default useCheckOutDetail;