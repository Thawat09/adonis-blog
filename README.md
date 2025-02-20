# Build image docker, push to azure and docker hub 
1. docker build -t blog .
2. docker tag blog testwebcontainerregistry.azurecr.io/blog:latest
3. docker push testwebcontainerregistry.azurecr.io/blog:latest
4. docker tag blog thawat09/blog:latest
5. docker push thawat09/blog:latest
6. DATE_TAG=$(date +'%Y-%m-%d')
7. docker tag blog thawat09/blog:$DATE_TAG
8. docker push thawat09/blog:$DATE_TAG
