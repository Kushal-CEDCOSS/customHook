import { useState } from 'react';

const useFetch = () => {
    const [state, setState] = useState('')

    const updateData = (url, method, payload) => {
        fetch(url).then(res => res.json()).then(result => setState(result))
        console.log(method, payload);
    }

  return { state, updateData }
}

export default useFetch