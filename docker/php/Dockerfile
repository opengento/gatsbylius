FROM php:7.2.5-apache

RUN apt-get update && apt-get install -y zlib1g-dev libicu-dev g++
RUN docker-php-ext-install intl exif

