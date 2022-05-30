import { useEffect, useState } from "react"

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://agile-lake-38546.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices];
}
export default useService;