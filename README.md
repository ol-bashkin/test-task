# test-task

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

# Тестовое задание
Необходимо развернуть простое vue приложение со страницами:
1. Авторизация
2. Регистрация
3. Приветсвие пользователя

## Описание функционала
Вбить хардкодом данные одного пользователя, который может авторизовываться. При помощи страницы "регистрация" пополнять этот список.

## Описание страниц
### Авторизация
Форма с валидацией полей, авторизует по email и паролю, сохраняет сессию пользователя.
Ссылкой перехода на регистрацию.

### Регистрация
Форма с валидацией полей, регистрирует по имени, email, password с подтверждением.
Ссылкой перехода на авторизацию.
После успешной регистрации редиректит на страницу авторизации

### Приветсвие пользователя
Страница с сообщением об успешной авторизации, к которой имеет доступ только авторизованный пользователь, и кнопкой "Выход". 
При нажатии на кнопку "выход", происходит редирект на авторизацию, c уведомлением о том, что пользователь покинул аккаунт и очисткой сессии.
При попытке попасть на нее без авторизации - происходит редирект на авторизацию.

## Требования
- Все задачи по коммуникации с бэкендом эмулировать на клиенте, обязательно асинхронным кодом
- Ограничений на использование зависимостей нет
- Требования что-то верстать нет, тем не менее UI нужно собрать самостоятельно, поэтому для стилизации можно использовать любую библиотеку
- Под сессиями подразумевается сеанс авторизации, не http сессии.
- Проект должен быть инициализирован через VUE CLI
- Результат предоставить в виде форка этого репозитория


