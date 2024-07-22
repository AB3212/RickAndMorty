import React, {useEffect , useState} from "react";
import axios from 'axios';
import "../App.css"; 


const Rickmorty2 = () => {
  const [data ,setData] = useState(null)
  useEffect( () => {
    axios.get("https://rickandmortyapi.com/api/character")
  .then(function (response) {
    // handle success
    console.log(response);
    setData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }, []);

  return (
    <div className="bg-theme">
       <div className="d-flex flex-wrap margin padding-top container px-0 ">
      { data !=null && data.results.map((item , name)  => (
        <section key={name} className="card_body pb-0 pt-1 d-flex flex-wrap gx-0 gy-0">
          <div className="card_a">
            <article className="card_b d-flex">
              <div className="card_c">
                <img src={item.image} alt=""></img>
              </div>
              <div className="card_d">
                <div className="section ">
                  <a href="/" className="ffGNdR">
                    <h2>{item.name}</h2>
                  </a>
                  <span className="status ">
                    <span
                      className="status__icon"
                      style={{
                        background:
                          item.status === "Alive"
                            ? "rgb(85, 204, 68)"
                            : item.status === "Dead"
                            ? "rgb(214, 61, 46)"
                            : "grey",
                      }}
                    ></span>
                    {item.status}-{item.species}
                  </span>
                </div>
                <div className="section ">
                 
                  <span className="text-gray ">
                    Last Known Location:
                  </span>
                  <a href="/" className="fs-5">
                  {item.location.name}
                  </a>
                </div>
                <div className="section ">
                 
                 <span className="text-gray ">
                   First Seen in:
                 </span>
                 <a  href="/" className="fs-5">
                 {item.origin.name}
                 </a> 
               </div>
              </div>  
            </article>
          </div>
        </section>
      ))}
    </div>
    </div>
   
  );
};

export default Rickmorty2;
