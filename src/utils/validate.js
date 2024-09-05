export const isValidEmail = (email) =>{
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    return !isValid ? "Enter a valid email adddress" : "";
}

export const isValidPass = (password) => {
    const isValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@!#$?])[A-Za-z\d@!#$?]{6,}$/.test(password);
    return !isValid ? "Your password must contains atleast 6 characters. [A, a, 1, @#$!?]" : "";
}
