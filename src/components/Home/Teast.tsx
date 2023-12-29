import useSWR from "swr";


const Teast = () => {
    const fetcher = (args) => fetch(args).then(res => res.json())
    const { data:aiTools, error, isLoading } = useSWR('https://ai-tool-express-api.vercel.app/api/ai_tool', fetcher)
  
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <div>
            
        </div>
    );
};

export default Teast;