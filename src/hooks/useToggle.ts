import { useCallback, useState } from "react";

const useToggle = (intialState: boolean): [boolean, typeof toggle] => {
    const [state, setState] = useState(intialState);
    const toggle = useCallback(() => setState((state) => !state), []);

    return [state, toggle];
}

export default useToggle;