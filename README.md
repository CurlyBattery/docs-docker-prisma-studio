# API для реализации призмы в докер

---

## Режим разработки
Используется файл [Docker Compose Dev](./docker-compose.yml)\
Файл переменных окружения [Env](./.env)

### Запуск
1) Команда для запуска postgres контейнера 
```bash
$ docker compose -f docker-compose.postgres.yml up -d
```
2) Для установки зависимостей
```bash
$ yarn
```
3) Для создания миграций
```bash
$ npx prisma migrate dev --name name_migration
```
4) Для воспроизведения прошлых миграций в базу данных
```bash
$ npx prisma migrate dev
```
5) Для запуска приложения 
```bash
$ yarn run dev
```
6) Для остановки контейнера (нужно для продакшна)
```bash
$ docker compose -f docker-compose.postgres.yml down --remove-orphans
```

## Режим продкшна
Используется [Docker Compose Prod](./docker-compose.yml)\
Файл переменных окружения [Env Prod](./.env.prod)

### Запуск
Для запуска используется всего одна команда
```bash
$ docker compose -f docker-compose.yml up --build -d
```