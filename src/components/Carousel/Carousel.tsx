import { ICarousel } from "./Carousel.interface";
import { useEffect, useRef } from "react";
import { CarouselViewBox, ImageList } from "./Carousel.style";

const Carousel = ({ images, width, height }: ICarousel) => {
    const initWidth = width ?? 250;
    const initHeight = height ?? 250;
    const carouselRef = useRef(null); // 변수 관리
    let interval: any;
    let isStatus: "on" | "off" = "on";

    const handlerCarouselSlide = () => {
        // carouselRef.current null 검사
        if (carouselRef.current) {
            const activeLi = document.querySelector(
                "li.active"
            ) as HTMLLIElement;
            let siblingLi = activeLi.nextElementSibling as HTMLLIElement;

            if (!siblingLi) {
                siblingLi = document.querySelector("ul > li") as HTMLLIElement;
            }
            activeLi.style.marginLeft = `-${initWidth}px`;
            setTimeout(() => {
                document.querySelector("ul")?.appendChild(activeLi);
                activeLi.classList.remove("active"); // 기존 li의 active클래스 삭제
                siblingLi.classList.add("active");
                activeLi.style.marginLeft = "0px";
            }, 2000);
        }
    };

    const handlerCarouselSwitch = () => {
        if (isStatus === "on") {
            // 만약 이미지를 클릭하였을때 현재 상태가 움직는 상태이면? -> close
            isStatus = "off";
            clearInterval(interval);
        } else {
            // 만약 이미지를 클릭하였을때 현재 상태가 멈춰진 상태이면? -> 다시 시작
            isStatus = "on";
            interval = setInterval(handlerCarouselSlide, 3000);
        }
    };

    useEffect(() => {
        interval = setInterval(handlerCarouselSlide, 3000);
        return () => {
            // clear-in함수에서 interval을 clear해야함.
            clearInterval(interval);
        };
    }, []);
    const image = images.map((d, index) => {
        const active = index === 0 ? "active" : "";
        return (
            <ImageList
                key={`img-${index}`}
                className={active}
                onClick={handlerCarouselSwitch}
            >
                <img src={d.url} width={initWidth} height={initHeight}></img>
            </ImageList>
        );
    });
    return (
        <CarouselViewBox width={initWidth} height={initHeight}>
            <ul ref={carouselRef}>{image}</ul>
        </CarouselViewBox>
    );
};

export default Carousel;
