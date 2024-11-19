import { getReviews } from "../api";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { useEffect, useState } from "react";

function App() {
    const [order, setOrder] = useState('rating');
    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasNext, setHasNext] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sortedItems = items.sort((a,b) => b[order] - a[order]);
    
    const handleNewestClick = () => setOrder('createdAt')

    const handleBestClick = () => setOrder('rating'); 

    const handleLoad = async (orderQuery, offset) => {
        let result;
        try {
            setIsLoading(true);
            result = await getReviews({order: orderQuery, offset: offset, limit: 6});
        }catch (error) {
            console.error(error);
            return;
        }finally {
            setIsLoading(false);
        }

        const { reviews, paging } = result;
        
        if (offset === 0) {
            setItems(reviews);
        }else {
            setItems((prevItems) => [...prevItems, ...reviews]);
        }
        setOffset(offset + reviews.length);
        setHasNext(paging.hasNext);
    };

    const handleLoadMore = () => {
        handleLoad(order, offset);
    }

    useEffect(() => {
        handleLoad(order, offset);
    },[order]);

    return (
        <div>
            <div>
                <button onClick={handleNewestClick}>최신순</button>
                <button onClick={handleBestClick}>베스트순</button>
            </div>
            <ReviewForm />
            <ReviewList items={sortedItems}/>
            <div>
                {hasNext && <button disabled={isLoading} onClick={handleLoadMore}>더 보기</button>}
            </div>
        </div>
    );
}

export default App;