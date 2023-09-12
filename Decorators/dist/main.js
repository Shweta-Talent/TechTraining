"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var userType;
(function (userType) {
    userType["PremiumSubscriber"] = "premium";
    userType["NonPremiumSubscriber"] = "nonpremium";
})(userType || (userType = {}));
function isAuth(...userTypes) {
    return function (target, propertyName, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (userTypes.includes(UserType.getUserType)) {
                originalMethod.call(this, args);
            }
            else {
                throw new Error("Unauthorized");
            }
        };
        return descriptor;
    };
}
function strongPassword(minLength) {
    return function checkPassword(target, propertyName) {
        let originalpassword;
        function getter() {
            return originalpassword;
        }
        function setter(newPassword) {
            if (newPassword.length < minLength)
                throw Error;
            else
                originalpassword = newPassword;
        }
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
        });
    };
}
function isEmail(target, propertyName) {
    let originalEmail;
    function getter() {
        return originalEmail;
    }
    function setter(newEmail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newEmail)) {
            originalEmail = newEmail;
        }
        else {
            throw new Error(`Invalid email address: ${newEmail}`);
        }
    }
    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
    });
}
function isNumber(target, propertyName) {
    let originalNumber;
    function getter() {
        return originalNumber;
    }
    function setter(newNumber) {
        if (/^\d{10}$/.test(newNumber))
            originalNumber = newNumber;
        else
            throw new Error(`Invalid email address: ${newNumber}`);
    }
    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
    });
}
function waitingTime(target, propertyName, descriptor) {
    console.log();
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            console.time(propertyName);
            const data = yield originalMethod.call(this, args);
            console.timeEnd(propertyName);
            return data;
        });
    };
    return descriptor;
}
class UserType {
    static get getUserType() {
        return UserType.userType;
    }
    static set setuserType(userType) {
        UserType.userType = userType;
    }
}
UserType.userType = userType.PremiumSubscriber;
class App {
    constructor(password, email, Number) {
        (this.password = password), (this.email = email);
        this.Number = Number;
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fetchData = yield fetch("https://jsonplaceholder.typicode.com/posts");
                const data = yield fetchData.json();
                return yield data;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getData() {
        console.log("you can use this feature ");
    }
}
__decorate([
    isEmail
], App.prototype, "email", void 0);
__decorate([
    isNumber
], App.prototype, "Number", void 0);
__decorate([
    strongPassword(10)
], App.prototype, "password", void 0);
__decorate([
    waitingTime
], App.prototype, "fetchData", null);
__decorate([
    isAuth(userType.PremiumSubscriber)
], App.prototype, "getData", null);
const instanceOfApp = new App("qazwsxrdc1qqqaaaa", "shweta.thakkar@gmail.com", "9510941213");
console.log(instanceOfApp.email);
console.log(instanceOfApp.password);
console.log(instanceOfApp.Number);
instanceOfApp.getData();
instanceOfApp
    .fetchData()
    .then((res) => {
    console.log(res);
})
    .catch((error) => {
    console.log(error);
});
