import { getFoods } from "../api";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";
import { useEffect, useState } from "react";

function App() {

    const [order, setOrder] = useState('createdAt');
    const [items, setItems] = useState([]);
    const [cursor, setCursor] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingError, setLoadingError] = useState(null); 
    const [search, setSearch] = useState('');

    const sortedItems = items.sort((a,b) => b[order]-a[order]);

    const handleCalorieClick = () => setOrder('calorie');
    const handleNewestClick = () => setOrder('createdAt');
    const handleDeleteClick = (id) => {
        const nextItems = items.filter((item) => item.id !== id);
        setItems(nextItems);
    };

    const handleLoad = async (options) => {
        let result;
        
        try {
            setLoadingError(null);
            setIsLoading(true);
            result = await getFoods(options);
        }catch (error) {
            setLoadingError(error);
            return;
        }finally {
            setIsLoading(false);
        }

        const { foods, paging: {nextCursor}, } = result;
        if (!options.cursor) {
            setItems(foods);
        }else {
            setItems((prevItems) => [...prevItems, ...foods]);
        }
        setCursor(nextCursor);
    }

    const handleLoadMore = () => {
        handleLoad({order, cursor, search});
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearch(e.target['search'].value);
    }

    useEffect(() => {
        handleLoad({order,cursor:'',search});
    }, [order, search]);

    return (
        <div>
            <div>
                <FoodForm />
                <button onClick={handleNewestClick}>최신순</button>
                <button onClick={handleCalorieClick}>칼로리순</button>
                <form onSubmit={handleSearchSubmit}>
                    <input name="search" />
                    <button type="submit">검색</button>
                </form>
            </div>
            <FoodList items={sortedItems} onDelete={handleDeleteClick} />
            <div>
                {cursor && (<button disabled={isLoading} onClick={handleLoadMore}>더 보기</button>)}
                {loadingError?.message && <p>{loadingError.message}</p>}
            </div>
        </div>
    );
}

export default App;