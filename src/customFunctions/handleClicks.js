/*
    setCheckedFunc = The state function used to determine if something is checked
    userInfoArr = The state variable containing user selection
    setUserInfoFunc = The state function to set user selection
*/

export const handleClicked = (e, setCheckedFunc, userInfoArr, setUserInfoFunc) => {
    if (e.target.checked) {
        setUserInfoFunc([e.target.value, ...userInfoArr]);
        setCheckedFunc(true);
    } else {
        let arr = [...userInfoArr];
        setUserInfoFunc(arr.filter( (i) => {
            return i !== e.target.value;
        }))
        setCheckedFunc(false);
    }
}

export const handleOverlayClicked = (e, setCheckedFunc, userInfoArr, setUserInfoFunc) => {
    const input = e.target.offsetParent.childNodes[1];
    input.checked = false;
    let arr = [...userInfoArr];
    setUserInfoFunc(arr.filter( (i) => {
        return i !== input.value;
    }))
    setCheckedFunc(false);
}

export const handleInfoClicked = (e, setCheckedFunc, userInfoArr, setUserInfoFunc) => {
    const input = e.target.offsetParent.offsetParent.childNodes[1];
    input.checked = true;
    setUserInfoFunc([input.value, ...userInfoArr]);
    setCheckedFunc(true);
}

export const handleSubmit = (event, currentFunc, nextFunc) => {
    event.preventDefault();
    currentFunc(false);
    nextFunc(true);
}