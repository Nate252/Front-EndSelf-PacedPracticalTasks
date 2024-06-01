function createUser(firstName, lastName) {
    return {
        firstName,
        lastName,
    };
}


function getFullName(user) {
    if (user) {
        return `${user.firstName} ${user.lastName}`;
    }
    else {
        return "";
    }
}

function getWidth(params) {
    if (params && params.styling && params.styling.sizes) {
        return params.styling.sizes.width;
    } else {
        return null;
    }

}



function extendObject(obj, isValid) {
    let user1 = Object.assign({}, obj);
    Object.assign(user1, { isValid });
    return user1;
}



function sumPrices(prices) {
    let sum = 0;
    for (let key in prices) {
        if (typeof prices[key] === 'number' && isFinite(prices[key])) {
            sum += prices[key];
        }
    }
    return sum;
}

function createUserWithFullName(firstName, lastName) {
    return {
        firstName,
        lastName,
        setFirstName(newFirstName) {
            this.firstName = newFirstName;
        },
        setLastName(newLastName) {
            this.lastName = newLastName;
        },
        getFullName() {
            
                return `${this.firstName} ${this.lastName}`;
        
        },

    };
}