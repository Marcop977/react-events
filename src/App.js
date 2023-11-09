import Card from "./components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

function App() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getFromData = async () => {
    const response = await axios.get(url);
    setData(response.data.data);
  };

  useEffect(() => {
    getFromData();
  }, []);

  const nextEvent = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    }
  };

  const prevEvent = () => {
    setCurrentIndex((oldValue) => {
      if (oldValue === 0) {
        return data.length - 1;
      } else {
        return oldValue - 1;
      }
    });
  };

  return (
    <>
      {data.map(
        (evento, index) =>
          index === currentIndex && (
            <>
              <div className='container d-flex justify-content-center text-center'>
                <Card {...evento} key={evento.id} />
              </div>
              <div className='d-flex justify-content-center gap-3 mt-4'>
                <button
                  className='btn btn-primary'
                  onClick={() => prevEvent(evento.id)}
                >
                  &lt;
                </button>
                <button
                  className='btn btn-primary'
                  onClick={() => nextEvent(evento.id)}
                >
                  &gt;
                </button>
              </div>
            </>
          )
      )}
    </>
  );
}

export default App;
