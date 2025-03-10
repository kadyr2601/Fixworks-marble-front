export interface Service {
    id: number;
    number: string;
    name: string;
    description: string;
}

export interface ProjectsGalleryType {
    id: number;
    number: string;
    name: string;
    image: string;
}

export interface WhatOurClientSayType {
    id: number;
    review: string;
    fullname: string;
    position: string;
    image: string;
}

export interface GetInContactType {
    id: number;
    title: string;
    description: string;
}

export interface ReviewsType {
    id: number;
    stars: number;
    review: string;
    fullname: string;
    position: string;
    image: string;
}


export interface PartnersType {
    id: number;
    name: string;
}