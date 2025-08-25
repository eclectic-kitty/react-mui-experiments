import * as React from "react";
import { useSpring, animated } from "@react-spring/web";

const App = () => {
  // Q: Still a little confused about the map function, this isn't helping...
  // springs is an object copied into an animated.x component's css styling that seems to contain info about the animation itself
  // api is an object with various methods that let us control an animation
  // Q: Not sure why we need to give a from both to useSpring() and to api.start()
  const [springs, api] = useSpring(() => ({
    from: { x: 0, y: 0 },
  }));

  // Not sure why we need from: { x: 0 } both when we call api.start() and when we first declare our api and springs
  const handleClick = () => {
    api.start({
      from: {
        x: 0,
        y: 0,
      },
      to: {
        x: 100,
        y: 100,
      },
    });
  };

  return (
    // animated is a HOC, higher-order-component. It returns a given component with all the animation stuff added.
    // react-spring has html components built in, accessible with the .
    // For components from other libraries, one needs to create a styled() version of the component
    <animated.div
      onClick={handleClick}
      style={{
        width: 80,
        height: 80,
        background: "#f4e3e5",
        borderRadius: 8,
        ...springs,
        // The spread syntax is p cool ngl...
      }}
    ></animated.div>
  );
};

export default App;
