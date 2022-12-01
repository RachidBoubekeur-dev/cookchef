import { useState } from 'react';
import styles from './Recipe.module.scss';

const Recipe = ({ recipe }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div onClick={() => setLiked(!liked)} className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={recipe.image} alt="recipe" />
            </div>
            <div className={`d-flex flex-column justify-content-center align-items-center ${styles.recipeTitle}`}>
                <h3 className='mb-10'>{recipe.title}</h3>
                <i className={`fa-solid fa-heart ${liked ? 'text-primary' : ''}`}></i>
            </div>
        </div>
    );
};

export default Recipe;