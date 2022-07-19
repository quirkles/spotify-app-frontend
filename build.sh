docker build -t app-fe:latest .
docker tag spotify-frontend:latest northamerica-northeast2-docker.pkg.dev/spotify-application-356414/spotify-frontend/app:latest
docker push northamerica-northeast2-docker.pkg.dev/spotify-application-356414/spotify-frontend/app:latest
