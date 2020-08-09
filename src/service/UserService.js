let secretData = [
    {
        user: {
            name: "Олег",
            email: "ol.bashkin@gmail.com",
            password: "testtest"
        }
    }
];
function isDataCorrect(data, user) {
    return data.find(record => {
        return (
            record.user.email === user.email &&
            record.user.password === user.password
        );
    });
}
function getUser(credentials) {
    let secretString = localStorage.getItem("secret");
    if (!secretString) {
        localStorage.setItem("secret", JSON.stringify(secretData));
    } else {
        secretData = JSON.parse(secretString);
    }
    return isDataCorrect(secretData, credentials);
}
function registerNewUser(data) {
    let secretString = localStorage.getItem("secret");
    if (secretString) {
        secretData = JSON.parse(secretString);
    }
    secretData.push({ user: data });
    localStorage.setItem("secret", JSON.stringify(secretData));
    return typeof localStorage.getItem("secret") === "string";
}

export default {
    login(credentials) {
        let userData = getUser(credentials);
        return new Promise((resolve, reject) => {
            if (userData) {
                setTimeout(
                    () => resolve({ data: userData, status: "Success" }),
                    100
                );
            } else {
                setTimeout(
                    () => reject(new Error("Неправильный логин или пароль")),
                    100
                );
            }
        });
    },
    register(data) {
        let result = registerNewUser(data);
        return new Promise((resolve, reject) => {
            if (result) {
                setTimeout(() => resolve({ status: "Success" }), 100);
            } else {
                setTimeout(() => reject(new Error("Ошибка регистрации")), 100);
            }
        });
    }
};
