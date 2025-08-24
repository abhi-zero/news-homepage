import React from "react";
import { useNavigate } from "react-router";
import { HeroNews, NewArticles, Card } from "../components";
import { other } from "../content";

const Home = () => {
  const navigate = useNavigate()
  return (
   <div className="max-w-[1440px] m-auto px-[30px]"> <div className=" md:grid md:grid-cols-2  lg:grid-cols-3 gap-5">
      <div className="md:col-start-1  lg:col-start-1 lg:col-end-3">
        <HeroNews />
      </div>
      <div className="md:col-start-2 lg:col-start-3 cursor-pointer"
       onClick={()=>navigate('/new')}
       >
        <NewArticles />
      </div>
      
    </div>
    <div className="flex flex-col gap-5 lg:flex-row lg:gap-10 my-[50px] md:my-[80px]">
        {other.map((article) => (
          <div className="shrink-0" key={article.num}
           onClick={()=>{navigate('/new')}}
          >
            <Card
              imgUrl={article.img}
              num={article.serialNo}
              title={article.title} 
              body={article.body}
            />
          </div>
        ))}
      </div></div>
  );
};

export default Home;
