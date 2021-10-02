export {};
// import { useState, useEffect } from 'react';

// export default function useElementPosition(el) {
//   function getElement(x, y) {
//     return {
//       x,
//       y,
//     };
//   }

//   const [elementPosition, setElementPosition] = useState(getElement);

//   useEffect(() => {
//     function handlePosition() {
//       const element = el.current;
//       const x =
//         element.getBoundingClientRect().left +
//         document.documentElement.scrollLeft +
//         element.offsetWidth / 2;
//       const y =
//         element.getBoundingClientRect().top +
//         document.documentElement.scrollTop +
//         element.offsetHeight / 2;
//       setElementPosition(getElement(x, y));
//     }
//     handlePosition();
//   }, [el]);

//   return elementPosition;
// }
