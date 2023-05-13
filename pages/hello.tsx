import React from "react";

const hello = () => {
  const [names, setNames] = React.useState([]);
  React.useEffect(() => {
    const fetchNames = async () => {
      const res = await fetch("/api/hello");
      const { names } = await res.json();
      setNames(names);
    };
    fetchNames();
  }, []);
  return <div>{names}</div>;
};

export default hello;
