import { TouchEvent, useRef } from "react";

interface SwipeInput {
  onSwipedLeft?: () => void;
  onSwipedRight?: () => void;
  onSwipedUp?: () => void;
  onSwipedDown?: () => void;
}

interface SwipeOutput {
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
}

export default (input: SwipeInput): SwipeOutput => {
  const minSwipeDistance = 60;
  const touchStart = useRef(0);
  const touchEnd = useRef(0);
  const touchVertStart = useRef(0);
  const touchVertEnd = useRef(0);

  const onTouchStart = (e: TouchEvent) => {
    touchEnd.current = 0;
    touchStart.current = e.targetTouches[0].clientX;

    touchVertEnd.current = 0;
    touchVertStart.current = e.targetTouches[0].clientY;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
    touchVertEnd.current = e.targetTouches[0].clientY;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    if (!touchVertStart.current || !touchVertEnd.current) return;

    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    const distanceVert = touchVertStart.current - touchVertEnd.current;
    const isUpSwipe = distanceVert > minSwipeDistance;
    const isDownSwipe = distanceVert < -minSwipeDistance;
    if (
      Math.abs(touchStart.current - touchEnd.current) >
      Math.abs(touchVertStart.current - touchVertEnd.current)
    ) {
      if (isLeftSwipe) {
        input.onSwipedLeft!();
      }
      if (isRightSwipe) {
        input.onSwipedRight!();
      }
    } else {
      if (isUpSwipe) {
        input.onSwipedUp!();
      }
      if (isDownSwipe) {
        input.onSwipedDown!();
      }
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
