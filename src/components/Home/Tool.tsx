import Card from "./Card";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Loading from "../shared/Loading";
const Tool = () => {
  const [page, setPage] = useState(1);
  const [tools, setTools] = useState([]);
  const { ref, inView } = useInView();
  const [noMoreData, setNoMoreData] = useState(false);
  const fetchTools = async (page) => {
    const apiUrl = `https://ai-tool-express-api.vercel.app/api/ai_tool?page=${page}&limit=20`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const loadMore = async () => {
    if (noMoreData) return;
    const nextPage = page + 1;
   const newTools =  await fetchTools(nextPage) ?? [];

    if (newTools.length === 0) {
      setNoMoreData(true);
    } else {
      setTools((preTools) => [...preTools, ...newTools]);
      setPage(nextPage);
    }
  };

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);
  return (
    <div>
      <Card tools={tools}></Card>
      <div ref={ref}>
        {noMoreData ? (
          <span>no more ai tool data</span>
        ) : (
          <div className="grid grid-cols-4 gap-4 m-10">
            <Loading></Loading>
            <Loading></Loading>
            <Loading></Loading>
            <Loading></Loading>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tool;
