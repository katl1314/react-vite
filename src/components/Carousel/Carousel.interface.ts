export interface ICarouselImageSize {
    width?: number;
    height?: number;
}

export interface ICarousel extends ICarouselImageSize {
    readonly images: { url: string }[];
}
