FROM php:7.2.5-apache

RUN mkdir /srv/sylius/public/media/image
RUN apt-get update && apt-get install -y zlib1g-dev libicu-dev g++
RUN docker-php-ext-install intl exif
RUN php bin/console sylius:fixtures:load --no-interaction
