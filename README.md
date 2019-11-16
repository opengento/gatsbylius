# Gatsbylius

Gatsby + Sylius = :rocket:

Le site le plus rapide du monde

## Docs

- https://docs.sylius.com/en/latest/index.html
- https://app.swaggerhub.com/apis/Sylius/sylius-shop-api/1.0.0#/Product
- https://www.gatsbyjs.org/docs/

## Accéder à l'API

- http://SYLIUS_URL.test/shop-api/product-latest/

## Pour générer les clés secrètes JWT

En dév, la passphrase est `Opengento !`.

```
openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096
openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout
```

(Source : https://github.com/lexik/LexikJWTAuthenticationBundle/blob/master/Resources/doc/index.md#generate-the-ssh-keys)

## Erreurs communes

### Si composer génère une erreur de mémoire

Préfixer la commande avec `COMPOSER_MEMORY_LIMIT=-1` :

```
COMPOSER_MEMORY_LIMIT=-1 composer install
```
