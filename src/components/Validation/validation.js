const validation = (userData) => {
    const errors = {}

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\[A-Z]{2,4}$/i.test(userData.email)) {
        errors.email = 'The email entered not is valid'
    }
    if (userData.email) {
        errors.email = 'You must enter an email'
    }
    if (userData.email.length > 35) {
        errors.email = 'The email not must get over the 35 characters'
    }
    if (!/.*\d+.*/.test(userData.password)) {
        errors.password = 'The password must contain at least a number'
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'The password must contain at least of 6 to 10 characters'
    }
}


export default validation;