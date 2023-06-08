import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header";
import Item from "./item";

const Main = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1337/api/Populars").then((popular) => {
      setPopular(popular.data.data);
    });
  }, []);
  return (
    <>
      <Header />
      <section>
        {popular.map((item, key) => {
          return <Item item={item} key={key} />;
        })}
      </section>
    </>
  );
};

export default Main;
