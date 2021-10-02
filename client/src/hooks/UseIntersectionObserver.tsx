export {};
// import { useState, useEffect } from 'react';

// function UseIntersectionObserver(ref, { threshold, root, rootMargin }) {
//   // configure the state
//   const [state, setState] = useState({
//     inView: false,
//     triggered: false,
//     entry: undefined,
//   });

//   const observer = new IntersectionObserver(
//     (entries, observerInstance) => {
//       // checks to see if the element is intersecting
//       if (entries[0].intersectionRatio > 0) {
//         // if it is update the state, we set triggered as to not re-observe the element
//         setState({
//           inView: true,
//           triggered: true,
//           entry: observerInstance,
//         });
//         // unobserve the element
//         observerInstance.unobserve(ref.current);
//       }
//     },
//     {
//       threshold: threshold || 0,
//       root: root || null,
//       rootMargin: rootMargin || '0%',
//     },
//   );

//   useEffect(() => {
//     // check that the element exists, and has not already been triggered
//     if (ref.current && !state.triggered) {
//       observer.observe(ref.current);
//     }
//   });

//   return [state.inView, state.entry];
// }

// export default UseIntersectionObserver;

// // function UseIntersectionObserver(observer) {
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         console.log(entry);

// //         if (entry.isIntersecting) {
// //           //do your actions here
// //           console.log("It works!");
// //         }
// //       },
// //       {
// //         root: null,
// //         rootMargin: "0px",
// //         threshold: 0.1,
// //       }
// //     );
// //     if (ref.current) {
// //       observer.observe(ref.current);
// //     }
// //   }, [ref]);

// //   const [intersecting, setIntersect] = useState(false);

// //   const options = {
// //     rootMargin: "0px",
// //     threshold: [0.9],
// //   };

// //   useCallback(
// //     (node) => {
// //       if (observer.current) observer.current.disconnect();
// //       console.log(node, observer.current);
// //       observer.current = new IntersectionObserver((entries) => {
// //         if (entries[0].isIntersecting) {
// //           setIntersect(true);
// //         }
// //       }, options);
// //       if (node) observer.current.observe(node);
// //     },
// //     [observer]
// //   );

// //   return intersecting;
// // }

// // export default UseIntersectionObserver;
