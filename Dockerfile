# Utiliser l'image Nginx basée sur Alpine (très légère et rapide)
FROM nginx:alpine

# Copier tous les fichiers du projet (HTML, CSS, JS, images) vers le dossier public par défaut de Nginx
COPY . /usr/share/nginx/html

# Exposer le port 80 pour que le conteneur soit accessible de l'extérieur
EXPOSE 80

# Lancer le serveur web Nginx en premier plan
CMD ["nginx", "-g", "daemon off;"]
