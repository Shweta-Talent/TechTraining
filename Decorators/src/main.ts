enum userType {
    PremiumSubscriber="premium",
    NonPremiumSubscriber="nonpremium"
}

function isAuth(...userTypes: userType[]) {
    return function (
      target: any,
      propertyName: string,
      descriptor: PropertyDescriptor
    ) {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        if (userTypes.includes(UserType.getUserType)) {
          originalMethod.call(this, args);
        } else {
          throw new Error("Unauthorized");
        }
      };
      return descriptor;
    };
  }


function strongPassword(minLength: number) {
  return function checkPassword(target: any, propertyName: string) {
    let originalpassword: string;

    function getter() {
      return originalpassword;
    }

    function setter(newPassword: string) {        
      if (newPassword.length < minLength) throw Error;
      else originalpassword = newPassword;
    }
    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter,
    });
  };
}

function isEmail(target: any, propertyName: string) {
  let originalEmail: string;

  function getter() {
    return originalEmail;
  }

  function setter(newEmail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newEmail)) {
      originalEmail = newEmail;
    } else {
      throw new Error(`Invalid email address: ${newEmail}`);
    }
  }
  Object.defineProperty(target, propertyName, {
    get: getter,
    set: setter,
  });
}

function isNumber(target: any, propertyName: string) {
  let originalNumber: string;

  function getter() {
    return originalNumber;
  }
  function setter(newNumber: string) {
    if (/^\d{10}$/.test(newNumber)) originalNumber = newNumber;
    else throw new Error(`Invalid email address: ${newNumber}`);
  }
  Object.defineProperty(target, propertyName, {
    get: getter,
    set: setter,
  });
}

function waitingTime(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  console.log();
  const originalMethod = descriptor.value;
  descriptor.value = async function (...args: any[]) {
    console.time(propertyName);
    const data = await originalMethod.call(this, args);
    console.timeEnd(propertyName);

    return data;
  };
  return descriptor;
}

class UserType {
    private static userType: userType = userType.PremiumSubscriber;
    static get getUserType() {
      return UserType.userType;
    }
    static set setuserType(userType: userType) {
      UserType.userType = userType;
    }
  }

class App {

   

  @isEmail
  email: string;

  @isNumber
  Number: string;

  @strongPassword(10)
  password: string;

  constructor(password: string, email: string, Number: string) {
    (this.password = password), (this.email = email);
    this.Number = Number;
  }

  @waitingTime
  async fetchData() {
    try {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await fetchData.json();
      
      return await data;
    } catch (error) {
      console.log(error);
    }
  }
@isAuth(userType.PremiumSubscriber)
  getData(){
    console.log("you can use this feature ")
  }

}

const instanceOfApp = new App(
  "qazwsxrdc1qqqaaaa",
  "shweta.thakkar@gmail.com",
  "9510941213"
);
console.log(instanceOfApp.email);
console.log(instanceOfApp.password);
console.log(instanceOfApp.Number);
instanceOfApp.getData()

instanceOfApp
  .fetchData()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
