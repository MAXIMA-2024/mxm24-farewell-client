import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Image, Stack, IconButton } from "@chakra-ui/react";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <Stack flex={1} direction={"column"} m={"2rem"} w={"75%"}>
      <Stack overflow={"hidden"} ref={emblaRef}>
        <Stack
          touchAction={"pan-y pinch-zoom"}
          ml={"calc(var(--slide-spacing) * -1)"}
          direction={"row"}
        >
          {slides.map((src) => (
            <Stack
              flex={"0 0 100%"}
              minW={0}
              transform={"translate3d(0, 0, 0)"}
              key={src}
              h={["11rem", "14rem", "20rem", "22rem", "25rem"]}
            >
              <Stack userSelect={"none"} justify={"center"} align={"center"}>
                <Image
                  src={src}
                  rounded={"lg"}
                  border={"2px white"}
                  objectFit={"cover"}
                  objectPosition={"center"}
                ></Image>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack direction={"row"} align={"center"}>
        <IconButton
          aria-label={"Previous"}
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          rounded={"full"}
          bgColor={"#E9AE26"}
          color={"#5A1D5B"}
        >
          <svg viewBox="0 0 532 532">
            <path
              fill="currentColor"
              d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
            />
          </svg>
        </IconButton>
        <IconButton
          aria-label={"Next"}
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          rounded={"full"}
          bgColor={"#E9AE26"}
          color={"#5A1D5B"}
        >
          <svg viewBox="0 0 532 532">
            <path
              fill="currentColor"
              d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
            />
          </svg>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default EmblaCarousel;
