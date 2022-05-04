import React, { useEffect } from "react";

const GetWidth = (size) => {
  const [width, setWidth] = React.useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return width > size;
};

export default GetWidth;
